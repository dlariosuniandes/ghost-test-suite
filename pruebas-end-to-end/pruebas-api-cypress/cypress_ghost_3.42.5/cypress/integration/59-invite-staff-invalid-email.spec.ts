import { Login } from "../page-objects-daniel/login";
import { Profile } from "../page-objects-daniel/profile";
import { SideBar } from "../page-objects-daniel/side-bar";
import { Staff } from "../page-objects-daniel/staff-page";
import * as faker from "faker";

const login = new Login();
const staff = new Staff();
const sideBar = new SideBar();


const cookieSessionName =
  Cypress.env("cookieSessionName") || "ghost-admin-api-session";  

describe("Will try to login using using a non-email string and a password", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  faker.seed(123)
  const randomWord = faker.datatype.string(10)


  let datetime;
  before(() => {
    datetime = new Date().toISOString().replace(/:/g, ".");
  });
  beforeEach(() => {
    Cypress.Cookies.preserveOnce(cookieSessionName);
  });

  it("should go to login", () => {
    login.visit();
    login.loginWithEnvUser()
    cy.screenshot(`${datetime}/image-1`);
  });

  it("should go staff", () => {
    sideBar.goToStaff()
  })

  it("should add the non email string and click on send",()=> {
    staff.clickInvite()
    staff.fillEmail(randomWord)
    staff.clickSend()
  })

  it("then message of non valid email should display",()=> {
    cy.xpath(`//p[@class="response"]`).should('contain', 'Invalid')
  })

});