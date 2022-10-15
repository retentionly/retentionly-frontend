import { Box, Heading, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Text20, Text30 } from "../../theme/text";
import TextEditor from "../SlateTextEditor";
// import PlainText from "./Editor";

const TextAreaStyled = styled('textarea')`
width: 100%;
min-height: 120px;
padding: 10px;
border: 2px solid #000;
color: #000;
`

export default function EditBlock({ inputPlaceholder, title, text, onChange, value, social, ...rest }) {

    return (
        <Box {...rest}>
            <Heading color="black" fontWeight={400} mb="14px" {...Text30}>{title}</Heading>
            <Text {...Text20} color="black" mb="14px">
                {text}
            </Text>
            <Box>
                <TextEditor placeholder={inputPlaceholder} handleInputChange={onChange} value={value} />
                {/* {
                    social
                    ? <TextEditor placeholder={inputPlaceholder} handleInputChange={onChange} value={value} />
                    : <input type="text" />
                } */}
            </Box>
        </Box>
    )
}

/* 
{
                    textArea
                        ? <TextAreaStyled placeholder={inputPlaceholder} ></TextAreaStyled>
                        : <TextEditor placeholder={inputPlaceholder} handleInputChange={onChange} value={value} />
                }
*/