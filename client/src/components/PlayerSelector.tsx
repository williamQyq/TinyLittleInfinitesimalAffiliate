import * as React from 'react';
import 'assets/PlayerSelector.scss';

export interface Player {
    name: string;
    isOnline: boolean;
    chips: ChipsPocket;
}
export interface ChipsPocket {
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

const valueMap: Map<ChipsType, ChipsValue> = new Map([
    [ChipsType.red, ChipsValue.red],
    [ChipsType.black, ChipsValue.black],
    [ChipsType.blue, ChipsValue.blue],
    [ChipsType.green, ChipsValue.green]
])
const colorMap: Map<ChipsType, ChipsColor> = new Map([
    [ChipsType.red, ChipsColor.red],
    [ChipsType.black, ChipsColor.black],
    [ChipsType.blue, ChipsColor.blue],
    [ChipsType.green, ChipsColor.green]
])

const chipCounts: Map<ChipsType, number> = new Map([
    [ChipsType.red, 5],
    [ChipsType.blue, 5],
    [ChipsType.green, 5],
    [ChipsType.black, 5]
])

export const defaultPocket: ChipsPocket = {
    count: chipCounts,
    color: colorMap,
    value: valueMap
}
export interface IPlayerSelectorProps {
}

export interface IPlayerSelectorStates {
    isSectionOpened: boolean;
    readonly expandedClass: string;
    readonly hasExpandedClass: string;
    selectedPlayer: Player | null;
}
const players: Array<Player> = [
    {
        name: "Diamond Wang",
        isOnline: false,
        chips: defaultPocket
    },
    {
        name: "Fragile Flower",
        isOnline: false,
        chips: defaultPocket
    },
    {
        name: "Dog Ball",
        isOnline: false,
        chips: defaultPocket
    },
    {
        name: "Hillbilly Liu",
        isOnline: false,
        chips: defaultPocket
    }
];

export default class PlayerSelector extends React.Component<IPlayerSelectorProps, IPlayerSelectorStates> {
    private wrapperRef: React.RefObject<HTMLDivElement>;

    constructor(props: IPlayerSelectorProps) {
        super(props);
        this.wrapperRef = React.createRef();
        this.state = {
            expandedClass: "is-expanded",
            hasExpandedClass: "has-expanded-item",
            isSectionOpened: false,
            selectedPlayer: null
        }
    }

    componentDidMount() {
    }
    openSection = (event: React.MouseEvent, player: Player) => {
        event.preventDefault();
        const { isSectionOpened } = this.state;
        let element = event.currentTarget as HTMLElement;
        let wrapper = this.wrapperRef.current!;

        if (!isSectionOpened) {
            element.classList.add(this.state.expandedClass);
            wrapper.classList.add(this.state.hasExpandedClass);
            this.setState({ isSectionOpened: !isSectionOpened });
            this.setState({ selectedPlayer: player });
        }
    }
    closeSection = (event: React.MouseEvent) => {
        event.stopPropagation();
        const { isSectionOpened } = this.state;
        let element = event.currentTarget.parentElement as HTMLDivElement;
        let wrapper = this.wrapperRef.current!;
        if (isSectionOpened) {
            element.classList.remove(this.state.expandedClass);
            wrapper.classList.remove(this.state.hasExpandedClass);
            this.setState({ isSectionOpened: !isSectionOpened });
            this.setState({ selectedPlayer: null });
        }
    }

    public render() {
        return (
            <main className="main" ref={this.wrapperRef}>{
                players.map(player => (
                    <section
                        key={player.name}
                        className="section"
                        onClick={(e) => this.openSection(e, player)}
                    >
                        <div className='close-section' onClick={(e) => this.closeSection(e)}>&times;</div>
                        <div className="demo-box">{player.name}</div>
                    </section>
                ))
            }
            </main>
        );
    }
}
