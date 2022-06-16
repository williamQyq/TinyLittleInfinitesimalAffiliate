interface ChipsInterface {

}


class Chips implements ChipsInterface {
    readonly count: number

    constructor(count: number) {
        this.count = count;
    }
}