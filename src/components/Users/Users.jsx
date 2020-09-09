import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/base-avatar.png';
import { NavLink } from 'react-router-dom';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={s.number}>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => { props.onPageChange(p) }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div className={s.usersInfo} key={u.id}>
                    <div className={s.usersAvatar}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.photo} src={u.photos.small != null ? u.photos.small : userPhoto} alt="Аватар" width="110px" />
                            </NavLink>
                        </div>
                        <div className={s.usersFollow}>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} 
                                          onClick={() => {props.unfollow(u.id);

                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} 
                                          onClick={() => {props.follow(u.id);

                                }}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={s.userInfo}>
                        <div className={s.userStatus}>
                            <div className={s.userName}>{u.name}</div>
                            <div className={s.userStatusText}>{u.status}</div>
                        </div>
                        <div className={s.userLocation}>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>

                </div>)
            }

        </div>)
}

export default Users;