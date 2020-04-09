import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerLoginWithPhone, verifyOTPPhone } from 'src/ducks/auth/actions';
import firebase from 'src/firebase';
import { AppState } from 'src/store';

import Entry from '../../components/PhoneNumber/Entry';
import Verify from '../../components/PhoneNumber/Verify';
import Wrapper from '../../components/PhoneNumber/wrapper';

interface Props {
  type: string;
}

const PhoneNumberVerifierContainer: React.FC<Props> = ({ type }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: AppState) => state.auth.user);
  const loading = useSelector((state: AppState) => state.auth.loading);
  const error: Error = useSelector((state: AppState) => state.auth.error);

  const handleEntrySubmit = (
    values: { phoneNumber: string },
    // eslint-disable-next-line @typescript-eslint/camelcase
    recaptchaVerifier: firebase.auth.RecaptchaVerifier_Instance,
  ) => {
    dispatch(
      triggerLoginWithPhone({
        currentUser: user,
        recaptchaVerifier,
        phoneNumber: values.phoneNumber,
      }),
    );
  };

  const handleVerifySubmit = ({ otp }: { otp: string }) => {
    dispatch(
      verifyOTPPhone({
        otp,
      }),
    );
  };

  return (
    <>
      <Wrapper
        loading={loading}
        errorMessage={error && error.message ? error.message : null}
      >
        {type === 'entry' ? (
          <Entry loading={loading} handleFormSubmit={handleEntrySubmit} />
        ) : (
          <Verify loading={loading} handleFormSubmit={handleVerifySubmit} />
        )}
      </Wrapper>
    </>
  );
};

PhoneNumberVerifierContainer.propTypes = {};

export default PhoneNumberVerifierContainer;