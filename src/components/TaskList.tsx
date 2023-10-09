import React from "react";

type TaskPropsType = {
	id: number,
	title: string,
	isDone: boolean
}

type TaskListPropsType = {
	taskList: TaskPropsType[]
}
export const TaskList = (props: TaskListPropsType) => {
	return (
		<ul>
			{props.taskList.map((el) => {
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