import styled from "@emotion/styled";
import { text_22 } from "../../../theme/typography";
import Typography from "../Global/Typography";

const StyledSingle = styled.div`
margin-bottom:20px;
    h3{
        margin-bottom:20px;
    }
`

 export default function FaqSingle({title,text}){
    return(
        <StyledSingle>
            <Typography as="h3" variant={text_22}>
                {title}
            </Typography>
            <Typography as="p" variant={text_22}>
                {text}
            </Typography>
        </StyledSingle>
    )
 }