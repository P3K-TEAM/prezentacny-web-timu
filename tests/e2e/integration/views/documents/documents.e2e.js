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

	it('should allow user to download document', () => {
		// should contain at least one document
		documents.getItems().its('length').should('be.gt', 0);

		// cypress fails on --page loaded-- event when visiting pdf in Electron
		// asserting the href and target instead
		documents.getDownloadButtonByItemIndex(0).then($downloadButton => {
			expect($downloadButton.attr('href')).to.contain('/download/');
			expect($downloadButton.attr('target')).to.eq('_blank');
		});
	});
});
