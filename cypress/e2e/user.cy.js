describe("Cadastro de usuários com e-mail nome", () => {
  it("deve cadastrar um usuario", () => {
    cy.visit("http://localhost:3000/");

    cy.get('input[id="name"]').type("al");
    cy.get('input[id="email"]').type("alan@mail.com");
    cy.get('input[id="cpf"]').type("15635894789");
    cy.get('input[id="phone"]').type("84986365874");
    cy.get("button").contains("Cadastrar").should("be.disabled");
  });
});

describe("Cadastro de usuários com e-mail inválido", () => {
  it("deve cadastrar um usuario", () => {
    cy.visit("http://localhost:3000/");

    cy.get('input[id="name"]').type("alan");
    cy.get('input[id="email"]').type("alanmail.com");
    cy.get('input[id="cpf"]').type("15635894789");
    cy.get('input[id="phone"]').type("84986365874");
    cy.get("button").contains("Cadastrar").should("be.disabled");
  });
});

describe("Cadastro de usuários com CPF inválido", () => {
  it("deve cadastrar um usuario", () => {
    cy.visit("http://localhost:3000/");

    cy.get('input[id="name"]').type("alan");
    cy.get('input[id="email"]').type("alan@mail.com");
    cy.get('input[id="cpf"]').type("1563589478");
    cy.get('input[id="phone"]').type("84986365874");
    cy.get("button").contains("Cadastrar").should("be.disabled");
  });
});

describe("Cadastro de usuários com Telefone inválido", () => {
  it("deve cadastrar um usuario", () => {
    cy.visit("http://localhost:3000/");

    cy.get('input[id="name"]').type("alan");
    cy.get('input[id="email"]').type("alan@mail.com");
    cy.get('input[id="cpf"]').type("15635894789");
    cy.get('input[id="phone"]').type("8498636587");
    cy.get("button").contains("Cadastrar").click();
    cy.get('p[id="invalid-phone"]').should("be.visible");
  });
});

describe("Cadastro de usuários sucesso", () => {
  it("deve cadastrar um usuario", () => {
    cy.visit("http://localhost:3000/");

    cy.get('input[id="name"]').type("alan");
    cy.get('input[id="email"]').type("alan@mail.com");
    cy.get('input[id="cpf"]').type("15635894789");
    cy.get('input[id="phone"]').type("84986365874");
    cy.get("button").contains("Cadastrar").click();
  });
});
