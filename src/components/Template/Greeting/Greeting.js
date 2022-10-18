import { Text } from '@chakra-ui/react';
import React from 'react';

const Greeting = ({ data, name }) => {
    const greetingText = data[0]?.children[0]?.text;

    return (
        <>
            <Text color="#000">{greetingText.replace(/[,.]/g, ' ') || 'Hi'} {name || 'Donor'},</Text>
        </>
    )
}

export default Greeting