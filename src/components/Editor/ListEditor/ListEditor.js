import { Box, Button, Heading, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setImpactStat, setSocialMediaBenefit } from '../../../features/template/templateSlice';
import { Text20, Text30 } from '../../../theme/text';
import { FormStyled } from '../style';

const RemoveButton = styled(Button)`
background: none;
color: red;
border: 1px solid red;
border-radius: 50%;

font-size: 12px;
min-height: 25px;
max-height: 25px;
min-width: 25px;
max-width: 25px;
padding: 2px;
margin-left: 10px;
&:hover {
    background: red;
    color: white;
};

`

const AddTaskForm = ({ addTask, placeholder }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        value && addTask(value)
        setValue("");
    };

    return (
        <FormStyled onSubmit={handleSubmit} style={{ color: "#000", display: 'flex', flexDirection: 'column' }}>
            <input
                type="text"
                value={value}
                placeholder={placeholder}
                onChange={e => setValue(e.target.value)}
            />
            <button type="submit">add</button>
        </FormStyled>
    );
}

const ListEditor = ({ title, text, placeholder, data, social, impact, ...rest }) => {
    const dispatch = useDispatch()
    const [tasks, setTasks] = useState([...data]);

    const addTask = text => {
        setTasks([...tasks, { text: text }])
        if(social){
            dispatch(setSocialMediaBenefit([...tasks, { text: text }]))
        }
        if(impact){
            dispatch(setImpactStat([...tasks, { text: text }]))
        }
    };

    const toggleTask = index => {
        const newTasks = [...tasks];
        newTasks[index].isCompleted = !newTasks[index].isCompleted;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
        if(social){
            dispatch(setSocialMediaBenefit(newTasks))
        }
        if(impact){
            dispatch(setImpactStat(newTasks))
        }
    };

    return (
        <Box {...rest}>
            <Heading color="black" fontWeight={400} mb="14px" {...Text30}>{title}</Heading>
            <Text {...Text20} color="black" mb="14px">
                {text}
            </Text>
            <ul style={{ marginLeft: '20px', marginBottom: '10px' }}>
                {tasks.map((task, index) => (
                    <li key={index * .0014} className="todo" style={{ color: "#000", marginBottom: "10px" }}>
                        <span onClick={() => toggleTask(index)} className={task.isCompleted ? "todo-text todo-completed" : "todo-text"}>
                            {task.text}
                        </span>
                        <RemoveButton onClick={() => removeTask(index)}>X</RemoveButton>
                    </li>
                ))}
            </ul>
            <AddTaskForm addTask={addTask} placeholder={placeholder} />
        </Box>
    )
}

export default ListEditor

/* 
 <Box {...rest}>
            <Heading color="black" fontWeight={400} mb="14px" {...Text30}>{title}</Heading>
            <Text {...Text20} color="black" mb="14px">
                {text}
            </Text>
            <Box>
            <TextEditor placeholder={inputPlaceholder} handleInputChange={onChange} value={value} />
                
                    social
                    ? <TextEditor placeholder={inputPlaceholder} handleInputChange={onChange} value={value} />
                    : <input type="text" />
                </Box >
                </Box >
*/