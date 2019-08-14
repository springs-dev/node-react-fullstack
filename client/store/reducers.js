import {
    REGISTER,
    LOGIN,
    LOGIN_ERROR,
    INSIDE_APP_ERROR,
    PASSWORD_RECOVERY,
    PASSWORD_RECOVERY_TOKEN,
    LOGOUT,
    SET_LISTING_PLAN_PAYMENT,
    SET_LISTING_PLAN,
    SET_PROPERTY_ID,
    SET_PROPERTY_DATA,
    SET_PROPERTY_FORM,
    SET_PROPERTY_LIST,
    SET_PROPERTY_LIST_ADMIN,
    SET_PROPERTY_LOG,
    SET_USER_LIST,
    SET_ANNOUNCE_LIST,
    SET_OFFER_LIST,
    SET_ACCOUNT_DATA,
    SET_DATA_TASK,
    SUCCESS_SAVE_FORM,
    SET_PROPERTY_DATA_FOR_PREVIEW,
    SET_PROPERTY_MARKET_DATA,
} from './actions';

const initialState = {
  role: parseJwt(window.localStorage.getItem('token')).role || 'user',
  login: !!window.localStorage.getItem('token'),
  loginToken: window.localStorage.getItem('token') || null,
  email: window.localStorage.getItem('email') || null,
  error: null,
  successMessage: null,
  listingPlan: null,
  listingPlanPayment: 'one_time_payment',
  propertyId: window.localStorage.getItem('propertyId') || null,
  propertyData: {},
  propertyMarketData: {},
  propertyForm: null,
  propertyList: null,
  userList: null,
  announcesList: null,
  offersList: null,
  accountData: null,
  dataTask: null,
  successSaveForm: false,
  propertyModalData: null,
};
function parseJwt (token) {
    if(!token) return {};
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}
export const state = (state = initialState, { type, data }) => {
  switch (type) {
    case REGISTER: {
      return {
        ...state,
        login: true,
        loginToken: data.token,
        email: data.email,
      };
    }

    case LOGIN_ERROR: {
      return { ...state, login: false, error: data.error };
    }

    case INSIDE_APP_ERROR: {
      return { ...state, error: data.error, successSaveForm: false };
    }

    case LOGIN: {
        let parsed = {};
        if(data.token){
            parsed = parseJwt(data.token);
        }
        return {
        ...state,
        login: true,
        loginToken: data.token,
        email: data.user,
        role: parsed.role?parsed.role:'user',
      };
    }

    case LOGOUT: {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('email');
      return {
        ...state,
        login: false,
        loginToken: null,
        email: null,
        role: null,
      };
    }

    case PASSWORD_RECOVERY: {
      return { ...state, successMessage: data };
    }

    case PASSWORD_RECOVERY_TOKEN: {
      return {
        ...state,
        login: true,
        loginToken: data.token,
        email: data.email,
      };
    }

    case SET_LISTING_PLAN_PAYMENT: {
      return { ...state, listingPlanPayment: data };
    }

    case SET_LISTING_PLAN: {
      return { ...state, listingPlan: data };
    }

    case SET_PROPERTY_ID: {
      return { ...state, propertyId: data.id };
    }

    case SET_PROPERTY_DATA: {
      let tmp=state.propertyData;
      tmp[data.id]=data.data;
      return { ...state, propertyData: tmp };
    }

    case SET_PROPERTY_MARKET_DATA: {
      let tmp=state.propertyMarketData;
      tmp[data.id]=data.data;
      return { ...state, propertyMarketData: tmp };
    }

    case SET_PROPERTY_FORM: {
      return { ...state, propertyForm: data };
    }

    case SET_PROPERTY_LIST: {
      return { ...state, propertyList: data };
    }

    case SET_PROPERTY_LIST_ADMIN: {
      return { ...state, propertyListAdmin: data };
    }

    case SET_PROPERTY_LOG: {
      return { ...state, propertyLog: data };
    }

    case SET_USER_LIST: {
      return { ...state, userList: data };
    }

    case SET_ANNOUNCE_LIST: {
        return { ...state, announcesList: data };
    }
    case SET_OFFER_LIST: {
        return { ...state, offersList: data };
    }

    case SET_ACCOUNT_DATA: {
      return { ...state, accountData: data };
    }

    case SET_DATA_TASK: {
      return { ...state, dataTask: data };
    }

    case SUCCESS_SAVE_FORM: {
      return { ...state, successSaveForm: data };
    }

    case SET_PROPERTY_DATA_FOR_PREVIEW: {
      return { ...state, propertyModalData: data };
    }

    default: {
      return state;
    }
  }
};

