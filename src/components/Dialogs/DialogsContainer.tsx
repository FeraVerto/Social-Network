import React from 'react';
import { RootState } from '../../redux/redux-store';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { DialogsItemType } from '../../types/types';

type mapStateToPropsType = {
  dialogs: Array<DialogsItemType>;
  isAuth: boolean | null;
};

const mapStateToProps = (state: RootState): mapStateToPropsType => {
  return {
    dialogs: state.dialogsPage.dialogs,
    isAuth: state.auth.userData.isAuth,
  };
};

export default connect<mapStateToPropsType, null, {}, RootState>(
  mapStateToProps,
  null
  //@ts-ignore
)(Dialogs);
