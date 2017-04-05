import * as Guid from "guid";
import * as React from "react";
import { IconButton } from "react-mdl";
import { connect } from "react-redux";

import "../../style/start.less";

import { changePageAction } from "../../actions/AppActions";
import { setHostIdAction } from "../../actions/ClientPeerActions";
import IState from "../../redux/State";
import { Page } from "../../utils/Definitions";

interface IStartPageInputProps {

}

interface IStartPageStoreProps {

}

interface IStartPageDispatchProps {
    changePageDispatch: changePageAction;
    setHostIdDispatch: setHostIdAction;
}

interface IStartPageState {

}

type StartPageProps = IStartPageInputProps & IStartPageStoreProps & IStartPageDispatchProps;

export class StartPage extends React.Component<StartPageProps, IStartPageState> {
    private idInput: HTMLInputElement;

    constructor(props: StartPageProps) {
        super(props);

        // Bindings
        this.idInputKeyDown = this.idInputKeyDown.bind(this);
        this.onIdButtonClick = this.onIdButtonClick.bind(this);
        this.setIdInput = this.setIdInput.bind(this);
    }

    /*********************** Methods ****************************/

    private submit() {
        const guid = this.idInput.value;
        if (guid === "") {
            // TODO warning message
        }
        else if (!Guid.isGuid(guid)) {
            // TODO warning message
        }
        else {
            this.props.setHostIdDispatch(guid);
            this.props.changePageDispatch(Page.VIDEO_CLIENT);
        }
    }

    /*********************** Callbacks ***************************/

    private idInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key == "enter") {
            this.submit();
        }
    }

    private onIdButtonClick() {
        this.submit();
    }

    private setIdInput(input: HTMLInputElement) {
        this.idInput = input;
    }

    /********************* React Lifecycle ***********************/

    public render(): JSX.Element {
        return (
            <div className="start-page">
                <span className="logo">
                    ease
                </span>
                <div className="input-wrapper">
                    <input
                        type="text"
                        className="id-input"
                        onKeyDown={this.idInputKeyDown}
                        ref={this.setIdInput}
                        autoFocus={true}
                    />
                    <IconButton
                        className="join"
                        name="send"
                        onClick={this.onIdButtonClick}
                        ripple={true}
                    />
                </div>
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
            setHostIdDispatch: (id) => dispatch(setHostIdAction(id)),
        };
    }
}

export const StartPageContainer = connect(
    StartPage.mapStateToProps,
    StartPage.mapDispatchToProps,
)(StartPage);
