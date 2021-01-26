import React, { useState } from 'react'
import Head from 'next/head'
import ExplorerContainer from './ExplorerContainer'

const ProjectsContainer = () => {
  const [showExplorer, setShowExplorer] = useState(false)
  const [showDescription, setShowDescription] = useState(false)

  function handleShowDescription(event) {
    event.returnValue = false
    setShowDescription(!showDescription)
    return false
  }

  function handleSglClick(event) {
    document.getElementById('myProjectsFolder').style.backgroundColor = 'rgba(000, 000, 000, 0.6)'
    document.getElementById('myProjectsFolder').style.border = '1px'
    document.getElementById('myProjectsFolder').style.borderColor = 'black'
    document.getElementById('myProjectsFolder').style.borderRadius = '1rem'
    document.getElementById('myProjectsFolder').style.borderStyle = 'solid'
    document.getElementById('myProjectsFolder').style.padding = '1rem'
    // document.getElementById('myProjectsFolder').style.opacity = '.5'
    event.stopPropagation()
    window.addEventListener('click', () => {
      if (document.getElementById('myProjectsFolder')) {
        document.getElementById('myProjectsFolder').style.backgroundColor = ''
        document.getElementById('myProjectsFolder').style.borderStyle = 'none'
      }
    })
  }

  function handleDblClick() {
    setShowExplorer(!showExplorer)
  }

  return (
    <>
      <div className="flex flex-col h-full">
        <div
          id="allProjectsContainer"
          className=" flex items-center justify-center p-8 h-full sm:p-0"
        >
          {showExplorer ? (
            <ExplorerContainer
              remove={handleDblClick}
              showDescription={showDescription}
              setShowDescription={handleShowDescription}
            />
          ) : (
            <div
              id="myProjectsFolder"
              className="text-white flex flex-col items-center justify-center"
              onClick={handleSglClick}
              onDoubleClick={handleDblClick}
            >
              <img
                className="opacity-100 projectsImage"
                src="./images/icons/folderopened_yellow.ico"
              ></img>
              <span className=" text-3xl text-white font-bold">My Projects</span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProjectsContainer
