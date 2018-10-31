// @ts-check
import React from 'react';

import './debug.css';

/**
 * @typedef {{ children: ({[key: string]: unknown} | number | string | boolean ) }} Props
 */

/**
 * @param {Props} props 
 */
export const Debug = props => (
    <pre className="debug">{JSON.stringify(props.children, null, 2)}</pre>
);
