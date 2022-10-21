import { Text } from '@chakra-ui/react';
import React from 'react';

const Sender = ({ data, salutations, name }) => {

    const senderText = data[0]?.children[0]?.text;
    const salutationsText = salutations[0]?.children[0]?.text;
    return (
        <Text>
            {salutationsText.replace(/[,.]/g, '') || 'Best Regards'}, <br />
            {senderText.replace(/[,.]/g, ' ') || name}
        </Text>
    )
}

export default Sender