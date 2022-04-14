// RxJS v6+
const { of } =require('rxjs');
const { distinct} =require('rxjs/operators');

of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5)
  .pipe(distinct())
  // OUTPUT: 1,2,3,4,5
  .subscribe(console.log);