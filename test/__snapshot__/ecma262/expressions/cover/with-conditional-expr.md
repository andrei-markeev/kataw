# Kataw parser test case

## Input

`````js
(a?:b:c)
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
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 5
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 5
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "transformFlags": 0,
                "start": 6,
                "end": 7
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 6,
            "end": 7
        }
    ],
    "isModule": false,
    "source": "(a?:b:c)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 3, end: 4
✖ Expected a ')' to match the '(' token here - start: 5, end: 6
✖ ')' is not allowed here. Did you mean ';'? - start: 7, end: 8

```

