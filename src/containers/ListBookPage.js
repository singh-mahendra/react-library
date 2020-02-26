import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/creators";
import BookList from "../components/BookList";

class ListBookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <h1>Book List</h1>
        <BookList books={this.props.allBooks} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  allBooks: state.allBooks
});

const mapDispatchToProps = (dispatch, state) => ({
  actions: bindActionCreators(Object.assign({}, actionCreators), dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListBookPage);
