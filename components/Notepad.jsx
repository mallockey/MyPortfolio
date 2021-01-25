import React from 'react';
import parse from 'html-react-parser';

const Notepad = (props) => {
  return(
    <div id="notepad" className="sm:h-full sm:w-full absolute flex flex-col w-2/3 top-0 h-96 bg-white text-black">
      <div id="title" className="flex items-center justify-between">
        <div className="flex">
          <img className="icon sm:w-4 sm:h-4" src="./images/icons/notepad.jpg"></img>
          <span className="pl-2 pr-2">{props.project.title} - Notepad</span>
        </div>
        <img className="icon hover:bg-red-600" src="./images/icons/icon-close.svg" onClick={props.setShowDescription}></img>
      </div>
      <div id="toolbar" className=" sm:w-full flex w-1/4 sm:p-0 justify-between p-2">
        <span className="notepadToolbarItem sm:pl-0 sm:pr-0">File</span>
        <span className="notepadToolbarItem sm:pl-0 sm:pr-0">Edit</span>
        <span className="notepadToolbarItem sm:pl-0 sm:pr-0">Format</span>
        <span className="notepadToolbarItem sm:pl-0 sm:pr-0">View</span>
        <span className="notepadToolbarItem sm:pl-0 sm:pr-0">Help</span>
      </div>
      <div id="textArea" className="flex border-t flex-1">
        <span>
          {parse(props.project.description)}
        </span>
      </div>
      <div id="notepadFooter" className="bg-gray-100 border-t-2 flex sm:w-full sm:flex sm:justify-around ">
        <div id="pointlessLine" className=" flex w-2/3 border-r-2  sm:hidden"></div>
        <span className="notepadFooterItem sm:p-0">Ln 1, Col 1</span>
        <span className="notepadFooterItem sm:p-0">100%</span>
        <span className="notepadFooterItem sm:p-0">UTF-GR8</span>
      </div>
    </div>
  )
}

export default Notepad;