/// <references types="cypress">

import BasePage from "../Pages/BasePage";
import ResultPage from "../Pages/ResultPage";
import SearchPage from "../Pages/SearchPage";
import { searchPhrase, notFoundProduct } from "../fixtures/searchData.json";
//import {notFoundProduct} from "../fixtures/searchData.json";

describe("Wpisywanie tekstu w wyszukiwarke", ()=> {
    it("Wpisywanie tekstu", ()=> {
        //let text = searchPhrase;
        BasePage.openHomePage();
        SearchPage.typeSearchPrhase(searchPhrase);
        SearchPage.searchFill.should("have.value", searchPhrase);
        cy.wait(3000);
        SearchPage.searchFill.clear();
        SearchPage.searchFill.should("have.value", "");
        cy.wait(3000);
        SearchPage.typeSearchPrhase(`${searchPhrase} {enter}`);
        ResultPage.alertText
             .should("be.visible")
             .and("include.text", notFoundProduct);
        SearchPage.searchFill.should("have.class", "search_query");
        SearchPage.searchFill.should("have.css", "margin-right", "1px");
    })
})