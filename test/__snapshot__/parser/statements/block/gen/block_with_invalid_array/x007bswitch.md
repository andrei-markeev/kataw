# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: y
> :: test: block with invalid array
> :: case: {switch
## Input

`````js
{ [catch] {switch
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
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 3,
                                "end": 3
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 3
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 3
                    },
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
                                "start": 8,
                                "end": 8
                            },
                            "flags": 16,
                            "start": 8,
                            "end": 8
                        },
                        "catchClause": null,
                        "finallyKeyword": null,
                        "finallyBlock": {
                            "kind": 249,
                            "block": {
                                "kind": 124,
                                "statements": [
                                    {
                                        "kind": 160,
                                        "switchKeyword": {
                                            "kind": 37757024,
                                            "flags": 0,
                                            "start": 11,
                                            "end": 17
                                        },
                                        "expression": {
                                            "kind": 16637,
                                            "text": "",
                                            "flags": 68,
                                            "start": 17,
                                            "end": 17
                                        },
                                        "caseBlock": {
                                            "kind": 152,
                                            "clauses": [],
                                            "flags": 16,
                                            "start": 17,
                                            "end": 17
                                        },
                                        "flags": 16,
                                        "start": 11,
                                        "end": 17
                                    }
                                ],
                                "multiLine": false,
                                "flags": 16,
                                "start": 11,
                                "end": 17
                            },
                            "flags": 16,
                            "start": 9,
                            "end": 17
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 17
                    }
                ],
                "multiLine": false,
                "flags": 16,
                "start": 1,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "text": "{ [catch] {switch",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 17, end: 17

```
