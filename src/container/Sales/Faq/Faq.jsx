import { text_22, text_30 } from "../../../theme/typography";
import Container from "../Global/Container";
import Typography from "../Global/Typography";
import FaqSingle from "./FaqSingle";
import FaqStyled from "./style";

function FaqSection() {
    return ( <FaqStyled>
            <Container>
                <div className="section-title">
                    <Typography as="h2" variant={text_30} className="faq-title">
                        <span className="underline-shape-v2">FAQs</span>
                    </Typography>
                    <Typography as="p" variant={text_22} className="faq-text">
                        Take your fundraising income to the next level by using Retentionly.
                    </Typography>
                </div>

                <div className="faq-body">
                <FaqSingle  title="Who is Retentionly for?" text="Any charity who has a supporter database of more than 50 people. Is that you? "/>

                <FaqSingle  title="Will it work for me?" text="Yes! We're built so we work for every charity. Especially if you currently have no retention activity in place. "/>

                <FaqSingle  title="What do I need to get started?" text="Simply sign up, select your goal and start building out your sequence (this part takes 15 minutes). Then book a meeting with us to connect your website with the journey. "/>

                <FaqSingle  title="If you're not blown away by the results then we'll refund you fully!" text="Any charity who has a supporter database of more than 50 people. Is that you? "/>

                <FaqSingle  title="What is donor retention ?" text="Simply: keeping your donors donating to you. Instead of someone donating once and never return, donor retentain aims to keep them donating. "/>
                <FaqSingle  title="Can I get my money back?" text="If you're not blown away by the results we'll refund you fully!"/>
                </div>
                
            </Container>
    </FaqStyled> );
}

export default FaqSection;