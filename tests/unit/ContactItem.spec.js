import { mount } from '@vue/test-utils';
import ContactItem from '../../src/components/Contact/ContactItem';
import { expect } from 'chai';

describe('ContactItem Component', function() {
	it('should render anchor if link is provided', function() {
		//render component
		const wrapper = mount(ContactItem, {
			propsData: {
				link: 'Toto nie je link',
				text: 'Toto je text',
				icon: 'fas fa-map-marker-alt'
			}
		});
		expect(wrapper.find('div:nth-child(2)').classes()).to.contain(
			'group',
			'cursor-pointer'
		);
		expect(wrapper.find('a').exists()).to.be.true;
	});

	it('should render paragraph if link is not provided', function() {
		const wrapper = mount(ContactItem, {
			propsData: {
				text: 'Toto je text',
				icon: 'fas fa-map-marker-alt'
			}
		});
		expect(wrapper.find('div:nth-child(2)').classes()).to.not.contain(
			'group',
			'cursor-pointer'
		);
		expect(wrapper.find('a').exists()).to.be.false;
	});
});
