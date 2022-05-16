import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import s from './loader.module.css';

export default function Loader() {
  return (
    <div className={s.loader}>
      <PulseLoader color={'#476BBE'} size={35} />
    </div>
  );
}
