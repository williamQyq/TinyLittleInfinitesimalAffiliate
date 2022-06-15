import React from 'react';
import PushableBtn from './elements/PushableBtn';
import "assets/pushable.scss";
import { Link } from 'react-router-dom';

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
      <div>
        <PushableBtn toPath='/' className="checkout-btn" text="Sweet." />
      </div>
    );
  }
}
