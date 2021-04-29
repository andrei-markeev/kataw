# Kataw parser test case

## Input

`````js
class x extends y { constructor() { log(super.foo); super.mom; } }
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
                                            "kind": 120,
                                            "expression": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "log",
                                                    "rawText": "log",
                                                    "flags": 96,
                                                    "start": 35,
                                                    "end": 39
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 129,
                                                            "member": {
                                                                "kind": 225,
                                                                "superKeyword": {
                                                                    "kind": 4259935,
                                                                    "flags": 0,
                                                                    "start": 40,
                                                                    "end": 45
                                                                },
                                                                "flags": 96,
                                                                "start": 40,
                                                                "end": 45
                                                            },
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "foo",
                                                                "rawText": "foo",
                                                                "flags": 96,
                                                                "start": 46,
                                                                "end": 49
                                                            },
                                                            "flags": 32,
                                                            "start": 40,
                                                            "end": 49
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 40,
                                                    "end": 49
                                                },
                                                "flags": 32,
                                                "start": 35,
                                                "end": 50
                                            },
                                            "flags": 16,
                                            "start": 35,
                                            "end": 51
                                        },
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 225,
                                                    "superKeyword": {
                                                        "kind": 4259935,
                                                        "flags": 0,
                                                        "start": 51,
                                                        "end": 57
                                                    },
                                                    "flags": 96,
                                                    "start": 51,
                                                    "end": 57
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "mom",
                                                    "rawText": "mom",
                                                    "flags": 96,
                                                    "start": 58,
                                                    "end": 61
                                                },
                                                "flags": 32,
                                                "start": 51,
                                                "end": 61
                                            },
                                            "flags": 16,
                                            "start": 51,
                                            "end": 62
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 32,
                                    "start": 35,
                                    "end": 62
                                },
                                "flags": 32,
                                "start": 33,
                                "end": 64
                            },
                            "flags": 0,
                            "start": 31,
                            "end": 64
                        },
                        "flags": 0,
                        "start": 19,
                        "end": 64
                    }
                ],
                "flags": 32,
                "start": 19,
                "end": 66
            },
            "flags": 16,
            "start": 0,
            "end": 66
        }
    ],
    "isModule": false,
    "text": "class x extends y { constructor() { log(super.foo); super.mom; } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 66
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
