import {
  Component,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ContentChild,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MyDataService } from '../my-data.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements  OnInit,
OnDestroy,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked {
  isChild = true;
  Channel = '';
  data: any;
  @ContentChild('projectedContent',{static:true}) projectedContent: any;
  @ViewChild('parent',{static:true}) value: any;
  constructor(private mydata: MyDataService) {
    console.log('parent constructor is called');
  }
  ngOnChanges(): void {
    console.log('parent ngonchange is called');
  }
  ngOnInit(): void {
    // this.mydata.ngOnInit();
    console.log('parent ngOnInit is called');
  }
  ngDoCheck() {
    console.log('parent ngDoCheck is called');
  }
  ngAfterContentInit(): void {
    console.log('parent ngAftercontentInit viewchild-' + this.value);
    console.log(
      'parent ngAftercontentInit contentChild ' + this.projectedContent
    );
  }

  ngAfterContentChecked(): void {
    console.log('parent ngAftercontentChecked viewchild-' + this.value);
    console.log('parent ngAfterContentChecked contentChild-' + this.projectedContent
    );
  }

  ngAfterViewInit(): void {
    console.log('parent ngAfterViewInit viewchild-' + this.value);
  }

  ngAfterViewChecked(): void {
    console.log('parent NgAfterViewChecked viewchild-' + this.value);
  }
  ngOnDestroy(): void {
    console.log('parent ngOnDestroy viewchild-');
    console.log('parent ngOnDestroy of contentchild');
    console.log('parent ngOnDestroy is called');
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }
  parentFunction(data: any) {
    console.log('this is parent data====' + data);
    this.data = data;
  }
}
