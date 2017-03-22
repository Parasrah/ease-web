import * as React from "react";

import "../style/main.less";
import { Page } from "../utils/Definitions";
import { StartPageContainer } from "./StartPage";
import { VideoClientPageContainer } from "./video/VideoClientPage";

interface IAppContainerProps {

}

interface IAppContainerState {

}

export class AppContainer extends React.Component<IAppContainerProps, IAppContainerState> {
    private pageElement: JSX.Element;

    constructor(props: IAppContainerProps) {
        super(props);

        this.mapPage(Page.START);
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

}
