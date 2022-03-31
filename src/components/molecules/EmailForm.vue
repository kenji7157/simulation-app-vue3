<script setup lang="ts">
import BLabel from "@/components/atoms/BLabel.vue";
import BInput from "@/components/atoms/BInput.vue";
import BErrorMessage from "@/components/atoms/BErrorMessage.vue";
import { isValidEmail as isValidEmailUtil } from "@/util/validationUtil";
import type { ISimulation } from "@/types";
import  { type PropType ,computed,toRefs,watch } from "vue";

const props = defineProps({
  simulationData: { type: Object as PropType<ISimulation>, required: true },
  disabled: { type: Boolean, default: false },
})

const isError = computed(() => { return!isValidEmailUtil(props.simulationData.email)});

</script>

<template>
  <div>
    <BLabel :is-required="true"></BLabel>
    <BInput v-model:value="props.simulationData.email" :disabled="props.disabled"></BInput>
    <BErrorMessage v-if="isError">
      <template v-slot:message
        >メールアドレスを正しく入力してください。</template
      >
    </BErrorMessage>
  </div>
</template>

