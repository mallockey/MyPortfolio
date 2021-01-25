import React, {useState} from 'react';
import Notepad from '../components/Notepad';

const ProjectFolder = (props) => {

  return(
    <div className="">
      <div className="hover:bg-gray-400 flex items-center sm:p-4 " onClick={props.goBack}>
      <img className="sm:hidden w-8 mr-2" src="./images/icons/folderopened_yellow.ico" ></img>
      <span>. . </span>
      </div>
      <div className="hover:bg-gray-400 sm:p-4">
        <a href={props.selectedProject.link} target="_blank" >
        <div className="flex items-center">
          <img className="w-4 m-2 sm:w-8 sm:text-md" src="./images/tech/chrome.png" ></img>
          <span>Live Site</span>
        </div>
        </a>
      </div>
      <div className="hover:bg-gray-400 sm:p-4">
        <a href={props.selectedProject.code} target="_blank" >
        <div className="flex items-center">
          <img className="w-4 m-2 sm:w-8 sm:text-md" src="./images/githubLight.png"></img>
          <span>Code</span>
        </div>
        </a>
      </div>
      <div className="hover:bg-gray-400 sm:p-4" onClick={props.setShowDescription}>
        <div className="flex items-center">
          <img className="w-4 m-2 sm:w-8 sm:text-md" src="./images/icons/notepad.ico" ></img>
          <span>Description</span>
        </div>
      </div>
      {props.showDescription ? 
      <Notepad setShowDescription={props.setShowDescription} project={props.selectedProject} />: ''  
    }
    </div>
  )
}

export default ProjectFolder