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

    const testData = [
        {
            id: 1,
            title: 'Test title #1',
            done: true
        },
        {
            id: 2,
            title: 'Test title #2',
            done: false
        },
        {
            id: 3,
            title: 'Test title #3',
            done: true
        },
        {
            id: 4,
            title: 'Test title #4',
            done: true
        },
        {
            id: 5,
            title: 'Test title #5',
            done: false
        }];

    const wrapper = mount(List, {
        propsData: {
            list: testData,
        }
    });

    //TASK 4: TODO: NOT FINISHED
    it('When item marked as done, item is updated correctly',  () => {

        const notDoneElements = wrapper.findAll('.list-item:not(.done)');
        const DoneElements = wrapper.findAll('.done');
        expect(notDoneElements.length + DoneElements.length).toEqual(testData.length);

        const notDoneItems = testData.filter(item => !item.done);
        const DoneItems = testData.filter(item => item.done);
        expect(notDoneItems.length + DoneItems.length).toEqual(testData.length);

        expect(notDoneElements.length).toEqual(notDoneItems.length);
        expect(DoneElements.length).toEqual(DoneItems.length);

        if (notDoneItems.length > 0) {
            //Before clicking on element:
            let firstNotDoneElement = notDoneElements.at(0);
            let notDoneItem = notDoneItems.pop();
            expect(notDoneItem.done).toBe(false);
            // expect(firstNotDoneElement.find('span')).toBe(false);

            //Click on element:
            firstNotDoneElement.find('span').trigger('click');

            //After clicking on element:
            let newNotDoneItems = testData.filter(item => !item.done);
            expect(newNotDoneItems.length).toEqual(notDoneItems.length); //old list had pop, thats way now lenght -1
        }
    });

    //TASK 1:
    it('Check if list is empty, should display text', () => {
        const wrapper = mount(List);
        expect(wrapper.html()).toContain('Add your first Todo task');
    });

});
