import { mount } from '@vue/test-utils';
import DocumentItem from '../../src/components/Document/DocumentItem';
import { expect } from 'chai';

describe('DocumentItem Component', function() {
	it('Render info for DocumentItem', function() {
		const data = {
			name: 'zapisnica_1.pdf',
			date: '08.10.2020',
			link: '/download/zapisnica_1.pdf'
		};

		const wrapper = mount(DocumentItem, {
			propsData: data
		});

		expect(wrapper.text()).to.contain(...Object.values(data));
	});
});
