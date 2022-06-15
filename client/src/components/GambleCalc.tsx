import "../assets/GambleCalc.scss"
import React from 'react';
import { Button } from "antd";

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
                <button className="pushable join-btn">
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front">
                        Let's Play
                    </span>
                </button>
            </div>
        );
    }
}
