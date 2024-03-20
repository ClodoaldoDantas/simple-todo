describe('Todos', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to add new tasks', () => {
    cy.createTodos(['Beber café', 'Estudar para a prova'])

    cy.get('#todo-list li').should('have.length', 2)
  })

  it('should be able to complete a task', () => {
    cy.createTodos(['Beber café', 'Estudar para a prova'])

    cy.get('#todo-list li').first().find('button[role="checkbox"]').click()

    cy.get('#todo-list li')
      .first()
      .find('label')
      .should('have.css', 'text-decoration-line', 'line-through')
  })

  it('should be able to remove a task', () => {
    cy.createTodos(['Beber café', 'Estudar para a prova'])

    cy.get('#todo-list li')
      .first()
      .find('button[aria-label="Remover atividade"]')
      .click()

    cy.get('#todo-list li').should('have.length', 1)
  })
})