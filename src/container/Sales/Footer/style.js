import styled from "@emotion/styled";

export const FooterStyled = styled.footer`
background-color: #D9D9D9;
padding-top: 20px;
padding-bottom: 40px;
`

export const FooterLogo = styled.div`
display: flex;
justify-content: center;
img {
    width: 300px
}
`

export const FooterContentMain = styled.div`
padding: 20px 0;
display: flex;
justify-content: space-between;
align-items: center;
`

export const CtaFormContainer = styled.div`
p {
    font-weight: 500;
    margin-top: 20px;
}
`

export const CtaForm = styled.div`
display: flex;
align-items: stretch;
height: 50px;
a {
    margin: 0;
}
`

export const FormInput = styled.input`

padding: 0 10px;
font-size: 20px;
`

export const CtaInfoContainer = styled.div`
text-align: right;

`

export const CtaInfo = styled.div`
text-align: right;
margin-top: 20px;
p {
    margin-top: 10px;
}
`

export const CtaInfoIcon = styled.div`
display: flex;
justify-content: flex-end;
column-gap: 10px;
img {
    width: 40px;
}
`

export const FooterCopyright = styled.div`
text-align: center;
p {
    font-size: 12px;
    font-weight: 500;
}
`