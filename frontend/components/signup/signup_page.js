import React from 'react';

import SignupForm from './signup_form';
import SigninHeader from './signin_header';
import SigninFooter from './signin_footer';

const SignupPage = () => (
  <div className="signup-page">
    <SigninHeader />
    <SignupForm />
    <SigninFooter />
  </div>
);

export default SignupPage;
