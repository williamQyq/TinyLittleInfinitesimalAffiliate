import * as React from 'react';
import "assets/pushable.scss";
import { Link } from 'react-router-dom';

export interface IPushableBtnProps {
    className?: string,
    toPath: string,
    text: string;
}

export default function PushableBtn(props: IPushableBtnProps) {
    let { text, className, toPath } = props;
    return (
        <Link to={toPath}>
            <button className={`pushable ${className}`} >
                <span className='shadow' />
                <span className='edge' />
                <span className='front'>{text}</span>
            </button>
        </Link>
    );
}
