import e2eId from '../../functions/e2e-id.function';

class DocumentsPageObject {
	root = e2eId('documentsPage');
	categoryTab = e2eId('documentTabItem');
	documentItem = e2eId('documentItem');
	downloadButton = e2eId('documentItemDownloadButton');

	getRoot() {
		return cy.get(this.root);
	}

	getCategories() {
		return cy.get(this.categoryTab);
	}

	getCategoryByName(category) {
		return cy.contains(this.categoryTab, category);
	}

	getItems() {
		return cy.get(this.documentItem);
	}

	selectDocumentCategory(category) {
		this.getCategoryByName(category).click();
	}

	downloadItemByIndex(index) {
		this.getItems()
			.eq(index)
			.find(this.downloadButton)
			.click({ force: true }); // force is needed, cypress cannot simulate css hover
	}
}

module.exports = { DocumentsPageObject };
