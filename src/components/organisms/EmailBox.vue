
<script setup lang="ts">
import BHeading from "@/components/atoms/BHeading.vue";
import EmailForm from "@/components/molecules/EmailForm.vue";
import { isEnabledEmailInput as isEnabledEmailInputUtil } from "@/util/enabledUtil";
import type { ISimulation } from "@/types";
import { type PropType, computed } from "vue";

const props = defineProps({
  simulationData: { type: Object as PropType<ISimulation>, required: true },
})

const isEnabledEmailInput = computed(() => { return isEnabledEmailInputUtil(props.simulationData) });

</script>

<template>
  <div>
    <BHeading>
      <template v-slot:heading>メールアドレスをご入力ください</template>
    </BHeading>
    <div class="o_box-form">
      <EmailForm
        :simulationData="simulationData"
        :disabled="!isEnabledEmailInput"
      ></EmailForm>
    </div>
  </div>
</template>
