import { Box } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/png/logo3.png";
import LogoutBtn from "../../components/LogoutBtn";
import auth from "../../firebase.init";
import { HeaderButton, HeaderContent, HeaderStyled, Menu } from "./style";

const HeaderMain = () => {
    const [user, loading, error] = useAuthState(auth);
    const { pathname } = useLocation()
    return (
        <HeaderStyled>
            <Box className="header-logo">
                <Link to="/"><img src={logo} alt="" /></Link>
            </Box>
            {user &&
                <HeaderContent>
                    {/* <Menu> */}

                    <Menu>
                        <Menu.Item ><Link to="/email" >Dashboard</Link></Menu.Item>
                        <Menu.Item ><Link to="/master">Master</Link></Menu.Item>
                        <Menu.Item ><Link to="/">Home</Link></Menu.Item>
                    </Menu>


                    {/* {pathname !== "/register" && <Menu.Item className={!user && 'disabled'}><Link to="/email" >Dashboard</Link></Menu.Item>} */}
                    {/* {pathname !== "/login" && <Menu.Item className={!user && 'disabled'}><Link to="/">Pricing</Link></Menu.Item>} */}
                    {/* {pathname !== "/register" && <Menu.Item className={!user && 'disabled'}><Link to="/master">Master</Link></Menu.Item>} */}

                    {/* </Menu> */}

                </HeaderContent>
            }
            {
                (pathname === "/login" && !user) &&
                <Link to="/register" className="header-button-wrapper">
                    <HeaderButton blue as={"span"}>
                        Create An Account
                    </HeaderButton>
                </Link>
            }
            {
                (pathname === "/register" && !user) &&
                <Link to="/login" className="header-button-wrapper">
                    <HeaderButton blue as={"span"}>
                        Login
                    </HeaderButton>
                </Link>
            }
            {
                user &&
                <LogoutBtn path={pathname} className="header-button-wrapper">
                    <HeaderButton blue as={"div"}>
                        Logout
                    </HeaderButton>
                </LogoutBtn>
            }
            {/* <HeraderButtonGroup spacingX="10px">
        <HeaderButton blue as={"span"}>
            Log in
        </HeaderButton>
        <HeaderButton white as={"span"}>
            Register
        </HeaderButton >
    </HeraderButtonGroup>
    <LogoutBtn path={pathname}>
        <HeaderButton blue as={"div"}>
            Sign out
        </HeaderButton>
    </LogoutBtn> */}
        </HeaderStyled>
    )
}

export default HeaderMain