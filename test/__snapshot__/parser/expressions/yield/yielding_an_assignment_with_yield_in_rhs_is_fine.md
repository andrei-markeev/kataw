# Kataw parser test case

## Input

`````js
function* g(x) { yield x = yield 3; }
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
                "end": 9
            },
            "name": {
                "kind": 134299649,
                "text": "g",
                "rawText": "g",
                "flags": 96,
                "start": 9,
                "end": 11
            },
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
                            "start": 12,
                            "end": 13
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 12,
                        "end": 13
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 11,
                "end": 14
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
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 0,
                                    "start": 16,
                                    "end": 22
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 22,
                                        "end": 24
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 24,
                                        "end": 26
                                    },
                                    "right": {
                                        "kind": 229,
                                        "yieldKeyword": {
                                            "kind": 8454253,
                                            "flags": 0,
                                            "start": 26,
                                            "end": 32
                                        },
                                        "delegate": false,
                                        "asteriskToken": null,
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 3,
                                            "rawText": "3",
                                            "flags": 96,
                                            "start": 32,
                                            "end": 34
                                        },
                                        "flags": 32,
                                        "start": 26,
                                        "end": 34
                                    },
                                    "flags": 32,
                                    "start": 22,
                                    "end": 34
                                },
                                "flags": 32,
                                "start": 16,
                                "end": 34
                            },
                            "flags": 16,
                            "start": 16,
                            "end": 35
                        }
                    ],
                    "multiline": false,
                    "flags": 32,
                    "start": 16,
                    "end": 35
                },
                "flags": 32,
                "start": 14,
                "end": 37
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 272,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "text": "function* g(x) { yield x = yield 3; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
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
