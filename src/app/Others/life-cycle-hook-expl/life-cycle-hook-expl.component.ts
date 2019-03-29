import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook-expl',
  templateUrl: './life-cycle-hook-expl.component.html',
  styleUrls: ['./life-cycle-hook-expl.component.css']
})
export class LifeCycleHookExplComponent implements OnInit {

//Input Property for lche component means this current component
  @Input()
  simpleText:string;
  constructor() { }

  ngOnInit() {
  }

}
