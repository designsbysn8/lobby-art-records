function toggleNav () {
  var linkContainer = document.getElementById('link-container')

  if (linkContainer.style.display !== 'flex') {
    linkContainer.style.display = 'flex'
  } else {
    linkContainer.style.display = 'none'
  }
}
