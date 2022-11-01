import { Box } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/png/logo3.png";
import LogoutBtn from "../../components/LogoutBtn";
import auth from "../../firebase.init";
import { HeaderButton, HeaderContent, HeaderStyled, Menu } from "./style";

const HeaderSecondary = () => {
    const [user, loading, error] = useAuthState(auth);
    const { pathname } = useLocation()
    return (
        <HeaderStyled className="header-secondary">
            <Box className="header-logo">
                <Link to="/"><img src={logo} alt="" /></Link>
            </Box>

            <HeaderContent className="secondary-content">
                <Menu>
                    <Menu.Item ><a href="#why-retentionly" className="secondary-header-link">Why Retentionly?</a></Menu.Item>
                    <Menu.Item ><a href="#faq" className="secondary-header-link">How It Works</a></Menu.Item>
                    <Menu.Item ><a href="#pricing" className="secondary-header-link">Pricing</a></Menu.Item>
                    {
                        !user &&
                        <>
                            <Menu.Item className="login">
                                <Link to="/login" className="login-btn secondary-header-link">
                                    <button>
                                        Login
                                    </button>
                                </Link>
                            </Menu.Item>

                            <Menu.Item className="demo">
                                <Link to="/book-a-demo" className="demo-btn secondary-header-link">
                                    <button>
                                        <span className="demo-desktop">Book Free Demo</span>
                                        {/* <span className="demo-mobile">Book Demo</span> */}
                                    </button>
                                </Link>
                            </Menu.Item>
                        </>
                    }
                </Menu>
            </HeaderContent>

            <Menu className="mobile-menu-demo">
                <Menu.Item className="demo">
                    <Link to="/book-a-demo" className="demo-btn secondary-header-link">
                        <button>
                            <span className="demo-desktop">Book Demo</span>
                            {/* <span className="demo-mobile">Book Demo</span> */}
                        </button>
                    </Link>
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

        </HeaderStyled>
    )
}

export default HeaderSecondary