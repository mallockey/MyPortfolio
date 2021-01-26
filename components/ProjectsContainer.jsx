import React, { useState } from 'react'
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
    const myProjectsFolderEle = document.getElementById('myProjectsFolder')
    myProjectsFolderEle.style.backgroundColor = 'rgba(000, 000, 000, 0.6)'
    myProjectsFolderEle.style.border = '1px'
    myProjectsFolderEle.style.borderColor = 'black'
    myProjectsFolderEle.style.borderRadius = '1rem'
    myProjectsFolderEle.style.borderStyle = 'solid'
    myProjectsFolderEle.style.padding = '1rem'
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
