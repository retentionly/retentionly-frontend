import styled from "@emotion/styled";

export const ServiceStyled = styled.div`

padding-bottom: 100px;
text-align:center;
.cta-title{
    margin-bottom:30px;
}
`

export const SeriviceCardContainer = styled.div`
`

const ServiceCardStyled = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

ServiceCardStyled.Text = styled.div`
max-width: 300px;
text-align: left;
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
height: 400px;
width: 600px;
display: flex;
align-items: center;
justify-content: center;

.service-image {
    width: 250px;
}
`

export default ServiceCardStyled;