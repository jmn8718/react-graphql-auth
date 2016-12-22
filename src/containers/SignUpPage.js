import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import SignUpForm from '../components/SignUpForm';
import { signIn } from '../actions';

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  handleErrors = (errors = '') => {
    if (errors.message.indexOf('GraphQL error:') > -1) {
      this.setState({ errors: [ errors.message.replace('GraphQL error: ', '')]})
    } else {
      // TODO handle string error
    }
  }

  onSubmit = (values) => {
    this.props.mutate({variables: values.toJS()})
      .then((response) => {
        const data = fromJS(response.data);
        if (!data.has('errors')) {
          this.props.signInDispatcher(data.get('id'));
          this.props.router.replace('/');
        } else {
          this.handleErrors(data.get('errors'));
        }
      })
      .catch((errors) => {
        this.handleErrors(errors);
      });
  }

  render() {
    return (
      <div className="pa4 black-80">
        <SignUpForm
          onSubmit={this.onSubmit}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

const createUserMutation = gql`
  mutation createUser($email: String!, $password: String!){
    createUser(authProvider:{ email: {email: $email, password: $password}}) {
      id
    }
  }
`;

const SignUpWithData = graphql(createUserMutation)(withRouter(SignUpPage));

const mapDispatchToProps = (dispatch) => ({
  signInDispatcher(token) {
    dispatch(signIn(token));
  }
});

const SignUpWithDataAndDispatch = connect(
  null,
  mapDispatchToProps
)(SignUpWithData);

export default SignUpWithDataAndDispatch;
