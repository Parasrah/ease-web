import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { Instance } from "simple-peer";
import { IState } from "../redux/State";
import { ActionType } from "./Action";

/*************************************************************/
/********************* Action Definitions ********************/
/*************************************************************/

export type ClientPeerAction = ISetHostIdAction | ISetPeerStatusAction;

export interface ISetHostIdAction extends Action {
    readonly hostID: string;
}

export interface ISetPeerStatusAction extends Action {
    peerStatus: boolean;
}

/*************************************************************/
/*********************** Action Creators *********************/
/*************************************************************/

export const setHostIdAction = (hostID: string): ISetHostIdAction => {
    return {
        type: ActionType.clientPeerAction.setHostIDAction,
        hostID,
    };
};

export type setHostIdAction = (hostID: string) => ISetHostIdAction;

export const setPeerStatusAction: setPeerStatusAction = (peerStatus) => {
    return {
        type: ActionType.clientPeerAction.setPeerStatusAction,
        peerStatus,
    };
};

export type setPeerStatusAction = (peerStatus: boolean) => ISetPeerStatusAction;

export const watchPeerStatusAction: watchPeerStatusAction = (peer) => {
    return (dispatch, getState) => {
        peer.on("connect", () => {
            dispatch(setPeerStatusAction(true));
        });

        peer.on("close", () => {
            dispatch(setPeerStatusAction(false));
        });
    };
};

export type watchPeerStatusAction = (peer: Instance) => ThunkAction<void, IState, void>;
