import React, { Component } from 'react';
import styled from 'styled-components';
import styles from '../styles/Nav.styles';
import PropTypes from 'prop-types';
import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@material-ui/core';
import { ChevronRight as ChevronRightIcon, ChevronLeft as ChevronLeftIcon, Menu as MenuIcon, DonutLarge as DonutLargeIcon, AccountBalance as AccountBalanceIcon, BarChart as BarChartIcon, AccountBox as AccountBoxIcon, ListAlt as ListAltIcon } from '@material-ui/icons';



class Nav extends Component {

    constructor() {
        super();
        this.state = {
            open: false,
        };
    }

    render() {
        return (
            <div className={this.props.className}>
                <AppBar className={`appBar${this.state.open ? ' open' : ''}`}>
                    <Toolbar>
                        <IconButton
                            onClick={() => this.setState({ open: !this.state.open })}
                            edge="start"
                        ><MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={`drawer${this.state.open ? '' : ' close'}`}
                    variant="permanent"
                >
                    <div className='toolbar'>
                        <IconButton onClick={() => this.setState({ open: !this.state.open })}>
                            {!this.state.open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemIcon><DonutLargeIcon /></ListItemIcon>
                            <ListItemText primary="General" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
                            <ListItemText primary="Balance" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><BarChartIcon /></ListItemIcon>
                            <ListItemText primary="Statistics" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemIcon><AccountBoxIcon /></ListItemIcon>
                            <ListItemText primary="Account" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon><ListAltIcon /></ListItemIcon>
                            <ListItemText primary="Records" />
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        )
    }
}

Nav.propTypes = {
    className: PropTypes.string.isRequired,
}

export default styled(Nav)([styles]);
