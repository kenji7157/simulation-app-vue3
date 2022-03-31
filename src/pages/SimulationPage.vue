<script setup lang="ts">
import { reactive, computed } from "vue";
import { companyTypes, planTypes, type ISimulation, areaTypes } from "@/types";
import TheHeader from "@/components/parts/TheHeader.vue";
import ZipCodeBox from "@/components/organisms/ZipCodeBox.vue";
import StatusBox from "@/components/organisms/StatusBox.vue";
import PayBox from "@/components/organisms/PayBox.vue";
import EmailBox from "@/components/organisms/EmailBox.vue";
import TheFooter from "@/components/parts/TheFooter.vue";
import { sendSimulationData } from "@/server/api";
import { isEnabledSendButton as isEnabledSendButtonUtil } from "@/util/enabledUtil";

const simulationData = reactive<ISimulation>({
  firstZipCode: "",
  secondZipCode: "",
  area: areaTypes.UNSELECTED,
  company: companyTypes.UNSELECTED,
  plan: planTypes.UNSELECTED,
  amps: "",
  pay: "",
  email: "",
});

const isEnabledSendButton = computed(() => { return isEnabledSendButtonUtil(simulationData); });

function send(): void {
  sendSimulationData(simulationData);
}

</script>

<template>
  <div>
    <!-- ヘッダー -->
    <TheHeader></TheHeader>
    <!-- 郵便番号 -->
    <div class="simulation-box">
      <ZipCodeBox :simulationData="simulationData"></ZipCodeBox>
    </div>
    <!-- 使用状況 -->
    <div class="simulation-box">
      <StatusBox :simulationData="simulationData"></StatusBox>
    </div>
    <!-- 支払金額 -->
    <div class="simulation-box">
      <PayBox :simulationData="simulationData"></PayBox>
    </div>
    <!-- メールアドレス -->
    <div class="simulation-box">
      <EmailBox :simulationData="simulationData"></EmailBox>
    </div>
    <!-- フッター -->
    <TheFooter :send="send" :disabled="!isEnabledSendButton"></TheFooter>
  </div>
</template>

<style scoped lang="scss">
.simulation-box {
  background: $white;
  padding: 1.6rem 0 3rem 0;
  margin-bottom: 2rem;
}
</style>
