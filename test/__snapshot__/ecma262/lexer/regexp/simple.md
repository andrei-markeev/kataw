# Kataw parser test case

## Input

`````js
/a/
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
                "kind": 371,
                "text": "/a/",
                "rawText": "/a/",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 3
        }
    ],
    "isModule": false,
    "source": "/a/",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 3
}
```

### Printed

```javascript
/a/;
```

### Diagnostics

```javascript
✔ No errors
```

