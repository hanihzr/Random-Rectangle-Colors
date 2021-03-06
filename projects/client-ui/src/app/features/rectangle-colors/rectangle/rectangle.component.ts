import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ColorsService } from 'shared-lib';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bet-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss'],
})
export class RectangleComponent implements OnInit {
  color: string = 'bdc3c7';
  x: 0 | 1 = 0;
  // I am restricting x's Type to be only 0 or 1 (Not number or boolean) so if it gets any value other than 0 or 1 will have Type Error
  y: 0 | 1 = 0; // Same reason as 👆

  get position(): string {
    const x = this.x === 0 ? 'left' : 'right';
    const y = this.y === 0 ? 'top' : 'bottom';
    return `${y}-${x}`; // will be like top-left or bottom-right
  }

  constructor(private colorsService: ColorsService) {}

  ngOnInit(): void {
    this.readColor().subscribe();
  }

  move(): void {
    this.readColor().subscribe(() => this.changeAxis());
  }

  private readColor(): Observable<void> {
    // No magik here, just reading from server
    return this.colorsService.getColors().pipe(
      map((resp) => {
        if (resp?.success) {
          this.color = resp.new_color;
        }
      })
    );
  }

  changeAxis(): void {
    // Simple Geometry & Math ;)
    if (this.x === this.y) {
      this.x === 0 ? (this.x = 1) : (this.x = 0);
      // This will change Main Axis When X and Y have the same value e.g. 0,0 or 1,1
    } else {
      this.y = this.x; // This will change Cross Axis When X and Y DO NOT have the same value e.g. 0,1 or 1,0,
      // in other words the circle will move down when it is Top-Right and will move up when it is Bottom-Left
    }
  }
}
