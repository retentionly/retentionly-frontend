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
width: 50%;
padding: 0 20px;
`

const TestimonialContent = styled.div`
width: 50%;
padding: 0 30px;
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
}
`

export default TestimonialContent;