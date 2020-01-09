import { LitElement, html, property, customElement } from "lit-element";
import style from "./style.pcss";

@customElement("colorful-box-text")
export class ColorfulBoxText extends LitElement {
  @property({ type: String }) text = "";

  render() {
    return html`
      <style>
        ${style}
      </style>

      <div class="container hoge">
        <span class="colorful-box">${this.text}</span>
      </div>
    `;
  }
}
