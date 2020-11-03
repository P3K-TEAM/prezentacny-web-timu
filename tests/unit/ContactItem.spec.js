import { mount } from '@vue/test-utils';
import ContactItem from '../../src/components/Contact/ContactItem';
import { expect } from 'chai';

describe('ContactItem Component', function() {
	const classes = ['group', 'cursor-pointer'];

	it('should render anchor if link is provided', function() {
		const data = {
			link: 'https://www.google.sk',
			text: 'Link Text',
			icon: 'fas fa-map-marker-alt'
		};

		const wrapper = mount(ContactItem, {
			propsData: data
		});
		expect(wrapper.find('div:nth-child(2)').classes()).to.contain(
			...classes
		);
		expect(wrapper.find('a').exists()).to.be.true;
	});

	it('should render paragraph if link is not provided', function() {
		const data = {
			text: 'Text',
			icon: 'fas fa-map-marker-alt'
		};

		const wrapper = mount(ContactItem, {
			propsData: data
		});
		expect(wrapper.find('div:nth-child(2)').classes()).to.not.contain(
			...classes
		);
		expect(wrapper.find('a').exists()).to.be.false;
	});
});
