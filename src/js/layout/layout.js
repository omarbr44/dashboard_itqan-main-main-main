class Layout extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.render();
  }

  render() {
    const userImage = "../../src/images/icons/avatar.png";
    const logo = this.getAttribute('logo') || "../../src/images/logo.png";

    this.innerHTML = `
        <head>
    <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.1/dist/flowbite.min.css" rel="stylesheet" />
    
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="../../../app.js"></script>
    <script>
const sidebarList = document.querySelector('.sidebar-list')
function toggleSidebar() {
  sidebarList.classList.add('hidden')
} 
</script>
  </head>
  <section>
<main-sidebar img=${logo} />
  <section />
    `;
  }
}

customElements.define('main-layout', Layout);