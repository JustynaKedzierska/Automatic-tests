/// <references types="cypress">

describe("Kliknięcie w element na stronie", () => {
    it("Kliknięcie w zakładke Contact us",()=> {
        cy.visit("/");
        cy.get("a[title='Contact us']").click();
    })
})