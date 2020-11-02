import e2eId from '../../functions/e2e-id.function';

class ContactPageObject {
	root = e2eId('contactPage');
	contactItem = e2eId('contactItem');

	getRoot() {
		return cy.get(this.root);
	}

	getItems() {
		return cy.get(this.contactItem);
	}
}

module.exports = { ContactPageObject };
