import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

//include images into your bundle

//create your first component
export function TodoList() {
	const [list, setList] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const handleKeyPress = e => {
		if (e.key === "Enter" && inputValue !== "") {
			setList(
				list.concat({
					label: inputValue,
					done: false
				})
			);
			setInputValue("");
		}
	};
	const deleteListItem = label => {
		let ourNewList = list.filter(item => item.label != label);
		setList(ourNewList);
	};
	return (
		<div className="container">
			<h1>to do list</h1>

			<input
				type="text"
				onChange={e => setInputValue(e.target.value)}
				onKeyPress={e => handleKeyPress(e)}
				value={inputValue}></input>
			<ul>
				{list.map((item, index) => (
					<li key={index}>
						{item.label}
						<FontAwesomeIcon
							icon={faTrash}
							onClick={() => deleteListItem(item.label)}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
