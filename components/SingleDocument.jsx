import React from 'react'
import { handleSingleClick, handleLinkDblClick } from '../utils/functions'

const SingleDocument = (props) => {
  return (
    <div
      id={props.document.id}
      searchterm={props.document.searchterm}
      className="searchAble hover:bg-gray-400 sm:p-4 "
      onClick={(event) => {
        return handleSingleClick(
          event,
          document.getElementById('documentsContainer'),
          props.document.id,
        )
      }}
      onDoubleClick={() => {
        handleLinkDblClick(props.document.link)
      }}
    >
      <div className="flex items-center">
        <img className="w-8 m-2 sm:w-8 sm:text-md" src={props.document.image}></img>
        <span className="">{props.document.searchterm}</span>
      </div>
    </div>
  )
}

export default SingleDocument
