# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: obj-expr-method-gen
> :: case: var f = function { super(); }
## Input

`````js
({ *method() { var f = function { super(); } } })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 96,
                                    "start": 4,
                                    "end": 10
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [],
                                    "trailingComma": false,
                                    "flags": 160,
                                    "start": 11,
                                    "end": 12
                                },
                                "type": null,
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
                                                    "start": 14,
                                                    "end": 18
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
                                                                "start": 18,
                                                                "end": 20
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 177,
                                                                "asyncKeyword": null,
                                                                "functionKeyword": {
                                                                    "kind": 37822554,
                                                                    "flags": 0,
                                                                    "start": 22,
                                                                    "end": 31
                                                                },
                                                                "generatorToken": null,
                                                                "name": null,
                                                                "formalParameters": {
                                                                    "kind": 214,
                                                                    "formalParameterList": [],
                                                                    "trailingComma": false,
                                                                    "flags": 32,
                                                                    "start": 31,
                                                                    "end": 31
                                                                },
                                                                "contents": {
                                                                    "kind": 216,
                                                                    "functionStatementList": {
                                                                        "kind": 217,
                                                                        "directives": [],
                                                                        "statements": [
                                                                            {
                                                                                "kind": 120,
                                                                                "expression": {
                                                                                    "kind": 131,
                                                                                    "expression": {
                                                                                        "kind": 225,
                                                                                        "superKeyword": {
                                                                                            "kind": 4259935,
                                                                                            "flags": 0,
                                                                                            "start": 33,
                                                                                            "end": 39
                                                                                        },
                                                                                        "flags": 96,
                                                                                        "start": 33,
                                                                                        "end": 39
                                                                                    },
                                                                                    "argumentList": {
                                                                                        "kind": 256,
                                                                                        "elements": [],
                                                                                        "trailingComma": false,
                                                                                        "flags": 32,
                                                                                        "start": 40,
                                                                                        "end": 40
                                                                                    },
                                                                                    "flags": 32,
                                                                                    "start": 33,
                                                                                    "end": 41
                                                                                },
                                                                                "flags": 16,
                                                                                "start": 33,
                                                                                "end": 42
                                                                            }
                                                                        ],
                                                                        "multiline": false,
                                                                        "flags": 32,
                                                                        "start": 33,
                                                                        "end": 42
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 31,
                                                                    "end": 44
                                                                },
                                                                "typeParameters": null,
                                                                "returnType": null,
                                                                "flags": 32,
                                                                "start": 22,
                                                                "end": 44
                                                            },
                                                            "flags": 16,
                                                            "start": 18,
                                                            "end": 44
                                                        }
                                                    ],
                                                    "flags": 16,
                                                    "start": 18,
                                                    "end": 44
                                                },
                                                "flags": 16,
                                                "start": 14,
                                                "end": 44
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 32,
                                        "start": 14,
                                        "end": 44
                                    },
                                    "flags": 32,
                                    "start": 12,
                                    "end": 46
                                },
                                "flags": 160,
                                "start": 10,
                                "end": 46
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 46
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 48
                },
                "flags": 32,
                "start": 0,
                "end": 49
            },
            "flags": 16,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "text": "({ *method() { var f = function { super(); } } })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 39, end: 40

```
