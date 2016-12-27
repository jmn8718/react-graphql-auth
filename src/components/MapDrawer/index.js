import React, { Component } from 'react';

class MapDrawer extends Component {
  render() {
    console.log(this.props.children)
    return (
      <div>
        MAAPP
        {this.props.children}
      </div>
    );
  }
}

export default MapDrawer;
