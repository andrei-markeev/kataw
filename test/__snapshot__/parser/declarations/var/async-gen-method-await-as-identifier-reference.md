# Kataw parser test case

## Input

`````js
var C = class { async *gen() {
    void await;
}};
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

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
                "flags": 80,
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
                            "text": "C",
                            "rawText": "C",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 189,
                            "decorators": null,
                            "classKeyword": {
                                "kind": 37822544,
                                "flags": 64,
                                "start": 7,
                                "end": 13
                            },
                            "name": null,
                            "typeParameters": null,
                            "tail": {
                                "kind": 277,
                                "classHeritage": null,
                                "body": {
                                    "kind": 262,
                                    "elements": [
                                        {
                                            "kind": 278,
                                            "declareToken": null,
                                            "decorators": null,
                                            "generatorToken": {
                                                "kind": 67143222,
                                                "flags": 64,
                                                "start": 21,
                                                "end": 23
                                            },
                                            "staticKeyword": null,
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "start": 15,
                                                "end": 21
                                            },
                                            "setKeyword": null,
                                            "getKeyword": null,
                                            "method": {
                                                "kind": 209,
                                                "name": {
                                                    "kind": 134299649,
                                                    "text": "gen",
                                                    "rawText": "gen",
                                                    "flags": 96,
                                                    "start": 23,
                                                    "end": 26
                                                },
                                                "typeParameters": null,
                                                "formalParameters": {
                                                    "kind": 214,
                                                    "formalParameterList": [],
                                                    "trailingComma": false,
                                                    "flags": 384,
                                                    "start": 27,
                                                    "end": 28
                                                },
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 216,
                                                    "functionStatementList": {
                                                        "kind": 217,
                                                        "directives": [],
                                                        "statements": [
                                                            {
                                                                "kind": 120,
                                                                "expression": {
                                                                    "kind": 126,
                                                                    "operandToken": {
                                                                        "kind": 138477615,
                                                                        "flags": 65,
                                                                        "start": 30,
                                                                        "end": 39
                                                                    },
                                                                    "operand": {
                                                                        "kind": 208,
                                                                        "awaitKeyword": {
                                                                            "kind": 82196,
                                                                            "flags": 64,
                                                                            "start": 39,
                                                                            "end": 45
                                                                        },
                                                                        "expression": {
                                                                            "kind": 16637,
                                                                            "text": "",
                                                                            "flags": 64,
                                                                            "start": 45,
                                                                            "end": 45
                                                                        },
                                                                        "flags": 32,
                                                                        "start": 39,
                                                                        "end": 45
                                                                    },
                                                                    "flags": 32,
                                                                    "start": 30,
                                                                    "end": 45
                                                                },
                                                                "flags": 16,
                                                                "start": 30,
                                                                "end": 46
                                                            }
                                                        ],
                                                        "flags": 33,
                                                        "start": 30,
                                                        "end": 46
                                                    },
                                                    "flags": 32,
                                                    "start": 28,
                                                    "end": 48
                                                },
                                                "flags": 384,
                                                "start": 26,
                                                "end": 48
                                            },
                                            "flags": 384,
                                            "start": 15,
                                            "end": 48
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 15,
                                    "end": 48
                                },
                                "flags": 13,
                                "start": 32,
                                "end": 49
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 49
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 49
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 49
            },
            "flags": 16,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "source": "var C = class { async *gen() {\n    void await;\n}};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 45, end: 46

```
