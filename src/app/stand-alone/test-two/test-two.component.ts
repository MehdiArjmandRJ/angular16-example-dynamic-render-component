import { Component, Input, OnInit,Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: ['./test-two.component.scss']
})
export class TestTwoComponent implements OnInit {
  @Input() testtt?:any;
  constructor(private rouge:ActivatedRoute,private Renderer2:Renderer2) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.rouge.snapshot.data);
      console.log(this.testtt);
    }, 2000);
  }
}
