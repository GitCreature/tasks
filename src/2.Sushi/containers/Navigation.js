import React from 'react';
import { connect } from 'react-redux';
import { navigateTo } from '../actionCreators';
import Navigation from '../components/Navigation'

export default connect(
    (state, props) => ({
        page: state.page
    }),
    (dispatch, props) => ({
        onNavigate: page => dispatch(navigateTo(page))
    })
)(Navigation);