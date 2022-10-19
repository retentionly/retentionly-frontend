import { useState } from 'react';

const useTodo = (impact) => {
    const [item, setItem] = useState([...impact]);

    const addTask = text => {
        setItem([...item, { text: text }])
        // if(social){
        //     dispatch(setSocialMediaBenefit([...tasks, { text: text }]))
        // }
        // if(impact){
        //     dispatch(setImpactStat([...tasks, { text: text }]))
        // }
    };

    const toggleTask = index => {
        const newTasks = [...item];
        newTasks[index].isCompleted = !newTasks[index].isCompleted;
        setItem(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...item];
        newTasks.splice(index, 1);
        setItem(newTasks);
    };

    return { addTask, toggleTask, removeTask, item }
}

export default useTodo