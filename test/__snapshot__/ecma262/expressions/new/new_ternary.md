# Kataw parser test case

## Input

`````js
new a ? b : c
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 3
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 5
                    },
                    "argumentList": null,
                    "flags": 32,
                    "transformFlags": 2048,
                    "start": 0,
                    "end": 5
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 7
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "b",
                    "rawText": "b",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 9
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 11
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 13
                },
                "flags": 32,
                "transformFlags": 4096,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "new a ? b : c",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
new a ? b : c;
```

### Diagnostics

```javascript
✔ No errors
```

