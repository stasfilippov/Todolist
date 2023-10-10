import React from 'react';
import {TaskType} from "../Todolist";

type TasksPropsType = {
	tasksList: TaskType[]
}
export const Tasks = (props: TasksPropsType) => {
	return (
		<ul>
			{props.tasksList.map((el) => {
				return (
					<li key={el.taskId}>
						<input type="checkbox" checked={el.isDone}/>
						<span>{el.title}</span>
					</li>
				)
			})}
		</ul>
	);
};

