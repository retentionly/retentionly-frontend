import { Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Greeting, PreviewText, Sender } from '../../Template';
import PreviewFooter from '../PreviewFooter';
import PreviewHead from '../PreviewHead';
import { PreviewBody } from '../style';

const PreviewTemplateOne = ({ images }) => {

    const { user: userState, master } = useSelector((state) => state);
    const { logo, salutations, greeting, sender } = master;
    const { template1 } = useSelector(state => state.templates);
    const { image, beneficiaryDesc, mainText, serviceDesc } = template1;



    return (
        <>
            <PreviewHead logo={logo} images={images} image={image}/>
            <PreviewBody>
                <Greeting data={greeting} name={userState?.name} />
                {
                    mainText?.length <= 1 && !mainText[0]?.children[0]?.text ?
                        <>
                            <Text>We wanted to say a huge thank you for your donation to us!</Text>
                            <Text>Without people like you, we wouldn't be able to {serviceDesc && <PreviewText data={serviceDesc} placeholder={'[insert description of  services provided]'} />}</Text>
                            <Text>Your donation helps {beneficiaryDesc && <PreviewText data={beneficiaryDesc} placeholder={'[insert description of beneficiary]'} mainTag="p"/>} </Text>
                            <Text>We thank you from the bottom of our hearts</Text>
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

export default PreviewTemplateOne