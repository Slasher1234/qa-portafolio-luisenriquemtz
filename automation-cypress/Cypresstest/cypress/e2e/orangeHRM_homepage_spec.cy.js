describe('Validaciones básicas de la página de inicio de OrangeHRM', () => {
  
  beforeEach(() => {
    // Cargar la página antes de cada test
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('Debe mostrar el logo de OrangeHRM visible en la parte superior', () => {
    // Selecciona el logo por su atributo src
    cy.get('img[alt="company-branding"]')
      .should('be.visible')
  })

  it('Debe mostrar el campo de username (txtUsername) visible', () => {
    // El campo de usuario tiene name="username"
    cy.get('input[name="username"]')
      .should('be.visible')
  })

  it('Debe mostrar el botón de login visible', () => {
    cy.get('button[type="submit"]')
      .should('be.visible')
      .and('contain.text', 'Login')
  })

  it('Debe mostrar la etiqueta con la versión de la página en el pie', () => {
    // El texto del footer contiene "OrangeHRM OS"
    cy.get('p.orangehrm-copyright')
      .first()
      .should('contain.text', 'OrangeHRM')
  })

})