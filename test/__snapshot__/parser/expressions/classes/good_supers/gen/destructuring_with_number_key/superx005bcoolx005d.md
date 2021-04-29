# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: destructuring with number key
> :: case: super[cool]
## Input

`````js
class x extends y {
  constructor() {
    ({123: super[cool]} = x)
  }
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 5,
                "end": 7
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 279,
                "extendsKeyword": {
                    "kind": 4194391,
                    "flags": 0,
                    "start": 7,
                    "end": 15
                },
                "expression": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 15,
                    "end": 17
                },
                "typeParameter": null,
                "flags": 16,
                "start": 15,
                "end": 17
            },
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 278,
                        "declareToken": null,
                        "decorators": null,
                        "staticKeyword": null,
                        "asyncKeyword": null,
                        "setKeyword": null,
                        "getKeyword": null,
                        "method": {
                            "kind": 209,
                            "name": {
                                "kind": 134299649,
                                "text": "constructor",
                                "rawText": "constructor",
                                "flags": 96,
                                "start": 19,
                                "end": 33
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 34,
                                "end": 35
                            },
                            "type": null,
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
                                                    "kind": 125,
                                                    "left": {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 219,
                                                                    "asyncKeyword": null,
                                                                    "getKeyword": null,
                                                                    "setKeyword": null,
                                                                    "left": {
                                                                        "kind": 130,
                                                                        "member": {
                                                                            "kind": 225,
                                                                            "superKeyword": {
                                                                                "kind": 4259935,
                                                                                "flags": 0,
                                                                                "start": 48,
                                                                                "end": 54
                                                                            },
                                                                            "flags": 96,
                                                                            "start": 48,
                                                                            "end": 54
                                                                        },
                                                                        "expression": {
                                                                            "kind": 134299649,
                                                                            "text": "cool",
                                                                            "rawText": "cool",
                                                                            "flags": 96,
                                                                            "start": 55,
                                                                            "end": 59
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 44,
                                                                        "end": 60
                                                                    },
                                                                    "right": {
                                                                        "kind": 201392130,
                                                                        "text": 123,
                                                                        "rawText": "123",
                                                                        "flags": 96,
                                                                        "start": 44,
                                                                        "end": 47
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 44,
                                                                    "end": 60
                                                                }
                                                            ],
                                                            "trailingComma": false,
                                                            "multiline": false,
                                                            "flags": 0,
                                                            "start": 44,
                                                            "end": 60
                                                        },
                                                        "flags": 32,
                                                        "start": 43,
                                                        "end": 61
                                                    },
                                                    "operatorToken": {
                                                        "kind": 4125,
                                                        "flags": 64,
                                                        "start": 61,
                                                        "end": 63
                                                    },
                                                    "right": {
                                                        "kind": 134299649,
                                                        "text": "x",
                                                        "rawText": "x",
                                                        "flags": 96,
                                                        "start": 63,
                                                        "end": 65
                                                    },
                                                    "flags": 32,
                                                    "start": 43,
                                                    "end": 65
                                                },
                                                "flags": 32,
                                                "start": 37,
                                                "end": 66
                                            },
                                            "flags": 16,
                                            "start": 37,
                                            "end": 66
                                        }
                                    ],
                                    "multiline": true,
                                    "flags": 32,
                                    "start": 37,
                                    "end": 66
                                },
                                "flags": 32,
                                "start": 35,
                                "end": 70
                            },
                            "flags": 0,
                            "start": 33,
                            "end": 70
                        },
                        "flags": 0,
                        "start": 19,
                        "end": 70
                    }
                ],
                "flags": 32,
                "start": 19,
                "end": 72
            },
            "flags": 16,
            "start": 0,
            "end": 72
        }
    ],
    "isModule": false,
    "text": "class x extends y {\n  constructor() {\n    ({123: super[cool]} = x)\n  }\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 72
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
