import React from 'react';
import parse from 'html-react-parser';

const Notepad = (props) => {
  return(
    <div id="notepad" className="absolute flex flex-col w-2/3 top-0 h-96 bg-white text-black">
      <div id="title" className="flex items-center justify-between">
        <div className="flex">
          <img className="icon" src="./images/icons/notepad.jpg"></img>
          <span className="pl-2 pr-2">{props.project.title} - Notepad</span>
        </div>
        <img className="icon hover:bg-red-600" src="./images/icons/icon-close.svg" onClick={props.setShowDescription}></img>
      </div>
      <div id="toolbar" className="flex w-1/4 justify-between p-2">
        <span className="notepadToolbarItem">File</span>
        <span className="notepadToolbarItem">Edit</span>
        <span className="notepadToolbarItem">Format</span>
        <span className="notepadToolbarItem">View</span>
        <span className="notepadToolbarItem">Help</span>
      </div>
      <div id="textArea" className="flex border-t flex-1">
        <span>
          {parse(props.project.description)}
        </span>
      </div>
      <div id="notepadFooter" className="bg-gray-100 border-t-2 flex ">
        <div id="pointlessLine" className=" flex w-2/3 border-r-2"></div>
        <span className="notepadFooterItem">Ln 1, Col 1</span>
        <span className="notepadFooterItem">100%</span>
        <span className="notepadFooterItem">UTF-GR8</span>
      </div>
    </div>
  )
}

export default Notepad;