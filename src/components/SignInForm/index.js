import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable';

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div className="mt3">
      <label className="db fw6 lh-copy f6" for={input.name}>{label}</label>
      <input
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
        key={input.name}
        {...input}
      >
    </div>
  );
};

const SignUpForm = (props) => {
  const { handleSubmit } = props;
  const errors = props.errors <= 0 ? null : renderErrors(props.errors);
  return (
    <form onSubmit={handleSubmit} className="measure center">
      {errors}
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="password" type="password" component={renderField} label="Password" />
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign up" />
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
  } else if (values.password.length <= 3) {
    errors.password = 'Must be at least 4 characters';
  }

  return errors;
}

// Decorate the form component
export default reduxForm({
  form: 'SignUpForm', // a unique name for this form
  validate
})(SignUpForm);
