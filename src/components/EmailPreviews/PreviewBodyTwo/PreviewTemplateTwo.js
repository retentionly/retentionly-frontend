import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import DonateButton from '../../../ui/DonateButton';
import { Greeting, PreviewText, Sender } from '../../Template';
import PreviewFooter from '../PreviewFooter';
import PreviewHead from '../PreviewHead';
import { PreviewBody } from '../style';

const PreviewTemplateTwo = ({ images, image }) => {

    const { user: userState, master } = useSelector((state) => state);
    const { logo, salutations, greeting, sender, url } = master;
    const { template2 } = useSelector(state => state.templates);
    const { mainText, impactStat, donationFor, donationGoesFor } = template2;
   
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
                            <Box>
                                <ul style={{ margin: '10px 0 10px 20px', color: "#000" }}>
                                    {
                                        impactStat?.length > 0
                                            ? impactStat.map((el,i) => <li key={i*.001}><Text style={{marginBottom: '5px'}}>{el.text}</Text></li>)
                                            : <li><Text>[Insert impact statistics]</Text></li>
                                    }
                                </ul>
                            </Box>
                            <Text>But we still need your help <PreviewText data={donationFor} placeholder={'[Describe what you need donations for]'} />.</Text>
                            <Text>So how can you help?</Text>
                            <Text>Simple - set up a monthly donation of just £5</Text>
                            <Text>{`(🤫 that's just 16p a day btw)`}</Text>
                            <Box textAlign='center'>
                                <DonateButton url={url} />
                            </Box>
                            <Text>
                                Your money goes into a pot which we use to <PreviewText data={donationGoesFor} placeholder={'[describe where your money goes]'} />.
                            </Text>
                        </>
                        :
                        <PreviewText data={mainText} />
                }
                <Sender data={sender} salutations={salutations} name={userState?.name}/>
                <PreviewFooter />
            </PreviewBody>
        </>
    )
}

export default PreviewTemplateTwo
