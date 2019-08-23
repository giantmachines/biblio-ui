import * as React from 'react';

interface Props {
    children?:any;
    className?: string;
}

export const Header = (props: Props) => {
    return (
        <section className={props.className || 'header'}>{props.children}</section>
    )
};

export const Sidebar = (props: Props) => {
    return (
        <section className={props.className || `sidebar`}>
            {props.children}
        </section>
    );
};