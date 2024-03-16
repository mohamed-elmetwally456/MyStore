import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscribable, Subscription, fromEvent, map,of } from 'rxjs';

@Component({
  selector: 'app-oops',
  standalone: true,
  imports: [],
  templateUrl: './oops.component.html',
  styleUrl: './oops.component.css'
})
export class OopsComponent implements OnInit , OnDestroy {
  Observal:Observable<any>=new Observable();
  sub!:Subscription;

  ngOnInit(): void {
fromEvent(document,"click").subscribe(p=>console.log("Meto"));
of(1,2,3,4,5,6).pipe(map((data)=>(data < 4 ? data:""))).subscribe((num)=>console.log(num));
this.Observal = new Observable ((obs)=>{
  let count =0 ;
  setInterval(()=>{
    obs.next(count);
    count++;
  },2000)
});
this.sub = this.Observal.subscribe({
  next: (data) => {
    console.log(data);
  },
  error: (err) => {
    console.log(err);
  },
  complete: () => {
    console.log('completed');
  },
});


}
ngOnDestroy(): void {
  this.sub.unsubscribe();
}
}
