import { Box, Container, Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import cuid from 'cuid';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import React, { useCallback, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useUploadFile } from 'react-firebase-hooks/storage';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import UploadImageSingle from "../../components/UploadImage/UploadImageSingle";
import { useEditMasterMutation, useGetMasterQuery } from '../../features/master/masterApi';
import { setLogo } from '../../features/master/masterSlice';
import auth, { app } from '../../firebase.init';
import { Text30 } from '../../theme/text';
import Loader from '../../ui/Loaders/Loading';
import Option from '../../ui/OptionButton';
import { PageWrapper } from '../../ui/PageWrapper';
import SectionTitle from '../../ui/SectionTitle';
import EditingBlockRight from "./EditingBlockRight";
// import EditingBlockLeft from './EditingBlockLeft';

const LoaderBox = styled(Box)`
${({ visibility }) => visibility ? 'pointer-events: visible; opacity: 1' : 'pointer-events: none; opacity: 0'};
transition: opacity 0.4s ease-in-out;
`

const storage = getStorage(app);

const Master = () => {
    const { pathname } = useLocation();
    const [user] = useAuthState(auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [loader, setLoader] = useState(true)
    const [selectedFile, setSelectedFile] = useState("");
    const [tempLoading, setTempLoading] = useState(false);
    const [sizeError, setSizeError] = useState("")
    const { master: masterState, template } = useSelector((state) => state);

    const [uploadFile, uploading, snapshot, error] = useUploadFile();
    const storageRef = ref(storage, `${user.email}/master.jpg`);
    const metadata = {
        contentType: 'image/jpeg',
    };
    // const { data: userData, isLoading: isUserLoading, isError: isUserError } = useGetUserQuery(user?.email)
    const { data: master, isLoading: isMasterLoading, isError: isMasterError, refetch } = useGetMasterQuery(user?.email, {
        refetchOnMountOrArgChange: true,
    });

    const [editMaster, { data: editMasterData, isLoading: editMasterLoading, isError: editMasterError, isSuccess: editMasterSuccess }] = useEditMasterMutation();

    const { logo, greeting, salutations, sender, url } = masterState;

    // DRAG AND DROP FUNCTION

    const [image, setImage] = useState({});
    const onDrop = useCallback((acceptedFiles, fileRejections) => {

        acceptedFiles.map((file) => {
            setSelectedFile(file)
            const reader = new FileReader();
            reader.onload = function (e) {
                setImage({ id: cuid(), src: e.target.result })
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
                setSizeError('')
            }, 3000)
        }
    }, [sizeError])

    useEffect(() => {
        if (editMasterLoading) {
            setTempLoading(true)
        }
    }, [editMasterLoading, loader])

    useEffect(() => {
        if (editMasterSuccess) {
            navigate('/email')
            setTempLoading(false)
        }
    }, [editMasterSuccess])

    // UPLOAD IMAGE AND GET URL FUNCTION
    const handleSubmit = async () => {
        setTempLoading(true)
        if (selectedFile) {
            const result = await uploadFile(storageRef, selectedFile, metadata);
            const logoUrl = await getDownloadURL(result.ref);
            if (logoUrl) {
                dispatch(setLogo(logoUrl))
                editMaster({
                    email: user?.email,
                    data: {
                        logo: logoUrl,
                        greeting,
                        salutations,
                        sender,
                        url
                    }
                })
                setLoading(false)
            }
        } else {
            editMaster({
                email: user?.email,
                data: {
                    logo,
                    greeting,
                    salutations,
                    sender,
                    url
                }
            })
            setLoading(false)
        }
    }
  
    if (editMasterData?.success) {
        navigate('/email')
    }

    if (loading || isMasterLoading) {
        return <Loader />
    }

    return (
        <PageWrapper>
            <LoaderBox visibility={tempLoading} position="fixed" inset="0" display="flex" flexDirection="column" justifyContent="center" alignItems="center" minH="100vh" minW="100%" bg="#fff" zIndex="9999">
                <Text>Saving...</Text>
                <Loader height={'100px'} />
            </LoaderBox>
            <Container>
                <SectionTitle title="The Basics 😌" text="These certains elements will be on all your emails. 
So to make it easier, you can do in on go." mb="80px" maxW="730px" mx="auto" />
                <Flex color='white' justifyContent={"space-between"}>
                    <Box flex='1' maxW="420px">
                        <Box mb="40px">
                            <Text color="#000000" {...Text30} mb="10px">
                                Upload Your Logo:
                            </Text>
                            <Text color="#000000" mb="10px">
                                (Required)
                            </Text>
                            <Box mb="10px">
                                {
                                    sizeError ? <Text color="red" fontWeight="semibold">{sizeError}</Text> : null
                                }
                            </Box>
                            <UploadImageSingle onDrop={onDrop} accept={"image/*"} image={image} master={master} />
                        </Box>
                        <Box>
                        </Box>
                    </Box>
                    <Box flex='1' maxW="420px" >
                        <EditingBlockRight />
                        <Flex mx="-15px" mt="30px">
                            <Box px="15px" width="50%" cursor={(image.src || logo) ? 'pointer' : 'not-allowed'} opacity={(image.src || logo) ? '1' : '.5'} pointerEvents={(image.src || logo) ? 'all' : 'none'}>
                                <Option onClick={handleSubmit} btnProps={{ width: "100%" }}>Continue</Option>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </PageWrapper>
    )
}

export default Master;