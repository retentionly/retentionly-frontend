import { text_53 } from "../../../theme/typography";
import Button from "../Global/Button";
import Container from "../Global/Container";
import Typography from "../Global/Typography/Typography";
import FaqStyled from "./style";

function FaqSection() {
    return ( <FaqStyled>
            <Container>
                <Typography align="center" as="h2" variant={text_53} className="cta-title">
                    <span className="underline-shape">It's 25 X cheaper</span> to get your <br/> old donor to give again than <br/> to acquire a new donor
                </Typography>
                <Button className="cta-button">Book A Demo</Button>
            </Container>
    </FaqStyled> );
}

export default FaqSection;