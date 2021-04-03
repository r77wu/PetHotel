import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

export const ProtectedRoute = ({ component: Component, token, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!token) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { next: props.location.pathname },
              }}
            />
          );
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStateToProps)(ProtectedRoute);
