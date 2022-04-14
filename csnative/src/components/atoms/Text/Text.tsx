import React from 'react';

import * as S from './styles';
import * as I from './types';

export default function Text(props: I.IProps) {
    return (
        <S.Text 
            size={props.size}
            color={props.color} 
            bold={props.bold}
            centered={props.centered}
        >
            {props.children}
        </S.Text>
    )
}