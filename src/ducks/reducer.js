const initialState = {
    loanType : 'Home purchase',
    propertyType : 'Single Family House',
    city : '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
};
const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";
const UPDATE_CITY ='UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';
const UPDATE_REAL_STATE_AGENT = 'UPDATE_REAL_STATE_AGENT';
const UPDATE_COST = 'UPDATE_COST';
const UPDATE_DOWN_PAYMENT = 'UPDATE_DOWN_PAYMENT';
const UPDATE_CREDIT = 'UPDATE_CREDIT';
const UPDATE_HISTORY = 'UPDATE_HISTORY';
const UPDATE_ADDRESS_ONE = 'UPDATE_ADRESS_ONE';
const UPDATE_ADDRESS_TWO = 'UPDATE_ADRESS_TWO';
const UPDATE_ADDRESS_THREE = 'UPDATE_ADRESS_THREE';
const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_LOAN_TYPE:
        console.log('hi')
            return Object.assign({}, state, {loanType : action.payload});
        case UPDATE_PROPERTY_TYPE:
            return Object.assign({},state,{propertyType: action.payload});
        case UPDATE_CITY:
            return Object.assign({}, state,{city : action.payload});
        case UPDATE_PROP:
        console.log('case UPDATE_PROP passing')
            return Object.assign({},state,{propToBeUsedOn: action.payload});
        case UPDATE_FOUND:
            return Object.assign({},state,{found: action.payload});
        case UPDATE_REAL_STATE_AGENT :
            return Object.assign({},state,{realEstateAgent : action.payload});
        case UPDATE_COST:
            return Object.assign({},state,{cost:action.payload});
        case UPDATE_DOWN_PAYMENT:
            return Object.assign({},state,{downPayment : action.payload});
        case UPDATE_CREDIT: 
            return Object.assign({},state,{credit : action.payload});
        case UPDATE_HISTORY:
            return Object.assign({},state,{history: action.payload});
        case UPDATE_ADDRESS_ONE:
            return Object.assign({},state,{addressOne :action.payload});
        case UPDATE_ADDRESS_TWO:
            return Object.assign({}, state,{addressTwo:action.payload});
        case UPDATE_ADDRESS_THREE:
            return Object.assign({},state,{addressThree: action.payload});
        case UPDATE_FIRST_NAME:
            return Object.assign({},state,{firstName : action.payload});
        case UPDATE_LAST_NAME: 
            return Object.assign({}, state,{lastName : action.payload});
        case UPDATE_EMAIL:
            return Object.assign({},state,{email: action.payload});
    default : return state;
    }
}
export function updateLoanType( loanType ){
    return {
      type: UPDATE_LOAN_TYPE,
      payload: loanType
    }
  }
export function updateCity (city){
    return {
        type : UPDATE_CITY,
        payload: city
    }
}
  export function updatePropertyType( property ) {
    return {
      type: UPDATE_PROPERTY_TYPE,
      payload: property
    }
  }
export function updateProp(prop){
    console.log("exporting the property function")
    return {
        type : UPDATE_PROP,
        payload : prop
    }
}
export function updateFound(found){
    return {
        type: UPDATE_FOUND,
        payload: found
    }
}
export function updateRealEstateAgent(realEstate){
    return {
        type: UPDATE_REAL_STATE_AGENT,
        payload: realEstate
    }
}
export function updateCost(amount){
    console.log(amount)
    return {
        type: UPDATE_COST,
        payload: amount
    }
}
export function updateDownPayment(payment){
    console.log(payment)
    return {
        type: UPDATE_DOWN_PAYMENT,
        payload: payment
    }
}
export function updateCredit(credit){
    console.log(credit)
    return {
        type: UPDATE_CREDIT,
        payload: credit
    }
}
export function updateHistory(data){
    console.log(data)
    return {
        type: UPDATE_HISTORY,
        payload: data
    }
}
export function updateAddressOne(address1){
    console.log(address1)
    return {
        type: UPDATE_ADDRESS_ONE,
        payload: address1
    }
}
export function updateAddressTwo(address2){
    console.log(address2)
    return {
        type: UPDATE_ADDRESS_TWO,
        payload: address2
    }
}
export function updateAddressThree(address3){
    console.log(address3)
    return {
        type: UPDATE_ADDRESS_THREE,
        payload: address3
    }
}
export function updateFirstName(name){
    console.log(name)
    return {
        type: UPDATE_FIRST_NAME,
        payload: name
    }
}
export function updateLastName(lastName){
    console.log(lastName)
    return {
        type: UPDATE_LAST_NAME,
        payload: lastName
    }
}
export function updateMail(mail){
    console.log(mail)
    return {
        type: UPDATE_EMAIL,
        payload: mail
    }
}
export default reducer;