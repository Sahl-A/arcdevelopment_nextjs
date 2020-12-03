import React from "react";
import Link from "../Link";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: "1302",
    position: "relative",
    overflow: "hidden",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  gridContainer: {
    position: "absolute",
    margin: "1.5rem 0 1.5rem 15.4rem",
  },
  link: {
    fontSize: ".75rem",
    fontFamily: "Arial",
    color: "white",
    fontWeight: "bold",
    textDecoration: "none",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
    "&:hover": {
      boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));

export default function Footer(props) {
  const { setTabValue, setselectedMenuItemIndex } = props;
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          justify="center"
          className={classes.gridContainer}
          spacing="8"
        >
          <Grid item>
            <Grid container direction="column" spacing="2">
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  setTabValue(0);
                }}
                href="/"
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing="2">
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  setTabValue(1);
                  setselectedMenuItemIndex(0);
                }}
                href="/services"
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  setTabValue(1);
                  setselectedMenuItemIndex(1);
                }}
                href="/customsoftware"
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  setTabValue(1);
                  setselectedMenuItemIndex(2);
                }}
                href="/mobileapps"
              >
                iOS/Android App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  setTabValue(1);
                  setselectedMenuItemIndex(3);
                }}
                href="/websites"
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing="2">
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  setTabValue(2);
                }}
                href="/revolution"
              >
                The Revolution
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  setTabValue(2);
                }}
                href="/revolution"
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  setTabValue(2);
                }}
                href="/revolution"
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  setTabValue(2);
                }}
                href="/revolution"
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" spacing="2">
              <Grid
                item
                className={classes.link}
                component={Link}
                onClick={() => {
                  setTabValue(4);
                }}
                href="/contact"
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt="footer adorment"
        src="/assets/footerAdornment.svg"
        className={classes.adornment}
      />
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="facebook logo"
            src="/assets/facebook.svg"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="twitter logo"
            src="/assets/twitter.svg"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            alt="instagram logo"
            src="/assets/instagram.svg"
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </footer>
  );
}
