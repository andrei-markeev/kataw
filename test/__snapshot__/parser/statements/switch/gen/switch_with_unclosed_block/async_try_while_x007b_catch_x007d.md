# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: switch with unclosed block
> :: case: async try while { catch }
## Input

`````js
switch {} default(x) { async try while { catch }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 160,
            "switchKeyword": {
                "kind": 37757024,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "start": 8,
                    "end": 8
                },
                "flags": 32,
                "start": 6,
                "end": 9
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 170,
                        "defaultKeyword": {
                            "kind": 4194387,
                            "flags": 0,
                            "start": 9,
                            "end": 17
                        },
                        "statements": [
                            {
                                "kind": 120,
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 18,
                                        "end": 19
                                    },
                                    "flags": 32,
                                    "start": 17,
                                    "end": 20
                                },
                                "flags": 16,
                                "start": 17,
                                "end": 20
                            },
                            {
                                "kind": 249,
                                "block": {
                                    "kind": 124,
                                    "statements": [
                                        {
                                            "kind": 120,
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "async",
                                                "rawText": "async",
                                                "flags": 96,
                                                "start": 22,
                                                "end": 28
                                            },
                                            "flags": 16,
                                            "start": 22,
                                            "end": 28
                                        },
                                        {
                                            "kind": 159,
                                            "tryKeyword": {
                                                "kind": 37757027,
                                                "flags": 0,
                                                "start": 28,
                                                "end": 32
                                            },
                                            "block": {
                                                "kind": 249,
                                                "block": {
                                                    "kind": 124,
                                                    "statements": [],
                                                    "multiLine": false,
                                                    "flags": 16,
                                                    "start": 32,
                                                    "end": 32
                                                },
                                                "flags": 16,
                                                "start": 32,
                                                "end": 32
                                            },
                                            "catchClause": null,
                                            "finallyKeyword": null,
                                            "finallyBlock": {
                                                "kind": 249,
                                                "block": {
                                                    "kind": 124,
                                                    "statements": [
                                                        {
                                                            "kind": 159,
                                                            "tryKeyword": null,
                                                            "block": {
                                                                "kind": 249,
                                                                "block": {
                                                                    "kind": 124,
                                                                    "statements": [],
                                                                    "multiLine": false,
                                                                    "flags": 16,
                                                                    "start": 46,
                                                                    "end": 46
                                                                },
                                                                "flags": 16,
                                                                "start": 46,
                                                                "end": 46
                                                            },
                                                            "catchClause": null,
                                                            "finallyKeyword": null,
                                                            "finallyBlock": {
                                                                "kind": 249,
                                                                "block": {
                                                                    "kind": 124,
                                                                    "statements": [],
                                                                    "multiLine": false,
                                                                    "flags": 16,
                                                                    "start": 48,
                                                                    "end": 48
                                                                },
                                                                "flags": 16,
                                                                "start": 48,
                                                                "end": 48
                                                            },
                                                            "flags": 16,
                                                            "start": 40,
                                                            "end": 48
                                                        }
                                                    ],
                                                    "multiLine": false,
                                                    "flags": 16,
                                                    "start": 40,
                                                    "end": 48
                                                },
                                                "flags": 16,
                                                "start": 38,
                                                "end": 48
                                            },
                                            "flags": 16,
                                            "start": 28,
                                            "end": 48
                                        }
                                    ],
                                    "multiLine": false,
                                    "flags": 16,
                                    "start": 22,
                                    "end": 48
                                },
                                "flags": 16,
                                "start": 20,
                                "end": 48
                            }
                        ],
                        "flags": 16,
                        "start": 9,
                        "end": 48
                    }
                ],
                "flags": 16,
                "start": 9,
                "end": 48
            },
            "flags": 16,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "text": "switch {} default(x) { async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 48
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
