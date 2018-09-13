# ES6 Class Constructor Args list

Extract argument names from es6 class constructor into an array. Used for constructor dependency injection.

## Install

```
npm install es6-class-constructor-args-list --save
```
```

## Usage
Es6

import constArgsList = 'es6-constructor-args-list'

class MyClass {
    constructor(arg1, arg2) {
        //
    }
}

const list = constArgsList(MyClass); // Outputs ['arg1', 'arg2']

```
