import { LitElement, html, css, property, customElement } from "lit-element";
import * as style from "./style.postcss";

@customElement("simple-greeting")
export class SimpleGreeting extends LitElement {
  @property() name = "World";

  static styles = css`
    ${style}
  `;

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
    `;
  }
}
