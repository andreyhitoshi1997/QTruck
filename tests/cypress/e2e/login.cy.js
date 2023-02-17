import loginPage from '../support/pages/Login'
import mapPage from '../support/pages/Map'

describe('Login', () => {
  const user = {
    name: 'Andrey',
    instagram: 'teste',
    password: 'pwd123'
  }

  it('Deve logar com sucesso', () => {
    loginPage.go()
    loginPage.form(user.instagram, user.password)
    loginPage.submit()

    mapPage.loggedUser(user.name)
  })

  it('Não deve logar com a senha incorreta', () => {
    loginPage.go()
    loginPage.form(user.instagram, user.password+'1235')
    loginPage.submit()

    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  });

  it('Não deve logar com o usuário incorreto', () => {
    loginPage.go()
    loginPage.form(user.instagram +'123545', user.password)
    loginPage.submit()  
    loginPage.modal.haveText('Credenciais inválidas, tente novamente!')
  });

  it('Não deve logar sem usuário', () => {
    loginPage.go()
    loginPage.form('', user.password)
    loginPage.submit()  
    loginPage.modal.haveText('Por favor, informe o seu código do Instagram!')
  });

  it('Não deve logar sem senha', () => {
    loginPage.go()
    loginPage.form(user.instagram , '')
    loginPage.submit()  
    loginPage.modal.haveText('Por favor, informe a sua senha secreta!')
  });

  it('Todos os campos devem ser obrigatórios', () => {
    loginPage.go()
    loginPage.submit()  
    loginPage.modal.haveText('Por favor, informe suas credenciais!')
  });
})