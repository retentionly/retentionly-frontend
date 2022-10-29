import heroImage from "../../../assets/png/hero.png";
import SectionTitle from "../../../ui/SectionTitle";
import Container from "../Global/Container";
import HeroStyled from "./style";

export default function HeroSection() {
    return (
        <Container>
            <HeroStyled>
                <HeroStyled.Item>
                   <SectionTitle title="Automate your donor retention process" text="Less workload. More donations. New donors." className="hero-text"/>
                   <button>Book A Demo</button>
                </HeroStyled.Item>
                <HeroStyled.Item>
                    <img src={heroImage} alt="" />
                </HeroStyled.Item>
            </HeroStyled>
        </Container>
    )
}
