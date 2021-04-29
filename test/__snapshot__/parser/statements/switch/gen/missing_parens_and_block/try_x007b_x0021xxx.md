# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: k
> :: test: missing parens and block
> :: case: try { !xxx
## Input

`````js
switch case try { !xxx
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
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 6,
                "end": 6
            },
            "caseBlock": {
                "kind": 152,
                "clauses": [
                    {
                        "kind": 175,
                        "caseKeyword": {
                            "kind": 4194382,
                            "flags": 0,
                            "start": 6,
                            "end": 11
                        },
                        "expression": {
                            "kind": 16637,
                            "text": "",
                            "flags": 68,
                            "start": 11,
                            "end": 11
                        },
                        "statements": [
                            {
                                "kind": 159,
                                "tryKeyword": {
                                    "kind": 37757027,
                                    "flags": 0,
                                    "start": 11,
                                    "end": 15
                                },
                                "block": {
                                    "kind": 249,
                                    "block": {
                                        "kind": 124,
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 126,
                                                    "operandToken": {
                                                        "kind": 65584,
                                                        "flags": 64,
                                                        "start": 17,
                                                        "end": 19
                                                    },
                                                    "expression": {
                                                        "kind": 134299649,
                                                        "text": "xxx",
                                                        "rawText": "xxx",
                                                        "flags": 96,
                                                        "start": 19,
                                                        "end": 22
                                                    },
                                                    "flags": 32,
                                                    "start": 17,
                                                    "end": 22
                                                },
                                                "flags": 16,
                                                "start": 17,
                                                "end": 22
                                            }
                                        ],
                                        "multiLine": false,
                                        "flags": 16,
                                        "start": 17,
                                        "end": 22
                                    },
                                    "flags": 16,
                                    "start": 15,
                                    "end": 22
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
                                        "start": 22,
                                        "end": 22
                                    },
                                    "flags": 16,
                                    "start": 22,
                                    "end": 22
                                },
                                "flags": 16,
                                "start": 11,
                                "end": 22
                            }
                        ],
                        "flags": 16,
                        "start": 6,
                        "end": 22
                    }
                ],
                "flags": 16,
                "start": 6,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "switch case try { !xxx",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 6, end: 11
✖ Expression expected - start: 11, end: 15

```
