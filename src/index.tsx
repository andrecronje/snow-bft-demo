import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import { Theme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab, { TabProps } from '@material-ui/core/Tab';
import { LinkProps } from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { HashRouter as Router, RouteComponentProps, withRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { theme } from './theme';
import Snow from './Snow';
import About from './About';

const styles = (theme: Theme) => ({
    root: {
        display: 'flex',
        height: '100vh',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    title: {
        flexGrow: 1,
        display: 'inline-block'
    },
    appBarSpacer: theme.mixins.toolbar,
    contentWrapper: {
        position: 'relative' as 'relative',
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        overflow: 'auto',
    },
    content: {
        position: 'absolute' as 'absolute',
        left: theme.spacing.unit * 3,
        right: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3,
    },
    indicator: {
        backgroundColor: theme.palette.primary.contrastText
    },
    fadeEnter: {
        opacity: 0.001
    },
    fadeEnterActive: {
        opacity: 1,
        transition: 'opacity 300ms ease-in'
    },
    fadeExit: {
        opacity: 1
    },
    fadeExitActive: {
        opacity: 0.001,
        transition: 'opacity 300ms ease-in'
    }
});

interface MainTabsProps extends RouteComponentProps {
    classes: {
        root: string,
        appBar: string,
        appBarSpacer: string,
        toolbar: string,
        title: string,
        indicator: string,
        content: string,
        contentWrapper: string,
        fadeEnter: string,
        fadeEnterActive: string,
        fadeExit: string,
        fadeExitActive: string,
    }
}

class MainTabs extends React.Component<MainTabsProps> {
    handleChangeTab = (event: React.SyntheticEvent<{}>, currentTab: any) => {
        this.props.history.push(currentTab);
    }

    render() {
        const { classes, location } = this.props;
        return (
            <div className={classes.root}>
                <AppBar
                    position="absolute"
                    className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            Snow
                        </Typography>
                        <Tabs
                            classes={{ indicator: classes.indicator }}
                            value={this.props.history.location.pathname}
                            onChange={this.handleChangeTab}>
                            <Tab label="Snow" {...{component: Link, to: "/snow"} as any} value="/snow" />
                            <Tab label="About" {...{component: Link, to: "/about"} as any} value="/about" />
                        </Tabs>
                    </Toolbar>
                </AppBar>
                <CssBaseline />
                <main className={classes.contentWrapper}>
                    <div className={classes.appBarSpacer} />
                    <TransitionGroup>
                        <CSSTransition
                                key={location.pathname}
                                timeout={{ enter: 300, exit: 300 }}
                                classNames={{
                                    enter: classes.fadeEnter,
                                    enterActive: classes.fadeEnterActive,
                                    exit: classes.fadeExit,
                                    exitActive: classes.fadeExitActive
                                }}>
                            <div className={classes.content}>
                            <Switch location={location}>
                            {console.log(location)}
                            <Route exact path="/snow" component={Snow} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/" render={() => <Redirect to="/settings" />}/>
                            </Switch>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                </main>
            </div>
        );
    }
}

class Main extends React.Component {
    render() {
        let Tabs = withRouter(withStyles(styles)(MainTabs));
        return (
            <MuiThemeProvider theme={theme}>
                <Router><Tabs /></Router>
            </MuiThemeProvider>);
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
