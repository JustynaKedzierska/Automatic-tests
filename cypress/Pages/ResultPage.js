class ResultPage{

    get alertText(){
        return  cy.get("p.alert");
    }
}

export default new ResultPage();