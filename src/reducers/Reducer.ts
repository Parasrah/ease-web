import { combineReducers } from "redux";

import { IState } from "../redux/State";
import appState from "./AppReducer";
import clientPeerState from "./ClientPeerReducer";
import commonPeerState from "./CommonPeerReducer";
import settingsState from "./SettingsReducer";
import videoState from "./VideoReducer";

const easeReducer = combineReducers<IState>({
    appState,
    videoState,
    commonPeerState,
    clientPeerState,
    settingsState,
});

export default easeReducer;
