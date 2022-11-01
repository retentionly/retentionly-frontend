import styled from "@emotion/styled";

export const TestimonialStyled = styled.div`
background-color: #D9D9D9;
padding-top: 50px;
padding-bottom: 50px;
.slick-slider {
    display: flex;
}
`

export const SliderStyled = styled.div`

`
export const SliderButtonContainer = styled.div``
export const SliderArrowButton = styled.button`
`

export const TestimonialCardStyled = styled.div`
display: flex;
justify-content: center;
padding: 20px;
`

export const TestimonialMedia = styled.div`
display: none;
width: 50%;
padding: 0 20px;

@media (min-width: 992px){
    display: block;
}
`

const TestimonialContent = styled.div`
width: 100%;
padding: 0 30px;
text-align: center;

@media (min-width: 992px){
    text-align: left;
    width: 50%;
}
`

TestimonialContent.Heading = styled.div`
margin-bottom: 20px;
`
TestimonialContent.Text = styled.div`
margin-bottom: 20px;

.designation {
    display: block;
    margin-top: 10px;
}
`
TestimonialContent.Icon = styled.div`
img {
    width: 100px;
    margin: auto;
    
    @media (min-width: 992px){
        margin: unset;
    }
}

`

export default TestimonialContent;