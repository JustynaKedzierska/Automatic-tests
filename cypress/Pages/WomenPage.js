class WomenPage{

    get checkboxTops(){
        return  cy.get("#layered_category_4");
    }

    get checkboxDresses(){
        return  cy.get("#layered_category_8");
    }

    get sizeCheckbox(){
        return  cy.get("#ul_layered_id_attribute_group_1 input");
    }

    checkTops(){
        this.checkboxTops.check();
    }

    checkDresses(){
        this.checkboxDresses.check();
    }

    checkSizebox(){
        this.sizeCheckbox.check();
    }
}

export default new WomenPage();