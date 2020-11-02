import { mount } from '@vue/test-utils';
import DocumentItem from '../../src/components/Document/DocumentItem';
import { expect } from 'chai';

describe('DocumentItem Component', function() {
	it('render message', function() {
		//render component
		const wrapper = mount(DocumentItem, {
			propsData: {
				name: 'zapisnica_1.pdf',
				date: '08.10.2020',
				link: '/download/zapisnica_1.pdf'
			}
		});

		// console.log(wrapper.find('span:nth-child(1)').text());
		// expect(wrapper.find('span:nth-child(1)').text()).to.equal('zapisnica_1.pdf');
		expect(wrapper.text()).to.contain(
			'zapisnica_1.pdf',
			'08.10.2020',
			'/download/zapisnica_1.pdf'
		);

		// expect(wrapper.find('.date').text()).to.Equal('08.10.2020');
		// expect(wrapper.find('.link').text()).to.Equal('/download/zapisnica_1.pdf');
	});
});
