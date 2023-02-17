class MapPage{
    loggedUser(text){
        cy.get('.logged-user')
        .should('be.visible')
        .should('have.text', `Olá, ${text}`)
    }
}

export default new MapPage()