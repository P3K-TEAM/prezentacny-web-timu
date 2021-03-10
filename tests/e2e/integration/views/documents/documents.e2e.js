import DocumentsPageObject from '../../../pageobjects/documents/documents.pageobject';
import waitUntilVisible from '../../../functions/wait-until-visible.function';

describe('Documents', () => {
	const documents = new DocumentsPageObject();

	const categories = [
		'Zápisnice',
		'Retrospektívy',
		'Exporty úloh',
		'Metodiky',
		'Dokumentácie',
	];

	beforeEach(() => {
		cy.visit('/documents');
		waitUntilVisible(documents.getRoot());
	});

	it('should correctly render all document categories', () => {
		documents.getCategories().each($category => {
			expect(categories).to.include($category.text().trim());
		});
	});

	it('should allow user to switch between categories', () => {
		categories.forEach(category => {
			documents.selectDocumentCategory(category);
			documents
				.getCategoryByName(category)
				.should('have.attr', 'data-e2e-active');
		});
	});

	it.only('should allow user to download document', () => {
		// should contain at least one document
		documents.getItems().its('length').should('be.gt', 0);

		// cypress cannot check opening in new tab, we need to remove the `[target="_blank"]`
		documents.getDownloadButtonByItemIndex(0).then($downloadBtn => {
			cy.wrap($downloadBtn)
				.invoke('attr', 'target')
				.should('eq', '_blank');
			cy.wrap($downloadBtn).invoke('removeAttr', 'target');
		});

		// click download and assert url
		documents.downloadItemByIndex(0);
		cy.url().should('match', /\/download\/.*\..*/);
	});
});
