import { mount } from '@vue/test-utils';
import Person from '../../src/components/Person/Person';
import { expect } from 'chai';

describe('Person Component', function() {
	it('should render passed props', function() {
		const data = {
			name: 'Ing. Juraj Petrík',
			description: 'Vedúci tímu, Product Owner',
			image: 'edited/juraj-petrik.png'
		};
		const wrapper = mount(Person, {
			propsData: data
		});

		expect(wrapper.text()).to.contain(...Object.values(data));
	});
});
