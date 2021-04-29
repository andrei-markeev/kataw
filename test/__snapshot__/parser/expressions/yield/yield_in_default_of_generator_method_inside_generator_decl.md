# Kataw parser test case

## Input

`````js
function *f(){  ({*g(x=yield){}})  }
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
            "generatorToken": {
                "kind": 67143222,
                "flags": 64,
                "start": 8,
                "end": 10
            },
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 10,
                "end": 11
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 13
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
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "g",
                                                    "rawText": "g",
                                                    "flags": 96,
                                                    "start": 19,
                                                    "end": 20
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
                                                                "text": "x",
                                                                "rawText": "x",
                                                                "flags": 96,
                                                                "start": 21,
                                                                "end": 22
                                                            },
                                                            "optionalToken": null,
                                                            "type": null,
                                                            "initializer": {
                                                                "kind": 229,
                                                                "yieldKeyword": {
                                                                    "kind": 8454253,
                                                                    "flags": 0,
                                                                    "start": 23,
                                                                    "end": 28
                                                                },
                                                                "delegate": false,
                                                                "asteriskToken": null,
                                                                "expression": null,
                                                                "flags": 32,
                                                                "start": 23,
                                                                "end": 28
                                                            },
                                                            "flags": 34,
                                                            "start": 21,
                                                            "end": 28
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 162,
                                                    "start": 21,
                                                    "end": 29
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
                                                        "start": 30,
                                                        "end": 30
                                                    },
                                                    "flags": 32,
                                                    "start": 29,
                                                    "end": 31
                                                },
                                                "flags": 160,
                                                "start": 20,
                                                "end": 31
                                            }
                                        ],
                                        "trailingComma": false,
                                        "multiline": false,
                                        "flags": 0,
                                        "start": 18,
                                        "end": 31
                                    },
                                    "flags": 32,
                                    "start": 17,
                                    "end": 32
                                },
                                "flags": 32,
                                "start": 14,
                                "end": 33
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 33
                        }
                    ],
                    "multiline": false,
                    "flags": 32,
                    "start": 14,
                    "end": 33
                },
                "flags": 32,
                "start": 13,
                "end": 36
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "function *f(){  ({*g(x=yield){}})  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
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
