import React from 'react';
import "assets/Home.scss";
import PushableBtn from './elements/PushableBtn';
import SelectPlayerArea from './SelectPlayerArea';
import { Routes, Route } from 'react-router-dom';
import PlayerSelector from './PlayerSelector';
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
            <div className="Home-header">
                <Routes>
                    <Route path="/" element={<PlayerSelector />} />
                    <Route path="/gambleCalc" element={<GambleCalc />} />
                </Routes>
            </div>
        );
    }
}
