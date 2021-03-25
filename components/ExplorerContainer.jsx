import React, { useEffect, useState } from 'react'
import ProjectFolder from './ProjectFolder'
import ToolBar from './ToolBar'
import DocumentsContainer from './DocumentsContainer'
import projectInfo from '../data/projects'
import projects from '../data/projects'
import ProjectListItem from './ProjectListItem'
import { handleSingleClick, clearSearchResults, makeDraggable } from '../utils/functions'
import LeftSidePanel from './LeftSidePanel'

const ExplorerContainer = (props) => {
  const [selectedProject, setSelectedProject] = useState(false)
  const [showState, setShowState] = useState({
    showAllProjects: true,
    showDocuments: false,
    showSelectedProject: false,
  })

  function handleSearchChange(event) {
    let searchableItemsElements = document.getElementsByClassName('searchAble')
    let testsearchableItemsElements = Array.from(searchableItemsElements)

    let searchResults = testsearchableItemsElements.filter((item) =>
      item.getAttribute('searchterm').toLowerCase().includes(event.target.value.toLowerCase()),
    )
    for (let i = 0; i < searchableItemsElements.length; i++) {
      if (searchResults.includes(searchableItemsElements[i])) {
        searchableItemsElements[i].style.display = 'flex'
      } else {
        searchableItemsElements[i].style.display = 'none'
      }
    }
  }

  function setCurrentFolder(event) {
    if (
      document.getElementById('documents').contains(event.target) ||
      document.getElementById('documentsTop').contains(event.target)
    ) {
      setShowState({
        showAllProjects: false,
        showDocuments: true,
        showSelectedProject: false,
      })
    } else if (document.getElementById('projects').contains(event.target)) {
      setShowState({
        showAllProjects: true,
        showDocuments: false,
        showSelectedProject: false,
      })
    }
  }

  function handleDblClick(event, id) {
    let temp = projectInfo.filter((project) => {
      return project.id === id
    })

    setSelectedProject(temp[0])
    setShowState({
      showAllProjects: false,
      showDocuments: false,
      showSelectedProject: true,
    })
    clearSearchResults()
  }

  function handleGoBack() {
    setShowState({
      showAllProjects: true,
      showDocuments: false,
      showSelectedProject: false,
    })
    clearSearchResults()
  }

  return (
    <div id="explorerContainer" className="flex flex-col text-white w-full h-full relative">
      <div id="toolbar" className=" bg-gray-600 flex justify-between sm:h-12 h-12">
        <div className="flex items-center">
          <img className="w-8 p-2" src="./images/tech/vscode.png"></img>
          <span>Open Folder</span>
        </div>
        <div className="hover:bg-red-600 flex items-center justify-center w-16">
          <div className="text-5xl transform rotate-45 cursor-pointer pb-3 " onClick={props.remove}>
            +
          </div>
        </div>
      </div>
      <div id="folderLocation" className="flex bg-gray-800 p-2 items-center sm:p-4 sm:flex-col ">
        <img
          className="sm:hidden w-8 h-8 mr-2 p-1 hover:bg-gray-400"
          src="./images/icons/left-round-xxl.png"
          onClick={handleGoBack}
        ></img>
        <div className=" flex border border-gray-400 bg-gray-900  w-3/4 sm:w-full h-full">
          <img className=" sm:ml-0 sm:hidden w-8 ml-2" src="./images/icons/folder.ico"></img>
          <span className="sm:w-full w-full p-2 flex justify-evenly items-center">
            <span>This PC</span>
            {showState.showSelectedProject &&
            !showState.showDocuments &&
            !showState.showAllProjects ? (
              <>
                <span className="text-gray-400">{'>'}</span>
                <span className="hover:bg-gray-400" onClick={handleGoBack}>
                  Projects
                </span>
                <span className="text-gray-400">{'>'}</span>
                <span>{selectedProject.title}</span>
              </>
            ) : !showState.showDocuments &&
              !showState.showSelectedProject &&
              showState.showAllProjects ? (
              <>
                <span className="text-gray-400">{'>'}</span>
                <span>Projects</span>
              </>
            ) : (
              <>
                <span className=" text-gray-400">{'>'}</span>
                <span>Documents</span>
              </>
            )}
          </span>
          <div className="flex justify-end w-full sm:w-8">
            <img className="icon" src="./images/icons/icon-cheveron-down.svg"></img>
          </div>
        </div>
        <div
          id="searchBar"
          className="w-full h-full flex items-center border border-gray-400 bg-gray-900 flex-1 sm:h-16 "
        >
          <img className="icon p-1.5" src="./images/icons/search.ico"></img>
          <input
            id="searchInput"
            className="bg-gray-900 w-full h-full sm:h-8 "
            onChange={handleSearchChange}
            type="text"
            placeholder={
              selectedProject && !showState.showDocuments && !showState.showAllProjects
                ? selectedProject.title
                : !showState.showProjects && !selectedProject && showState.showDocuments
                ? 'Documents'
                : 'Projects'
            }
          ></input>
        </div>
      </div>
      <div id="newFolder" className="flex bg-gray-600 p-2 justify-between">
        <div id="organizeAndNewFolder" className="flex items-center">
          <span className="sm:hidden m-1">Organize</span>
          <div id="documentsTop" className="folderList" onClick={setCurrentFolder}>
            <img className="icon" src="./images/icons/folder.ico"></img>
            <span className="p-2">Documents</span>
          </div>
        </div>
        <div id="folderView" className="flex items-center">
          <span className="m-1">Organize</span>
          <span className="m-1 sm:hidden">New Folder</span>
        </div>
      </div>
      <div id="mainContainer" className="flex h-full">
        <LeftSidePanel setCurrentFolder={setCurrentFolder} />
        <div id="mainFolderArea" className="w-full h-full bg-gray-900">
          <ToolBar />
          {showState.showDocuments === true &&
          showState.showAllProjects === false &&
          showState.showSelectedProject === false ? (
            <DocumentsContainer backButton={handleGoBack} />
          ) : showState.showDocuments === false &&
            showState.showAllProjects === true &&
            showState.showSelectedProject === false ? (
            <div id="allProjects" className="allProjects sm:h-full sm:pb-20">
              {projects.map((project) => {
                return (
                  <ProjectListItem
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
          ) : showState.showDocuments === false &&
            showState.showAllProjects === false &&
            showState.showSelectedProject === true ? (
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
      <div id="footer" className="bg-gray-600 flex items-center p-4 justify-end">
        <span>Folder:</span>
        <div className=" flex border border-gray-400 bg-gray-800 h-10 items-center  w-2/3 pl-2 ml-2 sm:h-8">
          {showState.showDocuments === false &&
          showState.showAllProjects === false &&
          showState.showSelectedProject === true
            ? selectedProject.title
            : showState.showDocuments === true &&
              showState.showAllProjects === false &&
              showState.showSelectedProject === false
            ? 'Documents'
            : 'Projects'}
        </div>
      </div>
    </div>
  )
}

export default ExplorerContainer
