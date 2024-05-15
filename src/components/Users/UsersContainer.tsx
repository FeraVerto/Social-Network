import { connect } from 'react-redux';
import { Action } from 'redux';
import { RootState } from '../../redux/redux-store';
import { follow, unfollow, requestUsers } from '../../redux/users-reducer';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import selectiors from '../../redux/users-selectors';
import { Users } from './Users';
import { UserType } from '../../types/types';
import { ThunkDispatch } from 'redux-thunk';
import s from './Users.module.css';

type PathParamsType = {
  userId: string;
};

type mapStateToPropsType = {
  users: Array<UserType>;
  totalUsersCount: number;
  currentPage: number | string;
  pageSize: number;
  isFetching: boolean;
  followingInProgress: Array<number>;
  searchOption?: string;
};

type mapDispatchToPropsType = {
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  getUsers: (
    currentPage: number | string,
    pageSize: number,
    term?: string,
    friends?: boolean
  ) => void;
};

type UsersContainerType = mapStateToPropsType & mapDispatchToPropsType;
type ContainerType = RouteComponentProps<PathParamsType> & UsersContainerType;

class UsersContainer extends React.Component<ContainerType> {
  componentDidMount() {
    //запрашиваем юзеров
    let { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize, this.props.searchOption);
  }

  onPageChanged = (pageNumber: number) => {
    //запрашиваем юзеров
    let { pageSize } = this.props;
    this.props.getUsers(pageNumber, pageSize, this.props.searchOption);
  };

  onSearch = (term: { term: string }) => {
    this.props.getUsers(1, this.props.pageSize, term.term);
  };

  render = () => (
    <div className={s.pre_users}>
      {this.props.isFetching ? <Preloader /> : null}

      <Users
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        followingInProgress={this.props.followingInProgress}
        onSearch={this.onSearch}
      />
    </div>
  );
}

const mapStateToProps = (state: RootState): mapStateToPropsType => {
  return {
    users: selectiors.getUsersSelector(state),
    pageSize: selectiors.getPageSize(state),
    totalUsersCount: selectiors.getTotalUsersCount(state),
    currentPage: selectiors.getCurrentPage(state),
    isFetching: selectiors.getIsFetching(state),
    followingInProgress: selectiors.getFollowingInProgress(state),
    searchOption: selectiors.getSearchOption(state),
  };
};

let WithUrlDataContainerComponent = withRouter(UsersContainer);

type AppDispatch = ThunkDispatch<RootState, any, Action>;

const mapDispatchToProps = (dispatch: AppDispatch): mapDispatchToPropsType => ({
  follow: (id: number) => dispatch(follow(id)),
  unfollow: (id: number) => dispatch(unfollow(id)),
  getUsers: (currentPage, pageSize, term, friends) =>
    dispatch(requestUsers({ currentPage, pageSize, term, friends })),
});

export default connect<
  mapStateToPropsType,
  mapDispatchToPropsType,
  {},
  RootState
>(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataContainerComponent);
