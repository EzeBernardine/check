import { ObjectLiteral, ActionType } from "../interfaces";
import { actionTypes } from "./actions";

const reduceReducers =
  (...reducers: any) =>
  (prevState: any, value: any, ...args: any) =>
    reducers.reduce((newState: any, reducer: any) => reducer(newState, value, ...args), prevState);

const clientInfoData = {
  clientInfo: null,
};

const clientInfoReducer = (state: ObjectLiteral, action: ActionType) => {
  const { type, payload } = action;

  if (type === actionTypes.updateClientInfo)
    return { ...state, clientInfo: payload };

  return state;
};

const actionModalData = {
  actionModal: {
    show: false,
    data: null,
    showClose: true,
  },
};

const actionModalReducer = (state: ObjectLiteral, action: ActionType) => {
  const { type, payload } = action;

  if (type === actionTypes.setActionModal) {
    return { ...state, actionModal: payload };
  }

  return state;
};

const baseUrlData = {
  baseUrls: {},
};

const baseUrlReducer = (state: ObjectLiteral, action: ActionType) => {
  const { type, payload } = action;

  if (type === actionTypes.setBaseUrls) {
    return { ...state, baseUrls: payload };
  }

  return state;
};

const activeDataTypeData = {
  activeDataType: {},
};

const activeDataTypeReducer = (state: ObjectLiteral, action: ActionType) => {
  const { type, payload } = action;

  if (type === actionTypes.setActiveDataType) {
    return { ...state, activeDataType: payload };
  }

  return state;
};

const pageTitleData = {
  pageTitle: "Dashboard",
};

const pageTitleReducer = (state: ObjectLiteral, action: ActionType) => {
  const { type, payload } = action;

  if (type === actionTypes.setPageTitle) {
    return { ...state, pageTitle: payload };
  }
  if (type === actionTypes.setSubPageTitle) {
    return { ...state, subPageTitle: payload };
  }
  if (type === actionTypes.setIsImage) {
    return { ...state, isImage: payload };
  }

  return state;
};
const showBackData = {
  showBack: false,
};

const showBackReducer = (state: ObjectLiteral, action: ActionType) => {
  const { type, payload } = action;

  if (type === actionTypes.setBack) {
    return { ...state, showBack: payload };
  }

  return state;
};

const activePhoneData = {
  activePhone: null,
};

const activePhoneReducer = (state: ObjectLiteral, action: ActionType) => {
  const { type, payload } = action;

  if (type === actionTypes.setActivePhone) {
    return { ...state, activePhone: payload };
  }

  return state;
};

const showLayoutData = {
  showLayout: true,
};

const showLayoutReducer = (state: ObjectLiteral, action: ActionType) => {
  const { type, payload } = action;

  if (type === actionTypes.showLayout) {
    return { ...state, showLayout: payload };
  }

  return state;
};

const boardLoadingData = {
  boardLoading: true,
};

const boardLoadingReducer = (state: ObjectLiteral, action: ActionType) => {
  const { type, payload } = action;

  if (type === actionTypes.boardLoading) {
    return { ...state, boardLoading: payload };
  }

  return state;
};

const showLogoData = {
  showLogo: false,
};

const showLogoReducer = (state: ObjectLiteral, action: ActionType) => {
  const { type, payload } = action;

  if (type === actionTypes.showLogo) {
    return { ...state, showLogo: payload };
  }

  return state;
};

const checkedUserData = {
  checkedUser: false,
};

const checkedUserReducer = (state: ObjectLiteral, action: ActionType) => {
  const { type, payload } = action;

  if (type === actionTypes.setCheckedUser) {
    return { ...state, checkedUser: payload };
  }

  return state;
};

const clientConfigsData = {
  clientConfigs: false,
};

const clientConfigsReducer = (state: ObjectLiteral, action: ActionType) => {
  const { type, payload } = action;

  if (type === actionTypes.setClientConfigs) {
    return { ...state, clientConfigs: payload };
  }

  return state;
};

export const combinedReducers = reduceReducers(
  clientInfoReducer,
  actionModalReducer,
  baseUrlReducer,
  activeDataTypeReducer,
  pageTitleReducer,
  activePhoneReducer,
  showLayoutReducer,
  boardLoadingReducer,
  showLogoReducer,
  showBackReducer,
  checkedUserReducer,
  clientConfigsReducer
);

export const initialState = {
  ...clientInfoData,
  ...actionModalData,
  ...clientConfigsData,
  ...baseUrlData,
  ...activeDataTypeData,
  ...pageTitleData,
  ...activePhoneData,
  ...showLayoutData,
  ...boardLoadingData,
  ...showLogoData,
  ...showBackData,
  ...checkedUserData,
};
