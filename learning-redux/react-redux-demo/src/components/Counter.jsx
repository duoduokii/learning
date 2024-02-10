import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as counterActions from "../store/actions/counter.action";

// connent 的用法与作用
function Counter(props) {
	const { count, decrement, increment } = props;
	return (
		<div>
			<button onClick={() => increment(2)}>+</button>
			<span>{count}</span>
			<button onClick={() => decrement(2)}>-</button>
		</div>
	);
}

// 订阅store
// 获取store中的状态
// 获取dispatch方法

const mapStateToProps = (state) => {
	return {
		count: state.counter.count,
	};
};

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		decrement: () => dispatch({ type: "decrement" }),
// 		increment: () => dispatch({ type: "increment" }),
// 	};
// };

const mapDispatchToProps = (dispatch) => bindActionCreators(counterActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
