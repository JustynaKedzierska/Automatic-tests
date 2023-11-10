/// <references types="cypress">

describe("Test związany z wybraniem selecta", ()=> {
    it("Klikniecie w zakładkę Women", ()=> {
        cy.visit("/");
        cy.get("a[title='Women']").click();
        cy.url().should("include", "id_category=3&controller=category");
    })

    it("Wybranie filtra In stock", ()=> {
        cy.get("#selectProductSort").select("In stock");
        cy.get("#selectProductSort").should("have.value", "quantity:desc");
    })

    it("Wybranie filtra Price: Lowest first", ()=> {
        cy.get("#selectProductSort").select("price:asc");
        cy.get("#selectProductSort").should("have.value", "price:asc");
    })
})