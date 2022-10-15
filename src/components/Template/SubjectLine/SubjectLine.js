import { Text } from '@chakra-ui/react';
import React from 'react';

const SubjectLine = ({ data, salutations }) => {
    const senderText = data[0]?.children[0]?.text;
    const salutationsText = salutations[0]?.children[0]?.text;
    return (
        <Text>
            {salutationsText}, <br />
            {senderText}
        </Text>
    )
}

export default SubjectLine