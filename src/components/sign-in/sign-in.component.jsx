import React, {Component} from "react";
import {connect} from 'react-redux';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

import {googleSignInStart, emailSignInStart} from "../../redux/user/user.actions";


class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = e => {
    const {value, name} = e.target;

    this.setState({[name]: value});
  };

  render() {
    const {email, password} = this.state;
    const { googleSignInStart } = this.props;

    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            label="email"
            required
            onChange={this.handleChange}
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            label="password"
            required
            onChange={this.handleChange}
          />

          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton type="button" onClick={googleSignInStart}>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
