# Kataw parser test case

## Input

`````js
a ? b ** x : c ? d : e
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 0,
                    "start": 1,
                    "end": 3
                },
                "consequent": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 3,
                        "end": 5
                    },
                    "operatorToken": {
                        "kind": 35897,
                        "flags": 64,
                        "start": 5,
                        "end": 8
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 8,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 10
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 0,
                    "start": 10,
                    "end": 12
                },
                "alternate": {
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 12,
                        "end": 14
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 0,
                        "start": 14,
                        "end": 16
                    },
                    "consequent": {
                        "kind": 134299649,
                        "text": "d",
                        "rawText": "d",
                        "flags": 96,
                        "start": 16,
                        "end": 18
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 0,
                        "start": 18,
                        "end": 20
                    },
                    "alternate": {
                        "kind": 134299649,
                        "text": "e",
                        "rawText": "e",
                        "flags": 96,
                        "start": 20,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 12,
                    "end": 22
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "a ? b ** x : c ? d : e",
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
✔ No errors
```
