# Kataw parser test case

## Input

`````js
class x extends y { constructor(){ return (a=super.foo) => a; }}
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
                                "end": 31
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 32,
                                "end": 33
                            },
                            "type": null,
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
                                                "start": 34,
                                                "end": 41
                                            },
                                            "expression": {
                                                "kind": 271,
                                                "arrowToken": {
                                                    "kind": 10,
                                                    "flags": 0,
                                                    "start": 55,
                                                    "end": 58
                                                },
                                                "typeParameters": null,
                                                "parameters": [
                                                    {
                                                        "kind": 125,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "a",
                                                            "rawText": "a",
                                                            "flags": 96,
                                                            "start": 43,
                                                            "end": 44
                                                        },
                                                        "operatorToken": {
                                                            "kind": 4125,
                                                            "flags": 64,
                                                            "start": 44,
                                                            "end": 45
                                                        },
                                                        "right": {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 225,
                                                                "superKeyword": {
                                                                    "kind": 4259935,
                                                                    "flags": 0,
                                                                    "start": 45,
                                                                    "end": 50
                                                                },
                                                                "flags": 96,
                                                                "start": 45,
                                                                "end": 50
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 96,
                                                                "start": 51,
                                                                "end": 54
                                                            },
                                                            "flags": 32,
                                                            "start": 45,
                                                            "end": 54
                                                        },
                                                        "flags": 32,
                                                        "start": 41,
                                                        "end": 54
                                                    }
                                                ],
                                                "asyncToken": null,
                                                "returnType": null,
                                                "contents": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 58,
                                                    "end": 60
                                                },
                                                "flags": 32,
                                                "start": 41,
                                                "end": 60
                                            },
                                            "flags": 16,
                                            "start": 0,
                                            "end": 34
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 32,
                                    "start": 34,
                                    "end": 61
                                },
                                "flags": 32,
                                "start": 33,
                                "end": 63
                            },
                            "flags": 0,
                            "start": 31,
                            "end": 63
                        },
                        "flags": 0,
                        "start": 19,
                        "end": 63
                    }
                ],
                "flags": 32,
                "start": 19,
                "end": 64
            },
            "flags": 16,
            "start": 0,
            "end": 64
        }
    ],
    "isModule": false,
    "text": "class x extends y { constructor(){ return (a=super.foo) => a; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 64
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
