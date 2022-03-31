<script setup lang="ts">
import { watch, type PropType, computed } from "vue";
import BLabel from "@/components/atoms/BLabel.vue";
import BSelect from "@/components/atoms/BSelect.vue";
import BInfoMessage from "@/components/atoms/BInfoMessage.vue";
import { type ISimulation, planTypes } from "@/types";
import { getPlanOptions } from "@/util/optionsUtil";

const props = defineProps({
  simulationData: { type: Object as PropType<ISimulation>, required: true }
})

const planOptions = computed(() => { return getPlanOptions(props.simulationData.company) });

const explain = computed(() => {
  const target = planOptions.value.find((option) => {
    return option.value === props.simulationData.plan;
  });
  return target?.explain;
})

// NOTE: 配列の変更で実行するには、 deep オプションを指定する必要がある
https://v3.ja.vuejs.org/guide/migration/watch.html#%E6%A6%82%E8%A6%81
watch(planOptions, () => {
  if (planOptions.value.length > 0) {
    props.simulationData.plan = planOptions.value[0].value
  } else {
    props.simulationData.plan = planTypes.UNSELECTED
  }
}, { deep: true });

</script>

<template>
  <div>
    <BLabel :is-required="true">
      <template v-slot:label>プラン</template>
    </BLabel>
    <BSelect
      v-model:value="props.simulationData.plan"
      :disabled="planOptions.length === 0"
      :options="planOptions"
      :explain="explain"
    ></BSelect>
    <BInfoMessage v-if="explain">
      <template v-slot:message>{{ explain }}</template>
    </BInfoMessage>
  </div>
</template>

