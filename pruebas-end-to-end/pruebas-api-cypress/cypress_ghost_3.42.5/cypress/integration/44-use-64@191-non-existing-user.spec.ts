import { Login } from "../page-objects-daniel/login";
import { SideBar } from "../page-objects-daniel/side-bar";
import { PostPage } from "../page-objects-daniel/post-page";
import * as faker from "faker";

const login = new Login();
const sideBar = new SideBar();
const postPage = new PostPage();

const cookieSessionName =
  //Cypress.env("cookieSessionName") || "ghost-admin-api-session";  

describe("Will try to login using using a non-email string and a password", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  faker.seed(123)
  const user64 = faker.helpers.replaceSymbols("?".repeat(64)).toLowerCase()
  const domain191 = faker.helpers.replaceSymbols("?".repeat(187)).toLowerCase() + ".com"
  const email = user64 + "@" + domain191
  const password = faker.lorem.word()

  let datetime;
  before(() => {
    datetime = new Date().toISOString().replace(/:/g, ".");
  });
  beforeEach(() => {
    //Cypress.Cookies.preserveOnce(cookieSessionName);
  });

  it("should go to login", () => {
    login.visit();
    cy.screenshot(`${datetime}/image-1`);
  });

  it("should input non email and password", () => {
    login.fillEmailVariable(email)
    login.fillNewPassword(password)
  })

  it("should click signign an get error message", () => {
  login.clickLoginButton()
  cy.xpath(`//p[@class="main-error"]`).should('contain',"Please fill out")
  })

  it("should click forgot password and ask for a valid email addres", () => {
    login.clickForgot()
    cy.xpath(`//p[@class="main-error"]`).should('contain',"We need your email")
  })

});