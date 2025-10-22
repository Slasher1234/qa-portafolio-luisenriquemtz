describe("Test suite - conjunto de pruebas",() =>{

    beforeEach,(() =>{
      cy.visit("http://zero.webappsecurity.com")

    })

     it("validar pagina de inicio",() =>{

        
        cy.get("#carousel div.active img").should("be.visible")
        cy.get('#carousel div.active h4').should('have.text', 'Online Banking');

     })

      it("prueba e2e - transferencia de fondos",() =>{

cy.visit("http://zero.webappsecurity.com")



cy.get('#signin_button').click();



cy.get('[name="user_login"]').click();



cy.get('[name="user_login"]').type('username');



cy.get('[name="user_password"]').click();



cy.get('[name="user_password"]').type('password');



cy.get('#login_form [name="submit"]').click();



cy.get('#transfer_funds_tab a').click();



cy.get('#transfer_funds_content label[for="tf_fromAccountId"]').click();



cy.get('#transfer_funds_content label[for="tf_toAccountId"]').click();



cy.get('[name="amount"]').click();



cy.get('[name="amount"]').type('300');



cy.get('[name="description"]').click();


cy.get('#btn_submit').click();



cy.get('#btn_submit').click();
      })

      it.only("prueba de validacion actualizacion grafico",() =>{

cy.visit("http://zero.webappsecurity.com")       

cy.get('#signin_button').click();

cy.get('[name="user_login"]').click();

cy.get('[name="user_login"]').type('username');

cy.get('[name="user_password"]').click();

cy.get('[name="user_password"]').type('password');

cy.get('#login_form [name="submit"]').click();

cy.get('#money_map_tab a').click();





      })





}) 