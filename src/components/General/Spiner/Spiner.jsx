import React from 'react';

import s from '../Spiner/Spiner.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Spiner() {
  return (
    <div className={s.wrapperSpiner}>
      <CircularProgress color="secondary" className={s.spiner}/>
    </div>
  );
}
