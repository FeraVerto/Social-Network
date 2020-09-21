import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toogleFollowingProgress, requestUsers } from "../../redux/users-reducer";
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { getPageSize, totaItemsCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsers, getTotalUsersCount } from '../../redux/users-selectors';


class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChange = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    }

    render() {
        return <>

            {this.props.isFetching ? <Preloader /> : null}

            <Users totaItemsCount={this.props.totaItemsCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totaItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toogleFollowingProgress,
        requestUsers
    })
)(UsersContainer);