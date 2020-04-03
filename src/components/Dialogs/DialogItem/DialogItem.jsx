import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>
                <img className={s.avatar} src={props.photo} alt=""/>
                {props.name}
             </NavLink>
         
        </div>
    )
}

export default DialogItem;