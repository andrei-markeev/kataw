# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: async function f(){ await foo\n/foo/g }
## Input

`````js
var await; var f = (async function() { async function f(){ await foo\n/foo/g } });
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 9
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 10,
                "end": 14
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 14,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "flags": 32,
                                "start": 18,
                                "end": 68
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 68
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 68
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 68
            },
            "flags": 16,
            "start": 10,
            "end": 68
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "n",
                        "rawText": "n",
                        "flags": 96,
                        "start": 69,
                        "end": 70
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 64,
                        "start": 70,
                        "end": 71
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "start": 71,
                        "end": 74
                    },
                    "flags": 32,
                    "start": 69,
                    "end": 74
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 64,
                    "start": 74,
                    "end": 75
                },
                "right": {
                    "kind": 134299649,
                    "text": "g",
                    "rawText": "g",
                    "flags": 96,
                    "start": 75,
                    "end": 76
                },
                "flags": 32,
                "start": 69,
                "end": 76
            },
            "flags": 16,
            "start": 69,
            "end": 76
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 81,
            "end": 82
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { async function f(){ await foo\\n/foo/g } });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 82
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 64, end: 68
✖ Invalid hexadecimal escape sequence - start: 68, end: 68
✖ ',' expected - start: 68, end: 69
✖ Statement expected - start: 68, end: 69
✖ Statement expected - start: 76, end: 78
✖ Statement expected - start: 78, end: 80
✖ Statement expected - start: 80, end: 81

```
