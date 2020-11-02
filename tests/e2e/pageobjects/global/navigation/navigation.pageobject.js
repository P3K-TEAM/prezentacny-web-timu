import e2eId from '../../../functions/e2e-id.function';

class NavigationPageObject {
	root = e2eId('navigation');
	item = e2eId('navigationItem');

	getRoot() {
		return cy.get(this.root);
	}

	getItems() {
		return cy.get(this.item);
	}

	getItemByName(name) {
		return cy.contains(this.item, name);
	}

	selectItemByName(name) {
		this.getItemByName(name).click();
	}
}

module.exports = { NavigationPageObject };
