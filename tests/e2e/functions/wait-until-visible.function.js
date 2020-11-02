function waitUntilVisible(selectorOrElement) {
	if (typeof selectorOrElement === 'string') {
		selectorOrElement = cy.get(selectorOrElement);
	}
	return selectorOrElement.should('be.visible');
}

module.exports = waitUntilVisible;
