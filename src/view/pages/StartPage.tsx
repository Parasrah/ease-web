import * as React from "react";
import { connect } from "react-redux";

import { changePageAction } from "../../actions/AppActions";
import IState from "../../redux/State";
import { Page } from "../../utils/Definitions";

interface IStartPageInputProps {

}

interface IStartPageStoreProps {

}

interface IStartPageDispatchProps {
    changePageDispatch: changePageAction;
}

interface IStartPageState {

}

type StartPageProps = IStartPageInputProps & IStartPageStoreProps & IStartPageDispatchProps;

export class StartPage extends React.Component<StartPageProps, IStartPageState> {

    constructor(props: StartPageProps) {
        super(props);
    }

    /*********************** Callbacks ***************************/

    private idInputKeyDown: React.EventHandler<React.KeyboardEvent<HTMLInputElement>> = (event) => {
        if (event.key == "enter") {
            this.props.changePageDispatch(Page.START);
        }
    }

    /********************* React Lifecycle ***********************/

    public render(): JSX.Element {
        return (
            <div className="start-page">
                <input
                    type="text"
                    className="id-input"
                    onKeyDown={this.idInputKeyDown}
                />
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
            changePageDispatch: (page) => dispatch(changePageAction(page)),
        };
    }
}

export const StartPageContainer = connect(
    StartPage.mapStateToProps,
    StartPage.mapDispatchToProps,
)(StartPage);
