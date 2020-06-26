import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  //Help method to determin the state of User log in or not
  renderContent() {
    switch (
      this.props.auth //this is the model User????
    ) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href='/auth/google'>Login With Google</a>
          </li>
        );
      default:
        return [
          <li key='1'>
            <Payments />
          </li>,
          <li key='3' style={{ margin: "0 10px" }}>
            Credits:{this.props.auth.credits}
          </li>,
          <li key='2'>
            <a href='/api/logout'>Log Out</a>
          </li>
        ];
      // return (
      //   <React.Fragment>
      //     <Payments /> <a href='/api/logout'>Log Out</a>
      //   </React.Fragment>
      // );
    }
  }

  render() {
    //console.log(this.props);
    return (
      <nav>
        <div className='nav-wrapper'>
          {/* Using ternary operator to direct to the appropriate route if a user is logged in */}
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className='left brand-logo'
          >
            Emaily
          </Link>
          <ul className='right'>{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStatetoProps(state) {
  return { auth: state.auth };
}
export default connect(mapStatetoProps)(Header);
