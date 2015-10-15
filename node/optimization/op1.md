# NodeJS : A quick optimization advice
> https://top.fse.guru/nodejs-a-quick-optimization-advice-7353b820c92e

### node 0.12.7

#### with var

``` 
$ time node op1a.js && time node op1b.js 
node op1a.js  0,25s user 0,01s system 99% cpu 0,254 total
node op1b.js  0,95s user 0,00s system 100% cpu 0,954 total
```

---

### node 4.1.2
#### with let

``` 
$ time node op1a.js && time node op1b.js
node op1a.js  0,57s user 0,00s system 100% cpu 0,571 total
node op1b.js  1,49s user 0,01s system 100% cpu 1,494 total
```

#### with var

``` 
$ time node op1a.js && time node op1b.js 
node op1a.js  0,24s user 0,00s system 100% cpu 0,240 total
node op1b.js  1,03s user 0,00s system 100% cpu 1,036 total
```


