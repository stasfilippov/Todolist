import React from "react";
import {Tasks} from "./components/Tasks";
import {Students} from "./components/Students";

export type TaskType = {
	taskId: number,
	title: string,
	isDone: boolean
}

type DateListType = {
	title: string,
	tasks: TaskType[],
	students: Array<string>
}

type TodolistPropsType = {
	task: DateListType
}

export const Todolist = (props: TodolistPropsType) => {
	return (
		<div>
			<h3>{props.task.title}</h3>
			<div>
				<input type="text"/>
				<button>+</button>
			</div>
			<Tasks tasksList = {props.task.tasks}/>
			<div>
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
			<h3>Students</h3>
			<Students studentsList = {props.task.students}/>
		</div>
	)
}