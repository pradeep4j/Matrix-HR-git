import {createStore,combineReducers,applyMiddleware/*,compose*/} from 'redux';  // configureStore will be used to create store. combineReducers will be used for combining all reducers, applyMiddlware will be used with redux-thunk to apply thunk middlewares if needs.
import thunk from 'redux-thunk';  // if after getting dispatch from action if  it returns function thunk will apply ascynchronously some logic as middleware then give it to reducer.
import { composeWithDevTools } from "redux-devtools-extension";

import {
        userLoginReducer,
} from './reducers/authReducers';  // imporeting auth user reducers

import {
        auditorReducer,
        categoryReducer,
        categoryGetReducer,
        categoryEditReducer,
        categoryDeleteReducer,
        stateGetReducer,
        userGetReducer,
        notificationCreateReducer,
        userCreateReducer,
        userEditReducer,
        branchGetReducer,
        companyGetReducer,
        complianceGetReducer,
        companyCreateReducer,
        complianceCreateReducer,
        complianceGetByIdReducer,
        complianceGetOnCreateReducer,        
        notificationGetReducer,
        complianceUpdateByIdReducer,
        complianceApproveReducer,
        complianceRejectReducer,
        complianceGetAllReducer,
        complianceFilterCreateReducer,
        complianceFilterRejectReducer,
        complianceFilterApproveReducer,
        complianceFilterAllReducer,
        checklistReducer,
        checklistGetReducer,
        checklistUpdateByIdReducer,
        checklistGetOnCreateReducer,
        checklistGetByIdReducer,
        checklistGetAllReducer,
        checklistApproveReducer,
        checklistFilterAllReducer,
        checklistFilterCreateReducer,
        checklistGetApproveReducer,
        checklistFilterApproveReducer,
        checklistGetOnRejectReducer,
        checklistRejectedReducer,
        checklistFilterRejectReducer,
        checklistAllComplianceReducer,
        auditAllReducer,
        namerateCreateReducer,
        docCreateReducer

} from './reducers/otherReducers';  // imporeting auth user reducers

const reducer = combineReducers({
        getAuditor:auditorReducer,
        userLogin: userLoginReducer,
        catCreate:categoryReducer,
        catGet:categoryGetReducer,
        catEdit:categoryEditReducer,
        catDelete:categoryDeleteReducer,
        getState:stateGetReducer,
        userGet:userGetReducer,
        notificationCreate:notificationCreateReducer,
        userCreate:userCreateReducer,
        userEdits:userEditReducer,
        checklist:checklistReducer,
        checklistGet:checklistGetReducer,
        getBranch:branchGetReducer,
        getCompney:companyGetReducer,
        getCompliance:complianceGetReducer,
        createCompany:companyCreateReducer,
        createCompliance:complianceCreateReducer,
        getttingNotification:notificationGetReducer,
        complianceId:complianceGetByIdReducer,
        getComplianceOnCreate:complianceGetOnCreateReducer,
        complianceByIdUpdate:complianceUpdateByIdReducer,
        approveCompliance:complianceApproveReducer,
        rejectCompliance:complianceRejectReducer,
        getComplianceall:complianceGetAllReducer,
        getComplianceCreateFilter:complianceFilterCreateReducer,
        getComplianceRejectFilter:complianceFilterRejectReducer,
        getComplianceApproveFilter:complianceFilterApproveReducer,
        complianceAllFiltered:complianceFilterAllReducer,
        checklistByIdUpdate:checklistUpdateByIdReducer,
        getCheckOnCreate:checklistGetOnCreateReducer,
        checklistId:checklistGetByIdReducer,
        getChecklistall:checklistGetAllReducer,
        getChecklistApprove:checklistGetApproveReducer,
        approveChecklist:checklistApproveReducer,
        filterAllChecklist:checklistFilterAllReducer,
        filterCreateChecklist:checklistFilterCreateReducer,
        filterApproveChecklist:checklistFilterApproveReducer,
        rejectChecklist:checklistGetOnRejectReducer,
        rejectedChecklist:checklistRejectedReducer,
        rejectFilterChecklist:checklistFilterRejectReducer,
        checklistAllComliance:checklistAllComplianceReducer,
        allAuditGet:auditAllReducer,
        namerate:namerateCreateReducer,
        createDoc:docCreateReducer
});

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) :"";

const initialState = {
        userLogin : {userInfo: userInfoFromStorage},
       // category

};

const middleware = [thunk];

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));//this is also correct
//const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(thunk))); // this is also correct

export default store;
