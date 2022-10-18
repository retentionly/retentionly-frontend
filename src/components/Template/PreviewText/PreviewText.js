import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const PreviewTextStyled = styled(Text)`
font-weight: 500;
`

const PreviewText = ({ data, tag, placeholder, mainTag }) => {

    if (data) {
        const previewText = data[0]?.children[0]?.text || [];

        if (data?.length < 1 && !tag) {
            return <>{previewText}</>
        } else if (data.length < 1) {
            return <p>{previewText}</p>
        } else {
            return (<>
                {data.map((item, key) => {
                    return (<span className="slate-text" key={key}>{item.children.map(({ text, bold, underline, italic }) => {
                        return <PreviewTextStyled color="#000" key={key + 'fjd'} as="span" fontWeight={bold && "bold"} textDecor={underline && "underline"} style={{ fontStyle: `${italic ? 'italic' : 'normal'}`, display: 'inline', fontFamily: "inherit" }}>
                            {" "}{text || placeholder}
                        </PreviewTextStyled>
                    })}</span>)
                })}
            </>)
        }
    } else {
        return <p>{placeholder}</p>
    }
}

export default PreviewText