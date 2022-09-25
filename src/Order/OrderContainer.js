import {connect} from "react-redux";
import {compose} from "redux";
import OrderAPI from "./OrderAPI";
import {AddOrderThunk, setOrderThunk, SizePageAC, SkipAC, TotalCountAC} from "../Redux/OrderReducer";

let mapStateToProps = (state) => {
    return {
        orders: state.OrderPage.orders,
        totalCount: state.OrderPage.totalCount,
        sizePage: state.OrderPage.sizePage,
        skip: state.OrderPage.skip
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setOrderThunk: () => {
            dispatch(setOrderThunk());
        },
        addOrderThunk: (name, age) => {
            dispatch(AddOrderThunk(name, age));
        },
        setTotalCount: (count) => {
            let action = TotalCountAC(count);
            dispatch(action);
        },
        setSizePage: (count) => {
            let action = SizePageAC(count);
            dispatch(action);
        },
        setSkip: (count) => {
            let action = SkipAC(count);
            dispatch(action);
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
)(OrderAPI)