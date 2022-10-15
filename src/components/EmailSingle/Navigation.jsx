import { Flex } from "@chakra-ui/react";
// import usePreviousValue from "../../hooks/usePreviousValue";
import NavigationButton from "../../ui/NavigationButton";

export default function Navigation({ navigate, templateLength, id, windowScroll, next, setTempLoading }) {
    // const [nexCount,setNexCount] = useState(Number(id));
    // const previous = usePreviousValue(name)
    return (
        <Flex justify={"space-between"}>
            {
                id == 1
                    ? <NavigationButton onClick={() => {
                        navigate('/emails')
                        setTempLoading(true)
                    }} imageProps={{ w: "50px", mr: "10px" }}>Back</NavigationButton>
                    : <NavigationButton onClick={() => navigate(`/email/${Number(id) - 1}`)} imageProps={{ w: "50px", mr: "10px" }}>Back</NavigationButton>
            }
            {
                templateLength == id
                    ? null
                    : <NavigationButton onClick={() => {
                        navigate(`/email/${Number(id) + 1}`)
                        setTempLoading(true)
                    }} imageProps={{ w: "50px", ml: "10px" }} arrowRight>Edit {next}</NavigationButton>
            }
        </Flex>
    )
}

// {(Number(id)) + 1}