import React from 'react';
import preloader from '../../../assets/images/preloader.svg';
import s from './Preloader.module.css';

let Preloader = (props) => {
    return <div className={s.preloader}>
        <img className={s.preloaderImg} src={preloader} />
    </div>
}

export default Preloader;
