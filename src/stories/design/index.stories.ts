import "./ColorfulBoxText";
import "./HorrorText";
import "./SlotComponent";

// customElements.define("box", box);
// customElements.whenDefined("box");

// Promise.all([customElements.whenDefined("x-box")]).then(() => {
//   document.querySelector("x-box").style.display = "block";
// });

export default {
  title: "Design"
};

export const colorfulBoxText = () => {
  return `
    <link href="https://fonts.googleapis.com/css?family=VT323&display=swap" rel="stylesheet">
    <style>
      colorful-box-text {
        margin-left: 8px;
        font-family: 'VT323', monospace;
      }
    </style>
    <colorful-box-text text="D"></colorful-box-text>
    <colorful-box-text text="E"></colorful-box-text>
    <colorful-box-text text="A"></colorful-box-text>
    <colorful-box-text text="D"></colorful-box-text>
  `;
};

export const horrorText = () => {
  return `
    <style>
      horror-text {
        font-size: 16px;
      }
    </style>
    <horror-text text="あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波"></horror-text>
  `;
};

export const SlotComponent = () => {
  return `
    <div>
      <slot-component>
        <span slot="text">This is slot</span>
      </slot-component>
      <div class="text">This is outer div</div>
    </div>
  `;
};
