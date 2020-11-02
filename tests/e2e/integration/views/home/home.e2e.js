import { HomePageObject } from '../../../pageobjects/home/home.pageobject';
import waitUntilVisible from '../../../functions/wait-until-visible.function';

describe('Home', () => {
	const home = new HomePageObject();

	it('should be displayed correctly', () => {
		cy.visit('/');
		waitUntilVisible(home.getRoot());

		home.getAboutProjectSection()
			.scrollIntoView()
			.should('be.visible');
	});
});
