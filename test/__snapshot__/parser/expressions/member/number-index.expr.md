# Kataw parser test case

## Input

`````js
123..toString(10)
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
                "kind": 131,
                "expression": {
                    "kind": 129,
                    "member": {
                        "kind": 201392130,
                        "text": 123,
                        "rawText": "123.",
                        "flags": 96,
                        "start": 0,
                        "end": 4
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "toString",
                        "rawText": "toString",
                        "flags": 96,
                        "start": 5,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 13
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 201392130,
                            "text": 10,
                            "rawText": "10",
                            "flags": 96,
                            "start": 14,
                            "end": 16
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 14,
                    "end": 16
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "123..toString(10)",
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
✔ No errors
```
