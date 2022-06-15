import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

export interface ISelectPlayerAreaProps {
    className?: string;
}
const contentStyle: React.CSSProperties = {
    height: '25em',
    width: "20em",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "0.5em",
    color: '#fff',
    lineHeight: '25em',
    textAlign: 'center',
    background: '#364d79',
};

export interface Player {
    name: string;
    availabe: boolean;
    chips: ChipsPocket;
}
export interface ChipsPocket {
    red: number;
    blue: number;
    green: number;
    black: number;
}
enum ChipsValue {
    Red = 5,
    Blue = 10,
    Green = 25,
    Black = 100
}

export default class SelectPlayerArea extends React.Component<ISelectPlayerAreaProps> {

    constructor(props: ISelectPlayerAreaProps) {
        super(props);
        this.state = {

        }
    }

    onChange = (currentIndex: number) => {
        console.log(currentIndex);
    }

    
    public render() {
        return (
            <Carousel afterChange={this.onChange} >
                <div >
                    <h3 >1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel >
        );
    }
}