import { expect } from "chai";
import { mount } from "enzyme";
import * as jsdom from "jsdom-global";
import * as React from "react";
import * as sinon from "sinon";

import { StartPageContainer } from "../../src/view/StartPage";
import { getComponent } from "../utils/ReactUtils";

describe("StartPage", function() {

    describe("#render()", function() {

        before(function() {
            this.jsdom = jsdom();
        });

        after(function() {
            this.jsdom();
        });

        it("should only be called once when component is mounted", function() {
            sinon.spy(StartPageContainer.prototype, "render");
            const component = getComponent(<StartPageContainer />);
            mount(component);
            expect(StartPageContainer.prototype).to.have.property("callCount", 1);
            StartPageContainer.prototype.render.restore();
        });

    });

});
