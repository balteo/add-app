import AdsList from './AdsList.vue';
import { mount } from '@vue/test-utils';

describe("AdsList.test.ts", () => {
    let component: any;
    let ad = {id: 1, title: 'An ad title', description: 'An ad description'};

    beforeEach(() => {
        component = mount(AdsList, {
            props: {
                filter: null
            },
            data() {
                return {
                    ads: [ad]
                }
            }
        });
    });

    test('contain one ad', () => {
        expect(component.vm.ads).toEqual([ad]);
    });
});
