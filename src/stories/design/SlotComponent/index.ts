import { LitElement, html, customElement } from "lit-element";
import style from "./style.pcss";

@customElement("slot-component")
export class SlotComponent extends LitElement {
  render() {
    return html`
      <style>
        ${style}
      </style>

      <div class="container">
        <div>
          <span>This is Shadow</span>
        </div>
        <div>
          <slot class="text" name="text"></slot>
        </div>
      </div>
    `;
  }
}
