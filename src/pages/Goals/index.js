import { Box, Button as TooltipButton, Container, Flex, Text, Tooltip, useRadioGroup } from '@chakra-ui/react';
import React, { Children, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as HintIcon } from "../../assets/svg/hint-icon.svg";
import Button from '../../components/Common/Button';
import { PageWrapper } from '../../ui/PageWrapper';
import RadioCard from '../../ui/RadioCard';
import SectionTitle from '../../ui/SectionTitle';
import { SingleOption } from './style';

const Goals = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(false)

    const options = [
        {
            label: "Welcome Series",
            hint: "This donor journey is not available yet.",
            isDisabled: true,
        },
        {
            label: "Conversion Series",
            hint: "This donor journey is not available yet.",
            isDisabled: true,
        },
        {
            label: "Recurring Series",
            hint: "The goal of the Recurring Series is to convert your one time donors into  setting up monthly recurring donations. Every fundraisers dream! 😍",
            isDisabled: false,
            isChecked: true
        }
    ]

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'framework',
        defaultValue: 'react',
    })

    const group = getRootProps()
    return (
        <PageWrapper center="true">
            <Container>
                <SectionTitle title="Select Your Goal 🏆" text="Select a goal you would like to achieve." mb="80px" />
                <Box maxW={400} mx="auto" mb="60px">
                    <form {...group}>
                        {Children.toArray(
                            options.map(({ label, hint, isDisabled }) => {
                                const radio = getRadioProps({ value: label, isDisabled: isDisabled })
                                return (
                                    <Flex alignItems="center">
                                        <SingleOption w="100%" key={label} mb="15px" disabled={isDisabled} onClick={() => { setSelected(true) }}>
                                            <RadioCard key={label} {...radio}>
                                                {label}
                                            </RadioCard>
                                        </SingleOption>
                                        <Box ml="10px">
                                            {/* <Tooltip hasArrow label={hint} color='white'>
                                                <HintIcon />
                                            </Tooltip> */}
                                            <Tooltip label={hint} hasArrow shouldWrapChildren placement='right' textAlign="center" borderRadius="lg" p="10px">
                                                <TooltipButton bg="none" _hover={{bg: 'none'}}  isDisabled={isDisabled} borderRadius='0'>
                                                    <HintIcon />
                                                </TooltipButton>
                                            </Tooltip>
                                        </Box>
                                    </Flex>
                                )
                            })
                        )}
                    </form>
                    {!selected && <Text color="red"><small>*Select At Least One Goal To Continue</small></Text>}
                </Box>
                <Box maxW={450} mx="auto" opacity={selected ? '1' : '0.5'} pointerEvents={selected ? 'visible' : 'none'}>
                    <Button disabled={!selected} onClick={() => navigate("/master")}>
                        Confirm Goal
                    </Button>
                </Box>
            </Container>
            
        </PageWrapper>
    )
}

export default Goals;