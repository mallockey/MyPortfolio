import React from 'react'

const ProjectListItem = (props) => {
  return (
    <div
      id={props.project.id}
      className="searchAble projectListItem sm:w-full sm:p-4 sm:justify-between sm:items-stretch "
      onClick={props.onClick}
      onDoubleClick={(event, id) => {
        props.onDoubleClick(event, props.project.id)
      }}
      searchterm={props.project.title}
    >
      <img className="sm:h-8 sm:w-8 w-8 " src="./images/icons/folderopened_yellow.ico" />
      <div className="sm:w-2/3 pl-2 w-4/12 ">{props.project.title}</div>
      <div className="sm:hidden w-4/12">{props.project.date}</div>
      <div className="w-4/12">{props.project.type}</div>
      <div className="sm:hidden w-4/12">{props.project.size}</div>
    </div>
  )
}

export default ProjectListItem
