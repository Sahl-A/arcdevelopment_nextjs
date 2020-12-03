import React from "react";
import Lottie from "react-lottie";
import dynamic from 'next/dynamic'
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// import CallToAction from "../src/ui/CallToAction";
const CallToAction = dynamic(() => import('../src/ui/CallToAction'));

// import animationData from "../src/animations/landinganimation/data";
const animationData = dynamic(() => import('../src/animations/landinganimation/data'));

import ButtonArrow from "../src/ui/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  heroAnimation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      margin: "2em auto",
      minWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      //   marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  subtitle: {
    marginBottom: ".2em",
    lineHeight: 1.7,
  },
  icon: {
    marginLeft: "2em",
    width: 240,
    height: 240,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      width: 120,
      height: 120,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "7em",
    },
  },
  revolutionBackground: {
    backgroundImage: 'url("/assets/repeatingBackground.svg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
    },
  },
}));

export default function LandingPage(props) {
  const { setTabValue, setselectedMenuItemIndex } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  // Default options for the animations
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direcition="column" className={classes.mainContainer}>
      {/* ///////// HERO Block ////////// */}
      <Grid item container justify="flex-end" alignItems="center">
        <Grid sm item className={classes.heroTextContainer}>
          <Typography variant="h2" align="center">
            Bringing the west technology to the rest of the world
          </Typography>
          <Grid container justify="center" className={classes.buttonContainer}>
            <Grid item>
              <Button
                variant="contained"
                className={classes.estimateButton}
                component={Link}
                href="/estimate"
                onClick={() => setTabValue(15)}
              >
                Free estimate
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                className={classes.learnButtonHero}
                component={Link}
                href="/revolution"
                onClick={() => setTabValue(2)}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width="15"
                  height="15"
                  fill={theme.palette.primary.main}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid sm item className={classes.heroAnimation}>
          <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
        </Grid>
      </Grid>
      {/* ///////// SERVICES Block ////////// */}
      <Grid item container>
        {/* Custome Software Development */}
        <Grid
          item
          container
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to celebration
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              style={{ marginTop: ".8rem" }}
              component={Link}
              href="/customsoftware"
              onClick={() => {
                setTabValue(1);
                setselectedMenuItemIndex(1);
              }}
            >
              <span style={{ margin: '0 2px 0 5px' }}>Learn More</span>
              <ButtonArrow
                height="10"
                width="10"
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              alt="Custom Software Icon"
              src='/assets/CustomSoftwareIcon.svg'
              className={classes.icon}
            />
          </Grid>
        </Grid>
        {/* ios/Android Development */}
        <Grid
          item
          container
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />}with either mobile platform.
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              style={{ marginTop: ".8rem" }}
              component={Link}
              href="/mobileapps"
              onClick={() => {
                setTabValue(1);
                setselectedMenuItemIndex(2);
              }}
            >
              <span style={{ margin: '0 2px 0 5px' }}>Learn More</span>
              <ButtonArrow
                height="10"
                width="10"
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              alt="Mobile Phone Icon"
              src='/assets/mobile.svg'
              className={classes.icon}
            />
          </Grid>
        </Grid>
        {/* Website Development */}
        <Grid
          item
          container
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              style={{ marginTop: ".8rem" }}
              component={Link}
              href="/websites"
              onClick={() => {
                setTabValue(1);
                setselectedMenuItemIndex(3);
              }}
            >
              <span style={{ margin: '0 2px 0 5px' }}>Learn More</span>
              <ButtonArrow
                height="10"
                width="10"
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              alt="Website Icon"
              src='/assets/website.svg'
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* ///////// REVOLUTION Block ////////// */}
      <Grid
        item
        container
        style={{ height: "90vh", marginTop: "10em" }}
        alignItems="center"
        justify="center"
      >
        <Card className={classes.revolutionCard}>
          <CardContent>
            <Grid container direction="column" style={{ textAlign: "center" }}>
              <Grid item>
                <Typography variant="h3" gutterBottom>
                  The Revolution
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle1"
                  style={{ marginBottom: "1rem" }}
                >
                  Visionary insights coupled with cutting-edge technology is a
                  recipe for revolution.
                </Typography>
                <Button
                  className={classes.learnButtonHero}
                  variant="outlined"
                  component={Link}
                  href="/revolution"
                  onClick={() => setTabValue(2)}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <div className={classes.revolutionBackground} />
      </Grid>
      {/* ///////// Call To Action Block ////////// */}
      <Grid item>
        <CallToAction setTabValue={setTabValue} />
      </Grid>
    </Grid>
  );
}
