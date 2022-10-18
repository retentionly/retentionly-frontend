import { Text } from '@chakra-ui/react';
import React from 'react';

const Sender = ({ data, salutations }) => {
    const senderText = data[0]?.children[0]?.text;
    const salutationsText = salutations[0]?.children[0]?.text;
    return (
        <Text>
            {salutationsText.replace(/[,.]/g, '') || 'Best Regards'}, <br />
            {senderText.replace(/[,.]/g, ' ') || '[Firstname] - CEO'}
        </Text>
    )
}

export default Sender