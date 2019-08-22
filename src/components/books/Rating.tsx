import * as React from "react";
import {baseClass} from './_rating.scss';

interface Props {
    value: number;
}

export default function ratingComponent(props: Props){
    const {value} = props;
    const getClass = (n:number) => {
        return n <= value ? 'checked' : 'unchecked';
    };
    const stars = [1,2,3,4,5].map(n => {
        return (<span className={getClass(n)}>★</span>);
    });

    return (
        <div className={baseClass}>{stars}</div>
    );
}