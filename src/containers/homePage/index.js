import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withRouter } from 'react-router';
import { fromJS } from 'immutable';

import PlacesList from '../../components/PlacesList';
import MapDrawer from '../../components/MapDrawer';

class HomePage extends Component {
  static propTypes = {
    data: React.PropTypes.shape({
      loading: React.PropTypes.bool,
      error: React.PropTypes.object,
      allPlaces: React.PropTypes.array,
    }).isRequired,
    router: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      hoveredPlace: undefined,
    }
  }

  onHover = (placeId) => {
    const hoveredPlace = this.props.data.allPlaces.find((element) => element.id === placeId);
    this.setState({ hoveredPlace });
  }

  onHoverLeave = () => {
    this.setState({ hoveredPlace: undefined });
  }

  render() {
    const { data: { loading, allPlaces }} = this.props;
    const places = allPlaces || [];
    return (
      <div className="w-100" style={{ minHeight: 'calc(100vh - 64px)'}}>
        <PlacesList className="fl w-third min-h-100" loading={loading} places={fromJS(places)} onHover={this.onHover} onHoverLeave={this.onHoverLeave}/>
        <MapDrawer className="fl w-two-thirds min-h-100" height="calc(100vh - 64px)" width="calc(100% / 1.5)" marker={fromJS(this.state.hoveredPlace)} />
      </div>
    );
  }
}

const PlacesQuery = gql`
  query PlacesQuery {
    allPlaces {
      id
      name
      lat
      lng
      rating
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
