# Kataw parser test case

## Input

`````js
{}++
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 1,
                "end": 1
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 2
        },
        {
            "kind": 120,
            "expression": {
                "kind": 128,
                "operandToken": {
                    "kind": 196635,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 4
                },
                "operand": {
                    "kind": 16637,
                    "text": "",
                    "rawText": "",
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 4
                },
                "flags": 32,
                "transformFlags": 16384,
                "start": 2,
                "end": 4
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2,
            "end": 4
        }
    ],
    "isModule": false,
    "source": "{}++",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 4
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 4, end: 4
✖ The operand of an increment or decrement operator must be a variable or a property access - start: 4, end: 4

```

