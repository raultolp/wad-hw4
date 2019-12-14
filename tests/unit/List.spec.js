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

    //TASK 4: TODO: NOT FINISHED
    it('When item marked as done, item is updated correctly',  () => {
        const testData = [
            {
                id: 1,
                title: 'Test title #1',
                done: false
            },
            /*{
                id: 2,
                title: 'Test title #2',
                done: false
            },
            {
                id: 3,
                title: 'Test title #3',
                done: false
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
            }*/];

        const wrapper = mount(List, {
            propsData: {
                list: testData,
            }
        });

        // const vm = wrapper.vm;
        //      const notDoneElements = wrapper.findAll('.list-item:not(.done)');
        const notDoneElements = wrapper.findAll('.list-item');
        let firstNotDoneElement = notDoneElements.at(0);

        //TESTIMISEKS
        // const spy = spyOn(wrapper.vm, 'toggle');
        // wrapper.vm.$emit('click');
        // const button = firstNotDoneElement.find('span');
        // console.log(button.html());
        // button.trigger('click');
        // console.log(button.html());

        // CONSOLE LOG
        // console.log("Done:", wrapper.findAll('.done').length);  // 2
        // console.log("notDone:", notDoneElements.length); // 3
        // console.log(firstNotDoneElement.done);  //undefined..

        // console.log("Element text:", firstNotDoneElement.text());   // Test title #2
        // console.log("Element html:", firstNotDoneElement.html());
        //         <div class="list-item">
        //             <div class="title">Test title #2</div>
        //             <div><span></span></div>
        //         </div>

        //Before clicking on element:
        expect(firstNotDoneElement.contains('.list-item:not(.done)')).toBe(true);
        //    expect(wrapper.props('list').at(0).contains('.list-item:not(.done)')).toBe(true);
        //    expect(wrapper.props('testItem').contains('.list-item:not(.done)')).toBe(true);

        //Click on element:
        firstNotDoneElement.find('.list-item span').trigger('click'); //doesnt work
        // wrapper.find(firstNotDoneElement.name()).trigger('click'); //doesnt work
        // firstNotDoneElement.element.click(); // doesnt work
        // firstNotDoneElement.find('div').trigger('click'); //doesnt work
        // firstNotDoneElement.trigger('click'); //doesnt work
        // console.log("Done:", wrapper.findAll('.done').length);  //2  - peaks olema 3....

        //After clicking on element:
        const DoneElements = wrapper.findAll('.list-item');
        let firstDoneElement = notDoneElements.at(0);
        expect(firstDoneElement.contains('.done')).toBe(false);
        // expect(1).toEqual(1);
    });

    //TASK 1:
    it('Check if list is empty, should display text', () => {
        const wrapper = mount(List);
        expect(wrapper.html()).toContain('Add your first Todo task');
    });

});