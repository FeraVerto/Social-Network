import React from 'react';
import { sendMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    
    return {
        addMessage: (newMessageText) => {
            dispatch(sendMessageActionCreator(newMessageText));
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
