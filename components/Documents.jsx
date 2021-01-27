import React from 'react'
import { handleSingleClick, handleLinkDblClick } from '../utils/functions'

const Documents = (props) => {
  return (
    <div id="documentsContainer">
      <div
        id="goBack"
        className="hover:bg-gray-400 flex items-center sm:p-4 "
        onClick={(event) => {
          return handleSingleClick(event, document.getElementById('documentsContainer'))
        }}
        onDoubleClick={props.goBack}
      >
        <img className="w-8 m-2" src="./images/icons/folderopened_yellow.ico"></img>
        <span>. . </span>
      </div>
      <div
        id="resume"
        className="hover:bg-gray-400 sm:p-4 "
        onClick={(event) => {
          return handleSingleClick(event, document.getElementById('documentsContainer'))
        }}
        onDoubleClick={() => {
          handleLinkDblClick(
            'https://docs.google.com/document/d/1kMzTsk53F9mfNpbOS-a1Y1Xa1NIbh8DZJf8Bey6d9j8',
          )
        }}
      >
        <div className="flex items-center">
          <img className="w-8 m-2 sm:w-8 sm:text-md" src="./images/icons/filetype_pdf.ico"></img>
          <span className="">Resume</span>
        </div>
      </div>
      <div
        id="linkedIn"
        className="hover:bg-gray-400 sm:p-4 "
        onClick={(event) => {
          return handleSingleClick(event, document.getElementById('documentsContainer'))
        }}
        onDoubleClick={() => {
          handleLinkDblClick('https://www.linkedin.com/in/joshuamelo1/')
        }}
      >
        <div className="flex items-center">
          <img className="w-8 m-2 sm:w-8 sm:text-md" src="./images/linkedin.svg"></img>
          <span className="">LinkedIn</span>
        </div>
      </div>
      <div
        id="linkedIn"
        className="hover:bg-gray-400 sm:p-4 "
        onClick={(event) => {
          return handleSingleClick(event, document.getElementById('documentsContainer'))
        }}
        onDoubleClick={() => {
          handleLinkDblClick('https://github.com/mallockey')
        }}
      >
        <div className="flex items-center">
          <img className="w-8 m-2 sm:w-8 sm:text-md" src="./images/githubLight.png"></img>
          <span className="">Github</span>
        </div>
      </div>
    </div>
  )
}

export default Documents
