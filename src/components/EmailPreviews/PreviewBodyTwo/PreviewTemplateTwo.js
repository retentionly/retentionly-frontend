import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import DonateButton from '../../../ui/DonateButton';
import { Greeting, PreviewText, Sender } from '../../Template';
import PreviewFooter from '../PreviewFooter';
import PreviewHead from '../PreviewHead';
import { PreviewBody } from '../style';

const PreviewTemplateTwo = ({ images, image }) => {

    const { user: userState, template, master } = useSelector((state) => state);
    const { logo, salutations, greeting, sender, url } = master;
    const { mainText, impactStat, donationFor, donationGoesFor } = template || {};

    console.log(impactStat);

    return (
        <>
            <PreviewHead logo={logo} image={image} images={images} />
            <PreviewBody>
                <Greeting data={greeting} name={userState?.name} />
                {
                    mainText?.length <= 1 && !mainText[0]?.children[0]?.text ?
                        <>
                            <Text>Your donation is on its way to making a difference.</Text>
                            <Text>This is the difference you're making.</Text>
                            <Text>
                                <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
                                    {
                                        impactStat?.length > 0
                                            ? impactStat.map(el => <li style={{ marginBottom: '5px' }}> {el.text}</li>)
                                            : <li>[Insert impact statistics]</li>
                                    }
                                </ul>
                                {/* <PreviewText data={template?.impactStat} placeholder={'[Insert impact statistics]'}/> */}
                            </Text>
                            <Text>But we still need your help <PreviewText data={template?.donationFor} placeholder={'[Describe what you need donations for]'} />.</Text>
                            <Text>So how can you help?</Text>
                            <Text>Simple - set up a monthly donation of just £5</Text>
                            <Text>{`(🤫 that's just 16p a day btw)`}</Text>
                            <Box textAlign='center'>
                                <DonateButton url={url} />
                            </Box>
                            <Text>
                                Your money goes into a pot which we use to <PreviewText data={template?.donationGoesFor} placeholder={'[describe where your money goes]'} />.
                            </Text>
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

export default PreviewTemplateTwo
