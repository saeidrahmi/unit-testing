describe('test suite',()=>{
    it('firt test',()=>{
        expect(true).to.equal(true)
    });
   it("Visits the site", () => {
     cy.visit("http://localhost:4200/");
      cy.contains("type").click();

      // Should be on a new URL which includes '/commands/actions'
      cy.url().should("include", "/commands/actions");

      // Get an input, type into it and verify that the value has been updated
      cy.get(".action-email")
        .type("fake@email.com")
        .should("have.value", "fake@email.com");
   });
   

}


)