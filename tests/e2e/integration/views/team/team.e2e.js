import { TeamPageObject } from '../../../pageobjects/team/team.pageobject';
import waitUntilVisible from '../../../functions/wait-until-visible.function';

describe('Team', () => {
	const team = new TeamPageObject();

	it('should contain all team members', () => {
		const teamMembers = [
			'Ing. Juraj Petrík',
			'Bc. Karin Maliniaková',
			'Bc. František Gič',
			'Bc. Vladimír Svitok',
			'Bc. Anton Rusňák',
			'Bc. Denisa Mensatorisová',
			'Bc. Kristián Toldy',
			'Bc. Oliver Kanát'
		];

		cy.visit('/team');
		waitUntilVisible(team.getRoot());

		team.getAllPersonNames()
			.should('have.length', teamMembers.length)
			.should('deep.equal', teamMembers);
	});
});
