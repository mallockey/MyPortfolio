import React, { useState } from "react";
import Head from 'next/head'
import ExplorerContainer from "./ExplorerContainer";

const ProjectsContainer = () => {
  const [showExplorer, setShowExplorer] = useState(false)
  const [showDescription, setShowDescription] = useState(false)

  function handleShowDescription(){
    setShowDescription(!showDescription)
  }

  function handleDblClick(){
    setShowExplorer(!showExplorer)
  }

  return(
    <>
    <Head>
      <title>Joshua Melo - Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col h-full">
      <div id="allProjectsContainer" className=" flex items-center justify-center p-8 h-full">
        {
          showExplorer ? 
            <ExplorerContainer remove={handleDblClick} 
                               showDescription={showDescription} 
                               setShowDescription={handleShowDescription} />
                              : 
            <div className="text-white flex flex-col items-center justify-center" onDoubleClick={handleDblClick}>
              <img  src="./images/icons/folderopened_yellow.ico"></img>
              <span className="text-lg">My Projects</span>
            </div>
        }
      </div>
    </div>
  </>
  )
}

export default ProjectsContainer