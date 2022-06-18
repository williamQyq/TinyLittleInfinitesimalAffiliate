import * as React from 'react';
import 'assets/PlayerSelector.scss';

export interface IPlayerSelectorProps {
}

export default class PlayerSelector extends React.Component<IPlayerSelectorProps> {
    private selectAreaRef: React.RefObject<HTMLDivElement>;
    constructor(props: IPlayerSelectorProps) {
        super(props);
        this.selectAreaRef = React.createRef();
    }

    componentDidMount() {
        this.Boxlayout().init();
    }

    Boxlayout = () => {
        const wrapper = this.selectAreaRef.current!,
            sections = [...document.querySelectorAll(".section")],
            closeButtons = [...document.querySelectorAll(".close-section")],
            expandedClass = "is-expanded",
            hasExpandedClass = "has-expanded-item";

        const initEvents = () => {
            sections.forEach((element) => {
                element.addEventListener("click", () => openSection(element));
            });
            closeButtons.forEach((element) => {
                element.addEventListener("click", (event) => {
                    event.stopPropagation();
                    closeSection(element.parentElement!);
                });
            });
        };

        const openSection = (element: Element) => {
            if (!element.classList.contains(expandedClass) && wrapper) {
                element.classList.add(expandedClass);
                wrapper.classList.add(hasExpandedClass);
            }
        };

        const closeSection = (element: Element) => {
            if (element.classList.contains(expandedClass)) {
                element.classList.remove(expandedClass);
                wrapper.classList.remove(hasExpandedClass);
            }
        };

        return { init: initEvents };
    }

    public render() {
        return (
            <main className="main" ref={this.selectAreaRef}>
                <section className="section">
                    <div className='close-section'>&times;</div>
                    <div className="demo-box">Diamond Wang</div>
                </section>
                <section className="section">
                    <div className="close-section">&times;</div>
                    <div className="demo-box">Fragile Flower</div>
                </section>
                <section className="section">
                    <div className="close-section">&times;</div>
                    <div className="demo-box">Dog Ball</div>
                </section>
                <section className="section">
                    <div className="close-section">&times;</div>
                    <div className="demo-box">Hillbilly Liu</div>
                </section>
            </main>
        );
    }
}
