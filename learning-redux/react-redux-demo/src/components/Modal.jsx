import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as modalActionCreator from "../store/actions/modal.action";

function Modal(props) {
	const { show, showModal, hideModal } = props;
	const styles = {
		width: 200,
		height: 200,
		position: "absolute",
		left: "50%",
		top: "50%",
		marginLeft: "-50%",
		// marginTop: "-50%",
		backgroundColor: "skyblue",
	};

	return (
		<div>
			<button onClick={showModal}>显示</button>
			<button onClick={hideModal}>隐藏</button>
			<div style={{ position: "relative" }}>{show ? <div style={styles}></div> : null}</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		show: state.modal.show,
	};
};

const mapDispatchToProps = (dispatch) => bindActionCreators(modalActionCreator, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
