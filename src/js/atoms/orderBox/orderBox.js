class OrderBox extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {

    const trend = this.getAttribute('up') ? "text-[#10B981]" : "text-[#E92727]"
    const bgCard = `background-color: ${this.getAttribute('bg')}`;

    this.innerHTML = `
       <!-- Head -->
             <div class="p-[10px]">
    <div class="flex justify-between items-center mb-4 relative">
        <h4 class="font-medium text-[12px]">${this.getAttribute('title')}</h4>
        <svg class="cursor-pointer open-menu" width="18" height="5" viewBox="0 0 18 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3.68945C9.55228 3.68945 10 3.24174 10 2.68945C10 2.13717 9.55228 1.68945 9 1.68945C8.44772 1.68945 8 2.13717 8 2.68945C8 3.24174 8.44772 3.68945 9 3.68945Z" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 3.68945C16.5523 3.68945 17 3.24174 17 2.68945C17 2.13717 16.5523 1.68945 16 1.68945C15.4477 1.68945 15 2.13717 15 2.68945C15 3.24174 15.4477 3.68945 16 3.68945Z" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 3.68945C2.55228 3.68945 3 3.24174 3 2.68945C3 2.13717 2.55228 1.68945 2 1.68945C1.44772 1.68945 1 2.13717 1 2.68945C1 3.24174 1.44772 3.68945 2 3.68945Z" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <!-- Menu -->
        <div class="menu hidden absolute bg-white shadow-lg rounded-md mt-2 py-2 w-32">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">تعديل</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">إضافة</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">حذف</a>
        </div>
    </div>
    <!-- Content -->
    <div class="flex items-center gap-x-2">
        <div style="${bgCard}" class=" w-[50px] h-[50px] flex items-center justify-center rounded-[8px]">
            <img src="${this.getAttribute('img')}" alt="" class="w-[36px]">
        </div>
        <span class="font-medium text-[36px] text-[#12161C]">${this.getAttribute('count')}</span>
    </div>
    <!-- Trend -->
    <div class="my-2">
        <span class=" ${trend} text-[18px]">${this.getAttribute('rate')}%</span>
        <span class="text-[#C1C2C3] text-[12px]">تفاصيل الأسبوع</span>
    </div>
</div>
<!-- Bottom Button -->
<div class="${!this.getAttribute('more') && 'hidden'} bg-[#EBF2FF] hover:bg-blue-600 transition cursor-pointer text-[#377DFF] font-medium h-[56px] flex justify-between items-center p-[10px] text-sm">
    <p>التفاصيل</p>
    <svg class="cursor-pointer" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 8.68945H1M1 8.68945L8 15.6895M1 8.68945L8 1.68945" stroke="#377DFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</div> `
         }
        }

customElements.define('order-box', OrderBox);
