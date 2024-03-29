import { Box, Container, Flex, Text } from '@chakra-ui/react'
import cuid from "cuid"
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import React, { useCallback, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useUploadFile } from 'react-firebase-hooks/storage'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PreviewTemplateOne from '../../../components/EmailPreviews/PreviewBodyOne'
import { useEditTemplateMutation, useGetTemplateQuery, useGetTemplatesQuery } from '../../../features/user/userApi'
import auth, { app } from '../../../firebase.init'
import { Text30 } from '../../../theme/text'
import Loader from '../../../ui/Loaders/Loading'
import { PageWrapper } from '../../../ui/PageWrapper'
import SectionTitle from '../../../ui/SectionTitle'
import { getPlainText } from '../../../utils/getPlainText'
import EmailNavigation from '../navigation'
import { LoaderBox, PreviewFrame } from '../style'
import EditBlockOne from './EditBlockOne'

const storage = getStorage(app);

const EmailTemplateOne = () => {

    /* LOCAL STATES */
    const [tempLoading, setTempLoading] = useState(false);
    const [images, setImages] = useState('');
    const [sizeError, setSizeError] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageError, setImageError] = useState(false);
    const [subjectLineError, setSubjectLineError] = useState(false);
    const [previewError, setPreviewError] = useState(false);
    const [serviceDescError, setServiceDescError] = useState(false);
    const [beneficiaryDescError, setBeneficiaryDescError] = useState(false);
    const [error, setError] = useState(false);

    /* REDUX STATES */
    const { template } = useSelector(state => state);
    const { template1 } = useSelector(state => state.templates);

    /* HOOKS */
    const [user, loading] = useAuthState(auth)
    const [uploadFile, uploading, snapshot] = useUploadFile();
    const navigate = useNavigate();

    /* REDUX QUERY */
    const { data, isLoading: userLoading, isError } = useGetTemplatesQuery(user?.email);
    const [editTemplate, { data: editTemplateData, isLoading: editTemplateLoading, isError: editTemplateError, isSuccess: editTemplateSuccess }] = useEditTemplateMutation();


    /* VARIABLES */
    const findTemplate = data?.templates.find(el => el.emailId == 1);
    const uniqueId = findTemplate?.uniqueID;

    const metadata = {
        contentType: 'image/jpeg',
    }

    const {
        image,
        subjectLine,
        preview,
        serviceDesc,
        beneficiaryDesc,
    } = template1;

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
    const handleServiceDescError = (value) => {
        if (value) {
            setServiceDescError(false)
        } else {
            setServiceDescError(true)
        }
    }
    const handleBeneficiaryDescError = (value) => {
        if (value) {
            setBeneficiaryDescError(false)
        } else {
            setBeneficiaryDescError(true)
        }
    }

    useEffect(() => {
        if (template1) {
            handleImageError(image || images?.src)
            handleSubjectLineError(getPlainText(subjectLine))
            handlePreviewError(getPlainText(preview))
            handleServiceDescError(getPlainText(serviceDesc))
            handleBeneficiaryDescError(getPlainText(beneficiaryDesc))
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

    // scroll to view function
    const scrollToView = useCallback((id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, []);

    /* HANDLERS */
    const handleSubmit = async () => {
        if (imageError || subjectLineError || previewError || serviceDescError || beneficiaryDescError) {
            setError(true)
            if(imageError) {
                scrollToView('image')
            } else if(subjectLineError) {
                scrollToView('subject-line')
            } else if(previewError) {
                scrollToView('preview')
            } else if(serviceDescError) {
                scrollToView('serviceDesc')
            } else if(beneficiaryDescError) {             
                scrollToView('beneficiary-description')
            }
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
                            ...template1,
                            image: url
                        }
                    })
                }
            } else {
                editTemplate({
                    id: uniqueId,
                    data: {
                        ...template1,
                    }
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
                    <SectionTitle title={`Edit Email 1 📧`} text={'Edit your first email to get started.'} mb="80px" maxW="730px" mx="auto" />
                    <Flex color='white' justifyContent={"space-between"}>
                        <Box flex='1' maxW="550px">
                            <PreviewFrame>
                                <Text py="30px" textAlign={"center"} color="#000" {...Text30}>Preview</Text>
                                <PreviewTemplateOne images={images} image={image}/>
                            </PreviewFrame>
                        </Box>
                        <Box flex='1' maxW="420px">
                            <EditBlockOne
                                id={1}
                                onDrop={onDrop}
                                images={images}
                                tempLoading={tempLoading}
                                imageError={imageError}
                                subjectLineError={subjectLineError}
                                previewError={previewError}
                                serviceDescError={serviceDescError}
                                beneficiaryDescError={beneficiaryDescError}
                                handleImageError={handleImageError}
                                handleSubjectLineError={handleSubjectLineError}
                                handlePreviewError={handlePreviewError}
                                handleServiceDescError={handleServiceDescError}
                                handleBeneficiaryDescError={handleBeneficiaryDescError}
                                error={error}
                            />
                        </Box>
                    </Flex>
                </Box>
                <EmailNavigation success={editTemplateSuccess} handleSubmit={handleSubmit} />
            </Container>
        </PageWrapper>
    )
}

export default EmailTemplateOne