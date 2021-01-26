import React, { useState } from 'react'
import ProjectFolder from './ProjectFolder'
import Documents from './Documents'
import projectInfo from '../data/projects'
import projects from '../data/projects'
import ProjectList from './ProjectList'
import { handleSingleClick } from '../utils/functions'
import { isMobile } from 'react-device-detect'

const ExplorerContainer = (props) => {
  const [projectFolderShow, setProjectFolderShow] = useState(false)
  const [selectedProject, setSelectedProject] = useState(false)
  const [showDocuments, setShowDocuments] = useState(false)
  const [showProjects, setShowProjects] = useState(true)

  function setCurrentFolder(event) {
    if (event.target.id === 'documents' || event.target.id === 'documentsTop') {
      setShowDocuments(true)
      setShowProjects(false)
      setSelectedProject(false)
      setProjectFolderShow(false)
    } else if (event.target.id === 'projects') {
      setShowProjects(true)
      setShowDocuments(false)
      setSelectedProject(false)
      setProjectFolderShow(false)
    }
  }

  function handleDblClick(event) {
    let temp = projectInfo.filter((project) => {
      return project.id === event.target.parentElement.id
    })

    if (temp.length === 0) {
      return
    }

    setSelectedProject(temp[0])
    setProjectFolderShow(!projectFolderShow)
    setShowDocuments(false)
    setShowProjects(false)
  }

  function handleGoBack() {
    setProjectFolderShow(false)
    setSelectedProject(false)
    setShowDocuments(false)
    setShowProjects(true)
  }

  return (
    <div className="flex flex-col text-white w-full h-full relative">
      <div id="toolbar" className=" bg-gray-600 flex justify-between sm: h-12">
        <div className="flex items-center">
          <img className="w-8 p-2" src="./images/tech/vscode.png"></img>
          <span>Open Folder</span>
        </div>
        <div onClick={props.remove}>
          <img className="icon hover:bg-red-600" src="./images/icons/icon-close.svg"></img>
        </div>
      </div>
      <div id="folderLocation" className="flex bg-gray-700 p-2 items-center sm:p-4 ">
        <img
          className="sm:hidden w-8 h-8 mr-2"
          src="./images/icons/arrow_left.ico"
          onClick={handleGoBack}
        ></img>
        <div className=" flex border border-gray-400  w-3/4 sm:w-full">
          <img className=" sm:ml-0 sm:h-10 w-8 ml-2" src="./images/icons/folder.ico"></img>
          <span className="sm:w-full w-1/3 p-2 flex justify-evenly items-center">
            <span>This PC</span>
            <span>{'>'}</span>
            <span className="hover:bg-gray-400" onClick={handleGoBack}>
              Projects
            </span>
            {selectedProject ? (
              <>
                <span>{'>'}</span>
                <span>{selectedProject.title}</span>
              </>
            ) : (
              ''
            )}
          </span>
          <div className="flex justify-end w-full sm:w-8">
            <img className="icon" src="./images/icons/icon-cheveron-down.svg"></img>
          </div>
        </div>
        <div
          id="searchBar"
          className="p-1 flex items-center border border-gray-400 flex-1 sm:hidden"
        >
          <img className="icon" src="./images/icons/search.ico"></img>
          <input
            id="searchInput"
            className="bg-gray-800 w-full "
            type="text"
            placeholder={selectedProject ? selectedProject.title : 'Projects'}
          ></input>
        </div>
      </div>
      <div id="newFolder" className="flex bg-gray-600 p-2 justify-between">
        <div id="organizeAndNewFolder" className="flex items-center">
          <span className="sm:hidden m-1">Organize</span>
          {isMobile ? (
            <li className="folderList" onClick={setCurrentFolder}>
              <img className="icon" src="./images/icons/folder.ico"></img>
              <span id="documentsTop" className="p-2">
                Documents
              </span>
            </li>
          ) : (
            <span className="m-1">New Folder</span>
          )}
        </div>
        <div id="folderView" className="flex items-center">
          <span className="m-1">Organize</span>
          <span className="m-1 sm:hidden">New Folder</span>
        </div>
      </div>
      <div id="mainContainer" className="flex h-full">
        <div id="folderBrowserLeft" className="w-1/5 bg-gray-700 pl-2 border-r sm:hidden">
          <ul className="p-1">
            <li className="flex items-center">
              <img className="icon" src="./images/icons/cloud.ico"></img>
              <span id="unoDrive" className="p-2">
                UnoDrive
              </span>
            </li>
            <li id="documents" className="folderList" onClick={setCurrentFolder}>
              <img className="icon" src="./images/icons/folder.ico"></img>
              <span className="p-2">Documents</span>
            </li>
            <li id="projects" className="folderList" onClick={setCurrentFolder}>
              <img className="icon" src="./images/icons/folder.ico"></img>
              <span className="p-2">Projects</span>
            </li>
          </ul>
          <ul className=" p-2">
            <li className="flex items-center">
              <img className="icon" src="./images/icons/mycomputer.ico"></img>
              <span className="p-2">This PC</span>
            </li>
            <li className="folderList  p-2">
              <img className="icon" src="./images/icons/monitor.ico"></img>
              <span className="p-2">Desktop</span>
            </li>
            <li className="folderList  p-2">
              <img className="icon" src="./images/icons/mes_videos.ico"></img>
              <span className="p-2">Videos</span>
            </li>
            <li className="folderList  p-2">
              <img className="icon" src="./images/icons/harddrive.ico"></img>
              <span className="p-2">OS (C:)</span>
            </li>
            <li className="folderList p-2">
              <img className="icon" src="./images/icons/harddrive.ico"></img>
              <span className="p-2">DATA (D:)</span>
            </li>
          </ul>
          <ul className="p-1">
            <li className="flex items-center  p-2">
              <img className="icon" src="./images/icons/network.ico"></img>
              <span>Network</span>
            </li>
          </ul>
        </div>
        <div id="mainFolderArea" className="w-full bg-gray-700">
          <div id="toolbar" className="sm:w-full sm:border-b flex justify-evenly w-2/3 pb-2">
            <span className="sm:w-1/2 sm:p-2 w-4/12 pl-2">Folder</span>
            <span className="sm:hidden border-l pl-2 w-4/12   ">Date Modified</span>
            <span className="sm:border-0 sm:w-1/2 sm:flex sm:justify-center sm:p-2 border-l pl-2 w-4/12  ">
              Type
            </span>
            <span className="sm:hidden border-l pl-2 w-4/12   ">Size</span>
          </div>
          {showDocuments === true && showProjects === false && projectFolderShow === false ? (
            <Documents goBack={handleGoBack} />
          ) : showDocuments === false && showProjects === true && projectFolderShow === false ? (
            <div id="allProjects" className="allProjects sm:h-full">
              {projects.map((project) => {
                return (
                  <ProjectList
                    key={Math.random()}
                    project={project}
                    onDoubleClick={handleDblClick}
                    onClick={(event) => {
                      return handleSingleClick(event, document.getElementById('allProjects'))
                    }}
                  />
                )
              })}
            </div>
          ) : showDocuments === false && showProjects === false && projectFolderShow === true ? (
            <div>
              <ProjectFolder
                key={Math.random()}
                selectedProject={selectedProject}
                goBack={handleGoBack}
                showDescription={props.showDescription}
                setShowDescription={props.setShowDescription}
              />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <div id="footer" className="bg-gray-600 flex p-8 justify-end">
        <span>Folder:</span>
        <div className=" flex border border-gray-400  w-2/3 pl-2 ml-2 sm:h-8">
          {selectedProject ? selectedProject.title : 'Projects'}
        </div>
      </div>
    </div>
  )
}

export default ExplorerContainer
