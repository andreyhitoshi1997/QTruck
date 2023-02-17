import signupPage from "../support/pages/Signup";

describe('Signup', () => {

    it('Deve cadastrar um novo usuário', () => {

        const user = {
            name: 'Becca Milano',
            instagram: '@becca_milano',
            password: 'pwd123'
        }

        // cy.deleteMany({instagram: user.instagram}, {collection: 'users'}).then(res => { 
        //     cy.log(res)
        // });

        cy.apiResetUser(user.instagram)

        signupPage.go()
        signupPage.form(user.name, user.instagram, user.password)
        signupPage.submit()

        signupPage.modal.haveText('Agora você pode recomendar e/ou avaliar Food trucks.')
    });

    it('Não deve cadastrar com instagram duplicado', () => {
        
        const user = {
            name: 'Eric Jacquin',
            instagram: '@jacquin',
            password: 'pwd123'
        }   
        
        cy.apiCreateUser(user)

        signupPage.go()
        signupPage.form(user.name, user.instagram, user.password)
        signupPage.submit()

        signupPage.modal.haveText('Instagram já cadastrado!')
    });
});