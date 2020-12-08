import React, { Component } from "react";
import Birthday from "../birthday/Birthday";
import Employees from "../employees/Employees";
import "./App.css";
import { connect } from "react-redux";
import { changeSelected } from "../../redux/actions/actions";
import * as actionOperation from "../../redux/actions/actionsOperation";

class App extends Component {
  componentDidMount() {
    this.props.fetchData(
      `https://yalantis-react-school-api.yalantis.com/api/task0/users`
    );
  }

  render() {
    const { handleChangeSelected } = this.props;
    return (
      <div className="wrapper">
        <Employees
          onUsers={this.props.state}
          onHandleChange={handleChangeSelected}
        />
        <Birthday list={this.props.state.listBirthday}/>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(actionOperation.usersfetchData(url)),
    handleChangeSelected: (e) => dispatch(changeSelected(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
