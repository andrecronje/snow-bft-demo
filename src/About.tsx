import React from 'react';
import { Theme, withStyles, StyleRules } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const styles = (theme: Theme): StyleRules => ({
    infoField: {
        fontWeight: theme.typography.fontWeightMedium,
        paddingRight: 14,
    },
    body: {
        margin: '0 auto',
        width: 800,
    },
    pre: {
        fontFamily: "Monospace"
    }
});

type AboutProps = {
    classes: {
        infoField: string,
        body: string,
        pre: string
    }
};

function About(props: AboutProps) {
    const { classes } = props;
    return (
        <div className={classes.body}>
            <article>
                <Typography variant="body1" paragraph>
                    The MIT License (MIT)
                </Typography>

                <Typography variant="body1" paragraph>
                    Copyright 2019 Ava Labs, Inc.<br/>
                    Author: Ted Yin
                </Typography>

                <Typography variant="body1" paragraph>
                    Permission is hereby granted, free of charge, to any person obtaining a copy
                    of this software and associated documentation files (the "Software"), to deal
                    in the Software without restriction, including without limitation the rights
                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                    copies of the Software, and to permit persons to whom the Software is
                    furnished to do so, subject to the following conditions:
                </Typography>

                <Typography variant="body1" paragraph>
                    The above copyright notice and this permission notice shall be included in
                    all copies or substantial portions of the Software.
                </Typography>

                <Typography variant="body1">
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                    THE SOFTWARE.
                </Typography>
            </article>
            <Typography variant="body1">
                <List disablePadding>
                    <ListItem>
                        <span className={classes.infoField}>Email:</span>
                        ted at avalabs dot org or 73d at tedyin dot com
                    </ListItem>
                    <ListItem>
                        <span className={classes.infoField}>GitHub:</span>
                        <Link href="https://github.com/Determinant/snow-bft-demo" target="_blank" rel="noopener">
                            Determinant/snow-bft-demo
                        </Link>
                    </ListItem>
                </List>
            </Typography>
        </div>);
}

export default withStyles(styles)(About);
