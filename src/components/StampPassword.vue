<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { Icon } from "@iconify/vue";
const password = ref("");
const stamps = ref<string[]>([]);
const charactor = ref<HTMLSpanElement>();
const charactorWidth = ref(0);

const randomIcon = () => {
  const icons = [
    "mingcute:diamond-square-fill",
    "mingcute:square-fill",
    "mingcute:bear-fill",
    "mingcute:birthday-2-fill",
    "mingcute:bomb-fill",
    "mingcute:cactus-fill",
    "mingcute:car-fill",
    "mingcute:cat-fill",
    "mingcute:chess-fill",
    "mingcute:clubs-fill",
    "mingcute:cookie-man-fill",
    "mingcute:emoji-fill",
    "mingcute:gift-fill",
    "mingcute:heart-fill",
    "mingcute:moai-fill",
    "mingcute:mickeymouse-fill",
    "mingcute:mountain-fill",
    "mingcute:pig-money-fill",
  ];
  return icons[Math.floor(Math.random() * icons.length)];
};

watch(password, (value) => {
  if (value.length > stamps.value.length) {
    stamps.value.push(randomIcon());
  } else if (value.length < stamps.value.length) {
    stamps.value.pop();
  }
});

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  password.value = target.value;
};
const onKeyDown = (e: KeyboardEvent) => {
  const target = e.target as HTMLInputElement;
};
const onKeyUp = (e: KeyboardEvent) => {
  const target = e.target as HTMLInputElement;
};
const onFocus = (e: Event) => {
  const target = e.target as HTMLInputElement;
};
const onBlur = (e: Event) => {
  const target = e.target as HTMLInputElement;
};

onMounted(() => {
  charactorWidth.value = charactor.value?.offsetWidth || 0;
});
</script>
<template>
  <div class="stamp-password">
    <span class="dummy-charactor" ref="charactor">0</span>
    <input
      type="password"
      :style="{ letterSpacing: 40 - charactorWidth + 3 + 'px' }"
      v-model="password"
      @input="onInput"
      @keydown="onKeyDown"
      @keyup="onKeyUp"
      @focus="onFocus"
      @blur="onBlur"
    />
    <div class="stamps">
      <Icon
        width="40"
        height="40"
        color="#ccc"
        class="stamp"
        v-for="stampName in stamps"
        :icon="stampName"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@keyframes pop {
  0% {
    transform: scale(0.5);
  }
  90% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.stamp-password {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
}
.dummy-charactor {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 40px;
  font-family: monospace;
  opacity: 0;
}
input[type="password"] {
  background: #000000;
  width: 450px;
  font-size: 40px;
  font-family: monospace;
  padding: 1rem 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  letter-spacing: 0;
  color: transparent;
  caret-color: #ccc;
  caret-shape: block;
}
.stamps {
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 1rem 1rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  gap: 2px;
  .stamp {
    flex: 0 0 40px;

    animation: pop 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s 1 normal forwards;
  }
}
</style>
