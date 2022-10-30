import styled from '@emotion/styled'
import React from 'react'

const ContainerStyled = styled.div`
width: 100%;
margin: 0 auto;

@media (min-width: 576px) {
    max-width: 540px;
}
@media (min-width: 768px) {
    max-width: 720px;
}
@media (min-width: 992px) {
    max-width: 960px;
}
@media (min-width: 1200px) {
    max-width: 1140px;
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