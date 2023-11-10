class HomePage {
    get womenTab() {
        return cy.get("a[title='Women']")
    }

    clickOnWomenTab() {
      this.womenTab.click();
    }

    moveOnWomenTab(){
        this.womenTab.scrollTo();
    }
}

export default new HomePage();