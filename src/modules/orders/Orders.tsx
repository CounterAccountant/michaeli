import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { getUsername } from "../login/LoginReducer";


interface OrdersParams {

}

const Orders: FunctionComponent<OrdersParams> = (params: OrdersParams) => {
    const username = useSelector(getUsername);
    return (
        <div>
            <p>Hello World</p>
            <p>{username}</p>
        </div>
    )
}

export default Orders;