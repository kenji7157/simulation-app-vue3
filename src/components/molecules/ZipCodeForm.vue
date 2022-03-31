<script setup lang="ts">
import { computed, toRefs, watch, type PropType } from "vue";
import BLabel from "@/components/atoms/BLabel.vue";
import BZipCodeInput from "@/components/atoms/BZipCodeInput.vue";
import BErrorMessage from "@/components/atoms/BErrorMessage.vue";
import { areaTypes, type ISimulation } from "@/types";
import { areaCheck } from "@/server/api";

const props = defineProps({
  simulationData: { type: Object as PropType<ISimulation>, required: true }
})

const isError = computed(() => { return props.simulationData.area === areaTypes.OTHER});

const { firstZipCode, secondZipCode } = toRefs(props.simulationData);
watch([firstZipCode, secondZipCode], () => {
  props.simulationData.area = areaCheck(
    firstZipCode.value,
    secondZipCode.value
  );
})
</script>

<template>
  <div>
    <BLabel :is-required="true">
      <template v-slot:label>電気を使用する場所の郵便番号</template>
    </BLabel>
    <BZipCodeInput
      v-model:firstZipCode="props.simulationData.firstZipCode"
      v-model:secondZipCode="props.simulationData.secondZipCode"
    ></BZipCodeInput>
    <BErrorMessage v-if="isError">
      <template v-slot:message>サービスエリア対象外です。</template>
    </BErrorMessage>
  </div>
</template>