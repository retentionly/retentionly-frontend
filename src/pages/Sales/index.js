import HeroSection from "../../container/Sales/Hero/Hero"
import Services from "../../container/Sales/Services"
import Stats from "../../container/Sales/Stats"
import { SalesContainer } from "./style"

export default function SalesPage (){
    return(
        <SalesContainer>
            <HeroSection/>
            <Stats/>
            <Services/>
        </SalesContainer>
    )
}