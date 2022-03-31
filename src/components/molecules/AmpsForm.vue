
<script setup lang="ts">
import { computed, watch, type PropType } from "vue";
import BLabel from "@/components/atoms/BLabel.vue";
import BSelect from "@/components/atoms/BSelect.vue";
import type { ISimulation } from "@/types";
import { getAmpsOption } from "@/util/optionsUtil";

const props = defineProps({
  simulationData: { type: Object as PropType<ISimulation>, required: true }
})

const ampsOption = computed(() => { return getAmpsOption(props.simulationData) });

// NOTE: 配列の変更で実行するには、 deep オプションを指定する必要がある
https://v3.ja.vuejs.org/guide/migration/watch.html#%E6%A6%82%E8%A6%81
watch(ampsOption, () => {
  if (ampsOption.value.length > 0) {
    props.simulationData.amps = ampsOption.value[0].value
  } else {
    props.simulationData.amps = ""
  }
}, {deep:true});

</script>

<template>
  <div>
    <BLabel :is-required="true">
      <template v-slot:label>契約容量</template>
    </BLabel>
    <BSelect
      v-model:value="props.simulationData.amps"
      :disabled="ampsOption.length === 0"
      :options="ampsOption"
    ></BSelect>
  </div>
</template>
