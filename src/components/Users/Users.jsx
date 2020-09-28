import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';


let Users = ({ currentPage, onPageChange, totalItemsCount, pageSize, users, ...props }) => {

    return (
        <div>
            <Paginator currentPage={currentPage} onPageChange={onPageChange} totalItemsCount={totalItemsCount} pageSize={pageSize} />
            <div>
                {
                    users.map(u => <User user={u}
                        key={u.id}
                        followingInProgress={props.followingInProgress}
                        follow={props.follow}
                        unfollow={props.unfollow} />
                    )
                }
            </div>
            <Paginator currentPage={currentPage} onPageChange={onPageChange} totalItemsCount={totalItemsCount} pageSize={pageSize} />

        </div>

    )
}
export default Users;