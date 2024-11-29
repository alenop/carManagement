import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Car } from '../services/data.service';

@Component({
  selector: 'app-CarUpFront',
  templateUrl: './carUpFront.component.html',
  styleUrls: ['./carUpFront.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class carUpFrontComponent {
  private platform = inject(Platform);
  @Input() car?: Car;
  isIos() {
    return this.platform.is('ios')
  }
}
