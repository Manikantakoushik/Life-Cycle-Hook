import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  counter = 0;
  interval: any;
  @Input('Channel') Channel: any;
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();
  @ContentChild('projectedContent',{static:false})projectedContent: any;
  @ViewChild('childContent',{static:false}) childcontent:any;

  constructor() {
    console.log('child constructor viewchild-' + this.childcontent);
    console.log('child constructor contentchild ' + this.projectedContent);
    console.log('child constructor is called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    console.log('child ngOnchanges viewchild-' + this.childcontent);
    console.log('child ngOnchnages of contentchild ' + this.projectedContent);
    console.log('child ngOnChange is called');
  }

  ngOnInit(): void {
    console.log('child ngOnInit viewchild-' + this.childcontent);
    console.log('child ngOnInit of contentchild ' + this.projectedContent);
    console.log('child ngOnInit is called');
    // this.interval=setInterval(()=>{
    //   this.counter+=1;
    //   console.log(this.counter);
    // },1000)
  }

  ngDoCheck(): void {
    console.log('child ngDocheck viewchild-' + this.childcontent);
    console.log('child ngDoCheck of contentchild ' + this.projectedContent);
    console.log('child ngDoCheck is called');
  }

  ngAfterContentInit(): void {
    console.log('child ngAftercontentInit viewchild-' + this.childcontent);
    console.log('child ngAftercontentInit contentChild  ' + this.projectedContent
    );
  }

  ngAfterContentChecked(): void {
    console.log('child ngAftercontentChecked viewchild-' + this.childcontent);
    console.log(
      'child ngAfterContentChecked contentChild-' + this.projectedContent
    );
  }

  ngAfterViewInit(): void {
    console.log('child ngAfterViewInit viewchild-' + JSON.stringify(this.childcontent));
  }
  
  ngAfterViewChecked(): void {
    console.log('child ngAfterViewChecked viewchild-' + this.childcontent);
  }

  ngOnDestroy(): void {
    console.log('child ngOnDestroy viewchild-' + this.childcontent);
    console.log('child ngOnDestroy of contentchild' + this.projectedContent);
    clearInterval(this.interval);
    console.log('child ngOnDestroy is called');
  }

  sendMessage() {
    this.parentFunction.emit(this.Channel);
  }
}
