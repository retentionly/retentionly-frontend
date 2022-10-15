import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { revertAllAdmin } from "../features/admin/adminSlice";
import { revertAllAuth } from "../features/auth/authSlice";
import { revertAllMaster } from "../features/master/masterSlice";
import { revertAllPayment } from "../features/payment/paymentSlice";
import { revertAllTemplate } from "../features/template/templateSlice";
import { useUpdateUserStatusMutation } from "../features/user/userApi";
import { revertAllUser } from "../features/user/userSlice";
import auth from "../firebase.init";

const useLogout = () => {
    const dispatch = useDispatch()
    const [updateUserStatus, { data, isLoading, isError }] = useUpdateUserStatusMutation();

    const logOut = async () => {

        dispatch(revertAllAdmin())
        dispatch(revertAllAuth())
        dispatch(revertAllMaster())
        dispatch(revertAllPayment())
        dispatch(revertAllTemplate())
        dispatch(revertAllUser())
        signOut(auth)
    }

    return [logOut, isLoading]
}

export default useLogout