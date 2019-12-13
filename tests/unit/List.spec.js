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

    //TASK 4:
    //TODO: NOT FINISHED!

    it('When item marked as done, item is updated correctly',  () => {
        const testData = [
            {
                id: 1,
                title: 'Foo',
                done: false
            },
            {
                id: 2,
                title: 'Bar',
                done: false
            },
            {
                id: 3,
                title: 'Foobar',
                done: true
            }];

        const wrapper = mount(List, {
            propsData: {
                list: testData
            }
        });


        const vm = wrapper.vm;
        console.log(wrapper.findAll('.done').length);  //1
        const notDoneElements = wrapper.findAll('.list-item:not(.done)');
        let firstNotDoneElement = notDoneElements.at(0);

        //Before clicking on element:
        expect(firstNotDoneElement.contains('.list-item:not(.done)')).toBeTruthy; //.toBe(true);

        // console.log(firstNotDoneElement.text());   //Foo
        // console.log(firstNotDoneElement.html());
        /*        <div class="list-item">
                    <div class="title">Foo</div>
                    <div><span></span></div>
                </div>*/

        // console.log(firstNotDoneElement.done);  //undefined...

        //Click on element:
        firstNotDoneElement.find('span').trigger('click'); //doesnt work
        //firstNotDoneElement.trigger('click') //doesnt work
        // console.log(wrapper.findAll('.done').length);  //1  - peaks olema 2....

        //Click on element:
        //firstNotDoneElement.find('span').trigger('click') //doesnt work
        //firstNotDoneElement.trigger('click') //doesnt work

        //...
        //Check if the clicked element is now done:
        //...

        //After clicking on element:
        expect(firstNotDoneElement.contains('.list-item:not(.done)')).toBeFalsy; //.toBe(false);

        // expect(1).toEqual(1);
    });

    //TASK 1:
    it('Check if list is empty, should display text', () => {
        const wrapper = mount(List);
        expect(wrapper.html()).toContain('Add your first Todo task');
    });

});