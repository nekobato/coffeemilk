import { LitElement, html, property, customElement } from "lit-element";
import style from "./style.pcss";

@customElement("horror-text")
export class HorrorText extends LitElement {
  @property({ type: String }) text = "";

  chars: string[] = [];

  randomFromMinMax(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  styles() {
    const styles = this.chars.map(_ => {
      return {
        display: "inline-block",
        transform: `scale(${this.randomFromMinMax(
          0.7,
          1.2
        )}, ${this.randomFromMinMax(0.4, 1.6)})`,
        color: `hsl(${this.randomFromMinMax(
          0,
          20
        )}, 10%, ${this.randomFromMinMax(0, 60)}%)`
      };
    });
    return styles;
  }

  // updated(propMap: any) {
  //   propMap.forEach(() => {});
  //   this.chars = this.text.split("");
  //   console.log(this.chars);
  // }

  render() {
    const styles = this.styles();
    return html`
      <style>
        ${style}
      </style>
      <span>
        ${this.chars.map((char, i) => {
          return `<span style="${styles[i]}">${char}</span>`;
        })}
      </span>
    `;
  }
}
