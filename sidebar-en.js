  // Initialize sidebar state
  let isSidebarOpen = window.innerWidth >= 640; // sm breakpoint
  
  // Get DOM elements
  const sidebar = document.getElementById('logo-sidebar');
  const sidebarButton = document.getElementById('sidebar-button');
  const burgerIcon = document.getElementById('burger-icon');
  const closeIcon = document.getElementById('close-icon');
  const desktopSidebarToggle = document.getElementById('desktop-sidebar-toggle');
  
  // Set initial state
  if (isSidebarOpen) {
    sidebar.classList.remove('-translate-x-full');
  } else {
    sidebar.classList.add('-translate-x-full');
  }
  
  // Toggle sidebar function
  function toggleSidebarr() {
    isSidebarOpen = !isSidebarOpen;
    
    if (isSidebarOpen) {
      sidebar.classList.remove('-translate-x-full');
    } else {
      sidebar.classList.add('-translate-x-full');
    }
    
    // Toggle icons visibility
    burgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  }

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
  
  // Event listeners
  sidebarButton.addEventListener('click', toggleSidebarr);
  desktopSidebarToggle.addEventListener('click', toggleSidebar);
  
  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 640) {
      isSidebarOpen = true;
      sidebar.classList.remove('-translate-x-full');
    } else {
      isSidebarOpen = false;
      sidebar.classList.add('-translate-x-full');
    }
  });
  
  // Handle active menu items based on current page
  function setActiveMenuItem() {
    const url = window.location.pathname.split('/');
    let currentPage;
    
    if (!window.location.pathname.includes('pages')) {
      currentPage = '/';
    } else if (url[url.length - 1] == 'index.html') {
      currentPage = url[url.length - 2] + '/' + url[url.length - 1];
    } else {
      currentPage = url[url.length - 1];
    }
    
    document.querySelectorAll('#logo-sidebar a').forEach(link => {
      const href = link.getAttribute('href');
      const isActive = 
        (currentPage === '/' && href === '/') ||
        (currentPage !== '/' && href.includes(currentPage));
      
      if (isActive) {
        link.classList.add('bg-[#377DFF]', 'text-white');
        link.classList.remove('text-gray-700', 'hover:bg-gray-100', 'dark:text-gray-300', 'dark:hover:bg-gray-700');
      }
    });
  }
  
  // Call on page load
  setActiveMenuItem();
