import React from 'react';
import PushableBtn from './elements/PushableBtn';
import SelectPlayerArea from './SelectPlayerArea';
import "assets/pushable.scss";

export interface IGameMenuProps {
    socketHandler: any;
}

export interface IGameMenuState {
    isConnected: boolean;

}

export default class GameMenu extends React.Component<IGameMenuProps, IGameMenuState> {
    constructor(props: IGameMenuProps) {
        super(props);
        this.state = {
            isConnected: false,


        }
    }


    public render() {
        return (
            <>
                <SelectPlayerArea />
                <PushableBtn toPath="/gambleCalc" className="join-btn" text="Let's Play" />
            </>
        );
    }
}
