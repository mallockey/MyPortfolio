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
            'https://drive.google.com/file/d/1DtQJbebbfoi0R_7nptHPoQGw8eo7B2hs/view?usp=sharing',
          )
        }}
      >
        <div className="flex items-center">
          <img className="w-8 m-2 sm:w-8 sm:text-md" src="./images/icons/filetype_pdf.ico"></img>
          <span className="">Resume</span>
        </div>
      </div>
    </div>
  )
}

export default Documents;
