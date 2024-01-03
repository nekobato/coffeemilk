<template>
  <canvas class="canvas" ref="canvas" />
</template>

<script>
export default {
  created() {
    const canvas = this.$refs("canvas");
    const ctx = canvas.getContext("2d");
  },
};
</script>

<style scoped>
.canvas {
  width: 100%;
  height: 100%;
}
</style>
