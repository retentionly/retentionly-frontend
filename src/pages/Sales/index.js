import { useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"
import { RegulerTestimonial } from "../../components/Testimonial"
import BenefitsSection from "../../container/Sales/Benefits"
import Brands from "../../container/Sales/Brands"
import CtaSection from "../../container/Sales/Cta/Cta"
import FaqSection from "../../container/Sales/Faq"
import Footer from "../../container/Sales/Footer"
import HeroSection from "../../container/Sales/Hero/Hero"
import Pricing from "../../container/Sales/Pricing"
import Services from "../../container/Sales/Services/Services"
import Stats from "../../container/Sales/Stats"
import auth from "../../firebase.init"
import { HeaderSecondary } from "../../layout/Header"
import { SalesContainer } from "./style"

export default function SalesPage() {

    return (
        <>
            <HeaderSecondary />
            <SalesContainer>
                <HeroSection />
                <Stats />
                <Services />
                <Brands />
                <BenefitsSection />
                <Pricing />
                <RegulerTestimonial />
                <CtaSection />
                <FaqSection />
                <Footer />
            </SalesContainer>
        </>
    )
}