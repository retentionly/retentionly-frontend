import { Button, Flex, Text } from '@chakra-ui/react';
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

const SocialButton = styled(Button)`
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
                                It’s a great free way for you to: <br />
                                <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
                                    {
                                        socialMediaBenefit?.length > 0
                                            ? socialMediaBenefit.map(el => <li style={{ marginBottom: '5px' }}> {el.text}</li>)
                                            : <li>[Inset benefits of following your social media account]</li>
                                    }
                                </ul>
                            </Text>
                            <Flex justifyContent="center" alignItems="center" my="50px">
                                <SocialButton as={'a'} href={`${social?.instagramLink}`} style={{ padding: '0px'}}>
                                    <img src={instagramLogo} />
                                </SocialButton>
                                <SocialButton as={'a'} href={`${social?.facebookLink}`} style={{ padding: '0px'}}>
                                    <img src={facebookLogo} />
                                </SocialButton>
                            </Flex>
                        </>
                        :
                        <PreviewText data={mainText} />
                }
                {sender ? <Sender data={sender} salutations={salutations} /> : <Text color="#000">Jamal - CEO</Text>}
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