import React from 'react';
import { useState } from 'react';
import { css } from '@emotion/react';
import PulseLoader from 'react-spinners/PulseLoader';
import s from './loader.module.css';

const override = css`
  display: block;
  margin: 20 500
  border-color: blue;
`;

export default function Loader() {
  let [loading] = useState(true);
  let [color] = useState('#476BBE');
  return (
    <div className={s.loader}>
      <PulseLoader color={color} loading={loading} css={override} size={35} />
    </div>
  );
}
