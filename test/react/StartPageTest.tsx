import { expect } from "chai";
import { mount } from "enzyme";
import * as React from "react";
import { spy } from "sinon";

import { StartPageContainer } from "../../src/view/StartPage";
import { getComponent } from "../utils/ReactUtils";

describe("StartPage", function() {

    describe("#render()", function() {
        let container: JSX.Element;

        before(function() {
            container = getComponent(<StartPageContainer />);
        });

        it("should only be called once when component is mounted", function() {
            spy(StartPageContainer.prototype, "render");
            mount(container);
            expect(StartPageContainer.prototype.render).to.have.property("callCount", 1);
            StartPageContainer.prototype.render.restore();
        });

        it("Should render a single input intended for id", function() {
            // const wrapper = shallow(<StartPage />);
            // expect(wrapper.find(".id-input")).to.have.length(1);
        });

    });

});
