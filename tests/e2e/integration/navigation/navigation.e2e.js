import { NavigationPageObject } from '../../pageobjects/global/navigation/navigation.pageobject';
import waitUntilVisible from '../../functions/wait-until-visible.function';

describe('Navigation', () => {
	const navigation = new NavigationPageObject();

	const navigationItems = [
		{
			name: 'O projekte',
			url: '/'
		},
		{
			name: 'Tím',
			url: '/team'
		},
		{
			name: 'Dokumenty',
			url: '/documents'
		},
		{
			name: 'Kontakt',
			url: '/contact'
		}
	];

	beforeEach(() => {
		cy.visit('/');
		waitUntilVisible(navigation.getRoot());
	});

	it('should render all links correctly', () => {
		const navigationItemNames = navigationItems.map(item => item.name);

		navigation.getItems().each($navigationLink => {
			expect(navigationItemNames).to.include(
				$navigationLink.text().trim()
			);
		});
	});

	it('should redirect user to its corresponding URL', () => {
		navigationItems.forEach(item => {
			navigation.selectItemByName(item.name);
			cy.url().should('contain', item.url);
			navigation
				.getItemByName(item.name)
				.should('have.class', 'router-link-exact-active');
		});
	});
});
