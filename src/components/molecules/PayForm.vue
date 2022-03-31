
<script setup lang="ts">
import BLabel from "@/components/atoms/BLabel.vue";
import BInput from "@/components/atoms/BInput.vue";
import BErrorMessage from "@/components/atoms/BErrorMessage.vue";
import type { ISimulation } from "@/types";
import { isValidPay } from "@/util/validationUtil";
import { halfWidthNumber } from "@/util/stringUtil";
import { type PropType, computed } from "vue";

const props = defineProps({
  simulationData: { type: Object as PropType<ISimulation>, required: true },
  disabled: { type: Boolean, default: false },
})

const isError = computed(() => { return !isValidPay(props.simulationData.pay)});

function setPayValue(value: string | number): void {
  props.simulationData.pay = halfWidthNumber(value.toString()).replace(/^0+/, "");
}

</script>

<template>
  <div>
    <BLabel :is-required="true">
      <template v-slot:label>先月の電気代は？</template>
    </BLabel>
    <div class="m_pay-form_input">
      <BInput v-model:value="props.simulationData.pay" :disabled="props.disabled" @input="setPayValue(simulationData.pay)"></BInput>
      <span class="m_pay-form_unit">円</span>
    </div>
    <BErrorMessage v-if="isError">
      <template v-slot:message>電気代を正しく入力してください。</template>
    </BErrorMessage>
  </div>
</template>

<style scoped lang="scss">
.m_pay-form {
  &_input {
    display: flex;
    align-items: center;
  }

  &_unit {
    font-size: 1.2rem;
    margin-left: 1rem;
    flex-basis: 5%;
  }
}
</style>
>
