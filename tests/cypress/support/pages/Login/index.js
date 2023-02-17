import modal from "../components/Modal"

class LoginPage{

    constructor(){
        this.modal = modal
    }

    go(){
        cy.visit('/')
    }

    form(instagram, password){
        if(instagram) cy.get('input[name=instagram]').type(instagram)
        if(password) cy.get('input[name=password]').type(password)  
    }

    submit(){
        cy.contains('button', 'Entrar').click() 
    }

}

export default new LoginPage()