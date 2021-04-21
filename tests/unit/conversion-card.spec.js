import { mount } from '@vue/test-utils'
import ConversionCard from '@/components/ui/conversion-card.vue'

describe('conversion-card.vue', () => {
  const wrapper = mount(ConversionCard)
  it('button disabled without correct input', () => {
    wrapper.find('.input__field').setValue('')
    const button = wrapper.find('.btn')
    const isDisabled = button.element.disabled === true
    expect(isDisabled).toBe(true)
  })
  it('button enabled with correct input', async () => {
    await wrapper.find('.input__field').setValue(10)
    const button = await wrapper.find('.btn')
    const isDisabled = button.element.disabled === true
    expect(isDisabled).toBe(false)
  })
  it('converts number to words', async () => {
    await wrapper.find('.input__field').setValue(200)
    await wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.find('.input__field-alternate').element.value).toBe('Two hundred')
  })
})
