import styled from '@emotion/styled'
import React from 'react'

const ContainerStyled = styled.div`
width: 100%;
margin: 0 auto;
padding-left:15px;
padding-right:15px;
@media (min-width: 576px) {
    max-width: 540px;
}
@media (min-width: 768px) {
    max-width: 720px;

}
@media (min-width: 992px) {
    max-width: 960px;
    padding-left:30px;
    padding-right:30px;
}
@media (min-width: 1200px) {
    max-width: 1024px;
}
`

const Container = ({ children }) => {
  return (
    <ContainerStyled>
        {children}
    </ContainerStyled>
  )
}

export default Container