<script setup lang="ts">

defineProps({
  send: { type: Function , required: true },
  disabled: { type: Boolean, default: false },
})

</script>

<template>
  <div class="p_footer">
    <button
      class="p_footer_button"
      :class="{ disabled: disabled }"
      :disabled="disabled"
      @click="send()"
    >
      結果を見る
      <div class="p_footer_icon">
        <i class="fas fa-chevron-circle-right"></i>
      </div>
    </button>
  </div>
</template>

<style scoped lang="scss">
.p_footer {
  padding: 1rem 2rem 3rem 2rem;
  text-align: center;

  &_button {
    cursor: pointer;
    position: relative;
    font-size: 1.6rem;
    height: 4rem;
    width: 100%;
    color: #fff;
    border: none;
    outline: none;
    background-color: #445a93;
    border-radius: 0.4rem;

    &:disabled {
      cursor: default;
    }
  }

  &_icon {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
  }
}
</style>
