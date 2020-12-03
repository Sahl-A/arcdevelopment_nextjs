import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/ui/theme";
import Header from "../src/ui/Header";
import Footer from "../src/ui/Footer";
import BackToTop from "../src/ui/BackToTop";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  // Hooooooooooooks
  // useState to change the value when changing the tab in header
  const [tabValue, setTabValue] = useState(0);
  // Indicator to be used when selecting the menu item in header
  const [selectedMenuItemIndex, setselectedMenuItemIndex] = useState(0);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Arc Development</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
            name="description"
            key="description"
            content="We provide the fastest, most modern and affordable software design and development for web and mobile development"
          />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <Header
          tabValue={tabValue}
          setTabValue={setTabValue}
          selectedMenuItemIndex={selectedMenuItemIndex}
          setselectedMenuItemIndex={setselectedMenuItemIndex}
        />
        <BackToTop />
        <Component
          {...pageProps}
          setTabValue={setTabValue}
          setselectedMenuItemIndex={setselectedMenuItemIndex}
        />
        <Footer
          setTabValue={setTabValue}
          setselectedMenuItemIndex={setselectedMenuItemIndex}
        />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
