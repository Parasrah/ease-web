import * as Guid from "guid";
import * as React from "react";
import { connect } from "react-redux";

import { setIdAction } from "../actions/CommonPeerActions";
import "../style/main.less";
import { Page } from "../utils/Definitions";
import { StartPageContainer } from "./pages/StartPage";
import { VideoClientPageContainer } from "./pages/video/VideoClientPage";

interface IAppWrapperDispatchProps {
    setIdDispatch: setIdAction;
}

interface IAppWrapperStoreProps {

}

interface IAppWrapperState {

}

type AppWrapperProps = IAppWrapperDispatchProps & IAppWrapperStoreProps;

export class AppWrapper extends React.Component<AppWrapperProps, IAppWrapperState> {
    private pageElement: JSX.Element;

    constructor(props: AppWrapperProps) {
        super(props);

        this.mapPage(Page.START);
        this.props.setIdDispatch(Guid.raw());
    }

    private mapPage(page: Page) {
        switch (page) {
            case Page.START:
                this.pageElement = <StartPageContainer />;
                break;

            case Page.VIDEO_CLIENT:
                this.pageElement = <VideoClientPageContainer />;
                break;

            default:
                throw Error("No such enum exists");
        }
    }

    public render(): JSX.Element {
        return this.pageElement;
    }

    /*********************** Redux ***************************/

    public static mapStateToProps(state: IAppWrapperState): IAppWrapperStoreProps {
        return {

        };
    }

    public static mapDispatchToProps(dispatch): IAppWrapperDispatchProps {
        return {
            setIdDispatch: (id) => setIdAction(id),
        };
    }
}

export const AppContainer = connect(
    AppWrapper.mapStateToProps,
    AppWrapper.mapDispatchToProps,
)(AppWrapper);
