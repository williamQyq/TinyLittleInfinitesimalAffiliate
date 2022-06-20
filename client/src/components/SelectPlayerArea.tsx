import { Carousel, Slider } from 'antd';
import 'assets/SelectPlayerArea.scss';
import React from 'react';
import PlayerSelector, { ChipsPocket, defaultPocket } from './PlayerSelector';

export interface ISelectPlayerAreaProps {
    className?: string;
}
export interface ISelectPlayerAreaStates {
}

const marks = {
    0: {
        label: <strong>0</strong>
    },
    5: {
        label: <strong>5</strong>
    },
    10: {
        label: <strong>10</strong>
    }
}
export default class SelectPlayerArea extends React.Component<ISelectPlayerAreaProps, ISelectPlayerAreaStates> {

    constructor(props: ISelectPlayerAreaProps) {
        super(props);
        this.state = {

        }
    }

    onChange = (currentIndex: number) => {
        console.log("Carousel switched to index: ", currentIndex);
    }

    public render() {
        const chipsPocket: ChipsPocket = defaultPocket;
        return (
            <Carousel afterChange={this.onChange} >
                <div >
                    <div className="carousel-content" >
                        <PlayerSelector />
                    </div>
                </div>
                <div>
                    <div className='carousel-content'>
                        {
                            Array.from(chipsPocket.count).map(([chipType, count]) => (
                                <Slider
                                    key={chipType}
                                    className={`slider ${chipType}`}
                                    trackStyle={{ backgroundColor: chipsPocket.color.get(chipType) }}
                                    handleStyle={{ borderColor: chipsPocket.color.get(chipType) }}
                                    min={0}
                                    max={10}
                                    vertical
                                    marks={marks}
                                    defaultValue={chipsPocket.count.get(chipType)}
                                />
                            ))
                        }
                    </div>
                </div>
            </Carousel >
        );
    }
}