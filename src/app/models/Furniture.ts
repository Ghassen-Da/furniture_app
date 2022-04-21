export class Furniture {
    constructor(
        public id: string,
        public category: string,
        public height: number = 200,
        public image: string = '',
        public isSelected: boolean = false,
        public position: { x: number, y: number } = { x: 0, y: 0 }
    ) {
    }
}