describe("Home form test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
  })
  
  it('Should show selected form values in a JSON string', () => {
    cy.get("fieldset button").first().should("be.disabled");

    const stateSelect = cy.get("fieldset select").first();
    const stateSelectValue = cy.get("fieldset strong").first();
    
    stateSelect.select("SP").should("have.value", "SP");
    stateSelectValue.contains("Valor selecionado: SP");

    const cityInput = cy.get("fieldset input").first();
    const cityInputValue = cy.get("fieldset strong").eq(1);

    cityInput.type("Itanhaém").should("have.value", "Itanhaém").blur();
    cityInputValue.contains("Valor selecionado: Itanhaém");

    const switchElement = cy.get("fieldset [role='switch']").first();
    const switchElementValue = cy.get("fieldset strong").eq(2);

    switchElement.click();
    switchElement.invoke('attr', 'aria-checked').should('eq', 'true');
    switchElementValue.contains("Valor selecionado: true");

    const submitButton = cy.get("fieldset button").first();

    submitButton.should("not.be.disabled");
    submitButton.click();

    const formJSONValue = cy.get("fieldset strong").eq(3);
    formJSONValue.contains(`{ "state": "SP", "city": "Itanhaém", "active": true }`);
  })

  it('Should disable all inputs', () => {
    const toggleDisabledButton = cy.get("main > button")

    toggleDisabledButton.click();

    cy.get("main input").each(input => {
      cy.wrap(input).should("be.disabled");
    });
    cy.get("main select").each(select => {
      cy.wrap(select).should("be.disabled");
    });
    cy.get("main [role='switch']").each(input => {
      cy.wrap(input).invoke("attr", "aria-disabled").should("eq", "true")
    });
  })
})