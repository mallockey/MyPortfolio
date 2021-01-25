import React from 'react';

const ProjectList = (props) => {
  
  return(
    <div id={props.project.id} onClick={props.onClick} onDoubleClick={props.onDoubleClick} className="sm:w-full  sm:justify-between sm:items-stretch  flex items-center justify-evenly w-2/3 hover:bg-gray-400">
      <img className="sm:hidden w-8 " src="./images/icons/folderopened_yellow.ico" ></img>
      <div className="sm:w-2/3 pl-2 w-4/12 ">{props.project.title}</div>
      <div className="sm:hidden w-4/12">{props.project.date}</div>
      <div className="sm: w-4/12">{props.project.type}</div>
      <div className="sm:hidden w-4/12">{props.project.size}</div>
    </div>
  )
}

export default ProjectList;