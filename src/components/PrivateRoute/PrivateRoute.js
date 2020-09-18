import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { TravelContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [travel] = useContext(TravelContext)
    return (
        <Route
        {...rest}
        render={({ location }) =>
        travel.email || travel.name ? (
            children
            ) : (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: location }
                }}
            />
            )
        }
        />
    );
};

export default PrivateRoute;