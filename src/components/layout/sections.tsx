import * as React from 'react';

interface Props {
    children?:any
}

export const Header = (props: Props) => {
    return (
        <section className="header">{props.children}</section>
    )
};