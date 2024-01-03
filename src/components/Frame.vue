<template>
  <div class="frame">
    <slot />
  </div>
</template>

<style scoped>
.frame {
  width: 540px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(127, 127, 127, 0.5);
  background-image: linear-gradient(
    45deg,
    transparent 25%,
    rgba(255, 255, 255, 0.03) 25%,
    rgba(255, 255, 255, 0.03) 50%,
    transparent 50%,
    transparent 75%,
    rgba(255, 255, 255, 0.03) 75%,
    rgba(255, 255, 255, 0.03) 100%
  );
  background-size: 28.28px 28.28px;
}
</style>
