<template>
  <button
    role="button"
    :disabled="disabled"
    @click="$emit('clicked')"
    class="btn"
  >
  <slot/>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  emits: ['clicked'],
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.btn{
  color: $white;
  border: none;
  border-radius: .3rem;
  letter-spacing: 0.0166154px;
  box-shadow: $box-shadow;
  padding: 1.1rem 4.7rem ;
  p{
    font-weight: bold;
  }
}
</style>
