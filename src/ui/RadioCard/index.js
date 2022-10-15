import { Box, useRadio } from "@chakra-ui/react"

export default function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as='label' {...props.box}>
        <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          minH={"68px"}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          borderWidth='1px'
          borderRadius='md'
          boxShadow='md'
          _checked={{
            bg: 'black',
            color: 'white',
            borderColor: 'black',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    )
  }