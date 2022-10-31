import CtaSection from "../../container/Sales/Cta/Cta"
import FaqSection from "../../container/Sales/Faq"
import HeroSection from "../../container/Sales/Hero/Hero"
import Services from "../../container/Sales/Services/Services"
import Stats from "../../container/Sales/Stats"
import { SalesContainer } from "./style"

export default function SalesPage (){
    return(
        <SalesContainer>
            <HeroSection/>
            <Stats/>
            <Services/>
            <CtaSection/>
            <FaqSection/>
        </SalesContainer>
    )
}