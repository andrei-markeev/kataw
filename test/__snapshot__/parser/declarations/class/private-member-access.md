# Kataw parser test case

## Input

`````js
  class C { #aaa; f() { this.#aaa } }
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
                "end": 7
            },
            "name": {
                "kind": 134299649,
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 7,
                "end": 9
            },
            "typeParameters": null,
            "classHeritage": null,
            "members": {
                "kind": 277,
                "elements": [
                    {
                        "kind": 280,
                        "decorators": null,
                        "declaredToken": null,
                        "staticToken": null,
                        "asyncKeyword": null,
                        "key": {
                            "kind": 67109115,
                            "text": "#aaa",
                            "flags": 96,
                            "start": 11,
                            "end": 16
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 32,
                        "start": 11,
                        "end": 16
                    },
                    {
                        "kind": 281,
                        "flags": 96,
                        "start": 16,
                        "end": 17
                    },
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
                                "text": "f",
                                "rawText": "f",
                                "flags": 96,
                                "start": 17,
                                "end": 19
                            },
                            "typeParameters": null,
                            "formalParameters": {
                                "kind": 214,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 0,
                                "start": 20,
                                "end": 21
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
                                                "kind": 129,
                                                "member": {
                                                    "kind": 135,
                                                    "flags": 96,
                                                    "start": 23,
                                                    "end": 28
                                                },
                                                "expression": {
                                                    "kind": 67109115,
                                                    "text": "#aaa",
                                                    "flags": 96,
                                                    "start": 29,
                                                    "end": 33
                                                },
                                                "flags": 32,
                                                "start": 23,
                                                "end": 33
                                            },
                                            "flags": 16,
                                            "start": 23,
                                            "end": 33
                                        }
                                    ],
                                    "multiline": false,
                                    "flags": 32,
                                    "start": 23,
                                    "end": 33
                                },
                                "flags": 32,
                                "start": 21,
                                "end": 35
                            },
                            "flags": 0,
                            "start": 19,
                            "end": 35
                        },
                        "flags": 0,
                        "start": 17,
                        "end": 35
                    }
                ],
                "flags": 32,
                "start": 11,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "text": "  class C { #aaa; f() { this.#aaa } }",
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
