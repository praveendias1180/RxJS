const { range, filter, map } = require('rxjs');

range(1, 20)
    .pipe(
        filter(x => x % 2 === 1),
        map(x => x + x)
    )
    .subscribe(x => console.log(x))