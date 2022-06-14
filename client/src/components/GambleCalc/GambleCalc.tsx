import "./GambleCalc.scss"
import React from 'react';
import SwipeActionBar from "../SwipeActionBar/SwipeActionBar";

export interface IGambleCalcProps {
}

export interface IGambleCalcState {
}

export default class GambleCalc extends React.Component<IGambleCalcProps, IGambleCalcState> {
    constructor(props: IGambleCalcProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div className='GambleCalc-header'>
                <SwipeActionBar />
            </div>
        );
    }
}
