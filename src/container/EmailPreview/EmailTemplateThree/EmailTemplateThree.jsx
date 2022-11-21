import { Box, Container, Flex, Text } from '@chakra-ui/react'
import cuid from "cuid"
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import React, { useCallback, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useUploadFile } from 'react-firebase-hooks/storage'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PreviewTemplateThree from '../../../components/EmailPreviews/PreviewBodyThree'
import { useEditTemplateMutation, useGetTemplateQuery, useGetTemplatesQuery } from '../../../features/user/userApi'
import auth, { app } from '../../../firebase.init'
import { Text30 } from '../../../theme/text'
import Loader from '../../../ui/Loaders/Loading'
import { PageWrapper } from '../../../ui/PageWrapper'
import SectionTitle from '../../../ui/SectionTitle'
import { getPlainText } from '../../../utils/getPlainText'
import EmailNavigation from '../navigation'
import { LoaderBox, PreviewFrame } from '../style'
import EditBlockThree from './EditBlockThree'

const storage = getStorage(app);

const EmailTemplateThree = () => {

    /* LOCAL STATES */
    const [tempLoading, setTempLoading] = useState(false);
    const [images, setImages] = useState('');
    const [sizeError, setSizeError] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageError, setImageError] = useState(false);
    const [subjectLineError, setSubjectLineError] = useState(false);
    const [previewError, setPreviewError] = useState(false);
    const [beneficiaryNameError, setBeneficiaryNameError] = useState(false);
    const [beneficiaryHelpedError, setBeneficiaryHelpedError] = useState(false);
    const [beneficiaryBeforeError, setBeneficiaryBeforeError] = useState(false);
    const [beneficiaryAfterError, setBeneficiaryAfterError] = useState(false);
    const [error, setError] = useState(false);

    /* REDUX STATES */
    const { template } = useSelector(state => state);
    const { template3 } = useSelector(state => state.templates);

    /* HOOKS */
    const [user, loading] = useAuthState(auth)
    const [uploadFile, uploading, snapshot] = useUploadFile();
    const navigate = useNavigate()

    /* REDUX QUERY */
    const { data, isLoading: userLoading, isError } = useGetTemplatesQuery(user?.email);
    const [editTemplate, { data: editTemplateData, isLoading: editTemplateLoading, isError: editTemplateError, isSuccess: editTemplateSuccess }] = useEditTemplateMutation();

    /* VARIABLES */
    const findTemplate = data?.templates.find(el => el.emailId == 3);
    const uniqueId = findTemplate?.uniqueID;

    const metadata = {
        contentType: 'image/jpeg',
    }

    const {
        image,
        preview,
        subjectLine,
        beneficiaryName,
        beneficiaryHelped,
        beneficiaryBefore,
        beneficiaryAfter
    } = template3;

    /* FUNCTIONS */
    const storageRef = ref(storage, `${user.email}/${template?.ref}.jpg`);

    const { data: getTemplate, isLoading: isTemplateLoading, refetch } = useGetTemplateQuery(uniqueId, {
        refetchOnMountOrArgChange: true,
    });

    const onDrop = useCallback((acceptedFiles, fileRejections) => {
        acceptedFiles.map((file) => {
            setSelectedFile(file)
            const reader = new FileReader();
            reader.onload = function (e) {
                setImages({ id: cuid(), src: e.target.result })
            };
            reader.readAsDataURL(file);
            return file;
        });
        fileRejections.forEach((file) => {
            file.errors.forEach((err) => {
                if (err.code === "file-too-large") {
                    setSizeError(`Error: file too large (max: 1mb)`);
                }

                if (err.code === "file-invalid-type") {
                    setSizeError(`Error: ${err.message}`);
                }
            });
        });

    }, []);


    const handleImageError = (value) => {
        if (value) {
            setImageError(false)
        } else {
            setImageError(true)
        }
    }
    const handleSubjectLineError = (value) => {
        if (value) {
            setSubjectLineError(false)
        } else {
            setSubjectLineError(true)
        }
    }
    const handlePreviewError = (value) => {
        if (value) {
            setPreviewError(false)
        } else {
            setPreviewError(true)
        }
    }

    const handleBeneficiaryNameError = (value) => {
        if (value) {
            setBeneficiaryNameError(false)
        } else {
            setBeneficiaryNameError(true)
        }
    }

    const handleBeneficiaryHelpedError = (value) => {
        if (value) {
            setBeneficiaryHelpedError(false)
        } else {
            setBeneficiaryHelpedError(true)
        }
    }
    const handleBeneficiaryAfterError = (value) => {
        if (value) {
            setBeneficiaryAfterError(false)
        } else {
            setBeneficiaryAfterError(true)
        }
    }
    const handleBeneficiaryBeforeError = (value) => {
        if (value) {
            setBeneficiaryBeforeError(false)
        } else {
            setBeneficiaryBeforeError(true)
        }
    }

    useEffect(() => {
        if (template3) {
            handleImageError(image || images?.src)
            handleSubjectLineError(getPlainText(subjectLine))
            handlePreviewError(getPlainText(preview))
            handleBeneficiaryNameError(getPlainText(beneficiaryName))
            handleBeneficiaryHelpedError(getPlainText(beneficiaryHelped))
            handleBeneficiaryBeforeError(getPlainText(beneficiaryBefore))
            handleBeneficiaryAfterError(getPlainText(beneficiaryAfter))
        }
    })


    useEffect(() => {
        if (editTemplateSuccess) {
            setTimeout(() => {
                setTempLoading(false)
            }, 2000)
        }
        if (editTemplateLoading) {
            setTempLoading(true)
        }
    }, [editTemplateSuccess, editTemplateLoading])

    /* HANDLERS */
    const handleSubmit = async () => {
        if (imageError || subjectLineError || previewError || beneficiaryNameError || beneficiaryHelpedError || beneficiaryBeforeError || beneficiaryAfterError) {
            setError(true)
        } else {
            setError(false)
            setTempLoading(true);
            if (selectedFile) {
                const result = await uploadFile(storageRef, selectedFile, metadata);
                const url = await getDownloadURL(result.ref);
                if (url) {
                    editTemplate({
                        id: uniqueId,
                        data: {
                            ...template3,
                            image: url,
                        }
                    })
                }
            } else {
                editTemplate({
                    id: uniqueId,
                    data: { ...template3 }
                })
            }
        }
    }

    if (isTemplateLoading || userLoading) {
        return <Loader />
    }

    return (
        <PageWrapper>
            <Container>
                <LoaderBox visibility={tempLoading} position="fixed" inset="0" display="flex" flexDirection="column" justifyContent="center" alignItems="center" minH="100vh" minW="100%" bg="#fff" zIndex="9999">
                    <Text>Saving...</Text>
                    <Loader height={'100px'} />
                </LoaderBox>
                <Box>
                    <SectionTitle title={`Edit Email 3📧`} text={'You are half way there - edit your third email.'} mb="80px" maxW="730px" mx="auto" />
                    <Flex color='white' justifyContent={"space-between"}>
                        <Box flex='1' maxW="550px">
                            <PreviewFrame>
                                <Text py="30px" textAlign={"center"} color="#000" {...Text30}>Preview</Text>
                                <PreviewTemplateThree images={images} image={image} />
                            </PreviewFrame>
                        </Box>
                        <Box flex='1' maxW="420px">
                            <EditBlockThree
                                id={uniqueId}
                                onDrop={onDrop}
                                tempLoading={tempLoading}
                                imageError={imageError}
                                subjectLineError={subjectLineError}
                                previewError={previewError}
                                beneficiaryNameError={beneficiaryNameError}
                                beneficiaryHelpedError={beneficiaryHelpedError}
                                beneficiaryBeforeError={beneficiaryBeforeError}
                                beneficiaryAfterError={beneficiaryAfterError}
                                handleSubjectLineError={handleSubjectLineError}
                                handlePreviewError={handlePreviewError}
                                handleBeneficiaryNameError={handleBeneficiaryNameError}
                                handleBeneficiaryHelpedError={handleBeneficiaryHelpedError}
                                handleBeneficiaryBeforeError={handleBeneficiaryBeforeError}
                                handleBeneficiaryAfterError={handleBeneficiaryAfterError}
                                error={error}
                            />
                        </Box>
                    </Flex>
                </Box>
                <EmailNavigation handleSubmit={handleSubmit} success={editTemplateSuccess} />
            </Container>
        </PageWrapper>
    )
}

export default EmailTemplateThree