import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LinkIcon from "../../assets/png/edit-icon.png";
const btnStyle = {
  w:"calc(100% - 90px)",
  bg:"#000",
  color:"#fff",
  textAlign:"center",
  cursor:"pointer",
  justify: "center",
  align: "center",
  fontSize:"18px",
  h:"68px"
}

const deleteBtnStyle = {
  w: "100px",
  background: 'none',
  _hover:{
    background: 'none'
  }
}

const OptionInner = ({children,editicon,...rest}) => {
  return(
    <>
      <Flex  {...btnStyle}{...rest}>
        {children}
      </Flex>
      {editicon ? <Box w="67px" cursor="pointer">
        <img src={LinkIcon} alt="icon"/>
      </Box> : null}
    </>
  )
}

export default function Option({children,editicon,deleteicon,deleteid,btnProps, to,...rest}){
  return(
    <>
    {to ? 
    <Flex align="center" justify="space-between" to={to} as={Link} {...rest}>
      <OptionInner editicon={editicon} {...btnProps}>
        {children}
      </OptionInner>
    </Flex> : 
      <Flex align="center" justify="space-between" {...rest}>
        <OptionInner editicon={editicon} {...btnProps}>
          {children}
        </OptionInner>
      </Flex>}
    </>
  )
}