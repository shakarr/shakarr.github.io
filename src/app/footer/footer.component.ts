import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

declare var data: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public footerData = data['Footer'];

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    changeDetectorRef.detach();
  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}
