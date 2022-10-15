import { Box, Container, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUpdateUserStatusMutation } from "../../features/user/userApi";
import { setUserPath, setUserStatus } from "../../features/user/userSlice";
import auth from "../../firebase.init";
import { PageWrapper } from "../../ui/PageWrapper";
import SectionTitle from "../../ui/SectionTitle";

export default function Appointment() {
  const dispatch = useDispatch()
  const { path } = useSelector(state => state.user);
  const [user] = useAuthState(auth)
  const [isDoneScheduling, setDoneScheduling] = useState(false);
  const [isTimeSelected, setTimeSelected] = useState(false);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [updateUserStatus, { data, isLoading, isError, isSuccess }] = useUpdateUserStatusMutation();

  //   const prefill = {
  //     name: "Test Name",
  //     email: "Email@gmail.com"
  //   };

  useCalendlyEventListener({
    onEventScheduled: (e) => {
      setLoader(true);
      updateUserStatus({
        email: user?.email,
        status: true
      })
      // setTimeout(() => {
      //   setLoader(false);
      // }, 2000)
    },
  });

  if (isSuccess) {
    dispatch(setUserPath('/user'))
    dispatch(setUserStatus('old-user'))
    setLoader(false);
    navigate("/final")
  }

  if (isError) {
    setLoader(false)
  }

  const pageSettings = {
    primaryColor: "417658",
    textColor: "251e35",
    backgroundColor: "f7f5f4",
    hideLandingPageDetails: true,
    hideEventTypeDetails: true
  };

  // const prefill = useRef({
  //   name: "Test Name",
  //   email: "Email@gmail.com"
  // });

  // const pageSettings = useRef({
  //   primaryColor: "417658",
  //   textColor: "251e35",
  //   backgroundColor: "f7f5f4",
  //   hideLandingPageDetails: true,
  //   hideEventTypeDetails: true
  // });

  function getCalendlyHeightToEnsureNoCrop() {

    if (!isTimeSelected) return { height: 800 };
    if (isDoneScheduling) return { height: 850 };
    return { height: 1060 };
  }

  function handleDateAndTimeSelected() {
    setTimeSelected(true);
  }

  function handleEventScheduled() {
    setDoneScheduling(true);
  }
 
  return (
    <PageWrapper>
      <Container>
        <Box position={"relative"}>
          <SectionTitle title="Get ready to go live 🏁 " text="The final step before we go live is to book a call with our team. 
That way we can connect your database with the email series."/>
          <InlineWidget
            url={"https://calendly.com/retentionly/30min"}
            // pageSettings={pageSettings.current}
            // prefill={prefill.current}
            pageSettings={pageSettings}
            // prefill={prefill}
            styles={getCalendlyHeightToEnsureNoCrop()}
          />
          {loader && <Box position={"absolute"} top="0" left="0" h="100%" w="100%" background={"rgba(255,255,255,.8)"} display="flex" alignItems={"center"} justifyContent="center">
            <Text mr="10px">Please Wait</Text>
            <Spinner />
          </Box>}
        </Box>
      </Container>
    </PageWrapper>
  );
}
