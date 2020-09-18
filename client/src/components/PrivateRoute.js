import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ( { component: Component, ...rest}) => {
    return (
        <div>
            <Route {...rest}
            render = {(props) => {
                if (localStorage.getItem('token')) {
                    return <Component {...props} />
                } else {
                    return <Redirect to = '/' />
                }
            }}
            />
        </div>
    )
}

export default PrivateRoute
