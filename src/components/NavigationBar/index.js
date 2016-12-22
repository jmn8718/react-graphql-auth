import React from 'react';
import { Link } from 'react-router';
import { AppBar } from 'material-ui';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <AppBar
          title={this.props.title || 'Home'}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}><Link to={'/'}>Home</Link></MenuItem>
          <MenuItem onTouchTap={this.handleClose}><Link to={'/signup'}>Sign Up</Link></MenuItem>
          <MenuItem onTouchTap={this.handleClose}><Link to={'/login'}>Log In</Link></MenuItem>
          <MenuItem onTouchTap={this.handleClose}><Link to={'/logout'}>Log Out</Link></MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default NavigationBar;
