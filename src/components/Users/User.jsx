import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/base-avatar.png';
import { NavLink } from 'react-router-dom';


let User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div>
            <div className={s.usersInfo} key={user.id}>
                <div className={s.usersAvatar}>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img className={s.photo} src={user.photos.small != null ? user.photos.small : userPhoto} alt="Аватар" width="110px" />
                        </NavLink>
                    </div>
                    <div className={s.usersFollow}>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    unfollow(user.id);

                                }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    follow(user.id);

                                }}>Follow</button>
                        }
                    </div>
                </div>
                <div className={s.userInfo}>
                    <div className={s.userStatus}>
                        <div className={s.userName}>{user.name}</div>
                        <div className={s.userStatusText}>{user.status}</div>
                    </div>
                    <div className={s.userLocation}>
                        <div>{user.country}</div>
                        <div>{user.city}</div>
                    </div>
                </div>

            </div>)


        </div>)
}

export default User;