import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

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
	addNewTask: (titleTask: string) => void
}

export function Todolist(props: PropsType) {

	let [titleTask, setTitleTask] = useState('')

	const addTask = () => {
		props.addNewTask(titleTask)
		setTitleTask('')
	}

	const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTitleTask(e.currentTarget.value)
	}
	const onKeyDownInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			addTask()
		}
	}
	const onCLickButtonAllHandler = () => {
		props.changeFilter('all')
	}
	const onCLickButtonActiveHandler = () => {
		props.changeFilter('active')
	}
	const onCLickButtonCompletedHandler = () => {
		props.changeFilter('completed')
	}

	return <div>
		<h3>{props.title}</h3>
		<div>
			<input
				value={titleTask}
				onChange={onChangeInputHandler}
				onKeyDown={onKeyDownInputHandler}
			/>
			<button onClick={addTask}>Добавить</button>
		</div>
		<ul>
			{
				props.tasks.map(t => {
					const deleteTask = () => props.removeTask(t.id)
					return (
						<li key={t.id}>
							<input type="checkbox" checked={t.isDone}/>
							<span>{t.title}</span>
							<button onClick={deleteTask}>Delete</button>
						</li>
					)
				})
			}
		</ul>
		<div>
			<button onClick={onCLickButtonAllHandler}>All</button>
			<button onClick={onCLickButtonActiveHandler}>Active</button>
			<button onClick={onCLickButtonCompletedHandler}>Completed</button>
		</div>
	</div>
}
