import ReactGA from "react-ga";

const trackSignUpClick = buttonPosition => {
  ReactGA.pageview(window.location.pathname + window.location.hash);
  ReactGA.event({
    category: "Sign Up",
    action: "Click button to sign up page",
    buttonPosition
  });
};

export default {
  trackSignUpClick,
};