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
}

module.exports = {
  handleSingleClick,
  handleLinkDblClick,
}
