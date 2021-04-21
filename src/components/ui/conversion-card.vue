<template>
  <article class="card">
    <h1 class="card__heading">Convert integer to text</h1>
    <form @submit.prevent="convertNumber">
      <base-input
        :totalCharacters="9"
        @value-change="inputValue = $event"
        placeholder="Enter a number here"
        inputType="tel"
        label="Enter your favorite number"
      />
      <div class="card__result">
          <base-input
          :readOnly="true"
          class="card__result-data"
          placeholder="Your number will show here"
          label="Your number in text"
          inputType="text"
          :value="convertedValue"
        />
      </div>
      <div class="card__btn">
        <base-button :disabled="inputValue.length < 1">
          <p>Convert</p>
        </base-button>
      </div>
    </form>
  </article>
</template>
<script>
export default {
  name: 'ConversionCard',
  components: {
    BaseInput: () => import('@/components/form/base-input'),
    BaseButton: () => import('@/components/form/base-button')
  },
  data () {
    return {
      inputValue: '',
      convertedValue: null
    }
  },
  methods: {
    convertNumber: function () {
      // console.log(numToWords(this.inputValue))
      // this.convertedValue = numToWords(this.inputValue)
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  z-index: 1;
  background: $white;
  padding: 6rem 5rem 5.2rem;
  width: 50.6rem;
  height: 43.3rem;
  box-shadow: $box-shadow;
  border-radius: 0.5rem;
  &__heading {
    color: $primary-color;
    margin-bottom: 5rem;
  }
  &__result {
    margin-top: 3rem;
    &-heading {
      font-size: 1.6rem;
      line-height: 1.8rem;
      letter-spacing: $letter-spacing;
      margin-bottom: 1rem;
    }
    &-data {
    }
  }
  &__btn {
    display: flex;
    justify-content: flex-end;
    margin-top: 5rem;
  }
}
</style>
