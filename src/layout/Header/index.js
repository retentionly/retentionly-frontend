import { Box } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/png/logo3.png";
import LogoutBtn from "../../components/LogoutBtn";
import { revertAllAdmin } from "../../features/admin/adminSlice";
import { revertAllAuth } from "../../features/auth/authSlice";
import { revertAllMaster } from "../../features/master/masterSlice";
import { revertAllPayment } from "../../features/payment/paymentSlice";
import { revertAllTemplate } from "../../features/template/templateSlice";
import { revertAllUser } from "../../features/user/userSlice";
import auth from "../../firebase.init";
import { HeaderButton, HeaderContent, HeaderStyled, Menu } from "./style";

export default function Header() {
    const [user, loading, error] = useAuthState(auth);
    const { pathname } = useLocation()
    const dispatch = useDispatch()

    const logOut = () => {
        signOut(auth);
        dispatch(revertAllAdmin())
        dispatch(revertAllAuth())
        dispatch(revertAllMaster())
        dispatch(revertAllPayment())
        dispatch(revertAllTemplate())
        dispatch(revertAllUser())
    }

    return (
        <HeaderStyled>
            <Box>
                <img src={logo} alt="" />
            </Box>
            <HeaderContent>
                <Menu>
                    {pathname !== "/register" && <Menu.Item><Link to="/emails">Dashboard</Link></Menu.Item>}
                    {pathname !== "/login" && <Menu.Item><Link to="/">Pricing</Link></Menu.Item>}
                    {pathname !== "/register" && <Menu.Item><Link to="/master">Master</Link></Menu.Item>}
                    <Menu.Item><Link to="/">Home</Link></Menu.Item>
                </Menu>
                {
                    (pathname === "/login" && !user) &&
                    <Link to="/register">
                        <HeaderButton blue as={"span"}>
                        Create An Account
                    </HeaderButton>
                    </Link>
                }
                {
                    (pathname === "/register" && !user) &&
                    <Link to="/login">
                    <HeaderButton blue as={"span"}>
                        Login
                    </HeaderButton>
                    </Link>
                }
                {
                    user &&
                    <LogoutBtn path={pathname}>
                        <HeaderButton blue as={"div"}>
                            Logout
                        </HeaderButton>
                    </LogoutBtn>
                }
            </HeaderContent>
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