# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: prologue-method-gen
> :: case: instanceof
## Input

`````js
'use strict'; ({*instanceof(x, y) {}});
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
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
                                    "text": "instanceof",
                                    "rawText": "instanceof",
                                    "flags": 96,
                                    "start": 17,
                                    "end": 27
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
                                                "start": 28,
                                                "end": 29
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 28,
                                            "end": 29
                                        },
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 30,
                                                "end": 32
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 30,
                                            "end": 32
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 160,
                                    "start": 28,
                                    "end": 33
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
                                        "start": 35,
                                        "end": 35
                                    },
                                    "flags": 32,
                                    "start": 33,
                                    "end": 36
                                },
                                "flags": 160,
                                "start": 27,
                                "end": 36
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 16,
                        "end": 36
                    },
                    "flags": 32,
                    "start": 15,
                    "end": 37
                },
                "flags": 32,
                "start": 13,
                "end": 38
            },
            "flags": 16,
            "start": 13,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "'use strict'; ({*instanceof(x, y) {}});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 39
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
