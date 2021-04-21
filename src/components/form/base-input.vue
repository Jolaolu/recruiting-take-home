<template>
  <div class="input">
    <label class="input__label" for="input">
      <p>{{ label }}</p>
    </label>
    <input
      v-if="!readOnly"
      :readonly="readOnly"
      autofocus
      autocomplete="off"
      class="input__field"
      :class="{ 'input__field-alternate': readOnly }"
      name="number"
      id="input"
      v-model="inputValue"
      :type="inputType"
      :placeholder="placeholder"
      :maxlength="totalCharacters"
      @keypress="formatText($event)"
      @paste="formatText($event)"
      @input="formatText($event)"
      @change="formatText($event)"
    />
    <textarea
      v-else
      v-model="inputValue"
      name="number"
      id="input"
      :placeholder="placeholder"
      :class="{ 'input__field-alternate': readOnly }"
      :readonly="readOnly"
      cols="45"
    ></textarea>
  </div>
</template>
<script>
import Mixins from '@/mixins/index'
export default {
  data () {
    return {
      inputValue: ''
    }
  },
  mixins: [Mixins],
  props: {
    label: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    totalCharacters: {
      type: Number,
      required: false
    },
    // minimumNumber: {
    //   type: Number,
    //   default: 0,
    //   required: false
    // },
    // maximumNumber: {
    //   type: Number,
    //   default: 999999999,
    //   required: false
    // },
    readOnly: {
      type: Boolean,
      required: false
    },
    value: {
      type: String
    }
  },
  watch: {
    inputValue (newVal) {
      this.$emit('value-change', newVal)
    },
    value (newVal) {
      this.inputValue = this.capitalizeFirstLetter(newVal)
    }
  },
  methods: {
    formatText (evt) {
      const charCode = evt.which ? evt.which : evt.keyCode
      if (this.inputType === 'tel') {
        if (evt.type === 'keypress') {
          this.restrictToAlphabet(charCode, evt)
        }
        // Only format if input is a number
        const digit = String.fromCharCode(evt.which)
        if (!/^\d+$/.test(digit)) {
          evt.preventDefault()
          return
        }
        if (this.inputValue.length > this.totalCharacters) {
          this.inputValue = this.inputValue.slice(0, this.totalCharacters)
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.input {
  &__label {
    p {
      margin-bottom: 1rem;
      font-weight: bold;
    }
  }
  &__field {
    width: 100%;
    border: $border;
    padding: 1.1rem 1rem;
    font-size: 1.6rem;
    line-height: 1.8rem;
    &::placeholder {
      font-size: 1.6rem;
      line-height: 1.8rem;
      color: $grey;
    }
    &-alternate {
      font-size: 1.6rem;
      line-height: 1.8rem;
      border: none;
      outline: none;
      padding: 0;
      word-wrap: break-word;
      word-break: break-all;
      height: 35px;
      resize: none;
      &::placeholder {
        font-size: 1.6rem;
        line-height: 1.8rem;
        color: $grey;
    }
    }
  }
}
</style>
