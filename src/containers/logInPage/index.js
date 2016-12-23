import React, { Component } from 'react';
import { withRouter, Link } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import SignForm from '../../components/SignForm';
import { logIn } from '../../actions';

class LogInPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errors: [],
    };
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
          this.props.logInDispatcher(data.get('signinUser').get('token'));
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
        <SignForm
          onSubmit={this.onSubmit}
          errors={this.state.errors}
          buttonText="Log In"
        />
        <p>If you do not an account, go to the <Link to={'/signup'}>Sign Up</Link> page</p>
      </div>
    );
  }
}

const createUserMutation = gql`
  mutation signinUser($email: String!, $password: String!){
    signinUser(email: {email: $email, password: $password}) {
      token
    }
  }
`;

const LogInWithData = graphql(createUserMutation)(withRouter(LogInPage));

const mapDispatchToProps = (dispatch) => ({
  logInDispatcher(token) {
    dispatch(logIn(token));
  }
});

const LogInWithDataAndDispatch = connect(
  null,
  mapDispatchToProps
)(LogInWithData);

export default LogInWithDataAndDispatch;
