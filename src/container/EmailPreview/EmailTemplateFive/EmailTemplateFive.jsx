import { Box, Container, Flex, Text } from '@chakra-ui/react'
import cuid from "cuid"
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import React, { useCallback, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useUploadFile } from 'react-firebase-hooks/storage'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PreviewTemplateFive from '../../../components/EmailPreviews/PreviewBodyFive/PreviewTemplateFive'
import { setImage, setPreview, setSubjectLine } from '../../../features/template/templateSlice'
import { useEditTemplateMutation, useGetTemplateQuery, useGetTemplatesQuery } from '../../../features/user/userApi'
import auth, { app } from '../../../firebase.init'
import { Text30 } from '../../../theme/text'
import Loader from '../../../ui/Loaders/Loading'
import { PageWrapper } from '../../../ui/PageWrapper'
import SectionTitle from '../../../ui/SectionTitle'
import EmailNavigation from '../navigation'
import { LoaderBox, PreviewFrame } from '../style'
import EditBlockFive from './EditBlockFive'

const storage = getStorage(app);

const EmailTemplateFive = () => {

    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(setSubjectLine([
    //         {
    //             type: "paragaph",
    //             children: [{ text: "" }]
    //         }
    //     ]));
    //     dispatch(setPreview([
    //         {
    //             type: "paragaph",
    //             children: [{ text: "" }]
    //         }
    //     ]));
    //     dispatch(setImage(''))
    // }, [])

    /* LOCAL STATES */
    const [tempLoading, setTempLoading] = useState(false);
    const [images, setImages] = useState('');
    const [sizeError, setSizeError] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    /* REDUX STATES */
    const { template } = useSelector(state => state);
    const { template5 } = useSelector(state => state.templates)

    /* HOOKS */
    const [user, loading] = useAuthState(auth)
    const [uploadFile, uploading, snapshot, error] = useUploadFile();
    const navigate = useNavigate();

    /* REDUX QUERY */
    const { data, isLoading: userLoading, isError } = useGetTemplatesQuery(user?.email);
    const [editTemplate, { data: editTemplateData, isLoading: editTemplateLoading, isError: editTemplateError, isSuccess: editTemplateSuccess }] = useEditTemplateMutation();

    /* VARIABLES */
    const findTemplate = data?.templates.find(el => el.emailId == 5);
    const uniqueId = findTemplate?.uniqueID;

    const metadata = {
        contentType: 'image/jpeg',
    }

    const {
        image
    } = template5;

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
        setTempLoading(true);
        if (selectedFile) {
            const result = await uploadFile(storageRef, selectedFile, metadata);
            const url = await getDownloadURL(result.ref);
            if (url) {
                editTemplate({
                    id: uniqueId,
                    data: {
                        ...template5,
                        image: url,
                    }
                })
            }
        } else {
            editTemplate({
                id: uniqueId,
                data: {
                    ...template5
                }
            })
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
                    <SectionTitle title={`Edit Email 5 📧`} text={'The last one! You’re one step away from getting monthly donors.'} mb="80px" maxW="730px" mx="auto" />
                    <Flex color='white' justifyContent={"space-between"}>
                        <Box flex='1' maxW="550px">
                            <PreviewFrame>
                                <Text py="30px" textAlign={"center"} color="#000" {...Text30}>Preview</Text>
                                <PreviewTemplateFive images={images} />
                            </PreviewFrame>
                        </Box>
                        <Box flex='1' maxW="420px">
                            <EditBlockFive id={uniqueId} onDrop={onDrop} tempLoading={tempLoading} />
                        </Box>
                    </Flex>
                </Box>
                <EmailNavigation success={editTemplateSuccess} handleSubmit={handleSubmit} />
            </Container>
        </PageWrapper>
    )
}

export default EmailTemplateFive