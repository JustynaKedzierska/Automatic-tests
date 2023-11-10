/// <references types="cypress">

import BasePage from "../Pages/BasePage";
import HomePage from "../Pages/HomePage";
import WomenPage from "../Pages/WomenPage";

describe("Zaznaczenie chceckboxa", ()=> {
    it("Klikniecie w zakładkę Women", ()=> {
        BasePage.openHomePage();
        HomePage.clickOnWomenTab();
        //Home.womenTab.click();
        cy.url().should("include", "id_category=3&controller=category");
    })

    it("Zaznaczenie chceckboxa w zakładce Women", ()=> {
        WomenPage.checkTops();
        WomenPage.checkboxTops.should("be.checked");
        WomenPage.checkDresses();
        WomenPage.checkboxDresses.should("be.checked");
        WomenPage.checkSizebox();
        WomenPage.sizeCheckbox.should("not.have.length", 2);
        WomenPage.sizeCheckbox.should("be.checked");
        WomenPage.sizeCheckbox.should("have.length", 3);
    })
})