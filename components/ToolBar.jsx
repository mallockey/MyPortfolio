import React from 'react'

const ToolBar = () => {
  return (
    <div id="toolbar" className="sm:w-full sm:border-b flex justify-evenly w-2/3 pb-2">
      <span className="sm:w-1/2 sm:p-2 w-4/12 pl-2">Folder</span>
      <span className="sm:hidden border-l pl-2 w-4/12   ">Date Modified</span>
      <span className="sm:border-0 sm:w-1/2 sm:flex sm:justify-center sm:p-2 border-l pl-2 w-4/12  ">
        Type
      </span>
      <span className="sm:hidden border-l pl-2 w-4/12   ">Size</span>
    </div>
  )
}

export default ToolBar
