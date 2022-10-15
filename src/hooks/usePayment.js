
import Error from "../components/Error/Error";
import Loader from "../ui/Loaders/Loading";
import { useGetPaymentStatusQuery } from "../features/auth/authApi";

const usePayment = (user) => {
    const email = user?.email;
    const { data, isLoading, isError } = useGetPaymentStatusQuery(email, {
        refetchOnMountOrArgChange: true,
    })
    const paymentStatus = data?.paymentStatus;

    if (isLoading) {
        return <Loader />
    }
    if (isError) {
        return <Error />
    }

    return { paymentStatus }
}

export default usePayment