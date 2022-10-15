import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import LogoutBtn from "../../components/LogoutBtn";
import { revertAllAdmin } from "../../features/admin/adminSlice";
import { revertAllAuth } from "../../features/auth/authSlice";
import { revertAllMaster } from "../../features/master/masterSlice";
import { revertAllPayment } from "../../features/payment/paymentSlice";
import { revertAllTemplate } from "../../features/template/templateSlice";
import { revertAllUser } from "../../features/user/userSlice";
import auth from "../../firebase.init";
import { HeaderButton, HeaderStyled, HeraderButtonGroup, Menu } from "./style";

export default function Header() {
    const location = useLocation()
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
            <Menu>
                <Menu.Item><Link to="/">Features</Link></Menu.Item>
                <Menu.Item><Link to="/">Pricing</Link></Menu.Item>
                <Menu.Item><Link to="/">Community</Link></Menu.Item>
                <Menu.Item><Link to="/">Support</Link></Menu.Item>
                <Menu.Item><Link to="/master">Master</Link></Menu.Item>
                <Menu.Item><Link to="/emails">Dashboard</Link></Menu.Item>
            </Menu>
            {false && <HeraderButtonGroup spacingX="10px">
                <HeaderButton blue as={"span"}>
                    Log in
                </HeaderButton>
                <HeaderButton white as={"span"}>
                    Register
                </HeaderButton >
            </HeraderButtonGroup>}
            {true && <LogoutBtn path={location?.pathname}>
                <HeaderButton blue as={"div"}>
                    Sign out
                </HeaderButton>
            </LogoutBtn>}

        </HeaderStyled>
    )
}