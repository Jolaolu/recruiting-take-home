import { shallowMount } from '@vue/test-utils'
import BaseInput from '@/components/form/base-input.vue'

describe('base-input.vue', () => {
  const placeholder = 'new message'
  const inputType = 'tel'
  const label = 'Your input'
  it('renders props.placeholder when passed', () => {
    const wrapper = shallowMount(BaseInput, {
      propsData: { placeholder, inputType, label }
    })
    expect(wrapper.find('.input__field').attributes('placeholder')).toMatch(placeholder)
  })
})
