# Kataw parser test case

## Input

`````js
class x extends y { constructor() { new super() }}
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
                                                "kind": 210,
                                                "newKeyword": {
                                                    "kind": 138477661,
                                                    "flags": 0,
                                                    "start": 35,
                                                    "end": 39
                                                },
                                                "expression": {
                                                    "kind": 225,
                                                    "superKeyword": {
                                                        "kind": 4259935,
                                                        "flags": 0,
                                                        "start": 39,
                                                        "end": 45
                                                    },
                                                    "flags": 96,
                                                    "start": 39,
                                                    "end": 45
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "start": 46,
                                                    "end": 46
                                                },
                                                "flags": 32,
                                                "start": 35,
                                                "end": 47
                                            },
                                            "flags": 16,
                                            "start": 35,
                                            "end": 47
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 32,
                                    "start": 35,
                                    "end": 47
                                },
                                "flags": 32,
                                "start": 33,
                                "end": 49
                            },
                            "flags": 0,
                            "start": 31,
                            "end": 49
                        },
                        "flags": 0,
                        "start": 19,
                        "end": 49
                    }
                ],
                "flags": 32,
                "start": 19,
                "end": 50
            },
            "flags": 16,
            "start": 0,
            "end": 50
        }
    ],
    "isModule": false,
    "text": "class x extends y { constructor() { new super() }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 50
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 45, end: 46

```
