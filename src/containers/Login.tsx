import React, { Component } from "react";
import { bindActionCreators } from "redux";
import Login from "../components/Login";
import * as CounterActions from "../redux/counter/actions";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux";

interface ConnectProps {
}

interface DispatchProps {
}

class LoginContainer extends Component<ConnectProps & DispatchProps, {}> {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return <Login {...this.props} />;
  }
}

export default connect<ConnectProps, DispatchProps>(
  (state: AppState) => ({
  }),
  (dispatch: Dispatch) => ({
  })
)(LoginContainer);
