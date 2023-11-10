class BasePage {
    openHomePage(){
        cy.visit("/");
    }   
}

export default new BasePage();