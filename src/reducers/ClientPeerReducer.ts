import { ActionType } from "../actions/Action";
import { ClientPeerAction, ISetHostIdAction, ISetPeerStatusAction } from "../actions/ClientPeerActions";
import { IClientPeerState } from "../redux/State";

const initialClientPeerState: IClientPeerState = {
    peerStatus: false,
    hostID: "",
};

const clientPeerState = (state: IClientPeerState = initialClientPeerState, action: ClientPeerAction) => {
    const types = ActionType.clientPeerAction;

    switch (action.type) {

        case types.setHostIDAction:
            return Object.assign({}, state, {
                hostID: (action as ISetHostIdAction).hostID,
            });

        case types.setPeerStatusAction:
            return Object.assign({}, state, {
                peerStatus: (action as ISetPeerStatusAction).peerStatus,
            });

        default:
            return state;
    }
};

export default clientPeerState;
