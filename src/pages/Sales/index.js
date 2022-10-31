import { RegulerTestimonial } from "../../components/Testimonial"
import Brands from "../../container/Sales/Brands"
import CtaSection from "../../container/Sales/Cta/Cta"
import FaqSection from "../../container/Sales/Faq"
import Footer from "../../container/Sales/Footer"
import HeroSection from "../../container/Sales/Hero/Hero"
import Services from "../../container/Sales/Services/Services"
import Stats from "../../container/Sales/Stats"
import { SalesContainer } from "./style"

export default function SalesPage() {
    return (
        <SalesContainer>
            <HeroSection />
            <Stats />
            <Services />
            <Brands />
            <RegulerTestimonial />
            <CtaSection />
            <FaqSection />
            <Footer />
        </SalesContainer>
    )
}