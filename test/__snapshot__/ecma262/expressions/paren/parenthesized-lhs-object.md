# Kataw parser test case

## Input

`````js
({a}) = 2;
`````

## Output

### CST

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
                    "kind": 121,
                    "expression": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 3
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 3
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 1,
                        "end": 4
                    },
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 7
                },
                "right": {
                    "kind": 201392130,
                    "text": 2,
                    "rawText": "2",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 9
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "({a}) = 2;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 5, end: 7

```

