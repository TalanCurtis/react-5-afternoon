const initialState = {
    loanType: 'Home Purchase',
    propType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: 'false',
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
// Actions
const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';
const UPDATE_REAL_ESTATE_AGENT = 'UPDATE_REAL_ESTATE_AGENT'
const UPDATE_PURCHASE_COST = 'UPDATE_PURCHASE_COST'
const UPDATE_DOWN_PAYMENT = 'UPDATE_DOWN_PAYMENT'
const UPDATE_CREDIT = 'UPDATE_CREDIT'
const UPDATE_HISTORY ='UPDATE_HISTORY'
const UPDATE_ADD_LINE_ONE = 'UPDATE_ADD_LINE_ONE'
const UPDATE_ADD_LINE_TWO = 'UPDATE_ADD_LINE_TWO'
const UPDATE_ADD_LINE_THREE = 'UPDATE_ADD_LINE_THREE'
const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME'
const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME'
const UPDATE_EMAIL= 'UPDATE_EMAIL'


// Ruducer
function reducer(state = initialState, action) {
    let newState ={}
    switch (action.type) {
        case 'UPDATE_LOAN_TYPE':
            console.log(Object.assign({}, state, { loanType: action.payload }))
            return Object.assign({}, state, { loanType: action.payload });
        case 'UPDATE_PROPERTY_TYPE':
            console.log(Object.assign({}, state, { propType: action.payload }))
            return Object.assign({}, state, { propType: action.payload })
        case 'UPDATE_CITY':
            console.log(Object.assign({}, state, { city: action.payload }))
            return Object.assign({}, state, { city: action.payload });
        case 'UPDATE_PROP':
            console.log(Object.assign({}, state, { propToBeUsedOn: action.payload }))
            return Object.assign({}, state, { propToBeUsedOn: action.payload })
        case 'UPDATE_FOUND':
            console.log(Object.assign({}, state, { found: action.payload }))
            return Object.assign({}, state, { found: action.payload })
        case 'UPDATE_REAL_ESTATE_AGENT':
            console.log(Object.assign({}, state, { realEstateAgent: action.payload }))
            return Object.assign({}, state, { realEstateAgent: action.payload })
        case 'UPDATE_DOWN_PAYMENT':
            newState = Object.assign({}, state, {downPayment: action.payload})
            console.log(newState)
            return newState;
        case 'UPDATE_PURCHASE_COST':
            newState = Object.assign({}, state, {cost: action.payload})
            console.log(newState)
            return newState;
        case 'UPDATE_CREDIT':
            newState = Object.assign({}, state, {credit: action.payload})
            console.log(newState)
            return newState;
        case 'UPDATE_HISTORY':
            newState = Object.assign({}, state, {history: action.payload})
            console.log(newState);
            return newState;
        case 'UPDATE_ADD_LINE_ONE':
            newState = Object.assign({}, state, {addressOne: action.payload})
            console.log(newState);
            return newState;
        case 'UPDATE_ADD_LINE_TWO':
            newState = Object.assign({}, state, {addressTwo: action.payload})
            console.log(newState);
            return newState;
        case 'UPDATE_ADD_LINE_THREE':
            newState = Object.assign({}, state, {addressThree: action.payload})
            console.log(newState);
            return newState;
        case 'UPDATE_FIRST_NAME':
            newState = Object.assign({}, state, {firstName: action.payload})
            console.log(newState);
            return newState;
        case 'UPDATE_LAST_NAME':
            newState = Object.assign({}, state, {lastName: action.payload})
            console.log(newState);
            return newState;
        case 'UPDATE_EMAIL':
            newState = Object.assign({}, state, {email: action.payload})
            console.log(newState);
            return newState;


            console.log(newState);
            return newState;
        default:
            return state;
    }

}

// Action Creators
export function updateLoanType(loanType) {
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType,
    }
}
export function updatePropertyType(property) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property,
    }
}
export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    };
}
export function updateProp(prop) {
    return {
        type: UPDATE_PROP,
        payload: prop
    }
}
export function updateFound(found) {
    return {
        type: UPDATE_FOUND,
        payload: found
    }
}
export function updateRealEstateAgent(hasAgent) {
    return {
        type: UPDATE_REAL_ESTATE_AGENT,
        payload: hasAgent
    }
}
export function updateCost(cost) {
    return {
        type: UPDATE_PURCHASE_COST,
        payload: cost
    }
}
export function updateDownPayment(downPayment){
    return{
        type: UPDATE_DOWN_PAYMENT,
        payload: downPayment
    }
}
export function updateCredit(credit){
    return {
        type: UPDATE_CREDIT,
        payload: credit
    }
}
export function updateHistory(history){
    return {
        type: UPDATE_HISTORY,
        payload: history
    }
}
export function updateAddLineOne(address){
    return {
        type: UPDATE_ADD_LINE_ONE,
        payload: address
    }
}
export function updateAddLineTwo(address){
    return {
        type: UPDATE_ADD_LINE_TWO,
        payload: address
    }
}
export function updateAddLineThree(address){
    return {
        type: UPDATE_ADD_LINE_THREE,
        payload: address
    }
}
export function updateFirstName(name){
    return {
        type: UPDATE_FIRST_NAME,
        payload: name
    }
}
export function updateLastName(name){
    return {
        type: UPDATE_LAST_NAME,
        payload: name
    }
}
export function updateEmail(email){
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}


export default reducer;