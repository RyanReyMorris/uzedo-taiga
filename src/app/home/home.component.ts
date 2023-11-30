import {ChangeDetectionStrategy, Component, Inject} from "@angular/core";
import {TuiAlertService} from "@taiga-ui/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  activeItemIndex = 0;

  constructor(
    @Inject(TuiAlertService)
    private readonly alerts: TuiAlertService,
  ) {}

  onClick(item: string): void {
    this.alerts.open(item).subscribe();
  }

}

