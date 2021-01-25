import React,{useState, useRef} from 'react';
import ProjectFolder from './ProjectFolder';
import projectInfo from '../data/projects';
import projects from '../data/projects';
import ProjectList from './ProjectList';

const ExplorerContainer = (props) => {

  const [projectFolderShow, setProjectFolderShow] = useState(false)
  const [selectedProject, setSelectedProject] = useState(false)
  const mainViewRef = useRef()

  function handleDblClick(event){

    let temp = projectInfo.filter(project => {
      return project.id === event.target.parentElement.id
    })

    setSelectedProject(temp[0])
    setProjectFolderShow(!projectFolderShow)
  }

  function handleSglClick(event){
    const allProjectElements = document.getElementsByClassName("allProjects")[0].children
    for(let i = 0; i < allProjectElements.length; i++){
      allProjectElements[i].style.backgroundColor = ""
    }
    event.target.parentElement.style.backgroundColor = "#9ca3af"
  }

  function handleGoBack(){
    if(selectedProject){
      setSelectedProject(!selectedProject)
      setProjectFolderShow(!projectFolderShow)
    }
  }
  return(
    <div className="flex flex-col text-white w-full h-full relative">
    <div id="toolbar" className=" bg-gray-600 flex justify-between">
      <div className="flex items-center">
        <img className="w-8 p-2" src="./images/tech/vscode.png"></img>
        <span>Open Folder</span>
      </div>
      <div onClick={props.remove}>
        <img className="icon hover:bg-red-600" src="./images/icons/icon-close.svg"></img>
      </div>
    </div>
    <div id="folderLocation" className="flex bg-gray-700 p-2 items-center">
      <img className="w-8 h-8 mr-2" src="./images/icons/back.png" onClick={handleGoBack}></img>
      <div className=" flex border border-gray-400  w-3/4">
        <img className="w-8 ml-2" src="./images/icons/icon-folder.svg"></img>
        <span className="w-1/3 p-2 flex justify-evenly items-center">
          <span>This PC</span>
          <span>{'>'}</span>
          <span>Projects</span>
          {selectedProject ? 
            <>
              <span>{'>'}</span>
              <span>{selectedProject.title}</span>
            </>
            :  ''}
          </span>
          <div className="flex justify-end w-full">
            <img className="icon" src="./images/icons/icon-cheveron-down.svg"></img>
          </div>
      </div>
      <div id="searchBar" className="p-1 flex items-center border border-gray-400 flex-1">
        <img className="icon" src="./images/icons/icon-search.svg"></img>
        <input id="searchInput" className="bg-gray-800 " type="text" placeholder={selectedProject ? selectedProject.title : 'Projects'}></input>
      </div>
    </div>
    <div id="newFolder" className="flex bg-gray-600 p-2 justify-between">
      <div id="organizeAndNewFolder" className="flex items-center">
        <span className="m-1">Organize</span>
        <span className="m-1">New Folder</span>
      </div>
      <div id="folderView" className="flex items-center">
        <span className="m-1">Organize</span>
        <span className="m-1">New Folder</span>
      </div>
    </div>
    <div id="mainContainer" className="flex h-full">
      <div id="folderBrowserLeft" className="w-1/5 bg-gray-700 pl-2 border-r">
        <ul className="p-1">
          <li className="flex items-center">
          <img className="icon" src="./images/icons/icon-clouds.svg"></img>
          <span id="unoDrive">UnoDrive</span>
          </li>
          <li className="folderList">
            <img className="icon" src="./images/icons/icon-folder.svg"></img>
            <span>Documents</span>
          </li>
          <li className="folderList">
            <img className="icon" src="./images/icons/icon-folder.svg"></img>
            Email Attachments
          </li>
        </ul>
        <ul className="p-1">
          <li className="flex items-center">
            <img className="icon" src="./images/icons/icon-desktop.svg"></img>
            <span>This PC</span>
          </li>
          <li className="folderList">
            <img className="icon" src="./images/icons/icon-add-circle.svg"></img>
            <span>3D Objects</span>
          </li>
          <li className="folderList">
            <img className="icon" src="./images/icons/icon-desktop.svg"></img>
            <span>Desktop</span>
          </li>
          <li className="folderList">
            <img className="icon" src="./images/icons/icon-document-add.svg"></img>
            <span>Documents</span>
          </li>
          <li className="folderList">
            <img className="icon" src="./images/icons/icon-film.svg"></img>
            <span>Videos</span>
          </li>
          <li className="folderList">
            <img className="icon" src="./images/icons/icon-hard-drive.svg"></img>
            <span>OS (C:)</span>
          </li>
          <li className="folderList">
            <img className="icon" src="./images/icons/icon-hard-drive.svg"></img>
            <span>DATA (D:)</span>
          </li>
        </ul>
        <ul className="p-1">
          <li className="flex items-center">
            <img className="icon" src="./images/icons/icon-interface.svg"></img>
            <span>Network</span>
          </li>
          </ul>
      </div>
      <div id="mainFolderArea" ref={mainViewRef} className="w-full bg-gray-700">
        <div id="toolbar" className="flex justify-evenly w-2/3 pb-2">
          <span className="w-4/12 pl-2">Folder</span>
          <span className="border-l pl-2 w-4/12  ">Date Modified</span>
          <span className="border-l pl-2 w-4/12 ">Type</span>
          <span className="border-l pl-2 w-4/12 ">Size</span>
        </div>
        {!projectFolderShow ? 
          <div className="allProjects">
            {projects.map(project => {
              return <ProjectList key={Math.random()} project={project} onDoubleClick={handleDblClick} onClick={handleSglClick} />
            })}
          </div>
          : 
            <ProjectFolder key={Math.random()}
                           selectedProject={selectedProject} 
                           goBack={handleDblClick} 
                           showDescription={props.showDescription} 
                           setShowDescription={props.setShowDescription} />
        }
      </div>
    </div>
    <div id="footer" className="bg-gray-600 flex p-8 justify-end">
      <span>Folder:</span>
      <div className=" flex border border-gray-400  w-2/3 pl-2 ml-2">
        {selectedProject ? selectedProject.title : 'Projects'}
      </div>
    </div>
    </div>
  )
}

export default ExplorerContainer