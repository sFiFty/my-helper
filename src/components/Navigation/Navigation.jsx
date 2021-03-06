import React, { PureComponent } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { isLoaded } from 'react-redux-firebase';
import PropTypes from 'prop-types';

const propTypes = {
  auth: PropTypes.shape({
    isEmpty: PropTypes.bool,
  }),
  vertical: PropTypes.bool,
  hideMenu: PropTypes.func,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

const defaultProps = {
  auth: null,
  vertical: false,
  hideMenu: null,
};

export default class Navigation extends PureComponent {
  state = {
    activeItem: null,
  }

  componentWillMount() {
    const { location } = this.props;
    this.changeMenuActiveItem(location.pathname);
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      this.changeMenuActiveItem(location.pathname);
    }
  }

  handleItemClick = (e, { name }) => {
    const { hideMenu } = this.props;
    if (hideMenu) hideMenu();
    this.setState({ activeItem: name });
  }

  changeMenuActiveItem = (path) => {
    switch (path) {
      case '/':
        this.setState({ activeItem: 'Home' });
        break;
      case '/meetings':
        this.setState({ activeItem: 'Meetings' });
        break;
      case '/teams':
        this.setState({ activeItem: 'Teams' });
        break;
      case '/contacts':
        this.setState({ activeItem: 'Contact Us' });
        break;
      case '/estimation':
        this.setState({ activeItem: 'Estimation' });
        break;
      default:
        this.setState({ activeItem: null });
        break;
    }
  }

  render() {
    const { activeItem } = this.state;
    const { auth, vertical } = this.props;
    const menuItems = [
      { to: '/', name: 'Home', public: true },
      { to: '/contacts', name: 'Contact Us', public: true },
      { to: '/teams', name: 'Teams' },
      { to: '/meetings', name: 'Meetings' },
    ];
    return (
      <div className={vertical ? 'vertical-menu' : 'navigation-wrapper'}>
        <Menu secondary={!vertical} vertical={vertical} fluid={vertical}>
          {
            isLoaded(auth)
            && menuItems.map((item, index) => {
              if (auth.isEmpty && !item.public) return false;
              return (
                <Menu.Item
                  key={index}
                  as={Link}
                  to={item.to}
                  name={item.name}
                  active={activeItem === item.name}
                  onClick={this.handleItemClick}
                />
              );
            })
          }
        </Menu>
      </div>
    );
  }
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;
