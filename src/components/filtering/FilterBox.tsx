import {baseClass} from './_filter-box.scss';
import * as React from 'react';
import {ChangeEvent} from "react";

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
    return (
        <div className={baseClass}>
            <label>Filter By:
                <input type="text"
                       name={props.name}
                       onChange={onChange.bind(null, props.onChange, type)}
                       className={className}/>
            </label>
        </div>
    );
}