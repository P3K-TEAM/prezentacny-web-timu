import { mount } from '@vue/test-utils';
import Person from '../../src/components/Person/Person';
import { expect } from 'chai';

describe('Person Component', function() {
	it('Render info for person component', function() {
		const wrapper = mount(Person, {
			propsData: {
				name: 'Ing. Juraj Petrík',
				description: 'Vedúci tímu, Product Owner',
				image: 'edited/juraj-petrik.png'
			}
		});

		expect(wrapper.text()).to.contain(
			'Ing. Juraj Petrík',
			'Vedúci tímu, Product Owner',
			'edited/juraj-petrik.png'
		);
	});
});
