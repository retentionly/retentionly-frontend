import { Outlet } from "react-router-dom";

export default function Layout() {
    
    // const navigate = useNavigate();
    // const { path } = useSelector(state => state.user);

    // useEffect(() => {
    //     if (path) {
    //         navigate(path);
    //     }
    // }, [path])

    // if(path === undefined){
    //     return <Loader/>
    // }

    return (
        <>
            <Outlet />
        </>
    )
}

/* 
  <>
            <Header />
            {
                !admin?.admin
                    ? <Outlet />
                    : navigate('/admin')
            }
        </>

*/