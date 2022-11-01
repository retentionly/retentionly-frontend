import styled from "@emotion/styled";

export const FooterStyled = styled.footer`
background-color: #D9D9D9;
padding-top: 20px;
padding-bottom: 40px;
`

export const FooterLogo = styled.div`
display: flex;
justify-content: flex-start;
@media (min-width: 992px) {
    justify-content: center;
}
img {
    width: 300px
}
`

export const FooterContentMain = styled.div`
padding: 20px 0;
display: flex;
justify-content: flex-start;

flex-direction: column;
@media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
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
    @media (max-width: 767px) {
        font-size: 14px;
        width: 150px;
    }
}
`

export const FormInput = styled.input`
padding: 0 10px;
font-size: 20px;

@media (max-width: 767px) {
    width: 150px;
}
`

export const CtaInfoContainer = styled.div`
`

export const CtaInfo = styled.div`
text-align: left;
@media (min-width: 992px) {
    text-align: right;  
}
margin-top: 20px;
p {
    margin-top: 10px;
}
`

export const CtaInfoIcon = styled.div`
display: flex;
justify-content: flex-start;
column-gap: 10px;
img {
    width: 40px;
}

@media (min-width: 992px) {
    justify-content: flex-end;
}
`

export const FooterCopyright = styled.div`
p {
    font-size: 12px;
    font-weight: 500;
    text-align: left;
@media (min-width: 992px) {
    text-align: center;
}
}
`