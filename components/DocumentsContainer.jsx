import React from 'react'
import documentsData from '../data/documents'
import SingleDocument from './SingleDocument'
import GoBack from '../components/GoBack'

const DocumentsContainer = (props) => {
  return (
    <div id="documentsContainer">
      <GoBack backButton={props.backButton} />
      {documentsData.map((document) => {
        return <SingleDocument key={document.id} document={document} />
      })}
    </div>
  )
}

export default DocumentsContainer
