function handleSingleClick(event, containerEle) {
  let validDivs = []
  for (let i = 0; i < containerEle.childNodes.length; i++) {
    validDivs.push(containerEle.children[i])
  }

  for (let i = 0; i < validDivs.length; i++) {
    if (validDivs[i] === undefined) {
      continue
    }
    if (validDivs[i].contains(event.target)) {
      validDivs[i].style.backgroundColor = '#9ca3af'
    } else {
      validDivs[i].style.backgroundColor = ''
    }
  }
}

function handleLinkDblClick(link) {
  window.open(link, '_blank')
  clearSearchResults()
}

function clearSearchResults() {
  document.getElementById('searchInput').value = ''
}

function makeDraggable(divId){
  const draggableDiv = document.getElementById(divId)
  draggableDiv.addEventListener('mousedown', function(e) {
      let offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
      let offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);
      
      function mouseMoveHandler(e) {
        draggableDiv.style.top = (e.clientY - offsetY) + 'px';
        draggableDiv.style.left = (e.clientX - offsetX) + 'px';
      }
  
      function reset() {
        window.removeEventListener('mousemove', mouseMoveHandler);
        window.removeEventListener('mouseup', reset);
      }
  
      window.addEventListener('mousemove', mouseMoveHandler);
      window.addEventListener('mouseup', reset);
    });
}

module.exports = {
  handleSingleClick,
  handleLinkDblClick,
  clearSearchResults,
  makeDraggable
}
