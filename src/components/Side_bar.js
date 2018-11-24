import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    changePost: (name) => {
      dispatch({ type: 'CLICK_POST', name: name })
    }
  }
};

function mapStateToProps(state) {
return {
  ListWebs: state.ListWebs,
  Hamburguer: state.HamburguerButton
};
}


class SideBar extends Component {

  changeActualPage(name) {
    this.props.changePost(name)
  }

  createList() {
    return this.props.ListWebs.ListWebs.map(post => {
      return (
        <li style={{ cursor: "pointer" }} key={post.name} onClick={() => { this.changeActualPage(post.name) }}>{post.name}</li>
      )
    })
  }

  render() {
    if (this.props.Hamburguer.Hamburguer === true) {
      return (
        <div className="Side_bar">
          <ul>
            {this.createList()}
          </ul>
        </div>
      )
    } else {
      return null;
    }
  };
}




export default connect(mapStateToProps, mapDispatchToProps)(SideBar);