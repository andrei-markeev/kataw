# Kataw parser test case

## Input

`````js
var f: >x:int) => string;

`````

## Options

### Parser Options

`````js
{ allowTypes : true }
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
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 144,
                                "id": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 68,
                                    "start": 6,
                                    "end": 6
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 6,
                                "end": 6
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 6
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 6
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 6,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 64,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 8,
                    "end": 9
                },
                "flags": 32,
                "start": 6,
                "end": 9
            },
            "flags": 16,
            "start": 6,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "int",
                "rawText": "int",
                "flags": 96,
                "start": 10,
                "end": 13
            },
            "flags": 16,
            "start": 10,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "string",
                "rawText": "string",
                "flags": 96,
                "start": 17,
                "end": 24
            },
            "flags": 16,
            "start": 17,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "var f: >x:int) => string;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Identifier expected - start: 6, end: 8
✖ ',' expected - start: 6, end: 8
✖ Expression expected - start: 6, end: 8
✖ Statement expected - start: 9, end: 10
✖ Statement expected - start: 13, end: 14
✖ Statement expected - start: 14, end: 17

```
