import heroImage from "../../../assets/png/hero.png";
import { PageWrapper } from "../../../ui/PageWrapper";
import SectionTitle from "../../../ui/SectionTitle";
import HeroStyled from "./style";

export default function HeroSection() {
    return (
        <PageWrapper>
            <HeroStyled>
                <HeroStyled.Item>
                   <SectionTitle title="Automate your donor retention process" text="Less workload. More donations. New donors." className="hero-text"/>
                   <button>Book A Demo</button>
                </HeroStyled.Item>
                <HeroStyled.Item>
                    <img src={heroImage} alt="" />
                </HeroStyled.Item>
            </HeroStyled>
        </PageWrapper>
    )
}
