import {baseClass} from './_filter-box.scss';
import * as React from 'react';
import {ChangeEventHandler} from "react";

interface Props {
    name: string;
    className?: string;
    onChange: any;
}

export default function FilterBox(props: Props){
    const className = props.className || 'filter-box';
    return (
        <div className={baseClass}>
            <label>Filter By:
                <input type="text"
                       name={props.name}
                       onChange={props.onChange}
                       className={className}/>
            </label>
        </div>
    );
}