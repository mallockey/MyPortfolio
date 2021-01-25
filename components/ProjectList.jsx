import React from 'react';

const ProjectList = (props) => {
  
  return(
    <div searchPhrase={props.project.title} id={props.project.id} onClick={props.onClick} onDoubleClick={props.onDoubleClick} className="flex items-center justify-evenly w-2/3 hover:bg-gray-400">
      <img className="w-8 " src="./images/icons/folderopened_yellow.ico" ></img>
      <div className=" pl-2 w-4/12 ">{props.project.title}</div>
      <div className="w-4/12">{props.project.date}</div>
      <div className="w-4/12">{props.project.type}</div>
      <div className="w-4/12">{props.project.size}</div>
    </div>
  )
}

export default ProjectList;