import { text_53 } from "../../../theme/typography";
import Button from "../Global/Button";
import Container from "../Global/Container";
import Typography from "../Global/Typography/Typography";
import CtaStyled from "./style";

function CtaSection() {
    return ( <CtaStyled>
        <Container>
            <Typography as="h2" variant={text_53} className="cta-title">
                <span className="underline-shape">It's 25 X cheaper</span> to get your <br/> old donor to give again than <br/> to acquire a new donor
            </Typography>
            <Button className="cta-button">Book A Demo</Button>
        </Container>
    </CtaStyled> );
}

export default CtaSection;