import React from 'react';
import {FilterType} from './App';

type TaskType = {
	id: number
	title: string
	isDone: boolean
}



type PropsType = {
	title: string
	tasks: Array<TaskType>
	removeTask: (id: number)=> void
	changeFilter: (value: FilterType) => void
}

export function Todolist(props: PropsType) {
	return <div>
		<h3>{props.title}</h3>
		<div>
			<input/>
			<button>+</button>
		</div>
		<ul>
			{
				props.tasks.map((el) => {
					return (
						<li key={el.id}>
							<input type="checkbox" checked={el.isDone}/>
							<span>{el.title}</span>
							<button onClick={() => {props.removeTask(el.id)}} >x</button>
						</li>
					)
				})
			}
		</ul>
		<div>
			<button onClick={() => {props.changeFilter('all')}}>All</button>
			<button onClick={() => {props.changeFilter('active')}}>Active</button>
			<button onClick={() => {props.changeFilter('complete')}}>Completed</button>
		</div>
	</div>
}
