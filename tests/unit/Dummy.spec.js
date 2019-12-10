import { mount } from '@vue/test-utils'

describe('Dummy test', () => {

    it('Check if list is empty, should display text', () => {
        const wrapper = mount(List)
        expect(wrapper.html()).toContain('Add your first Todo task')
    })


    it('Check if 1 equals 1', () => {
        expect(1).toEqual(1)
    })
});