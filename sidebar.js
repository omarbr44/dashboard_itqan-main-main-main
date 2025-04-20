const sidebarList = document.querySelectorAll('.sidebar-list')
const logo = document.querySelector('.logo')
const mainBody = document.querySelector('#main-body')
function toggleSidebar() {
  sidebarList.forEach(e => {
    if(e.classList.contains('hidden')) {
      e.classList.remove('hidden')
    }
    else
    e.classList.add('hidden')
  })
      if(logo.classList.contains('hidden')) {
      logo.classList.remove('hidden')
      mainBody.classList.remove('sm:mr-12')
    }
    else {
      logo.classList.add('hidden')
      mainBody.classList.add('sm:mr-12')
    }
  }