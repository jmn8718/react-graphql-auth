import React, { Component } from 'react';
import { withRouter, Link } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { fromJS } from 'immutable';
import SignForm from '../../components/SignForm';


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
          this.props.router.replace('/signup-success');
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
        <SignForm
          onSubmit={this.onSubmit}
          errors={this.state.errors}
          buttonText="Sign Up"
        />
        <p>If you have an account, go to the <Link to={'/login'}>Login</Link> page</p>
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

export default SignUpWithData;
