# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: with unclosed array
> :: case: async funcion switch!!
## Input

`````js
do[ async funcion switch!!
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 26,
                "end": 26
            },
            "whileKeyword": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 271,
                                "arrowToken": null,
                                "typeParameters": null,
                                "parameters": [
                                    {
                                        "kind": 215,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "funcion",
                                            "rawText": "funcion",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 17
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 3,
                                        "end": 17
                                    }
                                ],
                                "asyncToken": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 3,
                                    "end": 9
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 126,
                                    "operandToken": {
                                        "kind": 65584,
                                        "flags": 64,
                                        "start": 24,
                                        "end": 25
                                    },
                                    "expression": {
                                        "kind": 126,
                                        "operandToken": {
                                            "kind": 65584,
                                            "flags": 64,
                                            "start": 25,
                                            "end": 26
                                        },
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 68,
                                            "start": 26,
                                            "end": 26
                                        },
                                        "flags": 32,
                                        "start": 25,
                                        "end": 26
                                    },
                                    "flags": 32,
                                    "start": 24,
                                    "end": 26
                                },
                                "flags": 288,
                                "start": 3,
                                "end": 26
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 3,
                        "end": 26
                    },
                    "flags": 32,
                    "start": 2,
                    "end": 26
                },
                "flags": 16,
                "start": 2,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "do[ async funcion switch!!",
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
✖ Expression expected - start: 26, end: 26
✖ ',' expected - start: 26, end: 26
✖ Expression expected - start: 26, end: 26

```
