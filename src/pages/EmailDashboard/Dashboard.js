import { Box, Container, Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import cuid from "cuid";
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import React, { useCallback, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useUploadFile } from 'react-firebase-hooks/storage';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Common/Button';
import { useEditTemplateMutation, useGetTemplateQuery, useGetTemplatesQuery } from '../../features/template/templateApi';
import auth, { app } from '../../firebase.init';
import Loader from '../../ui/Loaders/Loading';
import { PageWrapper } from '../../ui/PageWrapper';
import SectionTitle from '../../ui/SectionTitle';
import DashboardEditBlock from './EditBlock';
import PreviewBlock from './PreviewBlock';

const LoaderBox = styled(Box)`
${({ visibility }) => visibility ? 'pointer-events: visible; opacity: 1' : 'pointer-events: none; opacity: 0'};
transition: opacity 0.4s ease-in-out;
`

const storage = getStorage(app);

const EmailDashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { pathname } = useLocation()
    const { id } = useParams();
    const [user, loading] = useAuthState(auth)
    const [selectedFile, setSelectedFile] = useState("");
    const [sizeError, setSizeError] = useState("")
    const [tempLoading, setTempLoading] = useState(false);
    const [images, setImages] = useState({});
    const { template } = useSelector(state => state);
    const [uploadFile, uploading, snapshot, error] = useUploadFile();
    const storageRef = ref(storage, `${user.email}/${template?.ref}.jpg`);

    const { data, isLoading: userLoading, isError } = useGetTemplatesQuery(user?.email);
    const [editTemplate, { data: editTemplateData, isLoading: editTemplateLoading, isError: editTemplateError, isSuccess: editTemplateSuccess }] = useEditTemplateMutation();

    const findTemplate = data?.templates.find(el => el.emailId == id);
    const uniqueId = findTemplate?.uniqueID;
    const currentIndex = data?.templates.indexOf(findTemplate);
    const nextIndex = currentIndex + 1;
    const nextTemplate = data?.templates[nextIndex]?.emailId

    const { data: getTemplate, isLoading: isTemplateLoading, refetch } = useGetTemplateQuery(uniqueId, {
        refetchOnMountOrArgChange: true,
    });

    const metadata = {
        contentType: 'image/jpeg',
    };

    // Destructure Template Values From Template State
    const {
        image,
        name,
        subjectLine,
        preview,
        serviceDesc,
        beneficiaryName,
        beneficiaryHelped,
        beneficiaryAfter,
        beneficiaryBefore,
        beneficiaryDesc,
        donationGoesFor,
        donationFor,
        donationDoes,
        socialMediaBenefit,
        impactStat,
        mainText,
        emailSubject } = template;

    useEffect(() => {
        setImages({})
        setSizeError("")
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [pathname, uniqueId]);

    useEffect(() => {
        if (editTemplateSuccess) {
            if (data?.templates[data?.templates.length - 1].emailId == id) {
                navigate(`/email-final`)
            } else {
                navigate(`/email/${nextTemplate}`)
            }
            setTimeout(() => {
                setTempLoading(false)
            }, 2000)
        }
        if (editTemplateLoading) {
            setTempLoading(true)
        }
    }, [editTemplateSuccess, editTemplateLoading])

    // DRAG AND DROP FUNCTION
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
        if (sizeError) {
            setTimeout(() => {
                setSizeError(false)
            }, 3000)
        }
    }, [sizeError])

    // TEMPLATE EDIT HANDLER
    // const handleSubmit = () => {
    //     setTempLoading(true)

    //     if (images.src) {
    //         const file = images.src;
    //         const data = new FormData()
    //         data.append("file", file)
    //         data.append("upload_preset", "tymtravellr_preset")
    //         data.append("cloud_name", "thetymtravellr")
    //         console.log(data)
    //         fetch("https://api.cloudinary.com/v1_1/thetymtravellr/image/upload", {
    //             method: "POST",
    //             body: data
    //         })
    //             .then(resp => resp.json())
    //             .then(data => {
    //                 if (data.url) {
    //                     editTemplate({
    //                         id: uniqueId,
    //                         data: {
    //                             image: data.url,
    //                             name,
    //                             subjectLine,
    //                             preview,
    //                             serviceDesc,
    //                             beneficiaryName,
    //                             beneficiaryHelped,
    //                             beneficiaryAfter,
    //                             beneficiaryBefore,
    //                             beneficiaryDesc,
    //                             donationGoesFor,
    //                             donationFor,
    //                             donationDoes,
    //                             socialMediaBenefit,
    //                             impactStat,
    //                             mainText
    //                         }
    //                     })
    //                     refetch()
    //                 }
    //             })
    //             .catch(err => console.log(err))
    //     } else {
    //         editTemplate({
    //             id: uniqueId,
    //             data: {
    //                 image,
    //                 name,
    //                 subjectLine,
    //                 preview,
    //                 serviceDesc,
    //                 beneficiaryName,
    //                 beneficiaryHelped,
    //                 beneficiaryAfter,
    //                 beneficiaryBefore,
    //                 beneficiaryDesc,
    //                 donationGoesFor,
    //                 donationFor,
    //                 donationDoes,
    //                 socialMediaBenefit,
    //                 impactStat,
    //                 mainText
    //             }
    //         })
    //         refetch()
    //     }
    // }

    const handleSubmit = async () => {
        setTempLoading(true)
        if (selectedFile) {
            const result = await uploadFile(storageRef, selectedFile, metadata);
            const url = await getDownloadURL(result.ref);
            if (url) {
                editTemplate({
                    id: uniqueId,
                    data: {
                        image: url,
                        name,
                        subjectLine,
                        preview,
                        serviceDesc,
                        beneficiaryName,
                        beneficiaryHelped,
                        beneficiaryAfter,
                        beneficiaryBefore,
                        beneficiaryDesc,
                        donationGoesFor,
                        donationFor,
                        donationDoes,
                        socialMediaBenefit,
                        impactStat,
                        mainText
                    }
                })
                refetch()
            }
        } else {
            editTemplate({
                id: uniqueId,
                data: {
                    image,
                    name,
                    subjectLine,
                    preview,
                    serviceDesc,
                    beneficiaryName,
                    beneficiaryHelped,
                    beneficiaryAfter,
                    beneficiaryBefore,
                    beneficiaryDesc,
                    donationGoesFor,
                    donationFor,
                    donationDoes,
                    socialMediaBenefit,
                    impactStat,
                    mainText
                }
            })
            refetch()
        }
    }

    if (isTemplateLoading || userLoading || uniqueId === undefined) {
        // console.log('rendered')
        return <Loader />
    }

    return (
        <PageWrapper>
            <LoaderBox visibility={tempLoading} position="fixed" inset="0" display="flex" flexDirection="column" justifyContent="center" alignItems="center" minH="100vh" minW="100%" bg="#fff" zIndex="9999">
                <Text>Saving...</Text>
                <Loader height={'100px'} />
            </LoaderBox>
            <Container>
                <SectionTitle title={`Edit ${name} 📧`} text={emailSubject} mb="80px" maxW="730px" mx="auto" />
                <Flex color='white' justifyContent={"space-between"}>

                    <Box flex='1' maxW="550px">
                        <PreviewBlock id={uniqueId} images={images} image={image} setImages={setImages} />
                    </Box>
                    <Box flex='1' maxW="420px">
                        <DashboardEditBlock name={name} id={uniqueId} onDrop={onDrop} images={images} image={image} sizeError={sizeError} tempLoading={tempLoading} />
                        <Flex mx="-15px">
                            {
                                data?.templates?.length == id
                                    ? <Box px="15px" width="100%" cursor="pointer">
                                        <Button as={Link} onClick={handleSubmit} btnProps={{ width: "100%" }}>Finish</Button>
                                    </Box>
                                    : <Box px="15px" width="100%" cursor="pointer">
                                        <Button as={Link} onClick={handleSubmit} btnProps={{ width: "100%" }}>
                                            Edit Next Email
                                        </Button>
                                    </Box>
                            }
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </PageWrapper>
    )
}

export default EmailDashboard;