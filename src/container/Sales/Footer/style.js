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

    br {
        display: none;
        @media (min-width: 768px) {
            display: block;
        }
    }
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