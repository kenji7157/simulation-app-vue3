<script setup lang="ts">
import { computed } from "vue";

const emits = defineEmits(['update:value'])

const props = defineProps({
  value: { type: [String, Number]  },
  disabled: { type: Boolean, default: false },
});

const inputValue = computed<string | number | undefined>({
  get: () => {return props.value},
  set: (v) => {
    emits("update:value", v);
  }
})
</script>

<template>
  <div class="a_input-box" :class="{ disabled: props.disabled }">
    <input class="a_input-box_input" :disabled="props.disabled" v-model="inputValue" />
  </div>
</template>