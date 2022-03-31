<script setup lang="ts">
import { computed, ref } from "vue";
import { halfWidthNumber } from "@/util/stringUtil";

const emits = defineEmits(['update:firstZipCode', 'update:secondZipCode'])

const props = defineProps({
  firstZipCode: { type: String, required: true },
  secondZipCode: { type: String, required: true },
})

// NOTE: templateから[ref="secondZipCode"]のエレメントを取得
const secondZipCodeRef = ref<HTMLImageElement>();
const inputFirstZipCode = computed({
  get: () => props.firstZipCode,
  set: v => {
    const convertedValue = halfWidthNumber(v);
    if (/^[0-9]{3}$/.test(convertedValue)) {
      secondZipCodeRef.value?.focus();
    }
    emits("update:firstZipCode", convertedValue);
  }
})

const inputSecondZipCode = computed({
  get: () => { return props.secondZipCode },
  set: v => {
    emits("update:secondZipCode", halfWidthNumber(v));
  }
})


</script>

<template>
  <div class="a_input-box">
    <input
      class="a_zipcode-input_input a_input-box_input"
      maxlength="3"
      v-model="inputFirstZipCode"
    />
    <div class="a_zipcode-input_hyphen">-</div>
    <input
      ref="secondZipCodeRef"
      class="a_zipcode-input_input a_input-box_input"
      maxlength="4"
      v-model="inputSecondZipCode"
    />
  </div>
</template>

<style scoped lang="scss">
.a_zipcode-input {
  &_input {
    text-align: center;
  }
  &_hyphen {
    padding: 0.8rem;
    font-size: 1.5rem;
    background: $border;
  }
}
</style>
