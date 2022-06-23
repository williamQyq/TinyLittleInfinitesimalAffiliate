import React from 'react';
import "assets/Home.scss";
import { Routes, Route } from 'react-router-dom';
import GameMenu from './GameMenu';
import GambleCalc from './GambleCalc';

const URL = "wss://n1ni6h03a0.execute-api.us-east-1.amazonaws.com/production/";

export interface IHomeProps {

}

export interface IHomeState {
    players: Array<String | undefined>;
    isConnected: Boolean;
    chatRows: React.ReactNode[];
}

export default class Home extends React.Component<IHomeProps, IHomeState> {
    socket: WebSocket | null = null;
    constructor(props: IHomeProps) {
        super(props);
        this.state = {
            isConnected: false,
            players: [],
            chatRows: []
        };
    }

    componentDidMount() {
        this.socket?.close();
    }

    socketHandler = {
        onSocketOpen: (playerName: String) => {
            this.setState({ isConnected: true });
            this.socket?.send(JSON.stringify({ action: "setPlayer", playerName }));

        },
        onSocketClose: () => {
            this.setState({ isConnected: false });
            this.setState({ players: [] });
            this.setState({ chatRows: [] });
        },
        onSocketMessage: (dataStr: any) => {
            const data = JSON.parse(dataStr);
            if (data.players) {
                this.setState({ players: data.players });
            } else if (data.publicMessage) {
                this.setState({ chatRows: [...this.state.chatRows, data.publicMessage] })
            } else if (data.systemMessage) {
                this.setState({ chatRows: [...this.state.chatRows, data.systemMessage] })
            }
        },
        onConnect: (playerName: string) => {
            if (this.socket?.readyState !== WebSocket.OPEN) {
                this.socket = new WebSocket(URL);
                this.socket.addEventListener('open', () => this.socketHandler.onSocketOpen(playerName))
                this.socket.addEventListener('close', () => this.socketHandler.onSocketClose());
                this.socket.addEventListener('message', (event) => {
                    this.socketHandler.onSocketMessage(event.data);
                });
            }
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
                    <Route path="/" element={<GameMenu socketHandler={this.socketHandler} />} />
                    <Route path="/gambleCalc" element={<GambleCalc />} />
                </Routes>
            </div>
        );
    }
}
