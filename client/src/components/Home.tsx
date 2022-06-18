import React from 'react';
import "assets/Home.scss";
import { Routes, Route } from 'react-router-dom';
import GameMenu from './GameMenu';
import GambleCalc from './GambleCalc';

export interface IHomeProps {
}

export interface IHomeState {
    isConnected: boolean;

}

export default class Home extends React.Component<IHomeProps, IHomeState> {
    constructor(props: IHomeProps) {
        super(props);
        this.state = {
            isConnected: false,


        }
    }


    public render() {
        return (
            <div className="Home">
                {/* <div className='svg-container'>
                    <svg viewBox="0 0 800 400" className="svg">
                        <path id="curve" fill="#50c6d8" d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z" />
                    </svg>
                </div> */}
                <Routes>
                    <Route path="/" element={<GameMenu />} />
                    <Route path="/gambleCalc" element={<GambleCalc />} />
                </Routes>
            </div>
        );
    }
}
