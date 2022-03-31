<script setup lang="ts">
import { computed, type PropType } from "vue";
import BHeading from "@/components/atoms/BHeading.vue";
import PayForm from "@/components/molecules/PayForm.vue";
import { isEnabledPayInput as isEnabledPayInputUtil } from "@/util/enabledUtil";
import type { ISimulation } from "@/types";

const props = defineProps({
  simulationData: { type: Object as PropType<ISimulation>, required:true}
})

const isEnabledPayInput = computed(() => { return isEnabledPayInputUtil(props.simulationData)});

</script>

<template>
  <div>
    <BHeading>
      <template v-slot:heading
        >現在の電気の使用状況について教えてください</template
      >
    </BHeading>
    <div class="o_box-form">
      <PayForm
        :simulationData="props.simulationData"
        :disabled="!isEnabledPayInput"
      ></PayForm>
    </div>
  </div>
</template>