import React from 'react';
import s from './Users.module.css';


const Users = (props) => {

    if(props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photo: 'https://lamcdn.net/furfurmag.ru/post-cover/PYMgsmfOiI0s9C3k8dwZ8Q-default.jpg',
                    followed: false,
                    fullName: 'Freddy',
                    status: 'I am a nightmare',
                    location: { city: 'Springwood', country: 'Russia' }
                },
        
                {
                    id: 2,
                    photo: 'https://cs8.pikabu.ru/post_img/2016/02/16/6/1455614024134387187.jpg',
                    followed: true,
                    fullName: 'Nancy',
                    status: 'I love Freddy!',
                    location: { city: 'Ekaterinburg', country: 'Russia' }
                },
        
                {
                    id: 3,
                    photo: 'https://avatars.mds.yandex.net/get-zen_doc/1866022/pub_5db7caed1e8e3f00ac32a293_5db7ddb498930900b236e7d6/scale_1200',
                    followed: false,
                    fullName: 'Glen',
                    status: 'I love Nancy!',
                    location: { city: 'Ekaterinburg', country: 'Russia' }
                },
        
                {
                    id: 4,
                    photo: 'https://udiwis.ru/wp-content/uploads/maxresdefault-5.jpg',
                    followed: false,
                    fullName: 'Jason',
                    status: 'I hate you Freddy!',
                    location: { city: 'Ekaterinburg', country: 'Russia' }
                }
        ])
    }

    
    return (
        <div>
            {
                props.users.map(u => <div className={s.usersInfo} key={u.id}>
                    <div className={s.usersAvatar}>
                        <div>
                            <img className={s.photo} src={u.photo} alt="Аватар" width="110px" />
                        </div>
                        <div className={s.usersFollow}>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                            }
                        </div>
                    </div>
                    <div className={s.userInfo}>
                        <div className={s.userStatus}>
                            <div className={s.userName}>{u.fullName}</div>
                            <div className={s.userStatusText}>{u.status}</div>
                        </div>
                        <div className={s.userLocation}>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </div>
                    </div>

                </div>)
            }

        </div>)
}

export default Users;