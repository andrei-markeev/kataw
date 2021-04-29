# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: if else
> :: case: async try while { catch }
## Input

`````js
if async try while { catch } else
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 0,
                "end": 2
            },
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 2,
                "end": 8
            },
            "consequent": {
                "kind": 159,
                "tryKeyword": {
                    "kind": 37757027,
                    "flags": 0,
                    "start": 8,
                    "end": 12
                },
                "block": {
                    "kind": 249,
                    "block": {
                        "kind": 124,
                        "statements": [],
                        "multiLine": false,
                        "flags": 16,
                        "start": 12,
                        "end": 12
                    },
                    "flags": 16,
                    "start": 12,
                    "end": 12
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
                                        "start": 26,
                                        "end": 26
                                    },
                                    "flags": 16,
                                    "start": 26,
                                    "end": 26
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
                                        "start": 28,
                                        "end": 28
                                    },
                                    "flags": 16,
                                    "start": 28,
                                    "end": 28
                                },
                                "flags": 16,
                                "start": 20,
                                "end": 28
                            }
                        ],
                        "multiLine": false,
                        "flags": 16,
                        "start": 20,
                        "end": 28
                    },
                    "flags": 16,
                    "start": 18,
                    "end": 28
                },
                "flags": 16,
                "start": 8,
                "end": 28
            },
            "elseKeyword": {
                "kind": 4194389,
                "flags": 64,
                "start": 28,
                "end": 33
            },
            "alternate": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 33,
                    "end": 33
                },
                "flags": 16,
                "start": 33,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "text": "if async try while { catch } else",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 33, end: 33

```
