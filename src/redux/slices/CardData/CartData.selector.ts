import { useSelector } from "react-redux";
import { RootState } from "../../store";

const selectCartData = useSelector((state: RootState) => state.cartData);
