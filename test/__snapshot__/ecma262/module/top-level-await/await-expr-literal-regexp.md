# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
await /1/;
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
                "kind": 208,
                "awaitKeyword": {
                    "kind": 82196,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 5
                },
                "expression": {
                    "kind": 371,
                    "text": "/1/",
                    "rawText": "/1/",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 9
                },
                "flags": 32,
                "transformFlags": 4096,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": true,
    "source": "await /1/;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
await /1/;
```

### Diagnostics

```javascript
✔ No errors
```

