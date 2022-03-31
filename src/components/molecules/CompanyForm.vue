
<script setup lang="ts">
import { computed, watch, type PropType } from "vue";
import BLabel from "@/components/atoms/BLabel.vue";
import BSelect from "@/components/atoms/BSelect.vue";
import BErrorMessage from "@/components/atoms/BErrorMessage.vue";
import { type ISimulation, companyTypes } from "@/types";
import { getCompanyOptions } from "@/util/optionsUtil";

const props = defineProps({
  simulationData: { type: Object as PropType<ISimulation>, required: true }
})

const companyOptions = computed(() => { return getCompanyOptions(props.simulationData.area) });

const isOtherCompany = computed(() => { return props.simulationData.company === companyTypes.OTHER });

// NOTE: 配列の変更で実行するには、 deep オプションを指定する必要がある
https://v3.ja.vuejs.org/guide/migration/watch.html#%E6%A6%82%E8%A6%81
watch(companyOptions, () => {
  if (companyOptions.value.length > 0) {
    props.simulationData.company = companyOptions.value[0].value
  } else {
    props.simulationData.company = companyTypes.UNSELECTED
  }
}, {deep:true});

</script>

<template>
  <div>
    <BLabel :is-required="true">
      <template v-slot:label>電力会社</template>
    </BLabel>
    <BSelect
      v-model:value="props.simulationData.company"
      :disabled="companyOptions.length === 0"
      :options="companyOptions"
    ></BSelect>
    <BErrorMessage v-if="isOtherCompany">
      <template v-slot:message>シミュレーション対象外です。</template>
    </BErrorMessage>
  </div>
</template>