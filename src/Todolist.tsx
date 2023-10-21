import { useState } from 'react';
import { FilterValuesType } from './App';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    setTasks: (filteredTasks: TaskType[], ) => void
}

export function Todolist(props: PropsType) {


    const removeTask = (id: number) => {
        let filteredTasks = props.tasks.filter(t => t.id != id);
        props.setTasks(filteredTasks);
    }

    const deleteAllTasks = () =>{
        props.setTasks([]);
    }

    let [filter, setFilter] = useState<FilterValuesType>("all");

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    let tasksForTodolist = props.tasks;


    switch (filter) {
        case ("active"):
            tasksForTodolist = props.tasks.filter(t => t.isDone === false);
            break
        case ("completed"):
            tasksForTodolist = props.tasks.filter(t => t.isDone === true);
            break
        default:
            tasksForTodolist = props.tasks
    }


    const deleteThreeTasks = () => {
        const filterDeleteThreeTasks = tasksForTodolist.filter((t, index) => index > 2)
        props.setTasks(filterDeleteThreeTasks)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                tasksForTodolist.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={ () => { removeTask(t.id) } }>x</button>
                </li>)
            }
        </ul>
        <>
            <button onClick={deleteAllTasks}>DELETE ALL BUTTONS</button>
        </>
        <div>
            <button onClick={ () => { changeFilter("all") } }>
                All
            </button>
            <button onClick={ () => { changeFilter("active") } }>
                Active
            </button>
            <button onClick={ () => { changeFilter("completed") } }>
                Completed
            </button>
            <button onClick={deleteThreeTasks}>delete three</button>
        </div>
    </div>
}

























//------------------------------------------------------------------------------------------------

// import React, {useState} from 'react';
// import {FilterValuesType} from './App';
//
// type TaskType = {
//     id: number
//     title: string
//     isDone: boolean
// }
//
// type PropsType = {
//     title: string
//     tasks: Array<TaskType>
//     removeTask: (taskId: number) => void
//     //changeFilter: (value: FilterValuesType) => void
//     deleteAllTasks:()=>void
// }
//
// export function Todolist(props: PropsType) {
//
//     let [filter, setFilter] = useState<FilterValuesType>("all");
//
//     let tasksForTodolist = props.tasks;
//
//     if (filter === "three") {
//         tasksForTodolist = props.tasks.filter(t => t.id<4);
//     }
//     if (filter === "active") {
//         tasksForTodolist = props.tasks.filter(t => t.isDone === false);
//     }
//     if (filter === "completed") {
//         tasksForTodolist = props.tasks.filter(t => t.isDone === true);
//     }
//
//     function changeFilter(value: FilterValuesType) {
//         setFilter(value);
//     }
//
//     return <div>
//         <h3>{props.title}</h3>
//         <div>
//             <input/>
//             <button>+</button>
//         </div>
//         <ul>
//             {
//                 tasksForTodolist.map(t => <li key={t.id}>
//                     <input type="checkbox" checked={t.isDone}/>
//                     <span>{t.title}</span>
//                     <button onClick={ () => { props.removeTask(t.id) } }>x</button>
//                 </li>)
//             }
//         </ul>
//         <button onClick={()=>props.deleteAllTasks()}>DELETE ALL TASKS</button>
//         <div>
//             <button onClick={ () => { changeFilter("three") } }>
//                 Give me the first three
//             </button>
//             <button onClick={ () => { changeFilter("all") } }>
//                 All
//             </button>
//             <button onClick={ () => { changeFilter("active") } }>
//                 Active
//             </button>
//             <button onClick={ () => { changeFilter("completed") } }>
//                 Completed
//             </button>
//         </div>
//     </div>
// }