import React from "react";
import {ListItem} from "./components/ListItem";

type TaskType = {
	id: number,
	title: string,
	isDone: boolean
}

type PropsType = {
	title: string,
	tasks: TaskType[]
}

export const Todolist = (props: PropsType) => {
	return (
		<div>
			<h3>{props.title}</h3>
			<div>
				<input/>
				<button>+</button>
			</div>
			<ul>
				<ListItem tasksList={props.tasks}/>
			</ul>
			<div>
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
		</div>
	)
}