# Kataw parser test case

## Input

`````js
f(new /z/)
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
                    "kind": 134299649,
                    "text": "f",
                    "rawText": "f",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 210,
                            "newKeyword": {
                                "kind": 138477661,
                                "flags": 0,
                                "start": 2,
                                "end": 5
                            },
                            "expression": {
                                "kind": 221,
                                "text": "/z/",
                                "flags": 96,
                                "start": 5,
                                "end": 9
                            },
                            "argumentList": null,
                            "flags": 32,
                            "start": 2,
                            "end": 9
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "f(new /z/)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
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
