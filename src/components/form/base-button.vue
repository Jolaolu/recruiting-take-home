<template>
  <button
    role="button"
    :disabled="disabled"
    @click="$emit('clicked')"
    class="btn"
  >
    <slot />
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
.btn {
  color: $white;
  border: none;
  border-radius: 0.3rem;
  letter-spacing: 0.0166154px;
  box-shadow: $box-shadow;
  padding: 1.1rem 4.7rem;
  overflow: hidden;
  z-index: 999;
  position: relative;
  p {
    font-weight: bold;
  }
  &:hover {
    color: $primary-color;
    will-change: background-color;
  }
  &:hover:before {
    position: absolute;
    z-index: -999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    -webkit-animation: active 0.3s ease-in;
    animation: active 0.3s ease-in;
    background-color: $white;
  }
  @keyframes active {
    from {
      transform: translateX(-300px);
      border-top-right-radius: 1.5rem;
      border-bottom-right-radius: 1.5rem;
    }
    to {
      border-top-right-radius: 2.5rem;
      border-bottom-right-radius: 2.5rem;
    }
  }
}
</style>
