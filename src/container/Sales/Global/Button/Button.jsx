import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Button = styled.a`
    display:inline-block;
    background: #FFC3C4;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: 600;
    margin: 20px auto 0;

    @media (min-width: 992px) {
        margin: 20px 0 0;
    }
`
function BookButton({children,...rest}) {
    return ( <Button as={Link} {...rest}>{children}</Button> );
}

export default BookButton;