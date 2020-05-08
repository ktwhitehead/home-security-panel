import React from 'react';
import NumberRow from './NumberRow';
import { Rows } from './PinPadStyled';

const Pad = () => {
    return (
        <Rows>
            <NumberRow numbers={[1,2,3]} />
            <NumberRow numbers={[4,5,6]} />
            <NumberRow numbers={[7,8,9]} />
            <NumberRow numbers={[0]} />
        </Rows>
    )
}

export default Pad;
