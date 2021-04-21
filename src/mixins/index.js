export default {
  methods: {
    restrictToAlphabet (charCode, evt) {
      // Key event is for a browser shortcut
      if (evt.metaKey || evt.ctrlKey) {
        return true
      }
      // If keycode is a space
      if (evt.which === 32) {
        return false
      }
      // If keycode is a special char (WebKit)
      if (evt.which === 0) {
        return true
      }
      // If char is a special char (Firefox)
      if (evt.which < 33) {
        return true
      }
      const input = String.fromCharCode(charCode)
      // Char is a number or a space
      if ((/[\d\s]/.test(input))) {
        return true
      } else {
        evt.preventDefault()
        return false
      }
    },
    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
