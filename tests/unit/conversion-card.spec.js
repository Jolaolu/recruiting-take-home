import { mount } from '@vue/test-utils'
import ConversionCard from '@/components/ui/conversion-card.vue'

describe('conversion-card.vue', () => {
  const wrapper = mount(ConversionCard)
  it('button disabled without correct input', () => {
    wrapper.find('.input__field').setValue('')
    const button = wrapper.find('button')
    expect(button.disabled).toEqual(true)
  })
  it('converts number to words', () => {
    wrapper.find('.input__field').setValue(200)
    wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.find('.card__result-data').text())
      .toBe('Two hundred')
  })
})
