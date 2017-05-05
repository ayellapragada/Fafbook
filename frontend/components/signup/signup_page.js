import React from 'react';
import DocumentTitle from 'react-document-title';

import SignupForm from './signup_form';
import SigninHeader from './signin_header';
import SigninFooter from './signin_footer';

const SignupPage = () => (
  <div className="signup-page">
    <DocumentTitle title="Login" />
    <SigninHeader />
    <SignupForm />
    <SigninFooter />
  </div>
);

export default SignupPage;
