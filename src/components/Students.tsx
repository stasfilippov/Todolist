import React from 'react';

type StudentsPropsType = {
	studentsList: Array<string>
}
export const Students = (props: StudentsPropsType) => {
	return (
		<ul>
			{props.studentsList.map((el) => {
				return (
					<li>{el}</li>
				)
			})}
		</ul>
	);
};
