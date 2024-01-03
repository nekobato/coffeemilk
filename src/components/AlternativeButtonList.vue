<template>
  <ul class="list">
    <li v-for="(item, index) in list" :key="index">
      {{ item.name }}
      <button class="alternative-button"></button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
defineProps<{
  list: {
    name: string;
  }[];
}>();
</script>

<style scoped>
.list {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.list li {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0 16px;
  height: 48px;
  border: 1px solid #ddd;
  font-size: 15px;
}

.list li:nth-child(2n-1) .alternative-button {
  right: 24px;
}

.list li:nth-child(2n) .alternative-button {
  right: -24px;
}

.alternative-button {
  position: relative;

  width: 64px;
  height: 64px;
  background: inherit;
  border: 1px solid #ddd;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
  outline: none;
}

.list li {
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  margin: 0;
  height: 48px;
  background: #fff;
  border: 1px solid #ddd;
}
</style>
