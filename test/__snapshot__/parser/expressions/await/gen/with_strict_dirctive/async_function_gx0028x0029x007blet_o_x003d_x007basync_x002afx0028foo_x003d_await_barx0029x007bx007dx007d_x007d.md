# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: async function g(){let o = {async *f(foo = await bar){}}    }
## Input

`````js
'use strict'; async function g(){let o = {async *f(foo = await bar){}}    }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 64,
                "start": 13,
                "end": 19
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 19,
                "end": 28
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 28,
                "end": 30
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 30,
                "end": 32
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 162,
                            "lexicalKeyword": {
                                "kind": 41951307,
                                "flags": 80,
                                "start": 33,
                                "end": 36
                            },
                            "binding": {
                                "kind": 151,
                                "bindingList": [
                                    {
                                        "kind": 190,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "o",
                                            "rawText": "o",
                                            "flags": 96,
                                            "start": 36,
                                            "end": 38
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 209,
                                                        "name": {
                                                            "kind": 134299649,
                                                            "text": "f",
                                                            "rawText": "f",
                                                            "flags": 96,
                                                            "start": 49,
                                                            "end": 50
                                                        },
                                                        "typeParameters": null,
                                                        "formalParameters": {
                                                            "kind": 214,
                                                            "formalParameterList": [
                                                                {
                                                                    "kind": 215,
                                                                    "ellipsisToken": null,
                                                                    "binding": {
                                                                        "kind": 134299649,
                                                                        "text": "foo",
                                                                        "rawText": "foo",
                                                                        "flags": 96,
                                                                        "start": 51,
                                                                        "end": 54
                                                                    },
                                                                    "optionalToken": null,
                                                                    "type": null,
                                                                    "initializer": {
                                                                        "kind": 208,
                                                                        "awaitToken": {
                                                                            "kind": 82032,
                                                                            "flags": 0,
                                                                            "start": 56,
                                                                            "end": 62
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "bar",
                                                                            "rawText": "bar",
                                                                            "flags": 96,
                                                                            "start": 62,
                                                                            "end": 66
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 56,
                                                                        "end": 66
                                                                    },
                                                                    "flags": 34,
                                                                    "start": 51,
                                                                    "end": 66
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "flags": 418,
                                                            "start": 51,
                                                            "end": 67
                                                        },
                                                        "type": null,
                                                        "contents": {
                                                            "kind": 216,
                                                            "functionStatementList": {
                                                                "kind": 217,
                                                                "directives": [],
                                                                "statements": [],
                                                                "multiline": false,
                                                                "flags": 32,
                                                                "start": 68,
                                                                "end": 68
                                                            },
                                                            "flags": 32,
                                                            "start": 67,
                                                            "end": 69
                                                        },
                                                        "flags": 416,
                                                        "start": 50,
                                                        "end": 69
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "start": 42,
                                                "end": 69
                                            },
                                            "flags": 32,
                                            "start": 40,
                                            "end": 70
                                        },
                                        "flags": 16,
                                        "start": 36,
                                        "end": 70
                                    }
                                ],
                                "flags": 33554448,
                                "start": 36,
                                "end": 70
                            },
                            "flags": 33554448,
                            "start": 33,
                            "end": 70
                        }
                    ],
                    "multiline": false,
                    "flags": 32,
                    "start": 33,
                    "end": 70
                },
                "flags": 32,
                "start": 32,
                "end": 75
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 144,
            "start": 13,
            "end": 75
        }
    ],
    "isModule": false,
    "text": "'use strict'; async function g(){let o = {async *f(foo = await bar){}}    }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```
