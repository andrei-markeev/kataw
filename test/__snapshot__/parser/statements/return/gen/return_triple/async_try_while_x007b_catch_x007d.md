# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: return triple
> :: case: async try while { catch }
## Input

`````js
return return return async try while { catch }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 6,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 0
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 6,
                "end": 13
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 13,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 0,
                "start": 13,
                "end": 20
            },
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 20,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 159,
            "tryKeyword": {
                "kind": 37757027,
                "flags": 0,
                "start": 26,
                "end": 30
            },
            "block": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [],
                    "multiLine": false,
                    "flags": 16,
                    "start": 30,
                    "end": 30
                },
                "flags": 16,
                "start": 30,
                "end": 30
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
                                    "start": 44,
                                    "end": 44
                                },
                                "flags": 16,
                                "start": 44,
                                "end": 44
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
                                    "start": 46,
                                    "end": 46
                                },
                                "flags": 16,
                                "start": 46,
                                "end": 46
                            },
                            "flags": 16,
                            "start": 38,
                            "end": 46
                        }
                    ],
                    "multiLine": false,
                    "flags": 16,
                    "start": 38,
                    "end": 46
                },
                "flags": 16,
                "start": 36,
                "end": 46
            },
            "flags": 16,
            "start": 26,
            "end": 46
        }
    ],
    "isModule": false,
    "text": "return return return async try while { catch }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 46
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ Expression expected - start: 6, end: 13
✖ A return statement can only be used within a function_body - start: 6, end: 13
✖ Expression expected - start: 13, end: 20
✖ A return statement can only be used within a function_body - start: 13, end: 20

```
