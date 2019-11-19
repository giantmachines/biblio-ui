import {baseClass} from './_filter-box.scss';
import * as React from 'react';
import {ChangeEvent} from "react";
import * as uuid from 'uuid/v4';

interface Props {
    name: string;
    className?: string;
    onChange: any;
    type: Function;
}

function onChange(next:any, filter:Function, e:ChangeEvent<HTMLInputElement>){
    const value = e.target.value;
    const fn = (data:Array<any>) => {
        return data.filter(item => {
            return filter(item, value);
        });
    };
    next(() => {return fn});
}

export default function FilterBox(props: Props){
    const className = props.className || 'filter-box';
    const {type} = props;
    const id = uuid();
    return (
        <div className={baseClass}>
            <label htmlFor={id}>Filter By:</label>
            <input type="text"
                   id={id}
                   name={props.name}
                   onChange={onChange.bind(null, props.onChange, type)}
                   className={className}/>
        </div>
    );
}