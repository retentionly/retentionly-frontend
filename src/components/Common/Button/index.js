import styled from "@emotion/styled"
import isPropValid from '@emotion/is-prop-valid'
import {ReactComponent as ButtonBG} from "../../../assets/svg/btn-bg.svg"
const ButtonStyled = styled("button",{
	shouldForwardProp: isPropValid,
})`
    position:relative;
    display:inline-block;
    .btn-text{
        font-weight: 400;
        font-size: 30px;
        line-height: 36px;
        color: #FFFFFF;
        position:absolute;
        left:50%;
        top:46%;
        transform:translateX(-50%) translateY(-50%)
    }
    svg{
        width:100%
    }
`

export default function Button({children,onClick=()=>{},...rest}){
    return(
        <ButtonStyled onClick={onClick} {...rest}>
            <ButtonBG/>
            <span className="btn-text">{children}</span>
        </ButtonStyled>
    )
}