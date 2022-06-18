import { Carousel, Slider } from 'antd';
import 'assets/SelectPlayerArea.scss';
import React from 'react';
import PlayerSelector from './PlayerSelector';

export interface ISelectPlayerAreaProps {
    className?: string;
}
export interface ISelectPlayerAreaStates {
    chipCounts: Map<ChipsType, number>;
}

interface Player {
    name: string;
    isOnline: boolean;
    chips: ChipsPocket;
}
interface ChipsPocket {
    count: Map<ChipsType | string, number>;
    color: Map<ChipsType | string, ChipsColor>;
    value: Map<ChipsType | string, ChipsValue>;
};

const enum ChipsValue {
    red = 5,
    blue = 10,
    green = 25,
    black = 100
}
const enum ChipsType {
    red = "red",
    blue = "blue",
    green = "green",
    black = "black"
}
const enum ChipsColor {
    red = "#ff4d4f",
    blue = "#40a9ff",
    green = "#73d13d",
    black = "#141414"

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
    readonly valueMap: Map<ChipsType, ChipsValue> = new Map([
        [ChipsType.red, ChipsValue.red],
        [ChipsType.black, ChipsValue.black],
        [ChipsType.blue, ChipsValue.blue],
        [ChipsType.green, ChipsValue.green]
    ])
    readonly colorMap: Map<ChipsType, ChipsColor> = new Map([
        [ChipsType.red, ChipsColor.red],
        [ChipsType.black, ChipsColor.black],
        [ChipsType.blue, ChipsColor.blue],
        [ChipsType.green, ChipsColor.green]
    ])

    constructor(props: ISelectPlayerAreaProps) {
        super(props);
        this.state = {
            chipCounts: new Map([
                [ChipsType.red, 5],
                [ChipsType.blue, 5],
                [ChipsType.green, 5],
                [ChipsType.black, 5]
            ])
        }
    }

    onChange = (currentIndex: number) => {
        console.log(currentIndex);
    }


    public render() {

        const defaultPocket: ChipsPocket = {
            count: this.state.chipCounts,
            color: this.colorMap,
            value: this.valueMap
        }
        return (
            <Carousel afterChange={this.onChange} >
                <div >
                    {/* <PlayerSelector /> */}
                    <div className="carousel-content" >
                        <PlayerSelector />
                    </div>
                </div>
                <div>
                    <div className='carousel-content'>
                        {
                            Array.from(defaultPocket.count).map(([chipType, count]) => (
                                <Slider
                                    className={`slider ${chipType}`}
                                    trackStyle={{ backgroundColor: defaultPocket.color.get(chipType) }}
                                    handleStyle={{ borderColor: defaultPocket.color.get(chipType) }}
                                    min={0}
                                    max={10}
                                    // style={sliderStyle}
                                    vertical
                                    marks={marks}
                                    defaultValue={defaultPocket.count.get(chipType)}
                                />
                            ))
                        }
                    </div>
                </div>
            </Carousel >
        );
    }
}