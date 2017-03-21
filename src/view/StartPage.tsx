import * as React from "react";
import { connect } from "react-redux";

import IState from "../redux/State";

interface IStartPageInputProps {

}

interface IStartPageStoreProps {

}

interface IStartPageDispatchProps {

}

interface IStartPageState {

}

type IStartPageProps = IStartPageInputProps & IStartPageStoreProps;

class StartPage extends React.Component<IStartPageProps, IStartPageState> {

    constructor(props: IStartPageProps) {
        super(props);
    }

    /********************* React Lifecycle ***********************/

    public render(): JSX.Element {
        return (
            <div className="start-page">
                <input type="text" className="id-input"/>
            </div>
        );
    }

    /*********************** Redux ***************************/

    public static mapStateToProps(state: IState, ownProps: IStartPageInputProps): IStartPageInputProps & IStartPageStoreProps {
        return Object.assign({}, ownProps, {

        });
    }

    public static mapDispatchToProps(dispatch): IStartPageDispatchProps {
        return {

        };
    }
}

export const StartPageContainer = connect(
    StartPage.mapStateToProps,
    StartPage.mapDispatchToProps,
)(StartPage);
