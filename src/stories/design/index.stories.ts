import "./ColorfulBoxText";

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
