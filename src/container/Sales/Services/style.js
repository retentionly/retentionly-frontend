import styled from "@emotion/styled";

export const SeriviceCardContainer = styled.div`
margin-top: 50px;
`

const ServiceCardStyled = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

ServiceCardStyled.Text = styled.div`
max-width: 300px;
h1 {
    margin-bottom: 20px;
}
`

ServiceCardStyled.Media = styled.div`
background-color: red;
background-image: url(${props => props.image});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
height: 600px;
width: 600px;
display: flex;
align-items: center;
justify-content: center;

.service-image {
    width: 250px;
}
`

export default ServiceCardStyled;