# Kataw parser test case

## Input

`````js
async (x, /x/g) => x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 96,
                "start": 0,
                "end": 5
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    },
                    {
                        "kind": 221,
                        "text": "/x/g",
                        "flags": 96,
                        "start": 9,
                        "end": 14
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "flags": 32,
            "start": 0,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 18,
                "end": 20
            },
            "flags": 16,
            "start": 18,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "async (x, /x/g) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Statement expected - start: 15, end: 18

```
