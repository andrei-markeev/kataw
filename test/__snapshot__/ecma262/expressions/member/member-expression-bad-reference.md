# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
something.#x
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
                "kind": 129,
                "member": {
                    "kind": 134299649,
                    "text": "something",
                    "rawText": "something",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 9
                },
                "expression": {
                    "kind": 67191035,
                    "text": "#x",
                    "rawText": "#x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 12
                },
                "flags": 32,
                "transformFlags": 2,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "something.#x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Private identifiers are not allowed outside class bodies - start: 10, end: 12

```

