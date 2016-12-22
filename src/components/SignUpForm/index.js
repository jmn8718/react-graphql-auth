import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';
import { fromJS } from 'immutable';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const renderField = ({ input, label, meta: { touched, error }, ...custom }) => {
  return (
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
      fullWidth
    />
  );
};

const SignUpForm = (props) => {
  const { handleSubmit, pristine, submitting, errors } = props;
  return (
    <form onSubmit={handleSubmit} className="measure center">
      <Field name="email" type="email" component={renderField} label="Email"/>
      <Field name="password" type="password" component={renderField} label="Password"/>
      <RaisedButton
        label="Sign Up"
        fullWidth={true}
        type="submit"
        disabled={pristine || submitting}
      />
      {errors && errors.join()}
    </form>
  );
}

const validate = (values = fromJS({})) => {
  const errors = {}

  if (!values.get('email')) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = 'Invalid email address';
  }

  if (!values.get('password')) {
    errors.password = 'Required';
  } else if (values.get('password').length <= 3) {
    errors.password = 'Must be at least 4 characters';
  }

  return errors;
}

// Decorate the form component
export default reduxForm({
  form: 'SignUpForm', // a unique name for this form
  validate
})(SignUpForm);
