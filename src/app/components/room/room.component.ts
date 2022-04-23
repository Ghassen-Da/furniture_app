import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Furniture } from 'src/app/models/Furniture';
import { FurnitureService } from 'src/app/services/furniture.service';
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
  animations: [
    trigger("furnitureAppearAnimation", [
      transition(":enter", [
        style({
          opacity: 0,
        }),
        animate("1s ease-out", style({ opacity: 1}))
      ]),
    ])
  ]
})
export class RoomComponent implements OnInit {
  furnitures: Furniture[] = [];
  types: string[] = [];
  expandedIndex = 0;
a={x:1,y:2};
  constructor(private readonly furnitureService: FurnitureService) { }

  ngOnInit(): void {
    this.types = this.furnitureService.getFurnitureTypes();
    this.furnitures = this.furnitureService.getFurnitures();
  }

  // some work here
  rearrange() {
    this.furnitures.filter(furniture=>furniture.isSelected).map(furniture => {
      furniture.position={x : Utils.getRandomInt(-100, 100), y: Utils.getRandomInt(-100, 100)};
  });
}
}
