export const REGISTER_ASYNC = 'Sign up (async)';
export const REGISTER = 'Sign up - set data to store';

export const LOGIN_ASYNC_FACEBOOK = 'Login by Facebook (async)';
export const LOGIN_ASYNC_GOOGLE = 'Login by Google (async)';

export const LOGIN_ASYNC = 'Login (async)';
export const LOGIN = 'Login - set token to store';

export const LOGOUT = 'Logout - remove data from store';

export const PASSWORD_RECOVERY_ASYNC = 'Send email for reset password (async)';
export const PASSWORD_RECOVERY = 'Set success message about senging email';

export const PASSWORD_RECOVERY_TOKEN_ASYNC = 'Send new password (async)';
export const PASSWORD_RECOVERY_TOKEN = 'Send new data to store';


export const SET_LIST_NEW_PROPERTY_ASYNC = 'Send create-property request (async)';

export const SET_LISTING_PLAN = 'Set pricing listing plan';
export const SET_LISTING_PLAN_PAYMENT = 'Set pricing listing plan payment';


export const LOGIN_ERROR = 'Set error to store';
export const INSIDE_APP_ERROR = 'Set app error to store';


export const SET_PROPERTY_ID = 'Set property id to store';

export const GET_PROPERTY_DATA_ASYNC = 'Get property data (async)';
export const SET_PROPERTY_DATA = 'Set property data to store';

export const GET_PROPERTY_MARKET_DATA_ASYNC = 'Get property market data (async)';
export const SET_PROPERTY_MARKET_DATA = 'Set property market data to store';

export const GET_PROPERTY_FORM_ASYNC = 'Get property detailed form (async)';
export const SET_PROPERTY_FORM = 'Set property detailed form to store';

export const GET_PROPERTY_LIST_ASYNC = 'Get property list (async)';
export const GET_PROPERTY_LIST_ADMIN_ASYNC = 'Get property list admin (async)';

export const SET_PROPERTY_LIST = 'Set property list to store';
export const SET_PROPERTY_LIST_ADMIN = 'Set property list for admin to store';

export const GET_PROPERTY_LOG_ASYNC = 'Get property log (async)';
export const SET_PROPERTY_LOG = 'Set property log to store';

export const GET_USER_LIST_ASYNC = 'Get user list (async)';
export const SET_USER_LIST = 'Set user list to store';

export const GET_OFFER_LIST_ASYNC = 'Get offers list (async)';
export const SET_OFFER_LIST = 'Set offers list to store';
export const SAVE_OFFER_ASYNC = 'Create offer (async)';
export const SET_OFFER_STATUS_ASYNC = 'Save offer status (async)';


export const GET_ANNOUNCE_LIST_ASYNC = 'Get announces list (async)';
export const SET_ANNOUNCE_LIST = 'Set announces list to store';
export const SAVE_ANNOUNCE_ASYNC = 'Create announce (async)';
export const DELETE_ANNOUNCE_ASYNC = 'Delete announce (async)';

export const GET_ACCOUNT_DATA_ASYNC = 'Get account data (async)';
export const SET_ACCOUNT_DATA = 'Set account data to store';

export const GET_PROPERTY_DATA_FOR_PREVIEW_ASYNC = 'Get property data for preview modal (async)';
export const SET_PROPERTY_DATA_FOR_PREVIEW = 'Set property data for preview modal to store';

export const GET_DATA_TASK_ASYNC = 'Get data task (async)';
export const GET_MARKET_TASK_ASYNC = 'Get market task (async)';
export const SET_DATA_TASK = 'Set data task to store';

export const SAVE_PERSONAL_DETAILS_ASYNC = 'Save personal details to backend (async)';
export const SAVE_NEW_PASS_ASYNC = 'Save new password to backend (async)';

export const SAVE_ANNOUNCE_OPEN_HOUSE_ASYNC = 'Save SAVE_ANNOUNCE_OPEN_HOUSE to backend (async)';

export const SAVE_OWNER_INFO_ASYNC = 'Save owner info to backend (async)';
export const SAVE_LISTING_INFO_ASYNC = 'Save listing info to backend (async)';
export const SAVE_ORDER_YARD_ASYNC = 'SAVE_ORDER_YARD_ASYNC to backend (async)';
export const SAVE_LISTING_AGREEMENT_ASYNC = 'SAVE_LISTING_AGREEMENT_ASYNC to backend (async)';
export const SAVE_MLS_NUMBER_ASYNC = 'SAVE_MLS_NUMBER_ASYNC to backend (async)';
export const SAVE_PROP_STATUS_ASYNC = 'SAVE_PROP_STATUS_ASYNC to backend (async)';

export const SAVE_MEDIA_ASYNC = 'Save media form to backend (async)';

export const SUCCESS_SAVE_FORM = 'successSaveForm -> to store';

export const SAVE_PROPERTY_DETAILS_ASYNC = 'Save property details (dynamic forms) to backend (async)';

export const SAVE_SCHEDULE_PLAN_ASYNC = 'Save schedule plan (async)';


export const GET_GOOGLE_REVIEWS_ASYNC = 'Get Google reviews by Google API (async)';


export const registerAsync = data => ({ type: REGISTER_ASYNC, data });
export const register = data => ({ type: REGISTER, data });

export const loginAsyncFacebook = data => ({ type: LOGIN_ASYNC_FACEBOOK, data });
export const loginAsyncGoogle = data => ({ type: LOGIN_ASYNC_GOOGLE, data });

export const loginAsync = data => ({ type: LOGIN_ASYNC, data });
export const login = data => ({ type: LOGIN, data });

export const logout = () => ({ type: LOGOUT });

export const passwordRecoveryAsync = data => ({ type: PASSWORD_RECOVERY_ASYNC, data });
export const passwordRecovery = data => ({ type: PASSWORD_RECOVERY, data });

export const passwordRecoveryTokenAsync = data => ({ type: PASSWORD_RECOVERY_TOKEN_ASYNC, data });
export const passwordRecoveryToken = data => ({ type: PASSWORD_RECOVERY_TOKEN, data });


export const setListNewPropertyAsync = data => ({ type: SET_LIST_NEW_PROPERTY_ASYNC, data });

export const setListingPlan = data => ({ type: SET_LISTING_PLAN, data });
export const setListingPlanPayment = data => ({ type: SET_LISTING_PLAN_PAYMENT, data });


export const setLoginError = data => ({ type: LOGIN_ERROR, data });
export const setAppError = data => ({ type: INSIDE_APP_ERROR, data });


export const setPropertyId = data => ({ type: SET_PROPERTY_ID, data });

export const getPropertyDataAsync = data => ({ type: GET_PROPERTY_DATA_ASYNC, data });
export const setPropertyData = data => ({ type: SET_PROPERTY_DATA, data });

export const getPropertyMarketDataAsync = data => ({ type: GET_PROPERTY_MARKET_DATA_ASYNC, data });
export const setPropertyMarketData = data => ({ type: SET_PROPERTY_MARKET_DATA, data });

export const getPropertyFormAsync = data => ({ type: GET_PROPERTY_FORM_ASYNC, data });
export const setPropertyForm = data => ({ type: SET_PROPERTY_FORM, data });

export const getPropertyListAsync = data => ({ type: GET_PROPERTY_LIST_ASYNC, data });
export const getPropertyListAdminAsync = data => ({ type: GET_PROPERTY_LIST_ADMIN_ASYNC, data });

export const setPropertyList = data => ({ type: SET_PROPERTY_LIST, data });
export const setPropertyListAdmin = data => ({ type: SET_PROPERTY_LIST_ADMIN, data });

export const getPropertyLogAsync = data => ({ type: GET_PROPERTY_LOG_ASYNC, data });
export const setPropertyLogList = data => ({ type: SET_PROPERTY_LOG, data });

export const getUserListAsync = data => ({ type: GET_USER_LIST_ASYNC, data });
export const setUserList = data => ({ type: SET_USER_LIST, data });

export const getOfferListAsync = data => ({ type: GET_OFFER_LIST_ASYNC, data });
export const setOfferList = data => ({ type: SET_OFFER_LIST, data });
export const saveOfferAsync = data => ({ type: SAVE_OFFER_ASYNC, data });
export const getAnnounceListAsync = data => ({ type: GET_ANNOUNCE_LIST_ASYNC, data });

export const saveOfferStatusAsync = data => ({ type: SET_OFFER_STATUS_ASYNC, data });

export const setAnnounceList = data => ({ type: SET_ANNOUNCE_LIST, data });
export const saveAnnounceAsync = data => ({ type: SAVE_ANNOUNCE_ASYNC, data });
export const deleteAnnounceAsync = data => ({ type: DELETE_ANNOUNCE_ASYNC, data });

export const getAccountDataAsync = data => ({ type: GET_ACCOUNT_DATA_ASYNC, data });
export const setAccountData = data => ({ type: SET_ACCOUNT_DATA, data });

export const getPropertyDataForPreviewAsync = data => ({ type: GET_PROPERTY_DATA_FOR_PREVIEW_ASYNC, data });
export const getPropertyDataForPreview = data => ({ type: SET_PROPERTY_DATA_FOR_PREVIEW, data });

export const getDataTaskAsync = data => ({ type: GET_DATA_TASK_ASYNC, data });
export const getMarketTaskAsync = data => ({ type: GET_MARKET_TASK_ASYNC, data });
export const setDataTask = data => ({ type: SET_DATA_TASK, data });


export const saveAnnounceOpenHouseAsync = data => ({ type: SAVE_ANNOUNCE_OPEN_HOUSE_ASYNC, data });


export const saveOwnerInfoAsync = data => ({ type: SAVE_OWNER_INFO_ASYNC, data });
export const savePersonalDetailsAsync = data => ({ type: SAVE_PERSONAL_DETAILS_ASYNC, data });

export const saveNewPassAsync = data => ({ type: SAVE_NEW_PASS_ASYNC, data });


export const saveListingInfoAsync = data => ({ type: SAVE_LISTING_INFO_ASYNC, data });
export const saveOrderYardAsync = data => ({ type: SAVE_ORDER_YARD_ASYNC, data });
export const saveListingAgreementAsync = data => ({ type: SAVE_LISTING_AGREEMENT_ASYNC, data });
export const saveMlsNumberAsync = data => ({ type: SAVE_MLS_NUMBER_ASYNC, data });
export const savePropStatusAsync = data => ({ type: SAVE_PROP_STATUS_ASYNC, data });

export const saveMediaAsync = data => ({ type: SAVE_MEDIA_ASYNC, data });

export const successSaveForm = data => ({ type: SUCCESS_SAVE_FORM, data });

export const savePropertyDetailsAsync = data => ({ type: SAVE_PROPERTY_DETAILS_ASYNC, data });

export const saveSchedulePlanAsync = data => ({ type: SAVE_SCHEDULE_PLAN_ASYNC, data });


export const getGoogleReviewsAsync = () => ({ type: GET_GOOGLE_REVIEWS_ASYNC });
