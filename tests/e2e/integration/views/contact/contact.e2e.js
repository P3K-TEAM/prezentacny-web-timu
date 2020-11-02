import { ContactPageObject } from '../../../pageobjects/contact/contact.pageobject';
import waitUntilVisible from '../../../functions/wait-until-visible.function';

describe('Contact', () => {
	const contact = new ContactPageObject();

	it('should be displayed correctly', () => {
		cy.visit('/contact');
		waitUntilVisible(contact.getRoot());

		contact
			.getItems()
			.should('have.length', 2)
			.should('contain', 'tim10fiit@googlegroups.com')
			.should(
				'contain',
				'Fakulta informatiky a informačných technologií'
			);
	});
});
