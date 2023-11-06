import React, {ChangeEvent, KeyboardEvent, ReactNode, useRef, useState} from 'react';
import {FilterValuesType} from './App';
import {useAutoAnimate} from '@formkit/auto-animate/react';

type TaskType = {
	id: string
	title: string
	isDone: boolean
}

type PropsType = {
	title: string
	tasks: Array<TaskType>
	removeTask: (taskId: string) => void
	changeFilter: (value: FilterValuesType) => void
	addTask: (title: string) => void
	children?: ReactNode
	changeTaskStatus: (id: string, isDone: boolean) => void
	filter: FilterValuesType
}

export const Todolist: React.FC<PropsType> = ({children, ...props}) => {
	let [title, setTitle] = useState('')
	let onChangeRef = useRef<HTMLInputElement>(null)
	const [listRef] = useAutoAnimate<HTMLUListElement>()
	const [error, setError] = useState<string | undefined>('')

	const addTask = () => {
		if (onChangeRef.current) {
			let newTaskTitle = onChangeRef.current.value;
			if (newTaskTitle.trim() !== '') {
				props.addTask(newTaskTitle.trim());
				setTitle('');
			} else {
				setError('Title cannot be empty');
			}
		}
	}

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value)
	}


	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		setError('')
		if (e.key === 'Enter') {
			addTask();
			setTitle('')
		}
	}


	const onAllClickHandler = () => props.changeFilter('all');
	const onActiveClickHandler = () => props.changeFilter('active');
	const onCompletedClickHandler = () => props.changeFilter('completed');

	return <div>
		<h3>{props.title}</h3>
		<div>
			<input value={title}
			       onChange={onChangeHandler}
			       onKeyPress={onKeyPressHandler}
			       ref={onChangeRef}
			       className={error ? 'error' : ''}
			/>
			<button onClick={addTask}>+</button>
			{error && <div className="error-message">{error}</div>}
		</div>
		<ul ref={listRef}>
			{
				props.tasks.map(t => {

					const onClickHandler = () => props.removeTask(t.id)
					const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
						let newIsDoneValue = e.currentTarget.checked;
						props.changeTaskStatus(t.id, newIsDoneValue)
					}

					return <li key={t.id}>
						<input
							type="checkbox"
							checked={t.isDone}
							onChange={onChangeHandler}
						/>
						<span className={t.isDone ? 'is-done' : ''}>{t.title}</span>
						<button onClick={onClickHandler}>x</button>
					</li>
				})
			}
		</ul>
		<div>
			<button className={props.filter === 'all' ? 'active-filter' : ''} onClick={onAllClickHandler}>All</button>
			<button className={props.filter === 'active' ? 'active-filter' : ''} onClick={onActiveClickHandler}>Active
			</button>
			<button className={props.filter === 'completed' ? 'active-filter' : ''}
			        onClick={onCompletedClickHandler}>Completed
			</button>
		</div>
	</div>
}


//----------------------------------------------------------------------------------
// import React, {ChangeEvent, KeyboardEvent, useRef, useState} from 'react';
// import {FilterValuesType} from './App';
// import {useAutoAnimate} from "@formkit/auto-animate/react";
//
// type TaskType = {
//     id: string
//     title: string
//     isDone: boolean
// }
//
// type PropsType = {
//     title: string
//     tasks: Array<TaskType>
//     removeTask: (taskId: string) => void
//     changeFilter: (value: FilterValuesType) => void
//     addTask: (title: string) => void
//     children?:React.ReactNode
// }
//
// export const Todolist:React.FC<PropsType>=({children, ...props}) =>{
//     const [listRef] = useAutoAnimate<HTMLUListElement>()
//     let onChangeRef = useRef<HTMLInputElement>(null)
//     //let [title, setTitle] = useState("")
//
//     const addTask = () => {
//         // props.addTask(title);
//         // setTitle("");
//         if (onChangeRef.current) {
//             props.addTask(onChangeRef.current.value)
//             onChangeRef.current.value = ''
//         }
//     }
//
//     // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     //     setTitle(e.currentTarget.value)
//     // }
//
//
//     const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
//         if (e.key === 'Enter') {
//             addTask();
//         }
//     }
//
//     const onAllClickHandler = () => props.changeFilter("all");
//     const onActiveClickHandler = () => props.changeFilter("active");
//     const onCompletedClickHandler = () => props.changeFilter("completed");
//
//     return <div>
//         <h3>{props.title}</h3>
//         <div>
//             <input
//                 //value={title}
//                 // onChange={ onChangeHandler }
//                 ref={onChangeRef}
//                 onKeyPress={onKeyPressHandler}
//             />
//             <button onClick={addTask}>+</button>
//         </div>
//         <ul ref={listRef}>
//             {
//                 props.tasks.map(t => {
//
//                     const onClickHandler = () => props.removeTask(t.id)
//
//                     return <li key={t.id} >
//                         <input type="checkbox" checked={t.isDone}/>
//                         <span>{t.title}</span>
//                         <button onClick={onClickHandler}>x</button>
//                     </li>
//                 })
//             }
//         </ul>
//         <div>
//             <button onClick={onAllClickHandler}>All</button>
//             <button onClick={onActiveClickHandler}>Active</button>
//             <button onClick={onCompletedClickHandler}>Completed</button>
//         </div>
//         {children}
//     </div>
// }
