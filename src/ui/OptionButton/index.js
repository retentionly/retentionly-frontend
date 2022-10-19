import { Box, Flex } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import LinkIcon from "../../assets/png/edit-icon.png";
import EmailDeleteModal from "../../components/Modals/EmailDeleteModal";
import { useGetUserQuery } from "../../features/user/userApi";
import auth from "../../firebase.init";

const btnStyle = {
  w: "100%",
  bg: "#000",
  color: "#fff",
  textAlign: "center",
  justify: "center",
  align: "center",
  fontSize: "25px",
  h: "68px"
}


const OptionInner = ({ children, to, ...rest }) => {

  return (
    <>
      {
        to ?
          <Flex to={to} as={Link} {...btnStyle}{...rest}>
            {children}
          </Flex>
          :
          <Flex  {...btnStyle}{...rest}>
            {children}
          </Flex>
      }

    </>
  )
}

export default function Option({ children, editicon, view, viewIcon, deleteicon, deleteid, btnProps,editiconProps, to, ...rest }) {
  const [user] = useAuthState(auth);
  const { refetch } = useGetUserQuery(user?.email);

  return (
    <>
      <Flex align="center" justify="space-between" {...rest}>
        <OptionInner editicon={editicon} deleteicon={deleteicon} deleteid={deleteid} {...btnProps} to={to}>
          {children}
        </OptionInner>
        {
          editicon && <Box as={Link} {...editiconProps}  cursor="pointer" to={to}>
            <img src={LinkIcon} alt="icon" />
          </Box>
        }
        {
          view && <Box pl="10px" w="100px" as={Link} cursor="pointer" to={to}>
            <img src={viewIcon} alt="icon" />
          </Box>
        }
        {
          deleteicon && <EmailDeleteModal deleteid={deleteid} refetch={refetch} />
        }
      </Flex>
    </>
  )
}