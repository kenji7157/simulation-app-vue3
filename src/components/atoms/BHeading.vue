<template>
  <span class="a_heading">
    <slot name="heading"></slot>
  </span>
</template>

<style scoped lang="scss">
.a_heading {
  display: flex;
  font-weight: bold;
  border-left: 0.4rem solid $orange;
  font-size: 1.6rem;
  padding-left: 1.2rem;
  height: 3.5rem;
  align-items: center;
}
</style>
