import * as React from 'react';

interface Props {
    children?:any;
    align?: string;
}

export const Header = (props: Props) => {
    return (
        <section className="header">{props.children}</section>
    )
};

export const Sidebar = (props: Props) => {
    return (
        <section className={`sidebar--${props.align}`}>
            {props.children}
        </section>
    );
};