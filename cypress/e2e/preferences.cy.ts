describe('Preferences', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to change the theme', () => {
    cy.get('#banner').should(
      'have.css',
      'background-color',
      'rgb(248, 113, 113)',
    )

    cy.get("button[data-testid='open-settings']").click()
    cy.get("div[role='tablist'] button").eq(0).click()
    cy.get("div[role='menuitem']").first().click()

    cy.get('#banner').should(
      'have.css',
      'background-color',
      'rgb(148, 163, 184)',
    )
  })

  it('should be able to change the logo', () => {
    cy.get("span[data-testid='logo']").should('have.text', '🍎')

    cy.get("button[data-testid='open-settings']").click()
    cy.get("div[role='tablist'] button").eq(1).click()
    cy.get("button[aria-label='grin']").click()

    cy.get("span[data-testid='logo']").should('have.text', '😁')
  })

  it('should be able to change the language', () => {
    cy.get("button[data-testid='open-settings']").click()

    cy.get("div[role='tablist'] button").eq(2).click()
    cy.get("label[for='portuguese']").click()
    cy.get('input').should('have.attr', 'placeholder', 'Descreva sua atividade')

    cy.get("div[role='tablist'] button").eq(2).click()
    cy.get("label[for='english']").click()
    cy.get('input').should('have.attr', 'placeholder', 'Describe your activity')
  })
})
