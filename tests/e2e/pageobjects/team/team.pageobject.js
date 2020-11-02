import e2eId from '../../functions/e2e-id.function';

class TeamPageObject {
	root = e2eId('teamPage');
	person = e2eId('person');
	personName = e2eId('personName');

	getRoot() {
		return cy.get(this.root);
	}

	getAllPersonNames() {
		return cy
			.get(`${this.person} ${this.personName}`)
			.then($persons => Cypress.$.map($persons, $p => $p.innerText));
	}
}

module.exports = { TeamPageObject };
