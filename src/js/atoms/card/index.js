import { LitElement, html } from "lit";

export class Card extends LitElement {
  static properties = {
    href: { type: String },
    title: { type: String },
    img: { type: String },
  };

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <a href=${this.href}>
        <div
          class="border flex flex-col justify-center items-center p-[24px] gap-[8px] rounded-[8px] border-[#EBEBEC]"
        >
          <img src=${this.img} class="w-[83px] h-[83px] rounded-[12px]" />
          <h3 class="text-[18px] font-bold text-[#121212]">${this.title}</h3>
        </div>
      </a>
      
    `;
  }
}
