import { SearchPagePhrase } from "../fixtures/searchData.json";

class SearchPage{

    get searchFill(){
        return cy.get("#search_query_top");
    }

    typeSearchPrhase(text){
        this.searchFill.type(text);
    }
}


export default new SearchPage();