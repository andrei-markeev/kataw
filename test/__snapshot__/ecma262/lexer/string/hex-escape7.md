# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
"\x5q"
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
                "kind": 201392131,
                "text": "q",
                "rawText": "\"\\x5q\"",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "\"\\x5q\"",
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
✖ Invalid hexadecimal escape sequence - start: 1, end: 4

```

