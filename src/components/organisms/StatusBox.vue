
<script setup lang="ts">
import BHeading from "@/components/atoms/BHeading.vue";
import CompanyForm from "@/components/molecules/CompanyForm.vue";
import PlanForm from "@/components/molecules/PlanForm.vue";
import AmpsForm from "@/components/molecules/AmpsForm.vue";
import type { ISimulation } from "@/types";
import type { PropType } from "vue";

const props = defineProps({
  simulationData: { type: Object as PropType<ISimulation>, required:true}
})

</script>

<template>
  <div>
    <BHeading>
      <template v-slot:heading>電気のご使用状況について教えてください</template>
    </BHeading>

    <div class="o_box-form">
      <CompanyForm :simulationData="props.simulationData"></CompanyForm>
    </div>
    <div class="o_box-form">
      <PlanForm :simulationData="props.simulationData"></PlanForm>
    </div>
    <div class="o_box-form">
      <AmpsForm :simulationData="props.simulationData"></AmpsForm>
    </div>
  </div>
</template>
