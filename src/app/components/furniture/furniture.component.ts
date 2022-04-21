import { Component, Input, OnInit } from '@angular/core';
import { Furniture } from 'src/app/models/Furniture';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {
  @Input() furniture!: Furniture;
  constructor() { }

  ngOnInit(): void {
  }

  addFurniture(furniture: Furniture) {
    furniture.isSelected = true;
  }

  removeFurniture(furniture: Furniture) {
    furniture.isSelected = false;
  }
}
