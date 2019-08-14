import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';
import {
  HeaderForApp,
  FooterForApp,
  MiddleTitle,
  Wrapper,
  TextBlock,
  Input,
  Form,
  FormButton,
  ErrorBlock,
  MetaComponent
} from "../../components";
import {
  greenBtn,
  middleTitle
} from "../../themes";

import { setLoginError, passwordRecoveryTokenAsync } from '../../store/actions';

export class PasswordRecoveryComponent extends Component {
  state = {
    new_password: {
      value: '',
      error: false
    },
    repeat_password: {
      value: '',
      error: false
    },
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.dispatch(setLoginError({ error: null}))
  }

  inputChange = ({ target }) => {
    this.setState({
      [target.name] : {
        value: target.value,
        error: false
      } });
  };

  formSubmit = (e) => {
    e.preventDefault();
    const newPasswordCheck = !!(this.state.new_password.value.length < 8);
    const repeatPasswordCheck = !!(this.state.repeat_password.value === this.state.new_password.value);
    let newPasswordError = false;
    let repeatPasswordError = false;
    if(newPasswordCheck || !repeatPasswordCheck) {
      if(newPasswordCheck) {
        newPasswordError = true;
      }
      if(!repeatPasswordCheck) {
        repeatPasswordError = true
      }
      this.setState({
        new_password: {
          value: this.state.new_password.value,
          error: newPasswordError
        },
        repeat_password: {
          value: this.state.repeat_password.value,
          error: repeatPasswordError
        }
      });
      return;
    }
    const currentToken = this.props.location.search.match(/(?==).*/g)[0].replace('=', '');

    this.props.dispatch(passwordRecoveryTokenAsync({
      token: currentToken,
      password: this.state.new_password.value
    }));
  };

  render() {

    return (
      <React.Fragment>
        <MetaComponent title='Password Recovery'/>
        <HeaderForApp page={this.props.match.path}/>

        <Wrapper
          wrapMargin="100px 0"
          wrapContent="center"
        >

          <MiddleTitle theme={middleTitle} bold centered className="why_us_item_title">
            Confirm password
          </MiddleTitle>

          <Wrapper
            wrapWidth="340px"
            wrapItems="flex-start"
          >
            <Form onSubmit={this.formSubmit} noValidate>

              <TextBlock semiBold className="login_text">
                Enter new password (min 8 characters)
              </TextBlock>
              <Input
                type="password"
                name="new_password"
                onChange={(e) => this.inputChange(e)}
                value={this.state.new_password.value}
                className={classNames({'error': this.state.new_password.error})}
              />
              <TextBlock className={classNames('error_text', {'error': this.state.new_password.error})}>
                Password should be more that 8 characters
              </TextBlock>

              <TextBlock semiBold className="login_text">
                Repeat password
              </TextBlock>
              <Input
                type="password"
                name="repeat_password"
                onChange={(e) => this.inputChange(e)}
                value={this.state.repeat_password.value}
                className={classNames({'error': this.state.repeat_password.error})}
              />
              <TextBlock className={classNames('error_text', {'error': this.state.repeat_password.error})}>
                Passwords are not equal
              </TextBlock>

              <FormButton theme={greenBtn}>
                Confirm password
              </FormButton>
              {
                this.props.error &&
                <ErrorBlock error={this.props.error} />
              }

            </Form>
          </Wrapper>

        </Wrapper>

        {
          this.props.login &&
          <Redirect to="/list_new_property"/>
        }

        <FooterForApp />
      </React.Fragment>
    )
  }
}

export const PasswordRecovery = connect(({ state }) => ({login: state.login, error: state.error}))(PasswordRecoveryComponent);