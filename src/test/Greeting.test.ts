import * as chai from "chai";
import {Greeting} from "../index";

const expect = chai.expect;
const assert = chai.assert;

describe("Greeting", () => {
    it("log", () => {
        Greeting.print("test");
    });
});
