const homeClass = document.querySelector('.home-class')
const universeClass = document.querySelector('.universe-class')
const explorerClass = document.querySelector('.explorer-class')

homeClass.classList.add('click')

function setActiveLink(element) {
  for (const link of [homeClass, universeClass, explorerClass]) {
    link.classList.remove('click')
  }
  element.classList.add('click')
}

function setBg(bg) {
  document.body.className = ''
  document.body.className = bg
}

function homeClick() {
  setActiveLink(homeClass)
  setBg('home')
  console.log(document.body.className)
}

function universeClick() {
  setActiveLink(universeClass)
  setBg('universe')
  console.log(document.body.className)
}

function explorerClick() {
  setActiveLink(explorerClass)
  setBg('exploration')
  console.log(document.body.className)
}

export { homeClick, universeClick, explorerClick }