# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: return async (await) => {};
## Input

`````js
var await; var f = (async function() { return async (await) => {}; });
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
                                "kind": 177,
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 20,
                                    "end": 25
                                },
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 0,
                                    "start": 25,
                                    "end": 34
                                },
                                "generatorToken": null,
                                "name": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 34,
                                    "end": 36
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 0,
                                                    "start": 38,
                                                    "end": 45
                                                },
                                                "expression": {
                                                    "kind": 271,
                                                    "arrowToken": {
                                                        "kind": 10,
                                                        "flags": 0,
                                                        "start": 59,
                                                        "end": 62
                                                    },
                                                    "typeParameters": null,
                                                    "parameters": [
                                                        {
                                                            "kind": 215,
                                                            "ellipsisToken": null,
                                                            "binding": {
                                                                "kind": 131,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "async",
                                                                    "rawText": "async",
                                                                    "flags": 96,
                                                                    "start": 45,
                                                                    "end": 51
                                                                },
                                                                "argumentList": {
                                                                    "kind": 256,
                                                                    "elements": [
                                                                        {
                                                                            "kind": 208,
                                                                            "awaitToken": {
                                                                                "kind": 82032,
                                                                                "flags": 0,
                                                                                "start": 53,
                                                                                "end": 58
                                                                            },
                                                                            "expression": {
                                                                                "kind": 16637,
                                                                                "text": "",
                                                                                "flags": 68,
                                                                                "start": 58,
                                                                                "end": 58
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 53,
                                                                            "end": 58
                                                                        }
                                                                    ],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 45,
                                                                    "end": 45
                                                                },
                                                                "flags": 32,
                                                                "start": 45,
                                                                "end": 59
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": null,
                                                            "flags": 32,
                                                            "start": 45,
                                                            "end": 59
                                                        }
                                                    ],
                                                    "asyncToken": {
                                                        "kind": 82031,
                                                        "flags": 64,
                                                        "start": 45,
                                                        "end": 51
                                                    },
                                                    "returnType": null,
                                                    "contents": {
                                                        "kind": 216,
                                                        "functionStatementList": {
                                                            "kind": 217,
                                                            "directives": [],
                                                            "statements": [],
                                                            "multiline": false,
                                                            "flags": 32,
                                                            "start": 64,
                                                            "end": 64
                                                        },
                                                        "flags": 32,
                                                        "start": 62,
                                                        "end": 65
                                                    },
                                                    "flags": 288,
                                                    "start": 45,
                                                    "end": 65
                                                },
                                                "flags": 16,
                                                "start": 0,
                                                "end": 38
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 32,
                                        "start": 38,
                                        "end": 66
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 68
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 68
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 69
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 69
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 69
            },
            "flags": 16,
            "start": 10,
            "end": 70
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { return async (await) => {}; });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 70
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 58, end: 59

```
