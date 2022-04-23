import { Injectable } from "@angular/core";
import { Furniture } from "../models/Furniture";

@Injectable({
    providedIn: 'root'
})
export class FurnitureService {
    allFurnitures: Furniture[];

    constructor() {
        this.allFurnitures = [
            new Furniture('chair1', 'Chair', 280, 'assets/images/chairs/chair1.png'),
            new Furniture('table1', 'Table', 160, 'assets/images/tables/table1.png'),
            new Furniture('table2', 'Table', 200, 'assets/images/tables/table2.png'),
            new Furniture('table3', 'Table', 310, 'assets/images/tables/table3.png'),
            new Furniture('table4', 'Table', 200, 'assets/images/tables/table4.png'),
            new Furniture('bed1', 'Bed', 260, 'assets/images/beds/bed1.png'),
            new Furniture('bed2', 'Bed', 340, 'assets/images/beds/bed2.png'),
            new Furniture('bed3', 'Bed', 260, 'assets/images/beds/bed3.png'),
            new Furniture('bed4', 'Bed', 290, 'assets/images/beds/bed4.png'),
            new Furniture('cabinet1', 'Cabinet', 300, 'assets/images/cabinets/cabinet1.png'),
            new Furniture('cabinet2', 'Cabinet', 300, 'assets/images/cabinets/cabinet2.png'),
            new Furniture('cabinet3', 'Cabinet', 300, 'assets/images/cabinets/cabinet3.png'),
            new Furniture('cabinet4', 'Cabinet', 300, 'assets/images/cabinets/cabinet4.png'),
            new Furniture('sofa1', 'Sofa', 120, 'assets/images/sofas/sofa1.png'),
            new Furniture('sofa2', 'Sofa', 160, 'assets/images/sofas/sofa2.png'),
            new Furniture('sofa4', 'Sofa', 160, 'assets/images/sofas/sofa4.png'),
            new Furniture('sofa3', 'Sofa', 230, 'assets/images/sofas/sofa3.png'),
            new Furniture('other2', 'Other Furniture', 210, 'assets/images/other_furniture/other_furniture2.png'),
            new Furniture('other3', 'Other Furniture', 200, 'assets/images/other_furniture/other_furniture3.png'),
        ];
    }

    getFurnitures(): Furniture[] {
        return this.allFurnitures;
    }

    getFurnitureTypes(): string[] {
        return this.allFurnitures.map(furniture => furniture.type).filter((value, index, self) => self.indexOf(value) === index);
    }
}
