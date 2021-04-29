# Kataw parser test case

## Input

`````js
debugger /foo/
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 171,
            "debuggerKeyword": {
                "kind": 37757010,
                "flags": 0,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        },
        {
            "kind": 120,
            "expression": {
                "kind": 221,
                "text": "/foo/",
                "flags": 96,
                "start": 8,
                "end": 14
            },
            "flags": 16,
            "start": 8,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "debugger /foo/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
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
