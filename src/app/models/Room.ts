export class Room {
    constructor(
        public id: string,
        public image: string = '',
        public dragablePosition:{x:number,y:number},
    ) {
    }
}