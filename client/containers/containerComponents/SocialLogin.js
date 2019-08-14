import React, { Component } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { GoogleLogin } from 'react-google-login';
import {GOOGLE_CLIENT_ID,FACEBOOK_APP_ID} from '../../consts';

import {
    Wrapper,
    FormButton,
    Image,
} from "../../components";
import {
    facebookBtn,
    googleBtn,
} from "../../themes";

import 'react-phone-number-input/style.css';
import { /*setLoginError,*/ loginAsyncFacebook, loginAsyncGoogle } from '../../store/actions';
import facebookIcon from '../../images/facebook.png';
import googleIcon from '../../images/google.png';

export class SocialLoginComponent extends Component {

    facebookResponse = (e) => {
        console.log('facebookResponse',e)
        this.props.dispatch(loginAsyncFacebook({
            full_name: e.name,
            email: e.email,
            id: e.id,
            accessToken: e.accessToken,
            type: 'facebook'
        }));

    };
    googleResponse = (e) => {
        console.log('googleResponse',e)
        this.props.dispatch(loginAsyncGoogle({
            full_name: e.profileObj.name,
            email: e.profileObj.email,
            id: e.profileObj.googleId,
            accessToken: e.tokenId,
            type: 'google'
        }));
    };
    onFailure = (e) => {console.log('onGoogleFailure',e)};

    render() {
    return(
        <Wrapper
            className="login_btns"
        >
            <Wrapper
                wrapWidth="340px"
                wrapItems="flex-start"
            >
                <FacebookLogin
                    appId={FACEBOOK_APP_ID}
                    autoLoad={false}
                    fields="name,email"
                    callback={this.facebookResponse}
                    render={renderProps => (
                        <FormButton theme={facebookBtn} onClick={renderProps.onClick} btnMargin="0">
                            <Image src={facebookIcon} imgHeight={18} imgWidth={18} imgMargin="0 15px 0" />
                            Sign {this.props.word} with Facebook
                        </FormButton>
                    )}
                />
                <GoogleLogin
                    clientId={GOOGLE_CLIENT_ID}
                    buttonText="Login"
                    onSuccess={this.googleResponse}
                    onFailure={this.onFailure}
                    render={renderProps => (
                        <FormButton onClick={renderProps.onClick} theme={googleBtn} btnMargin="20px 0 0">
                            <Image src={googleIcon} imgHeight={15} imgWidth={23} imgMargin="0 15px 0" />
                            Sign {this.props.word} with Google
                        </FormButton>
                    )}
                />
            </Wrapper>
        </Wrapper>
    )
  }
}

export const SocialLogin = connect(({ state }) => ({
}))(SocialLoginComponent);
