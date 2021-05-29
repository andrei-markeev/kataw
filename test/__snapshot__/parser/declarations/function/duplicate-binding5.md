# Kataw parser test case

## Input

`````js
function f() { { { var x } async function x() {} }}
`````

## Output

### CST

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
                "flags": 64,
                "start": 0,
                "end": 8
            },
            "generatorToken": null,
            "name": {
                "kind": 134299649,
                "text": "f",
                "rawText": "f",
                "flags": 96,
                "start": 8,
                "end": 10
            },
            "formalParameters": {
                "kind": 214,
                "formalParameterList": [],
                "trailingComma": false,
                "flags": 32,
                "start": 10,
                "end": 12
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 124,
                            "block": {
                                "kind": 249,
                                "statements": [
                                    {
                                        "kind": 124,
                                        "block": {
                                            "kind": 249,
                                            "statements": [
                                                {
                                                    "kind": 155,
                                                    "declareKeyword": null,
                                                    "varKeyword": {
                                                        "kind": 37757002,
                                                        "flags": 80,
                                                        "start": 18,
                                                        "end": 22
                                                    },
                                                    "declarationList": {
                                                        "kind": 156,
                                                        "declarations": [
                                                            {
                                                                "kind": 157,
                                                                "binding": {
                                                                    "kind": 134299649,
                                                                    "text": "x",
                                                                    "rawText": "x",
                                                                    "flags": 96,
                                                                    "start": 22,
                                                                    "end": 24
                                                                },
                                                                "optionalToken": null,
                                                                "type": null,
                                                                "initializer": null,
                                                                "flags": 16,
                                                                "start": 22,
                                                                "end": 24
                                                            }
                                                        ],
                                                        "flags": 16,
                                                        "start": 22,
                                                        "end": 24
                                                    },
                                                    "flags": 16,
                                                    "start": 18,
                                                    "end": 24
                                                }
                                            ],
                                            "flags": 16,
                                            "start": 18,
                                            "end": 24
                                        },
                                        "flags": 16,
                                        "start": 16,
                                        "end": 26
                                    },
                                    {
                                        "kind": 176,
                                        "declareKeyword": null,
                                        "asyncKeyword": {
                                            "kind": 82031,
                                            "flags": 64,
                                            "start": 26,
                                            "end": 32
                                        },
                                        "functionKeyword": {
                                            "kind": 37822554,
                                            "flags": 64,
                                            "start": 32,
                                            "end": 41
                                        },
                                        "generatorToken": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 41,
                                            "end": 43
                                        },
                                        "formalParameters": {
                                            "kind": 214,
                                            "formalParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 43,
                                            "end": 45
                                        },
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "flags": 32,
                                                "start": 47,
                                                "end": 47
                                            },
                                            "flags": 32,
                                            "start": 45,
                                            "end": 48
                                        },
                                        "typeParameters": null,
                                        "returnType": null,
                                        "flags": 144,
                                        "start": 26,
                                        "end": 48
                                    }
                                ],
                                "flags": 16,
                                "start": 16,
                                "end": 48
                            },
                            "flags": 16,
                            "start": 14,
                            "end": 50
                        }
                    ],
                    "flags": 32,
                    "start": 14,
                    "end": 50
                },
                "flags": 32,
                "start": 12,
                "end": 51
            },
            "typeParameters": null,
            "returnType": null,
            "flags": 16,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "function f() { { { var x } async function x() {} }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Duplicate identifier - start: 41, end: 43

```
