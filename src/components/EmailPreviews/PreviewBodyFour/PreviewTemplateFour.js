import { Box, Flex, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import facebookLogo from '../../../assets/png/facebook.png';
import instagramLogo from '../../../assets/png/instagram.png';
import { Greeting, PreviewText, Sender } from '../../Template';
import PreviewFooter from '../PreviewFooter';
import PreviewHead from '../PreviewHead';
import { PreviewBody } from '../style';

const SocialButton = styled.a`
width: fit-content;
background: none;
&:hover {
    background: none;
};
img{
    width: 80px;
}
`

const PreviewTemplateFour = ({ images, image }) => {
    const navigate = useNavigate();
    const { user: userState, template, master } = useSelector((state) => state);
    const { logo, salutations, greeting, sender } = master;
    const { socialMediaBenefit, social, mainText } = template;

    const instaLink = social?.instagramLink?.includes("https://") ? social?.instagramLink : `https://${social?.instagramLink}`;
    const fbLink = social?.facebookLink?.includes("https://") ? social?.facebookLink : `https://${social?.facebookLink}`;

    return (
        <>
            <PreviewHead logo={logo} images={images} image={image} />
            <PreviewBody>
                <Greeting data={greeting} name={userState?.name} />
                {
                    mainText?.length <= 1 && !mainText[0]?.children[0]?.text ?
                        <>
                            <Text>We are big on transparency. We believe you should know the impact your support has. So to keep you up to date with our latest work please follow us on social media. </Text>
                            <Text>
                                It’s a great free way for you to:
                            </Text>
                            <Box>
                                <ul style={{ marginLeft: '20px', marginTop: '10px', color: "#000" }}>
                                    {
                                        socialMediaBenefit?.length > 0
                                            ? socialMediaBenefit.map(el => <li style={{ marginBottom: '5px' }}> {el.text}</li>)
                                            : <li>[Inset benefits of following your social media account]</li>
                                    }
                                </ul>

                            </Box>
                            <Flex justifyContent="center" alignItems="center" my="50px">
                                <SocialButton href={instaLink} style={{ padding: '0px' }}>
                                    <img src={instagramLogo} alt="" />
                                </SocialButton>
                                <SocialButton href={fbLink} style={{ padding: '0px' }}>
                                    <img src={facebookLogo} alt="" />
                                </SocialButton>
                            </Flex>
                        </>
                        :
                        <PreviewText data={mainText} />
                }
                <Sender data={sender} salutations={salutations} name={userState?.name} />
                <PreviewFooter />
            </PreviewBody>
        </>
    )
}

export default PreviewTemplateFour

/* 
We are big on transparency. We believe you should know the impact your support has. So to keep you up to date with our latest work please follow us on social media. 

It’s a great free way for you to: 
[Inset benefits of following your social media account]

*/