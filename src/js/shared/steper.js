class Steper extends HTMLElement {
  
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="bg-white dark:bg-gray-800">
    <ol class="mt-3 flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 dark:text-white border-gray-200 dark:border-white rounded-lg shadow-sm sm:text-base sm:p-4 sm:space-x-4 rtl:space-x-reverse">
    <li class="flex items-center cursor-pointer text-blue-600">
         <span class="flex items-center justify-center w-[24px] h-[24px] me-2 text-xs rounded-full shrink-0">
         <img src=${this.getAttribute('baseStep')} class='w-full' />
         </span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5023 17.2253C12.344 17.2253 12.1857 17.1669 12.0607 17.0419L6.62734 11.6086C5.74401 10.7253 5.74401 9.27526 6.62734 8.39193L12.0607 2.95859C12.3023 2.71693 12.7023 2.71693 12.944 2.95859C13.1857 3.20026 13.1857 3.60026 12.944 3.84193L7.51068 9.27526C7.11068 9.67526 7.11068 10.3253 7.51068 10.7253L12.944 16.1586C13.1857 16.4003 13.1857 16.8003 12.944 17.0419C12.819 17.1586 12.6607 17.2253 12.5023 17.2253Z" fill="#C1C2C3"/>
    </svg>

    </li>
    <li class="flex items-center cursor-pointer">
         <span class="flex items-center justify-center w-[24px] h-[24px] me-2 text-xs rounded-full shrink-0">
         <img src=${this.getAttribute('firstStep')} class='w-full' />
         </span>
         <span class="hidden sm:inline-flex text-[#C1C2C3] dark:text-white">${this.getAttribute('firstTitle')}</span>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5023 17.2253C12.344 17.2253 12.1857 17.1669 12.0607 17.0419L6.62734 11.6086C5.74401 10.7253 5.74401 9.27526 6.62734 8.39193L12.0607 2.95859C12.3023 2.71693 12.7023 2.71693 12.944 2.95859C13.1857 3.20026 13.1857 3.60026 12.944 3.84193L7.51068 9.27526C7.11068 9.67526 7.11068 10.3253 7.51068 10.7253L12.944 16.1586C13.1857 16.4003 13.1857 16.8003 12.944 17.0419C12.819 17.1586 12.6607 17.2253 12.5023 17.2253Z" fill="#C1C2C3"/>
</svg>
</ol>

<a class='${this.getAttribute('backHref') ? 'flex' : 'hidden'}  my-7  items-center text-[#414447] gap-x-1 cursor-pointer' href=${this.getAttribute('backHref')}>
<svg class='self-end' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50156 17.2253C7.6599 17.2253 7.81823 17.1669 7.94323 17.0419L13.3766 11.6086C14.2599 10.7253 14.2599 9.27526 13.3766 8.39193L7.94323 2.95859C7.70156 2.71693 7.30156 2.71693 7.0599 2.95859C6.81823 3.20026 6.81823 3.60026 7.0599 3.84193L12.4932 9.27526C12.8932 9.67526 12.8932 10.3253 12.4932 10.7253L7.0599 16.1586C6.81823 16.4003 6.81823 16.8003 7.0599 17.0419C7.1849 17.1586 7.34323 17.2253 7.50156 17.2253Z" fill="#414447"/>
</svg>
<p class='self-center text-[#414447]'>
  ${this.getAttribute('backTitle')}
  </p>
</a>

</div>
    `;
  }
}

customElements.define('page-steper', Steper);
