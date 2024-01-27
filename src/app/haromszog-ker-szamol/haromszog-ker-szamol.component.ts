import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-haromszog-ker-szamol',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './haromszog-ker-szamol.component.html',
  styleUrl: './haromszog-ker-szamol.component.css'
})
export class HaromszogKerSzamolComponent {
  private title: string = "Feladat1: Számítsuk ki a háromszög kerületét a három oldala alapján!"
  private a: number = 0;
  private b: number = 0;
  private c: number = 0;
  eredmeny: number | null = null;

  public get Title(): string {
    return this.title;
  }
  public get A(): number {
    return this.a;
  }
  public set A(value: number) {
    this.a = value;
  }
  public get B(): number {
    return this.b;
  }
  public set B(value: number) {
    this.b = value;
  }
  public get C(): number {
    return this.c;
  }
  public set C(value: number) {
    this.c = value;
  }

  public haromszogKerSzamol(): void {
    const a = parseFloat(this.a.toString());
    const b = parseFloat(this.b.toString());
    const c = parseFloat(this.c.toString());

    if(this.osszegPozitiv(a, b, c)) {
      this.eredmeny = a + b + c;
    } else {
      this.eredmeny = null;
      alert('Az oldalak összege nem pozitív szám!');
    }
  }

  private osszegPozitiv(a: number, b: number, c: number): boolean {
    return a > 0 && b > 0 && c > 0;
  }

}