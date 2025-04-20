class DashBox extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const button = this.getAttribute('firstSec')
      ? `<a href="${this.getAttribute('href')}">
          <button class="bg-[#377DFF] hover:bg-[#2965d9] transition w-full text-[14px] p-[16px] rounded-[6px] flex gap-[8px] justify-center items-center mt-3 font-bold">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5.68945V19.6895M5 12.6895H19"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="text-white">انشىء طلب خدمة</p>
          </button>
          </a>
        `
      : `
      <a href="${this.getAttribute('href')}">
          <button
            class="border border-[#377DFF] hover:bg-gray-50 w-full text-[14px] p-[16px] rounded-[6px] flex gap-[8px] justify-center items-center mt-3 font-bold"
          >
            <p class="text-[#377DFF]">${this.getAttribute('button')}</p>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 8.68945H1.5M1.5 8.68945L8.5 15.6895M1.5 8.68945L8.5 1.68945"
                stroke="#377DFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          </a>
        `;


    this.innerHTML = `
      <div>
        <div
          class="w-[75px] h-[75px] rounded-full flex justify-center items-center"
          style="background-color: ${this.getAttribute('bg')}"
        >
          <img
            src=${this.getAttribute('img')}
            alt=""
            class="w-[33px]"
          />
        </div>
        <h3 class="text-[18px] text-[#12161C] font-bold my-2">${this.getAttribute('title')}</h3>
        <p class="min-h-[100px] text-[14px] text-[#414447]">${this.getAttribute('content')}</p>
        ${button}
      </div>
    `
         }
        }

customElements.define('dash-box', DashBox);
