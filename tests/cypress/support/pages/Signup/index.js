import modal from "../components/Modal"

class SignupPage{

    constructor(){
        this.modal = modal
    }

    go(){
        cy.visit('/signup')
    }

    form(name, instagram, password){
        if(name) cy.get('input[name=name]').type(name)
        if(instagram) cy.get('input[name=instagram]').type(instagram)
        if(password) cy.get('input[name=password]').type(password)  
    }

    submit(){
        cy.contains('button', 'Cadastrar').click() 
    }

}

export default new SignupPage()