import React, {useEffect, useRef} from 'react'
import parse from 'html-react-parser'
import {makeDraggable} from '../utils/functions'

const Notepad = (props) => {

  useEffect(() => {
    makeDraggable("notepad")
  },[])
  
  return (
    <div
      id="notepad"
      className="sm:ml-12 sm:items-center absolute flex flex-col w-2/3 top-0 h-2/3 mt-10 bg-white text-black"
    >
      <div id="title" className="flex items-start w-full justify-stretch pb-2">
        <div className="flex w-full">
          <img className="icon h-8 mr-1" src="./images/icons/notepad.ico"></img>
          <span className="pl-2 pr-2 flex items-center">{props.project.title} - Notepad</span>
        </div>
        <div className="flex w-full justify-end">
          <img
            className="icon hover:bg-red-600"
            src="./images/icons/icon-close.svg"
            onClick={props.setShowDescription}
          ></img>
        </div>
      </div>
      <div id="toolbar" className=" sm:w-full flex w-1/4 sm:p-0 justify-between p-2">
        <span className="notepadToolbarItem sm:pl-0 sm:pr-0">File</span>
        <span className="notepadToolbarItem sm:pl-0 sm:pr-0">Edit</span>
        <span className="notepadToolbarItem sm:pl-0 sm:pr-0">Format</span>
        <span className="notepadToolbarItem sm:pl-0 sm:pr-0">View</span>
        <span className="notepadToolbarItem sm:pl-0 sm:pr-0">Help</span>
      </div>
      <div id="textArea" className="flex border-t flex-1">
        <span className="p-4">{parse(props.project.description)}</span>
      </div>
      <div
        id="notepadFooter"
        className="bg-gray-100 border-t-2 flex sm:w-full sm:flex sm:justify-around "
      >
        <div id="pointlessLine" className=" flex w-2/3 border-r-2  sm:hidden"></div>
        <span className="notepadFooterItem sm:p-0">Ln 1, Col 1</span>
        <span className="notepadFooterItem sm:p-0">100%</span>
        <span className="notepadFooterItem sm:p-0">UTF-GR8</span>
      </div>
    </div>
  )
}

export default Notepad
