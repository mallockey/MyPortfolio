import React from 'react'
import { handleSingleClick } from '../utils/functions'

const GoBack = (props) => {
  return (
    <div
      id="goBack"
      className="hover:bg-gray-400 flex items-center sm:p-4 "
      onClick={(event) => {
        return handleSingleClick(event, document.getElementById('documentsContainer'))
      }}
      onDoubleClick={props.backButton}
    >
      <img className="w-8 m-2" src="./images/icons/folderopened_yellow.ico"></img>
      <span>. . </span>
    </div>
  )
}

export default GoBack
