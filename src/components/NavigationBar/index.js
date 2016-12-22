import React from 'react';
import { Link } from 'react-router';
import { AppBar } from 'material-ui';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import './index.css';

class NavigationBar extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    authenticated: React.PropTypes.bool,
  }

  static defaultProps = {
    title: 'Home',
    authenticated: false,
  }
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    const { title, authenticated } = this.props;
    return (
      <div>
        <AppBar
          title={title}
          onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}><Link to={'/'}>Home</Link></MenuItem>
          {!authenticated && <MenuItem onTouchTap={this.handleClose}><Link to={'/signup'}>Sign Up</Link></MenuItem>}
          {!authenticated && <MenuItem onTouchTap={this.handleClose}><Link to={'/login'}>Log In</Link></MenuItem>}
          {authenticated && <MenuItem onTouchTap={this.handleClose}><Link to={'/logout'}>Log Out</Link></MenuItem>}
        </Drawer>
      </div>
    )
  }
}

export default NavigationBar;
