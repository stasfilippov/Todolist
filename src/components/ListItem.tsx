import React from "react";


type ListItemPropsItem = {
	tasksList: TaskType[]
}

export const ListItem = (props: ListItemPropsItem) => {
	props.tasksList.map((el) => {
		return (
			<li>
				<input type="checkbox" checked={el.isDone}/>
				<span>{el.title}</span>
			</li>
		)
	})
}