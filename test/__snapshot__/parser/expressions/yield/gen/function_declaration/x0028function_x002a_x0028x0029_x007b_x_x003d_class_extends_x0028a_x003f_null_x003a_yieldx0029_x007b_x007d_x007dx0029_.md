# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: function declaration
> :: case: (function * () { x = class extends (a ? null : yield) { } });
## Input

`````js
function not_gen() { (function * () { x = class extends (a ? null : yield) { } }); }}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "not_gen",
                "rawText": "not_gen",
                "flags": 96,
                "start": 8,
                "end": 16
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 16,
                "end": 18
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
                                "kind": 121,
                                "expression": {
                                    "kind": 177,
                                    "asyncKeyword": null,
                                    "functionKeyword": {
                                        "kind": 37822554,
                                        "flags": 0,
                                        "start": 22,
                                        "end": 30
                                    },
                                    "generatorToken": {
                                        "kind": 67143222,
                                        "flags": 64,
                                        "start": 30,
                                        "end": 32
                                    },
                                    "name": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 32,
                                        "end": 35
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
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "x",
                                                            "rawText": "x",
                                                            "flags": 96,
                                                            "start": 37,
                                                            "end": 39
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 64,
                                                            "start": 39,
                                                            "end": 41
                                                        },
                                                        "right": {
                                                            "kind": 189,
                                                            "decorators": null,
                                                            "classKeyword": {
                                                                "kind": 37822544,
                                                                "flags": 0,
                                                                "start": 41,
                                                                "end": 47
                                                            },
                                                            "name": null,
                                                            "typeParameters": null,
                                                            "classHeritage": {
                                                                "kind": 279,
                                                                "extendsKeyword": {
                                                                    "kind": 4194391,
                                                                    "flags": 0,
                                                                    "start": 47,
                                                                    "end": 55
                                                                },
                                                                "expression": {
                                                                    "kind": 121,
                                                                    "expression": {
                                                                        "kind": 197,
                                                                        "shortCircuit": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 57,
                                                                            "end": 58
                                                                        },
                                                                        "questionToken": {
                                                                            "kind": 134217750,
                                                                            "flags": 0,
                                                                            "start": 58,
                                                                            "end": 60
                                                                        },
                                                                        "consequent": {
                                                                            "kind": 269,
                                                                            "text": null,
                                                                            "flags": 96,
                                                                            "start": 60,
                                                                            "end": 65
                                                                        },
                                                                        "colonToken": {
                                                                            "kind": 21,
                                                                            "flags": 0,
                                                                            "start": 65,
                                                                            "end": 67
                                                                        },
                                                                        "alternate": {
                                                                            "kind": 229,
                                                                            "yieldKeyword": {
                                                                                "kind": 8454253,
                                                                                "flags": 0,
                                                                                "start": 67,
                                                                                "end": 73
                                                                            },
                                                                            "delegate": false,
                                                                            "asteriskToken": null,
                                                                            "expression": null,
                                                                            "flags": 32,
                                                                            "start": 67,
                                                                            "end": 73
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 55,
                                                                        "end": 73
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 55,
                                                                    "end": 74
                                                                },
                                                                "typeParameter": null,
                                                                "flags": 16,
                                                                "start": 55,
                                                                "end": 74
                                                            },
                                                            "members": {
                                                                "kind": 277,
                                                                "elements": [],
                                                                "flags": 32,
                                                                "start": 76,
                                                                "end": 78
                                                            },
                                                            "flags": 32,
                                                            "start": 41,
                                                            "end": 78
                                                        },
                                                        "flags": 32,
                                                        "start": 37,
                                                        "end": 78
                                                    },
                                                    "flags": 16,
                                                    "start": 37,
                                                    "end": 78
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 32,
                                            "start": 37,
                                            "end": 78
                                        },
                                        "flags": 32,
                                        "start": 35,
                                        "end": 80
                                    },
                                    "typeParameters": null,
                                    "returnType": null,
                                    "flags": 288,
                                    "start": 22,
                                    "end": 80
                                },
                                "flags": 32,
                                "start": 20,
                                "end": 81
                            },
                            "flags": 16,
                            "start": 20,
                            "end": 82
                        }
                    ],
                    "multiline": false,
                    "flags": 32,
                    "start": 20,
                    "end": 82
                },
                "flags": 32,
                "start": 18,
                "end": 84
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 84
        }
    ],
    "isModule": false,
    "text": "function not_gen() { (function * () { x = class extends (a ? null : yield) { } }); }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 85
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 84, end: 85

```
