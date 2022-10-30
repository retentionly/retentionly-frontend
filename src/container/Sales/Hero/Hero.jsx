import heroImage from "../../../assets/png/hero.png";
import SectionTitle from "../../../ui/SectionTitle";
import Container from "../Global/Container";
import HeroStyled from "./style";
import BookButton from "../Global/Button/Button";
export default function HeroSection() {
    return (
        <Container>
            <HeroStyled>
                <HeroStyled.Item className="hero-text">
                    <h2>Automate your <span className="underline-shape"> donor retention </span><br/> process</h2>
                    <p>Less workload. More donations. New donors.</p>
                   <BookButton>Book A Demo</BookButton>
                </HeroStyled.Item>
                <HeroStyled.Item className="hero-image">
                    <img src={heroImage} alt="hero image" />
                </HeroStyled.Item>
            </HeroStyled>
        </Container>
    )
}
