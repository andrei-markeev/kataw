# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: if with unclosed block
> :: case: while try this and !foo
## Input

`````js
else {} if(x) { while try this and !foo
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 16,
                "start": 6,
                "end": 6
            },
            "flags": 16,
            "start": 4,
            "end": 7
        },
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 0,
                "start": 7,
                "end": 10
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 11,
                "end": 12
            },
            "consequent": {
                "kind": 249,
                "block": {
                    "kind": 124,
                    "statements": [
                        {
                            "kind": 154,
                            "whileKeyword": {
                                "kind": 37757028,
                                "flags": 0,
                                "start": 15,
                                "end": 21
                            },
                            "expression": {
                                "kind": 16637,
                                "text": "",
                                "flags": 68,
                                "start": 21,
                                "end": 21
                            },
                            "statement": {
                                "kind": 159,
                                "tryKeyword": {
                                    "kind": 37757027,
                                    "flags": 0,
                                    "start": 21,
                                    "end": 25
                                },
                                "block": {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [],
                                        "multiLine": false,
                                        "flags": 16,
                                        "start": 25,
                                        "end": 25
                                    },
                                    "flags": 16,
                                    "start": 25,
                                    "end": 25
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
                                        "start": 30,
                                        "end": 30
                                    },
                                    "flags": 16,
                                    "start": 30,
                                    "end": 30
                                },
                                "flags": 16,
                                "start": 21,
                                "end": 30
                            },
                            "flags": 16,
                            "start": 15,
                            "end": 30
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 134299649,
                                "text": "and",
                                "rawText": "and",
                                "flags": 96,
                                "start": 30,
                                "end": 34
                            },
                            "flags": 16,
                            "start": 30,
                            "end": 34
                        },
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 126,
                                "operandToken": {
                                    "kind": 65584,
                                    "flags": 64,
                                    "start": 34,
                                    "end": 36
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 36,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 34,
                                "end": 39
                            },
                            "flags": 16,
                            "start": 34,
                            "end": 39
                        }
                    ],
                    "multiLine": false,
                    "flags": 16,
                    "start": 15,
                    "end": 39
                },
                "flags": 16,
                "start": 13,
                "end": 39
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 16,
            "start": 7,
            "end": 39
        }
    ],
    "isModule": false,
    "text": "else {} if(x) { while try this and !foo",
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
✖ Statement expected - start: 0, end: 4
✖ Expression expected - start: 21, end: 25

```
