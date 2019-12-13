import List from "../../src/components/List.vue";
import { mount } from '@vue/test-utils'

//TASK 1:
//Create Test to test that if no list item is provided, List component displays text:
// "Add your first Todo task".

//TASK 4:
// Create Test to test when an item in the list is marked as done, item is updated correctly.
// Hints:
//  - After click items done property will be updated in wrappers props
//  - To simulate click event have a look at: https://vue-test-utils.vuejs.org/guides/#testing-key-mouse-and-other-dom-events
//  - Also have a look at These links:
//  - nth-of-type: https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type
//  - first-of-type: https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type

describe('List works correctly', () => {

    //TASK 1:
    it('Check if list is empty, should display text', () => {
        const wrapper = mount(List)
        expect(wrapper.html()).toContain('Add your first Todo task')
    })

    //TASK 4:
    //TODO: TEGEMATA!


});