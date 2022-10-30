import HeroSection from "../../container/Sales/Hero/Hero"
import CtaSection from "../../container/Sales/Cta/Cta"
import Stats from "../../container/Sales/Stats"
import FaqSection from "../../container/Sales/Faq"
import { SalesContainer } from "./style"

export default function SalesPage (){
    return(
        <SalesContainer>
            <HeroSection/>
            <Stats/>
            <CtaSection/>
            <FaqSection/>
        </SalesContainer>
    )
}