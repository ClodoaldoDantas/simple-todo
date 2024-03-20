/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    createTodos(todos: string[]): Chainable<void>
  }
}

Cypress.Commands.add('createTodos', (todos: string[]) => {
  todos.forEach(todo => {
    cy.get("input[name='description']").type(todo)
    cy.get('form').submit()
  })
})
