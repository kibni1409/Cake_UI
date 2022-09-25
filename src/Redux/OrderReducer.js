import {orderAPI} from "../DAL/API";

let SET_ORDER = "OrderReducer/SET_ORDER";
let SET_TOTAL_COUNT = "OrderReducer/SET_TOTAL_COUNT";
let SET_SIZE_PAGE = "OrderReducer/SET_SIZE_PAGE";
let SET_SKIP = "OrderReducer/SET_SKIP";

let initialState = {
    orders: null,
    totalCount: null,
    sizePage: null,
    skip: null
}

let OrderReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_ORDER: {
            return {
                ...state,
                orders: action.orders
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalCount: action.totalCount
            }

        }
        case SET_SIZE_PAGE: {
            return {
                ...state,
                sizePage: action.sizePage
            }
        }
        case SET_SKIP: {
            return {
                ...state,
                skip: action.skip
            }
        }
        default:
            return state;
    }
};

export const OrderAC = (orders) => {
    return {
        type: SET_ORDER,
        orders: orders
    }
}

export const TotalCountAC = (count) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount: count
    }
}

export const SizePageAC = (size) => {
    return {
        type: SET_SIZE_PAGE,
        sizePage: size
    }
}

export const SkipAC = (count) => {
    return {
        type: SET_SKIP,
        skip: count
    }
}

export const setOrderThunk = () => {
    return async dispatch => {
        let response = await orderAPI.GetOrder()
        dispatch(OrderAC(response.rows));
        dispatch(TotalCountAC(response.total_rows))
        dispatch(SkipAC(response.offset))
    }
}

export const AddOrderThunk = (name, age) => {
    return async dispatch => {
        let response = await orderAPI.AddOrder(name, age);
        if(response === "OK"){
            dispatch(setOrderThunk())
        }
    }
}

export default OrderReducer;