import React from 'react'

const LeftSidePanel = (props) => {
  return (
    <div id="folderBrowserLeft" className="w-1/5 bg-gray-700 pl-2 border-r sm:hidden">
      <ul className="p-1">
        <li className="flex items-center">
          <img className="icon" src="./images/icons/cloud.ico"></img>
          <span id="unoDrive" className="p-1">
            UnoDrive
          </span>
        </li>
        <li id="documents" className="folderList" onClick={props.setCurrentFolder}>
          <img className="icon" src="./images/icons/folder.ico"></img>
          <span className="p-1">Documents</span>
        </li>
        <li id="projects" className="folderList" onClick={props.setCurrentFolder}>
          <img className="icon" src="./images/icons/folder.ico"></img>
          <span className="p-1">Projects</span>
        </li>
      </ul>
      <ul className=" p-2">
        <li className="flex items-center">
          <img className="icon" src="./images/icons/mycomputer.ico"></img>
          <span className="p-1">This PC</span>
        </li>
        <li className="folderListNoHover p-1">
          <img className="icon" src="./images/icons/monitor.ico"></img>
          <span className="p-1">Desktop</span>
        </li>
        <li className="folderListNoHover p-1">
          <img className="icon" src="./images/icons/mes_videos.ico"></img>
          <span className="p-1">Videos</span>
        </li>
        <li className="folderListNoHover p-1">
          <img className="icon" src="./images/icons/harddrive.ico"></img>
          <span className="p-1">OS (C:)</span>
        </li>
        <li className="folderListNoHover p-1">
          <img className="icon" src="./images/icons/harddrive.ico"></img>
          <span className="p-1">DATA (D:)</span>
        </li>
      </ul>
      <ul className="p-1">
        <li className="flex items-center p-1">
          <img className="icon" src="./images/icons/network.ico"></img>
          <span>Network</span>
        </li>
      </ul>
    </div>
  )
}

export default LeftSidePanel
