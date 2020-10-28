import e2eId from '../../functions/e2e-id.function';

class HomePageObject {
	root = e2eId('homePage');
	aboutProjectSection = e2eId('homePageAboutProject');

	getRoot() {
		return cy.get(this.root);
	}

	getAboutProjectSection() {
		return cy.get(this.aboutProjectSection);
	}
}

module.exports = HomePageObject;
