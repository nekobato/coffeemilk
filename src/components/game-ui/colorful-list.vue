<template>
  <ul class="list">
    <li class="item-1">
      <div class="inner">
        <span class="name">List Name 1</span>
      </div>
    </li>
    <li class="item-2">
      <div class="inner">
        <span class="name">List Name 1</span>
      </div>
    </li>
    <li class="item-3">
      <div class="inner">
        <span class="name">List Name 1</span>
      </div>
    </li>
    <li class="item-4">
      <div class="inner">
        <span class="name">List Name 1</span>
      </div>
    </li>
    <li class="item-5">
      <div class="inner">
        <span class="name">List Name 1</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["list"],
};
</script>

<style scoped>
.list {
  box-sizing: border-box;
  margin: 0;
  padding: 8px;
  height: 100%;
  background: #efefef;
}

.list li {
  position: relative;
  list-style: none;
  margin: 8px 0 0;
  height: 48px;
  box-shadow: 0 2px 2px rgba(211, 186, 186, 0.64);
  border: 2px solid #fff;
  border-radius: 8px;
  font-size: 20px;
  background: url(../../assets/images/photo_mono.png) center center;
}

.inner {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  width: 100%;
  height: 100%;
}

li span {
  color: #fff;
}

.list li.item-1::before {
  content: "";
  position: absolute;
  top: -4px;
  bottom: -4px;
  left: -4px;
  right: -4px;
  background: inherit;
  filter: opacity(80%) blur(8px);
}

.list li.item-2::before,
.list li.item-3::before,
.list li.item-4::before,
.list li.item-5::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: 7px;
}

.list li.item-2::before {
  filter: invert(16%) sepia(72%) hue-rotate(160deg) saturate(300%) contrast(80%);
}

.list li.item-3::before {
  filter: invert(16%) sepia(72%) hue-rotate(240deg) saturate(300%) contrast(80%);
}

.list li.item-4::before {
  filter: invert(16%) sepia(72%) hue-rotate(80deg) saturate(300%) contrast(80%);
}

.list li.item-5::before {
  filter: invert(16%) sepia(72%) hue-rotate(320deg) saturate(300%) contrast(80%);
}
</style>
