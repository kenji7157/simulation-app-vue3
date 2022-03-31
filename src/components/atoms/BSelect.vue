
<script setup lang="ts">
import type { SelectOption } from "@/types";
import { computed, watch, type PropType, type StyleValue } from "vue";

const emits = defineEmits(['update:value'])

const props = defineProps({
  value: { type: String, required: true },
  disabled: { type: Boolean, default: false },
  options: { type: Array as PropType<(SelectOption<unknown> & { explain?: string })[]>, default: [] },
  explain: { type: String, default: "" },
})

const selectValue = computed({
  get: () => props.value,
  set: (v: string) => {
    emits("update:value", v);
  }
})

const styleVariables = computed(() => {
  return { "--border-radius": props.explain ? "0.4rem 0.4rem 0 0" : "0.4rem" } as StyleValue
})
</script>

<template>
  <div class="a_select" :class="{ disabled: props.disabled }" :style="styleVariables">
    <div class="a_select_icon">
      <i class="fas fa-chevron-down fa-2x"></i>
    </div>
    <select class="a_select_select" :disabled="props.disabled" v-model="selectValue">
      <option
        v-for="(option, index) in options"
        :value="option.value"
        :selected="option.selected"
        :key="index"
      >{{ option.label }}</option>
    </select>
  </div>
</template>

<style scoped lang="scss">
$--border-radius: 0.4rem;
.a_select {
  cursor: pointer;
  display: flex;
  border: 0.4rem solid $border;
  border-radius: var(--border-radius);
  position: relative;

  &_icon {
    position: absolute;
    top: 0.7rem;
    left: 0.7rem;
    color: $orange;
  }

  &_select {
    cursor: pointer;
    width: 100%;
    border: none;
    outline: none;
    background: $white;
    padding: 1rem 0rem 1rem 3.3rem;

    // 右端のデフォルトの記号を削除
    -webkit-appearance: none; /* ベンダープレフィックス(Google Chrome、Safari用) */
    -moz-appearance: none; /* ベンダープレフィックス(Firefox用) */
    appearance: none; /* 標準のスタイルを無効にする */

    &:focus {
      // https://ics.media/entry/200406/
      box-shadow: $box-shadow-focus;
    }

    &:disabled {
      cursor: default;
    }
  }
}
</style>
