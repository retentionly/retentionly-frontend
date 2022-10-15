import { Text } from '@chakra-ui/react';
import React from 'react';

const ServiceDesc = ({ data }) => {
    const serviceDescText = data[0]?.children[0]?.text || {};

    return (
        <Text>
            {Object.keys(serviceDescText).length <= 0 ? '' : serviceDescText}
        </Text>
    )
}

export default ServiceDesc