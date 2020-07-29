
import React, { ReactElement } from 'react';
import { Direction } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


export function getDirection(): Direction {
    return "rtl"
}
export function toNativeLang(text:string){
    return text
}
export function Localize(props: any) {
    return (
        <StylesProvider jss={jss}>
            <div dir={getDirection()}>
                {props.children}
            </div>
        </StylesProvider>
    );
}