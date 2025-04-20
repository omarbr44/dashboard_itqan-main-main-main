class Table extends HTMLElement {
  constructor() {
    super();
    this.rowsPerPage = 10; // Number of rows per page
    this.currentPage = 1; // Current page
    this.filteredRows = []; // Store filtered rows for search
    this.searchQuery = ''; // Store the search query
    this.cursorPosition = 0; // Store the cursor position

  }

  static get observedAttributes() {
    return ['title', 'columns', 'rows', 'img', 'namee', 'role'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'columns' || name === 'rows') {
      this.render();
    }
  }

  render() {
    const columns = this.getAttribute('columns')?.split(',') || [];
    const rows = JSON.parse(this.getAttribute('rows') || []);
    const img = this.getAttribute('img') || '../../src/images/icons/avatar.png';

    // Use filtered rows if available, otherwise use all rows
    const rowsToDisplay = this.filteredRows.length > 0 ? this.filteredRows : rows;
    /* const rowsToDisplay = this.filteredRows.length */
    
    // Calculate total pages
    const totalPages = Math.ceil(rows.length / this.rowsPerPage);

  // Get rows for the current page
  const startIndex = (this.currentPage - 1) * this.rowsPerPage;
  const endIndex = startIndex + this.rowsPerPage;
  const currentRows = rowsToDisplay.slice(startIndex, endIndex);
 
  this.innerHTML = `
  <div class="relative py-5 overflow-x-auto shadow-md sm:rounded-lg">
    <!-- Add  -->
    <div class="relative overflow-x-auto sm:rounded-lg">
      <div class="flex items-center justify-between flex-column mb-3 p-5 flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <div>
          <h3 class="font-bold text-[20px]">${this.getAttribute('title')}</h3>
        </div>
        <div class="flex gap-x-2">
          <label for="table-search" class="sr-only">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="text" id="table-search-users" value="${this.searchQuery}" class="block p-[10px] px-[14px] ps-10 text-sm text-gray-900 border border-[#EBEBEC] rounded-lg w-80 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-0 focus:border-[#EBEBEC]" placeholder="بحث"/>
          </div>
        </div>
      </div>
      <table id="myTable" class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            ${columns.map((column) => `<th scope="col" class="px-6 py-3 font-semibold">${column}</th>`).join('')}
            <th scope="col" class="px-6 py-3 font-semibold">الاجراءات</th>
          </tr>
        </thead>
        <tbody>
          ${currentRows
            .map(
              (row, index) => `
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              ${Object.values(row)
                .map(
                  (cell) => `
                <td class="px-6 py-4">
                  ${row?.name === cell
                    ? `
                      <div class="flex items-center text-gray-900 whitespace-nowrap dark:text-white">
                        <img class="w-10 h-10 rounded-full" src="${img}" alt="Jese image"/>
                        <div class="ps-3">
                          <div class="text-[16px] font-semibold">${cell}</div>
                        </div>
                      </div>
                    `
                    : cell}
                </td>
              `
                )
                .join('')}
              <td class="px-6 py-4 text-[#475467]">
                <div>
                  <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction${index}" class="dropdownActionButton inline-flex items-center" type="button">
                    <span class="sr-only">Action button</span>
                    <svg class="cursor-pointer" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.48828 17.6115C9.48828 18.6126 10.3074 19.4316 11.3085 19.4316C12.3096 19.4316 13.1286 18.6126 13.1286 17.6115C13.1286 16.6104 12.3096 15.7913 11.3085 15.7913C10.3074 15.7913 9.48828 16.6104 9.48828 17.6115Z" stroke="#292D32" stroke-width="1.63816"/>
                      <path d="M9.48828 4.87123C9.48828 5.87233 10.3074 6.69141 11.3085 6.69141C12.3096 6.69141 13.1286 5.87233 13.1286 4.87123C13.1286 3.87013 12.3096 3.05106 11.3085 3.05106C10.3074 3.05106 9.48828 3.87013 9.48828 4.87123Z" stroke="#292D32" stroke-width="1.63816"/>
                      <path d="M9.48828 11.2404C9.48828 12.2415 10.3074 13.0605 11.3085 13.0605C12.3096 13.0605 13.1286 12.2415 13.1286 11.2404C13.1286 10.2393 12.3096 9.4202 11.3085 9.4202C10.3074 9.4202 9.48828 10.2393 9.48828 11.2404Z" stroke="#292D32" stroke-width="1.63816"/>
                    </svg>
                  </button>
                  <!-- Dropdown menu -->
                  <div id="dropdownAction${index}" class="dropdownAction z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute left-0">
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                      <li data-modal-target="updata" data-modal-toggle="updata" class="flex items-center gap-x-2 px-4 py-2cursor-pointer">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.168 2.5009C14.3868 2.28203 14.6467 2.10842 14.9326 1.98996C15.2186 1.87151 15.5251 1.81055 15.8346 1.81055C16.1442 1.81055 16.4507 1.87151 16.7366 1.98996C17.0226 2.10842 17.2824 2.28203 17.5013 2.5009C17.7202 2.71977 17.8938 2.97961 18.0122 3.26558C18.1307 3.55154 18.1917 3.85804 18.1917 4.16757C18.1917 4.4771 18.1307 4.7836 18.0122 5.06956C17.8938 5.35553 17.7202 5.61537 17.5013 5.83424L6.2513 17.0842L1.66797 18.3342L2.91797 13.7509L14.168 2.5009Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <a class="block cursor-pointer">تعديل البيانات</a>
                      </li>
                      <li data-modal-target="activate" data-modal-toggle="activate" class="flex items-center gap-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.9987 10.2077C7.58715 10.2077 5.6237 8.24423 5.6237 5.83268C5.6237 3.42113 7.58715 1.45768 9.9987 1.45768C12.4102 1.45768 14.3737 3.42113 14.3737 5.83268C14.3737 8.24423 12.4102 10.2077 9.9987 10.2077ZM9.9987 1.87435C7.81858 1.87435 6.04036 3.65256 6.04036 5.83268C6.04036 8.0128 7.81858 9.79102 9.9987 9.79102C12.1788 9.79102 13.957 8.0128 13.957 5.83268C13.957 3.65256 12.1788 1.87435 9.9987 1.87435Z" fill="#10B981" stroke="#10B981" stroke-width="0.833333"/>
                          <path d="M12.3559 12.6095L12.3583 12.6101C12.467 12.64 12.5317 12.7504 12.5003 12.8645C12.4705 12.9731 12.3605 13.0377 12.2466 13.0068C11.5239 12.8042 10.7696 12.7083 10.0021 12.7083C6.2653 12.7083 3.05208 15.1448 3.05208 18.3333C3.05208 18.4449 2.9553 18.5417 2.84375 18.5417C2.7322 18.5417 2.63542 18.4449 2.63542 18.3333C2.63542 15.0744 5.86449 12.2917 10.0021 12.2917C10.8077 12.2917 11.5946 12.3953 12.3559 12.6095Z" fill="#10B981" stroke="#10B981" stroke-width="0.833333"/>
                          <path d="M15.0013 18.9577C13.618 18.9577 12.318 18.2244 11.618 17.0327C11.243 16.4327 11.043 15.7243 11.043 14.9993C11.043 13.7827 11.5846 12.6577 12.5263 11.9077C13.2263 11.3493 14.1096 11.041 15.0013 11.041C17.1846 11.041 18.9596 12.816 18.9596 14.9993C18.9596 15.7243 18.7596 16.4327 18.3846 17.041C18.1763 17.391 17.9096 17.7077 17.593 17.9744C16.9013 18.6077 15.9763 18.9577 15.0013 18.9577ZM15.0013 12.291C14.2596 12.291 13.5763 12.5827 13.0596 13.1077C12.568 13.616 12.293 14.2827 12.293 14.9993C12.293 15.491 12.4263 15.9743 12.6846 16.391C12.818 16.6243 12.993 16.8327 13.193 17.0077C13.693 17.466 14.3346 17.716 15.0013 17.716C15.943 17.716 16.8346 17.216 17.318 16.4077C17.4596 16.1744 17.568 15.9077 17.6263 15.6494C17.6846 15.4327 17.7096 15.2244 17.7096 15.0077C17.7096 14.341 17.4596 13.6994 17.0096 13.1994C16.5096 12.616 15.7763 12.291 15.0013 12.291Z" fill="#10B981"/>
                          <path d="M14.0995 16.5004C13.9411 16.5004 13.7828 16.4421 13.6578 16.3171C13.4161 16.0754 13.4161 15.6754 13.6578 15.4338L15.4161 13.6754C15.6578 13.4337 16.0578 13.4337 16.2995 13.6754C16.5411 13.9171 16.5411 14.3171 16.2995 14.5587L14.5411 16.3171C14.4161 16.4421 14.2578 16.5004 14.0995 16.5004Z" fill="#10B981"/>
                          <path d="M15.8851 16.516C15.7268 16.516 15.5685 16.4577 15.4435 16.3327L13.6852 14.5743C13.4435 14.3327 13.4435 13.9327 13.6852 13.691C13.9268 13.4493 14.3268 13.4493 14.5685 13.691L16.3268 15.4493C16.5685 15.691 16.5685 16.091 16.3268 16.3327C16.2018 16.4577 16.0435 16.516 15.8851 16.516Z" fill="#10B981"/>
                        </svg>
                        <a class="block text-[#10B981]">تنشيط المستخدم</a>
                      </li>
                 <li data-modal-target="delete" data-modal-toggle="delete" class="flex items-center gap-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.9987 10.2077C7.58715 10.2077 5.6237 8.24423 5.6237 5.83268C5.6237 3.42113 7.58715 1.45768 9.9987 1.45768C12.4102 1.45768 14.3737 3.42113 14.3737 5.83268C14.3737 8.24423 12.4102 10.2077 9.9987 10.2077ZM9.9987 1.87435C7.81858 1.87435 6.04036 3.65256 6.04036 5.83268C6.04036 8.0128 7.81858 9.79102 9.9987 9.79102C12.1788 9.79102 13.957 8.0128 13.957 5.83268C13.957 3.65256 12.1788 1.87435 9.9987 1.87435Z" fill="#E92727" stroke="#E92727" stroke-width="0.833333"/>
                            <path d="M12.3559 12.6095L12.3583 12.6101C12.467 12.64 12.5317 12.7504 12.5003 12.8645C12.4705 12.9731 12.3605 13.0377 12.2466 13.0068C11.5239 12.8042 10.7696 12.7083 10.0021 12.7083C6.2653 12.7083 3.05208 15.1448 3.05208 18.3333C3.05208 18.4449 2.9553 18.5417 2.84375 18.5417C2.7322 18.5417 2.63542 18.4449 2.63542 18.3333C2.63542 15.0744 5.86449 12.2917 10.0021 12.2917C10.8077 12.2917 11.5946 12.3953 12.3559 12.6095Z" fill="#E92727" stroke="#E92727" stroke-width="0.833333"/>
                            <path d="M15.0013 18.9577C14.018 18.9577 13.0846 18.591 12.3596 17.9327C12.068 17.6827 11.8096 17.3744 11.6096 17.0327C11.243 16.4327 11.043 15.7243 11.043 14.9993C11.043 13.9577 11.443 12.9827 12.1596 12.241C12.9096 11.466 13.918 11.041 15.0013 11.041C16.1346 11.041 17.2096 11.5244 17.943 12.3577C18.593 13.0827 18.9596 14.016 18.9596 14.9993C18.9596 15.316 18.918 15.6327 18.8346 15.9327C18.7513 16.3077 18.593 16.6994 18.3763 17.041C17.6846 18.2244 16.3846 18.9577 15.0013 18.9577ZM15.0013 12.291C14.2596 12.291 13.5763 12.5827 13.0596 13.1077C12.568 13.616 12.293 14.2827 12.293 14.9993C12.293 15.491 12.4263 15.9743 12.6846 16.391C12.818 16.6243 12.993 16.8327 13.193 17.0077C13.693 17.466 14.3346 17.716 15.0013 17.716C15.943 17.716 16.8346 17.216 17.318 16.4077C17.4596 16.1744 17.568 15.9077 17.6263 15.6494C17.6846 15.4327 17.7096 15.2244 17.7096 15.0077C17.7096 14.341 17.4596 13.6994 17.0096 13.1994C16.5096 12.616 15.7763 12.291 15.0013 12.291Z" fill="#E92727"/>
                            <path d="M14.0995 16.5004C13.9411 16.5004 13.7828 16.4421 13.6578 16.3171C13.4161 16.0754 13.4161 15.6754 13.6578 15.4338L15.4161 13.6754C15.6578 13.4337 16.0578 13.4337 16.2995 13.6754C16.5411 13.9171 16.5411 14.3171 16.2995 14.5587L14.5411 16.3171C14.4161 16.4421 14.2578 16.5004 14.0995 16.5004Z" fill="#E92727"/>
                            <path d="M15.8851 16.516C15.7268 16.516 15.5685 16.4577 15.4435 16.3327L13.6852 14.5743C13.4435 14.3327 13.4435 13.9327 13.6852 13.691C13.9268 13.4493 14.3268 13.4493 14.5685 13.691L16.3268 15.4493C16.5685 15.691 16.5685 16.091 16.3268 16.3327C16.2018 16.4577 16.0435 16.516 15.8851 16.516Z" fill="#E92727"/>
                          </svg>
                          <a class="block text-[#E92727]">حذف المستخدم</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            `
              )
              .join('')}
          </tbody>
        </table>

        <!-- activate user modal -->
        <div class="relative z-[70] hidden" id="activate" aria-labelledby="modal-title" role="dialog" aria-modal="true"">
    
                <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
              
                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div class="flex min-h-full items-end justify-center  text-center sm:items-center sm:p-0">
                   
                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white">
                            <div class="w-full flex-col overflow-hidden">
                                <div class="flex bg-[rgba(236,249,245,1)] justify-between items-center w-full h-12 p-2 border-b-[1px] border-[rgba(16,185,129,1)]">
                                    <label for="alert" class="block text-lg py-2 font-semibold text-[13px] group-text text-[rgba(16,185,129,1)]">تنبيه هام</label>
                                    <svg class="cursor-pointer" data-modal-hide="activate" width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.0013 30.3327C8.09464 30.3327 1.66797 23.906 1.66797 15.9993C1.66797 8.09268 8.09464 1.66602 16.0013 1.66602C23.908 1.66602 30.3346 8.09268 30.3346 15.9993C30.3346 23.906 23.908 30.3327 16.0013 30.3327ZM16.0013 3.66602C9.2013 3.66602 3.66797 9.19935 3.66797 15.9993C3.66797 22.7993 9.2013 28.3327 16.0013 28.3327C22.8013 28.3327 28.3346 22.7993 28.3346 15.9993C28.3346 9.19935 22.8013 3.66602 16.0013 3.66602Z" fill="rgba(16,185,129,1)"></path>
                                        <path d="M12.2271 20.7738C11.9738 20.7738 11.7205 20.6805 11.5205 20.4805C11.1338 20.0938 11.1338 19.4538 11.5205 19.0671L19.0671 11.5205C19.4538 11.1338 20.0938 11.1338 20.4805 11.5205C20.8671 11.9071 20.8671 12.5471 20.4805 12.9338L12.9338 20.4805C12.7471 20.6805 12.4805 20.7738 12.2271 20.7738Z" fill="rgba(16,185,129,1)"></path>
                                        <path d="M19.7738 20.7738C19.5205 20.7738 19.2671 20.6805 19.0671 20.4805L11.5205 12.9338C11.1338 12.5471 11.1338 11.9071 11.5205 11.5205C11.9071 11.1338 12.5471 11.1338 12.9338 11.5205L20.4805 19.0671C20.8671 19.4538 20.8671 20.0938 20.4805 20.4805C20.2805 20.6805 20.0271 20.7738 19.7738 20.7738Z" fill="rgba(16,185,129,1)"></path>
                                    </svg>
                                </div>
                                <div class="flex-col flex justify-center items-center mt-3">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M27.9297 40.0003L35.963 48.0669L52.063 31.9336" stroke="#10B981" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M35.8297 8.16445C38.1297 6.19779 41.8964 6.19779 44.2297 8.16445L49.4964 12.6978C50.4964 13.5645 52.363 14.2645 53.6964 14.2645H59.363C62.8964 14.2645 65.7964 17.1645 65.7964 20.6978V26.3645C65.7964 27.6645 66.4964 29.5645 67.363 30.5645L71.8964 35.8311C73.863 38.1311 73.863 41.8978 71.8964 44.2311L67.363 49.4978C66.4964 50.4978 65.7964 52.3645 65.7964 53.6978V59.3645C65.7964 62.8978 62.8964 65.7978 59.363 65.7978H53.6964C52.3964 65.7978 50.4964 66.4978 49.4964 67.3645L44.2297 71.8978C41.9297 73.8645 38.163 73.8645 35.8297 71.8978L30.563 67.3645C29.563 66.4978 27.6964 65.7978 26.363 65.7978H20.5964C17.063 65.7978 14.163 62.8978 14.163 59.3645V53.6645C14.163 52.3645 13.463 50.4978 12.6297 49.4978L8.12969 44.1978C6.19635 41.8978 6.19635 38.1645 8.12969 35.8645L12.6297 30.5645C13.463 29.5645 14.163 27.6978 14.163 26.3978V20.6645C14.163 17.1311 17.063 14.2311 20.5964 14.2311H26.363C27.663 14.2311 29.563 13.5311 30.563 12.6645L35.8297 8.16445Z" stroke="#10B981" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                    <div class="flex-col flex w-[90%] items-center justify-center mt-3">
                                        <p class="block text-gray-700 mb-2 text-md font-semibold group-text">هل أنت متأكد أنك تريد تنشيط حساب هذا المستخدم؟</p>
                                        <p class="block text-gray-700 mb-2 text-sm flex items-center justify-center group-text text-center">سيتمكن المستخدم من الوصول إلى الحساب والخدمات المرتبطة به فورًا بعد التنشيط.</p>
                                    </div>
                                </div>
                                <div class="flex-col justify-center mt-3 px-3 pb-3">
                                    <button data-modal-hide="activate" class="w-full h-10 rounded-md  text-[rgba(16,185,129,1)] group-text text-md border-[1px]  border-[rgba(16,185,129,1)]">تأكيد التنشيط</button>
                                    <button data-modal-hide="activate" class="bg-[rgba(16,185,129,1)]  w-full h-10 rounded-md mt-2 text-white group-text text-md">إلغاء</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                  </div>
                </div>
              </div>

        <!-- update modal -->
        <div class="relative z-[70] hidden" id="updata" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-3 sm:w-full sm:max-w-[58%] h-[560px]">
        <div class="bg-white w-full">
          <div class="w-full flex-col overflow-hidden">
            <!-- Modal content here -->
            <div class="flex bg-blue-100 justify-between items-center w-full h-12 p-2 border-b-[1px] border-blue-600">
              <label for="alert" class="block text-[16px] py-2 text-[13px] group-text text-blue-600 font-bold">تعديلات بيانات المستخدم</label>
              <svg class="cursor-pointer" data-modal-hide="updata" width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0013 30.3327C8.09464 30.3327 1.66797 23.906 1.66797 15.9993C1.66797 8.09268 8.09464 1.66602 16.0013 1.66602C23.908 1.66602 30.3346 8.09268 30.3346 15.9993C30.3346 23.906 23.908 30.3327 16.0013 30.3327ZM16.0013 3.66602C9.2013 3.66602 3.66797 9.19935 3.66797 15.9993C3.66797 22.7993 9.2013 28.3327 16.0013 28.3327C22.8013 28.3327 28.3346 22.7993 28.3346 15.9993C28.3346 9.19935 22.8013 3.66602 16.0013 3.66602Z" fill="#3b82f6"></path>
                <path d="M12.2271 20.7738C11.9738 20.7738 11.7205 20.6805 11.5205 20.4805C11.1338 20.0938 11.1338 19.4538 11.5205 19.0671L19.0671 11.5205C19.4538 11.1338 20.0938 11.1338 20.4805 11.5205C20.8671 11.9071 20.8671 12.5471 20.4805 12.9338L12.9338 20.4805C12.7471 20.6805 12.4805 20.7738 12.2271 20.7738Z" fill="#3b82f6"></path>
                <path d="M19.7738 20.7738C19.5205 20.7738 19.2671 20.6805 19.0671 20.4805L11.5205 12.9338C11.1338 12.5471 11.1338 11.9071 11.5205 11.5205C11.9071 11.1338 12.5471 11.1338 12.9338 11.5205L20.4805 19.0671C20.8671 19.4538 20.8671 20.0938 20.4805 20.4805C20.2805 20.6805 20.0271 20.7738 19.7738 20.7738Z" fill="#3b82f6"></path>
              </svg>
            </div>
                                        <div class="flex-col flex m-3 ">
                                <svg id="svg-circle" width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="40" cy="40" r="40" fill="#EBF2FF"/>
                                    <path d="M40.1979 41.3014C40.0813 41.2848 39.9313 41.2848 39.7979 41.3014C36.8646 41.2014 34.5312 38.8014 34.5312 35.8514C34.5312 32.8348 36.9646 30.3848 39.9979 30.3848C43.0146 30.3848 45.4646 32.8348 45.4646 35.8514C45.4479 38.8014 43.1313 41.2014 40.1979 41.3014Z" stroke="#377DFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M51.2362 52.3016C48.2695 55.0182 44.3362 56.6682 40.0029 56.6682C35.6695 56.6682 31.7362 55.0182 28.7695 52.3016C28.9362 50.7349 29.9362 49.2016 31.7195 48.0016C36.2862 44.9682 43.7529 44.9682 48.2862 48.0016C50.0695 49.2016 51.0695 50.7349 51.2362 52.3016Z" stroke="#377DFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M39.9987 56.6673C49.2034 56.6673 56.6654 49.2054 56.6654 40.0007C56.6654 30.7959 49.2034 23.334 39.9987 23.334C30.794 23.334 23.332 30.7959 23.332 40.0007C23.332 49.2054 30.794 56.6673 39.9987 56.6673Z" stroke="#377DFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <rect x="0.625" y="55.625" width="29.75" height="29.75" rx="11.875" fill="#EBF2FF"/>
                                    <rect x="0.625" y="55.625" width="29.75" height="29.75" rx="11.875" stroke="white" stroke-width="1.25"/>
                                    <path d="M13.2856 62.249L8.15439 67.6803C7.96064 67.8865 7.77314 68.2928 7.73564 68.574L7.50439 70.599C7.42314 71.3303 7.94814 71.8303 8.67314 71.7053L10.6856 71.3615C10.9669 71.3115 11.3606 71.1053 11.5544 70.8928L16.6856 65.4615C17.5731 64.524 17.9731 63.4553 16.5919 62.149C15.2169 60.8553 14.1731 61.3115 13.2856 62.249Z" stroke="#377DFF" stroke-width="0.9375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12.4297 63.1562C12.6984 64.8812 14.0984 66.2 15.8359 66.375" stroke="#377DFF" stroke-width="0.9375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.875 73.75H18.125" stroke="#377DFF" stroke-width="0.9375" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <image id="profile-image" href="" x="10" y="10" width="60" height="60" clip-path="circle(40 at 40 40)" />
                                  </svg>
                                    <input type="file" style="display: none;" id="file-input">
                                    
                                    
                                <div class=" flex w-[100%]  mt-3 justify-center items-center">
                                    <div class="flex w-full mt-1">
                                        <div class="flex-col w-[100%] ">
                                            <label for="example"  class="block text-gray-700 mb-2 text-sm group-text text-[rgba(65, 68, 71, 1)] text-end">الاسم بالكامل</label>
                                            <input type="text" 
                                   id="example" 
                                   name="example" 
                                   class="w-[100%] h-9 px-2 py-2 border-1 border-gray-400 rounded-[4px] outline-none focus:border-blue-500 " 
                                   placeholder="">
                            
                            
                                        </div>
                                        <div class="flex-col w-[100%] pr-2">
                                            <label for="example"  class="block text-gray-700 mb-2 text-sm group-text text-[rgba(65, 68, 71, 1)] text-end">المجموعة</label>
                                            <select class="w-[100%] h-9 py-2 border-1 border-gray-400 rounded-[4px] outline-none focus:border-blue-500" id="group">
                                                <option class="w-full px-2" selected>اختر</option>
                                                <option class="w-full px-2">Option 1</option>
                                                <option class="w-full px-2">Option 2</option>
                                                <option class="w-full px-2">Option 3</option>
                                            </select>
                                            
                                           
                            
                            
                                        </div>
                                       
                                       
                                     </div>
                                </div>
                                <div class=" flex w-[100%]  mt-[8px] justify-center items-center">
                                    <div class="flex w-full mt-1">
                                        <div class="flex-col w-[100%] ">
                                            <label for="example"  class="block text-gray-700 mb-2 text-sm group-text text-[rgba(65, 68, 71, 1)] text-end">رقم الهاتف</label>
                                            <div class="flex">
                                                <select class="w-[20%] h-9 py-2 border-1 border-gray-400 rounded-[4px] outline-none focus:border-blue-500" id="group">
                                                
                                              
                                                <option class="w-full px-2" >+963</option>
                                                <option class="w-full px-2" >+961</option>
                                                <option class="w-full px-2" >+962</option>
                                                <option class="w-full px-2" >+964</option>
                                                <option class="w-full px-2" >+967</option>
                                                </select>
                                                
                                                <input type="text" 
                                   id="example" 
                                   name="example" 
                                   class="w-[79%] h-9 mr-1 px-2 py-2 border-1 border-gray-400 rounded-[4px] outline-none focus:border-blue-500" 
                                   placeholder="">
                                            </div>
                                            
                            
                            
                                        </div>
                                        <div class="flex-col w-[100%] pr-2">
                                            <label for="example"  class="block text-gray-700 mb-2 text-sm group-text text-[rgba(65, 68, 71, 1)] text-end">بريد إلكتروني</label>
                                            <input type="text" 
                                   id="example" 
                                   name="example" 
                                   class="w-[100%] h-9 px-2 py-2 border-1 border-gray-400 rounded-[4px] outline-none focus:border-blue-500" 
                                   placeholder="_">
                            
                            
                                        </div>
                                       
                                       
                                     </div>
                                </div>
                                <div class=" flex w-[100%]  mt-[8px] justify-center items-center">
                                    <div class="flex w-full mt-1">
                                        <div class="flex-col w-[100%] ">
                                            <label for="example"  class="block text-gray-700 mb-2 text-sm group-text text-[rgba(65, 68, 71, 1)] text-end">كلمة المرور</label>
                                            <input type="password" id="password"  id="example" 
                                            name="example" 
                                            class="w-[100%] h-9 px-2 py-2 border-1 border-gray-400 rounded-[4px] outline-none focus:border-blue-500" value="">

                            
                            
                                        </div>
                                        <div class="flex-col w-[100%] pr-2">
                                            <label for="example"  class="block text-gray-700 mb-2 text-sm group-text text-[rgba(65, 68, 71, 1)] text-end">تأكيد كلمة المرور</label>
                                            <input type="password" id="password"  id="example" 
                                            name="example" 
                                            class="w-[100%] h-9 px-2 py-2 border-1 border-gray-400 rounded-[4px] outline-none focus:border-blue-500" value="">
                            
                            
                                        </div>
                                       
                                       
                                     </div>
                                </div>
                                <div class="flex w-[100%] mt-[8px] justify-center items-center">
                                    <div class="flex w-full mt-1">
                                        <div class="flex-col w-[100%]">
                                            <label class="flex items-center space-x-3">
                                                <div class="relative">
                                                    <input type="checkbox" class="sr-only" id="toggle1">
                                                    <div class="w-8 h-4 bg-gray-100 rounded-full shadow-inner transition-colors duration-300" id="toggle-bg1"></div>
                                                    <div class="absolute w-4 h-4 bg-white rounded-full shadow-md inset-y-0 left-0 transition-transform duration-300 ease-in-out" id="toggle-circle1"></div>
                                                </div>
                                                <span class="text-[12px] font-bold m-2 text-gray-700 group-text">هل تم التفعيل</span>
                                            </label>
                                        </div>
                                        <div class="flex-col w-[100%] pr-2">
                                            <label class="flex items-center space-x-3">
                                                <div class="relative">
                                                    <input type="checkbox" class="sr-only" id="toggle2">
                                                    <div class="w-8 h-4 bg-gray-100 rounded-full shadow-inner transition-colors duration-300" id="toggle-bg2"></div>
                                                    <div class="absolute w-4 h-4 bg-white rounded-full shadow-md inset-y-0 left-0 transition-transform duration-300 ease-in-out" id="toggle-circle2"></div>
                                                </div>
                                                <span class="text-[12px] font-bold m-2 text-gray-700 group-text">هل تم التفعيل</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-[100%] mt-[8px] justify-center items-center">
                                    <div class="flex w-full mt-1">
                                        <div class="flex-col w-[100%]">
                                            <label class="flex items-center space-x-2">
                                                <input type="checkbox" class="w-4 h-4 bg-red-600 transition-colors duration-300">
                                                <span class="text-[12px] font-bold m-2 text-gray-700 group-text">هل تم التفعيل</span>
                                            </label>
                                        </div>
                                
                                        <div class="flex-col w-[100%] pr-2">
                                            <label class="flex items-center space-x-2">
                                                <input type="checkbox" class="w-4 h-4 bg-red-600 transition-colors duration-300">
                                                <span class="text-[12px] font-bold m-2 text-gray-700 group-text">هل تم التفعيل</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex w-[100%] mt-[8px] justify-center items-center">
                                    <div class="flex w-full mt-1">
                                        <div class="flex-col w-[100%]">
                                            <label class="flex items-center space-x-2">
                                                <input type="radio" name="radio-group" class="sr-only">
                                                <div class="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center transition-all duration-300">
                                                    <div class="w-3 h-3 bg-blue-500 rounded-full scale-0 transition-transform duration-300"></div>
                                                </div>
                                                <span class="text-[12px] font-bold m-2 text-gray-700 group-text">هل تم التفعيل</span>
                                            </label>
                                        </div>
                                        
                                       
                                        <div class="flex-col w-[100%] pr-2">
                                            <label class="flex items-center space-x-2">
                                                <input type="radio" name="radio-group" class="sr-only">
                                                <div class="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center transition-all duration-300">
                                                    <div class="w-3 h-3 bg-blue-500 rounded-full scale-0 transition-transform duration-300"></div>
                                                </div>
                                                <span class="text-[12px] font-bold m-2 text-gray-700 group-text">هل تم التفعيل</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="flex justify-between mb-12  ">
                                    <button data-modal-hide="updata" class="bg-blue-500  w-[20%] h-10 rounded-md mt-2 text-white group-text text-md">حفظ</button>
                                    <button data-modal-hide="updata" class="bg-blue-100 w-[20%] h-10 rounded-md mt-2 text-blue-700 group-text text-md">عودة</button>            
                                </div>
                            
                        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- delete modal -->
<div class="relative z-[70] hidden" id="delete" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    
                <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
              
                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div class="flex min-h-full items-end justify-center  text-center sm:items-center sm:p-0">
                   
                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white">
                            <div class="w-full flex-col overflow-hidden">
                                <div class="flex bg-red-100 justify-between items-center w-full h-12 p-2 border-b-[1px] border-red-500">
                                    <label for="alert" class="block text-lg py-2 font-semibold text-[13px] group-text text-red-500">تنبيه هام</label>
                                    <svg class="cursor-pointer" data-modal-hide="delete" width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.0013 30.3327C8.09464 30.3327 1.66797 23.906 1.66797 15.9993C1.66797 8.09268 8.09464 1.66602 16.0013 1.66602C23.908 1.66602 30.3346 8.09268 30.3346 15.9993C30.3346 23.906 23.908 30.3327 16.0013 30.3327ZM16.0013 3.66602C9.2013 3.66602 3.66797 9.19935 3.66797 15.9993C3.66797 22.7993 9.2013 28.3327 16.0013 28.3327C22.8013 28.3327 28.3346 22.7993 28.3346 15.9993C28.3346 9.19935 22.8013 3.66602 16.0013 3.66602Z" fill="red"></path>
                                        <path d="M12.2271 20.7738C11.9738 20.7738 11.7205 20.6805 11.5205 20.4805C11.1338 20.0938 11.1338 19.4538 11.5205 19.0671L19.0671 11.5205C19.4538 11.1338 20.0938 11.1338 20.4805 11.5205C20.8671 11.9071 20.8671 12.5471 20.4805 12.9338L12.9338 20.4805C12.7471 20.6805 12.4805 20.7738 12.2271 20.7738Z" fill="red"></path>
                                        <path d="M19.7738 20.7738C19.5205 20.7738 19.2671 20.6805 19.0671 20.4805L11.5205 12.9338C11.1338 12.5471 11.1338 11.9071 11.5205 11.5205C11.9071 11.1338 12.5471 11.1338 12.9338 11.5205L20.4805 19.0671C20.8671 19.4538 20.8671 20.0938 20.4805 20.4805C20.2805 20.6805 20.0271 20.7738 19.7738 20.7738Z" fill="red"></path>
                                    </svg>
                                </div>
                                <div class="flex-col flex justify-center items-center mt-3">
                                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M39.9986 26.6667V40M39.9986 53.3334H40.0319M34.2986 9.53337L6.06527 56.6667C5.48316 57.6748 5.17516 58.8177 5.1719 59.9818C5.16864 61.1458 5.47024 62.2905 6.04669 63.3018C6.62315 64.3131 7.45436 65.1559 8.45763 65.7462C9.46091 66.3365 10.6013 66.6539 11.7653 66.6667H68.2319C69.3959 66.6539 70.5363 66.3365 71.5396 65.7462C72.5429 65.1559 73.3741 64.3131 73.9505 63.3018C74.527 62.2905 74.8286 61.1458 74.8253 59.9818C74.8221 58.8177 74.514 57.6748 73.9319 56.6667L45.6986 9.53337C45.1044 8.55372 44.2677 7.74376 43.2693 7.18164C42.2708 6.61953 41.1444 6.32422 39.9986 6.32422C38.8528 6.32422 37.7264 6.61953 36.728 7.18164C35.7295 7.74376 34.8928 8.55372 34.2986 9.53337Z" stroke="#E92727" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                        
                                    <div class="flex-col flex w-[90%] items-center justify-center mt-3">
                                        <p class="block text-gray-700 mb-2 text-md font-semibold group-text">هل أنت متأكد من حذف المستخدم؟</p>
                                        <p class="block text-gray-700 mb-2 text-sm flex items-center justify-center group-text text-center">أنت على وشك حذف هذا المستخدم من النظام. هذا الإجراء لا يمكن التراجع عنه، وستفقد جميع البيانات المرتبطة بهذا المستخدم بشكل دائم.</p>
                                    </div>
                                </div>
                                <div class="flex-col justify-center mt-3 px-3 pb-3">
                                    <button data-modal-hide="delete" class="w-full h-10 rounded-md  text-red-500 group-text text-md border-[1px]  border-red-500">تأكيد التنشيط</button>
                                    <button data-modal-hide="delete" class="bg-red-500  w-full h-10 rounded-md mt-2 text-white group-text text-md">إلغاء</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                  </div>
                </div>
              </div>


        <!-- Pagination -->
        <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 p-4 mt-5" aria-label="Table navigation">
          <button 
            class="border text-[14px] flex gap-x-3 justify-center items-center rounded-[8.5px] button-shadow border-[#D0D5DD] py-[9px] px-[16px]"
            data-action="previous"
            ${this.currentPage === 1 ? 'disabled' : ''}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.21094 7.68702H13.9522M13.9522 7.68702L7.58155 1.31641M13.9522 7.68702L7.58155 14.0576" stroke="#344054" stroke-width="1.82382" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            السابق
          </button>
          <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            ${Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page) => `
              <li>
                <a 
                  href="#"
                  class="flex items-center rounded-[9px] justify-center px-3 h-8 leading-tight text-[14px] ${
                    page === this.currentPage
                      ? 'bg-[#EBF2FF] text-[#377DFF]'
                      : 'text-[#667085]'
                  }"
                  data-action="change"
                  data-page="${page}"
                >
                  ${page}
                </a>
              </li>
            `
            ).join('')}
          </ul>
          <button 
            class="border text-[14px] flex gap-x-3 justify-center items-center rounded-[8.5px] button-shadow border-[#D0D5DD] py-[9px] px-[16px]"
            data-action="next"
            ${this.currentPage === totalPages ? 'disabled' : ''}
          >
            التالى
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.792 7.68702H1.05078M1.05078 7.68702L7.42139 14.0576M1.05078 7.68702L7.42139 1.31641" stroke="#344054" stroke-width="1.82382" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </nav>
      </div>
    </div>
  `;

    this.addPaginationListeners();
    // Initialize dropdowns and modals (if needed)
    this.initializeDropdowns();
    
    this.addSearchListener();
    
    this.addFileInputListener();
  }

    addFileInputListener() {
      const svgCircle = this.querySelector('#svg-circle');
      const fileInput = this.querySelector('#file-input');
      const profileImage = this.querySelector('#profile-image');
      svgCircle.addEventListener('click', () => {
        console.log('aa')
        fileInput.click(); // Trigger file input click
      });

      // Handle file selection
      fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                // Update the image source with the selected file
                profileImage.setAttribute('href', e.target.result);
            };
            reader.readAsDataURL(file); // Convert the file to a data URL
        }
    });
}

  addPaginationListeners() {
    // Add event listener for "Previous" button
    const previousButton = this.querySelector('[data-action="previous"]');
    if (previousButton) {
      previousButton.addEventListener('click', () => this.previousPage());
    }
  
    // Add event listener for "Next" button
    const nextButton = this.querySelector('[data-action="next"]');
    if (nextButton) {
      nextButton.addEventListener('click', () => this.nextPage());
    }
  
    // Add event listeners for page number buttons
    const pageButtons = this.querySelectorAll('[data-action="change"]');
    pageButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const page = parseInt(button.getAttribute('data-page'), 10);
        this.changePage(page);
      });
    });
  }

  search(query) {
    this.searchQuery = query; // Store the search query
    const rows = JSON.parse(this.getAttribute('rows') || []);
    this.filteredRows = rows.filter((row) =>
      row.name.toLowerCase().includes(query.toLowerCase())
    );
    this.currentPage = 1; // Reset to the first page after search
    this.render();
  }


  // Pagination methods
  changePage(page) {
    this.currentPage = page;
    this.render(); // Re-render the table with the new page
  }

  nextPage() {
    const totalPages = Math.ceil(JSON.parse(this.getAttribute('rows')).length / this.rowsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.render(); // Re-render the table with the next page
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.render(); // Re-render the table with the previous page
    }
  }

  addSearchListener() {
    const searchInput = this.querySelector('#table-search-users');
    searchInput.focus()
    searchInput.setSelectionRange(this.cursorPosition, this.cursorPosition);
    /* searchInput.setSelectionRange(2,2) */
    if (searchInput) {
      searchInput.addEventListener('input', (event) => {
        this.cursorPosition = event.target.selectionStart;
        const query = event.target.value;
        this.search(query);
      });
    }
  }

  initializeDropdowns() {
    // Initialize dropdowns using Flowbite or your preferred library
    const dropdownButtons = this.querySelectorAll('[data-dropdown-toggle]');

    dropdownButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const dropdownId = button.getAttribute('data-dropdown-toggle');
      const dropdown = this.querySelector(`#${dropdownId}`);

      // Hide all other dropdowns
      this.querySelectorAll('.dropdownActionButton').forEach((otherDropdown) => {
        if (otherDropdown.getAttribute('data-dropdown-toggle') !== dropdownId) {
          this.querySelector(`#${otherDropdown.getAttribute('data-dropdown-toggle')}`).classList.add('hidden');
        }
      });

      // Toggle the clicked dropdown
      dropdown.classList.toggle('hidden');
    });
  });
  
  }
}

customElements.define('table-builder', Table);