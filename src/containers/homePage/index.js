import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router';
import { fromJS } from 'immutable';

import PlacesList from '../../components/PlacesList';

class HomePage extends Component {
  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      allPlaces: React.PropTypes.array,
    }).isRequired,
    router: React.PropTypes.object.isRequired,
  }

  render() {
    const { data: { loading, allPlaces }} = this.props;
    const places = allPlaces || [];
    console.log(places, fromJS(places))
    return (
      <div className="w-100" style={{ minHeight: 'calc(100vh - 64px)'}}>
        <PlacesList className="fl w-third b--dotted min-h-100" loading={loading} places={fromJS(places)} />
        <div className="fl w-two-thirds b--dotted min-h-100">
          MAP
        </div>
      </div>
    );
  }
}

const PlacesQuery = gql`
  query PlacesQuery {
    allPlaces {
      id
      name
      location
    }
  }
`;

const HomePageWithData = graphql(PlacesQuery, {
  options: (ownProps) => ({
    variables: {

    },
    forceFetch: true,
  })
})(withRouter(HomePage));

const mapStateToProps = (state) => ({
  authenticated: state.auth.get('authenticated')
});

export default connect(mapStateToProps)(HomePageWithData);
