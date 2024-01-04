<template>
  <div class="button-list">
    <div class="button type-1">
      <span>ボタン</span>
    </div>

    <div class="button type-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <circle cx="4.5" cy="9.5" r="2.5" />
        <circle cx="9" cy="5.5" r="2.5" />
        <circle cx="15" cy="5.5" r="2.5" />
        <circle cx="19.5" cy="9.5" r="2.5" />
        <path
          d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"
        />
      </svg>
      <span>ボタン</span>
    </div>
    <div class="button-container type-3">
      <div class="button type-3">
        <span>ボタン</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.button-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
}
.button-list > * {
  margin: 16px 0 0;
}
.button {
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  height: 100%;
  border: 2px solid #fff;
  border-radius: 8px;
  width: 120px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: transform 0.04s ease-out;
}

.button::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  right: 3px;
  bottom: 3px;
  background: transparent;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
}

.button::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.08),
    rgba(255, 255, 255, 0.24)
  );
}

.button:active {
  transform: scale(1.1);
}

.button.type-1 {
  background: hsl(210, 80%, 60%);
  height: 40px;

  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-color: hsl(210, 80%, 50%);
}
.button.type-1::before {
  border-color: hsl(210, 80%, 50%);
}

.button.type-2 {
  height: 64px;
  background: hsl(210, 80%, 60%);
  color: #fff;
  font-size: 11px;
  font-weight: bold;
  border-color: hsl(210, 80%, 50%);
}
.button.type-2::before {
  border-color: hsl(210, 80%, 50%);
}
.button.type-2 svg {
  fill: #fff;
}

.button-container.type-3 {
  perspective: 10px;
}
.button.type-3 {
  background: hsl(210, 80%, 60%);
  height: 40px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-color: hsl(210, 80%, 50%);
}
.button.type-3::before {
  border-color: hsl(210, 80%, 50%);
}
</style>
