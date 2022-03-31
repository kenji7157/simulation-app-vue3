<script setup lang="ts">
import type { PropType } from "vue";
import BHeading from "@/components/atoms/BHeading.vue";
import ZipCodeForm from "@/components/molecules/ZipCodeForm.vue";
import type { ISimulation } from "@/types";

const props = defineProps({
  simulationData: { type: Object as PropType<ISimulation>, required:true}
})
</script>


<template>
  <div>
    <BHeading>
      <template v-slot:heading>郵便番号をご入力ください</template>
    </BHeading>
    <div class="o_box-form">
      <ZipCodeForm :simulationData="props.simulationData"></ZipCodeForm>
    </div>
  </div>
</template>
