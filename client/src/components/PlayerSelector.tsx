import React from 'react';
import PushableBtn from './elements/PushableBtn';
import SelectPlayerArea from './SelectPlayerArea';
import "assets/pushable.scss";

export interface IPlayerSelectorProps {
}

export interface IPlayerSelectorState {
    isConnected: boolean;

}

export default class PlayerSelector extends React.Component<IPlayerSelectorProps, IPlayerSelectorState> {
    constructor(props: IPlayerSelectorProps) {
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
