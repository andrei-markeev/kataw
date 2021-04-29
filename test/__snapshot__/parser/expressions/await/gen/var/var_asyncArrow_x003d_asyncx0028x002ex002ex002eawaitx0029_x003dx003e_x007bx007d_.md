# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: r
> :: test: var
> :: case: var asyncArrow = async(...await) => {};
## Input

`````js
var await; var f = (async function() { var asyncArrow = async(...await) => {}; });
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
                                                "kind": 155,
                                                "declareKeyword": null,
                                                "varKeyword": {
                                                    "kind": 37757002,
                                                    "flags": 0,
                                                    "start": 38,
                                                    "end": 42
                                                },
                                                "declarationList": {
                                                    "kind": 156,
                                                    "declarations": [
                                                        {
                                                            "kind": 157,
                                                            "binding": {
                                                                "kind": 134299649,
                                                                "text": "asyncArrow",
                                                                "rawText": "asyncArrow",
                                                                "flags": 96,
                                                                "start": 42,
                                                                "end": 53
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 271,
                                                                "arrowToken": {
                                                                    "kind": 10,
                                                                    "flags": 0,
                                                                    "start": 71,
                                                                    "end": 74
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
                                                                                "start": 55,
                                                                                "end": 61
                                                                            },
                                                                            "argumentList": {
                                                                                "kind": 256,
                                                                                "elements": [
                                                                                    {
                                                                                        "kind": 223,
                                                                                        "ellipsisToken": {
                                                                                            "kind": 524302,
                                                                                            "flags": 0,
                                                                                            "start": 62,
                                                                                            "end": 65
                                                                                        },
                                                                                        "flags": 32,
                                                                                        "start": 62,
                                                                                        "end": 70
                                                                                    }
                                                                                ],
                                                                                "trailingComma": false,
                                                                                "flags": 32,
                                                                                "start": 55,
                                                                                "end": 55
                                                                            },
                                                                            "flags": 32,
                                                                            "start": 55,
                                                                            "end": 71
                                                                        },
                                                                        "optionalToken": null,
                                                                        "type": null,
                                                                        "initializer": null,
                                                                        "flags": 32,
                                                                        "start": 55,
                                                                        "end": 71
                                                                    }
                                                                ],
                                                                "asyncToken": {
                                                                    "kind": 82031,
                                                                    "flags": 64,
                                                                    "start": 55,
                                                                    "end": 61
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
                                                                        "start": 76,
                                                                        "end": 76
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 74,
                                                                    "end": 77
                                                                },
                                                                "flags": 288,
                                                                "start": 55,
                                                                "end": 77
                                                            },
                                                            "flags": 16,
                                                            "start": 42,
                                                            "end": 77
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 42,
                                                    "end": 77
                                                },
                                                "flags": 16,
                                                "start": 38,
                                                "end": 78
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 32,
                                        "start": 38,
                                        "end": 78
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 80
                                },
                                "typeParameters": null,
                                "returnType": null,
                                "flags": 160,
                                "start": 20,
                                "end": 80
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 81
                        },
                        "flags": 16,
                        "start": 14,
                        "end": 81
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 81
            },
            "flags": 16,
            "start": 10,
            "end": 82
        }
    ],
    "isModule": false,
    "text": "var await; var f = (async function() { var asyncArrow = async(...await) => {}; });",
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
✖ Expression expected - start: 70, end: 71

```
