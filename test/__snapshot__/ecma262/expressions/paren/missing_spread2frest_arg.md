# Kataw parser test case

## Input

`````js
(...);
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
                "kind": 121,
                "expression": {
                    "kind": 281,
                    "ellipsisToken": {
                        "kind": 524302,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 4
                    },
                    "left": {
                        "kind": 16637,
                        "text": "",
                        "rawText": "",
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 4
                    },
                    "optionalToken": null,
                    "type": null,
                    "right": null,
                    "flags": 34,
                    "transformFlags": 4096,
                    "start": 1,
                    "end": 4
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "(...);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Binding identifier expected - start: 4, end: 5
✖ Expected '=>' - start: 5, end: 6

```

