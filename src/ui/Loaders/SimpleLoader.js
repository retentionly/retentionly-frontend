import { Box } from '@chakra-ui/react'
import React from 'react'
import style from './loader.module.css'

const SimpleLoader = (props) => {
    return (
        <Box {...props} style={{
            backgroundColor: 'rgba(0,0,0,.5)'
        }}>
            <Box>
            <div class={style.spinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </Box>
        </Box>
    )
}

export default SimpleLoader