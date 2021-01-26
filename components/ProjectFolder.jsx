import React, {useState} from 'react';
import Notepad from '../components/Notepad';
import {handleSingleClick} from '../utils/functions'

const ProjectFolder = (props) => {

  function handleDblClick(link){
    window.open(link, "_blank")
  }

  return(
    <div id="singleProjectContainer" className="">
      <div id="goBack" className="hover:bg-gray-400 flex items-center sm:p-4 " 
           onClick={(event) => {return handleSingleClick(event,document.getElementById("singleProjectContainer"))}} 
           onDoubleClick={props.goBack}>
        <img className="w-8 m-2" src="./images/icons/folderopened_yellow.ico" ></img>
        <span>. . </span>
      </div>
      <div id="liveSite" className="hover:bg-gray-400 sm:p-4 "  
           onClick={(event) => {return handleSingleClick(event,document.getElementById("singleProjectContainer"))}} 
           onDoubleClick={() => {handleDblClick(props.selectedProject.link)}} >
        <div className="flex items-center">
          <img className="w-8 m-2 sm:w-8 sm:text-md" src="./images/tech/chrome.png" ></img>
          <span>Live Site</span>
        </div>
      </div>
      <div id="code" className="hover:bg-gray-400 sm:p-4 "  
           onClick={(event) => {return handleSingleClick(event,document.getElementById("singleProjectContainer"))}} 
           onDoubleClick={() => {handleDblClick(props.selectedProject.code)}} >
        <div className="flex items-center">
          <img className="w-8 m-2 sm:w-8 sm:text-md" src="./images/githubLight.png"></img>
          <span>Code</span>
        </div>
      </div>
      <button type="button" id="description" className="hover:bg-gray-400 sm:p-4 w-full border-0 focus:outline-none"  
           onClick={(event) => {return handleSingleClick(event,document.getElementById("singleProjectContainer"))}}
           onDoubleClick={(event) => {props.setShowDescription(event)}}
           >
        <div className="flex items-center">
          <img className="w-8 m-2 sm:w-8 sm:text-md" src="./images/icons/notepad.ico" ></img>
          <span>Description</span>
        </div>
      </button>

      {props.showDescription ? 
        <Notepad setShowDescription={props.setShowDescription} project={props.selectedProject} />: ''  
      }
    </div>
  )
}

export default ProjectFolder