import React from "react";
import {TaskType} from "./Todolist";

type TaskListPropsType = {
	tasksList: TaskType[]
}
export const TaskList = (props: TaskListPropsType) => {
	 return (
		<ul>
			{props.tasksList.map((el) => {
				return (
					<li key={el.id}>
						<input type="checkbox" checked={el.isDone}/>
						<span>{el.title}</span>
					</li>
				)
			})}
		</ul>
	)
}