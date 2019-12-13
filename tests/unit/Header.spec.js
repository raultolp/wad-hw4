import Header from "../../src/components/Header.vue";
import { mount } from '@vue/test-utils'

//TASK 2:
//Create Test to test that Header component displays correct:
// -date
// - year
// - month
// - week day

describe('Header is rendered correctly', () => {

    it('Check if header displays correct date', () => {
        const wrapper = mount(Header)
        let today = new Date();
        let date = today.getDate() < 10 ?  `0${today.getDate()}` : today.getDate();
        // expect(wrapper.html()).toContain(date)
        // var x = document.getElementsByClassName("date");
        expect(wrapper.html()).toContain(date)
    })

    it('Check if header displays correct year', () => {
        const wrapper = mount(Header)
        let today = new Date();
        let year = today.getFullYear()
        expect(wrapper.html()).toContain(year)
    })

    it('Check if header displays correct month', () => {
        const wrapper = mount(Header)
        let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT',	'NOV', 'DEC'];
        let today = new Date();
        let month = months[today.getMonth()]
        expect(wrapper.html()).toContain(month)
    })

    it('Check if header displays correct week day', () => {
        const wrapper = mount(Header)
        let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let today = new Date();
        let day = weekdays[today.getDay()]
        expect(wrapper.html()).toContain(day.toLocaleUpperCase())
    })

});