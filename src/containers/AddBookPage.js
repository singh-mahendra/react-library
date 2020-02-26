import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/creators";

class AddBookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      author: "",
      description: ""
    };
  }

  onChangeName(event) {
    const value = event.target.value;
    this.setState({
      name: value
    });
  }

  onChangeDescription(event) {
    const value = event.target.value;
    this.setState({
      author: value
    });
  }

  onChangeAuthor(event) {
    const value = event.target.value;
    this.setState({
      description: value
    });
  }

  onAddBook(event) {
    event.preventDefault();
    this.props.actions.addBook({ book: this.state });
  }

  render() {
    return (
      <>
        <h1>Add Book</h1>
        <form>
          <label>
            Name:
            <input type="text" onChange={this.onChangeName.bind(this)} />
          </label>
          <label>
            Description:
            <input type="text" onChange={this.onChangeDescription.bind(this)} />
          </label>
          <label>
            Author:
            <input type="text" onChange={this.onChangeAuthor.bind(this)} />
          </label>
          <input
            type="button"
            onClick={this.onAddBook.bind(this)}
            value="Add Book"
          />
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  book: state.book
});

const mapDispatchToProps = (dispatch, state) => ({
  actions: bindActionCreators(Object.assign({}, actionCreators), dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBookPage);
