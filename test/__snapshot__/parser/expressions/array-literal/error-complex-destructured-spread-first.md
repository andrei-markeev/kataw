# Kataw parser test case

## Input

`````js
[...c, { a, b }] = d;
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
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 0,
                                    "start": 1,
                                    "end": 4
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "c",
                                    "rawText": "c",
                                    "flags": 96,
                                    "start": 4,
                                    "end": 5
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 5
                            },
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 8,
                                            "end": 10
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 11,
                                            "end": 13
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 0,
                                    "start": 8,
                                    "end": 13
                                },
                                "flags": 32,
                                "start": 6,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 15
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 16
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 16,
                    "end": 18
                },
                "right": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 18,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "text": "[...c, { a, b }] = d;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 16, end: 18

```
