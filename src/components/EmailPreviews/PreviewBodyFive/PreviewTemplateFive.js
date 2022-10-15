import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import DonateButton from '../../../ui/DonateButton/index';
import Loader from '../../../ui/Loaders/Loading';
import { Greeting, PreviewText, Sender } from '../../Template';
import PreviewFooter from '../PreviewFooter';
import PreviewHead from '../PreviewHead';
import { PreviewBody } from '../style';

const PreviewTemplateFive = ({ images, image }) => {

    const { user: userState, template, master } = useSelector((state) => state);
    const { logo, salutations, greeting, sender, url } = master;
    const { mainText, impactStat } = template || {};

    if (userState === undefined || template === undefined || master === undefined) {
        return <Loader />
    }

    return (
        <>
            <PreviewHead logo={logo} images={images} image={image} />
            <PreviewBody>
                <Greeting data={greeting} name={userState?.name} />
                {
                    mainText?.length <= 1 && !mainText[0]?.children[0]?.text ?
                        <>
                            <Text>It’s been a while so I just wanted to remind you what your donation means to us. Your support helps us <PreviewText data={template?.serviceDesc} placeholder={'[Insert description of services provided]'} /></Text>
                            <Text>Just like this 👇
                            </Text>
                            <Text>
                                <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
                                    {
                                        impactStat?.length > 0
                                            ? impactStat.map(el => <li style={{ marginBottom: '5px' }}> {el.text}</li>)
                                            : <li>[Insert impact statistics]</li>
                                    }
                                </ul>
                            </Text>
                            <Text>YOUR part of it – I’m really grateful to have you on board. And, together, we can make an even bigger impact.</Text>
                            <Text>By donating just 16p a day (that’s £5 a month) we can {" "}
                                <PreviewText data={template?.donationDoes} placeholder={'[Explain what their donation does]'} />. It’s these regular monthly donations that have a long-term effect on the world around us. </Text>
                            <Box textAlign='center' mb="30px">
                                <DonateButton url={url} />
                            </Box>
                            <Text>
                                REMEMBER: Your donation will <PreviewText data={template?.mainGoalSummary
                                } placeholder={'[Insert summary of your main goals]'} />.
                            </Text>
                        </>
                        :
                        <PreviewText data={template?.mainText} />
                }
                {sender ? <Sender data={sender} salutations={salutations} /> : <Text color="#000">Jamal - CEO</Text>}
                <PreviewFooter />
            </PreviewBody>
        </>
    )
}

export default PreviewTemplateFive