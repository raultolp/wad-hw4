import Footer from "../../src/components/Footer.vue";
import { mount } from '@vue/test-utils'
//import { shallowMount } from '@vue/test-utils'
//jest.mock('axios')


//TASK 3:
//Create Test to test when "+" button is clicked in Footer component, "open" property
// in Footer component changes to true.
//Hint: To simulate click event have a look at https://vue-test-utils.vuejs.org/guides/#testing-key-mouse-and-other-dom-events

describe('Footer is rendered correctly', () => {

    it('Footer open property changes to true when + is clicked', () => {
        const wrapper = mount(Footer);
        const vm = wrapper.vm;
        //console.log(wrapper.text());
        expect(wrapper.vm.open).toBe(false);  //before click
        wrapper.find('span').trigger('click');
        expect(wrapper.vm.open).toBe(true);  //after click
    })
});