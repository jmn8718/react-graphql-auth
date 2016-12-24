import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import MenuItem from 'material-ui/MenuItem';

class UserDrawer extends React.Component {
  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      user: React.PropTypes.object,
    }).isRequired,
  }

  render() {
    const { data } = this.props;
    return (
      <MenuItem>
        <div>
          {!data.loading && data.user.email}
        </div>
      </MenuItem>
    )
  }
}

const UserQuery = gql`
  query UserQuery {
    user {
      id
      email
    }
  }
`;

const UserDrawerWithData = graphql(UserQuery)(UserDrawer)

export default UserDrawerWithData;
