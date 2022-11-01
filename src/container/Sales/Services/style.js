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
flex-direction: column;
@media (min-width: 992px) {
    flex-direction: row;
}
`

ServiceCardStyled.Text = styled.div`

text-align: left;
h1 {
    margin-bottom: 20px;
}
@media (min-width: 992px) {
    max-width: 300px;
}
@media (max-width: 992px) {
    order: 1;
    }
`

ServiceCardStyled.Media = styled.div`
@media (max-width: 992px) {
order: 2;
}

background-image: url(${props => props.image});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
height: 200px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;

.service-image {
    width: 150px;
}

@media (min-width: 992px) {
    height: 400px;
    width: 600px;


    .service-image {
        width: 250px;
    }
}
`

export default ServiceCardStyled;