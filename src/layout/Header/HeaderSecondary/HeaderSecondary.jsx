import { Box } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/png/logo3.png";
import LogoutBtn from "../../../components/LogoutBtn";
// import BookButton from "../../../container/Sales/Global/Button/Button";
import auth from "../../../firebase.init";
import { HeaderButton, HeaderContent, HeaderSecondaryStyled, Menu ,BookButton} from "./style";

const HeaderSecondary = () => {
    const [user, loading, error] = useAuthState(auth);
    const { pathname } = useLocation()
    return (
        <HeaderSecondaryStyled className="header-secondary">
            <Box className="header-logo">
                <a href="https://retentionly.co.uk" className="secondary-header-link"><img src={logo} alt="" /></a>
            </Box>

            <HeaderContent className="secondary-content">
                <Menu>
                    <Menu.Item ><a href="https://retentionly.co.uk/#why-retentionly" className="secondary-header-link">Why Retentionly?</a></Menu.Item>
                    <Menu.Item ><a href="https://retentionly.co.uk/#faq" className="secondary-header-link">How It Works</a></Menu.Item>
                    <Menu.Item ><a href="https://retentionly.co.uk/#pricing" className="secondary-header-link">Pricing</a></Menu.Item>
                    {
                        !user &&
                        <>
                            {/* <Menu.Item className="login">
                                <Link to="/login" className="login-btn secondary-header-link">
                                    <button>
                                        Login
                                    </button>
                                </Link>
                            </Menu.Item> */}

                            <Menu.Item className="demo ml-auto">
                            <BookButton href="https://retentionly.co.uk/booking" >Book Demo</BookButton>
                            </Menu.Item>
                        </>
                    }
                </Menu>
            </HeaderContent>

            <Menu className="mobile-menu-demo">
                <Menu.Item className="demo">
                <BookButton href="https://retentionly.co.uk/booking">Book Demo</BookButton>
                </Menu.Item>
            </Menu>

            {
                user &&
                <LogoutBtn path={pathname} className="header-button-wrapper">
                    <HeaderButton blue as={"div"}>
                        Logout
                    </HeaderButton>
                </LogoutBtn>
            }

        </HeaderSecondaryStyled>
    )
}

export default HeaderSecondary