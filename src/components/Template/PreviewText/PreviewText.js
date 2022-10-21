import { Text } from "@chakra-ui/react";
import styled from "@emotion/styled";

const PreviewTextStyled = styled(Text)`
// font-weight: 500;
`
const SlateText = styled.span`
    &+.slate-text{
        display:block;
    }
`
const PreviewText = ({ data, tag, placeholder, mainTag }) => {
    
    const previewText = data[0]?.children[0]?.text || [];
    if (previewText.length > 0) {
        if (data?.length < 1 && !tag) {
            return <>{previewText}</>
        } else if (data.length < 1) {
            return <span style={{ display: 'block' }}>{previewText}</span>
        } else {
            return (<>
                {data.map((item, key) => {
                    return (<SlateText className="slate-text" key={key}>{item.children.map(({ text, bold, underline, italic }) => {

                        return <PreviewTextStyled color="#000" key={key + 'fjd'} as="span" fontWeight={bold && "bold"} textDecor={underline && "underline"} style={{ fontStyle: `${italic ? 'italic' : 'normal'}`, display: 'inline', fontFamily: "inherit" }}>
                            {" "}{text && text}
                        </PreviewTextStyled>
                    })}</SlateText>)
                })}
            </>)
        }
    } else {
        return <span style={{ display: 'block' }}>{placeholder}</span>
    }
}

export default PreviewText