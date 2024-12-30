# Kataw parser test case

## Input

`````js
`\u{10FFFFF}`
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
                "kind": 458761,
                "text": "u{10FFFFF}",
                "rawText": "\\u{10FFFFF}",
                "flags": 134217824,
                "transformFlags": 0,
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
    "source": "`\\u{10FFFFF}`",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Unicode codepoint must not be greater than 0x10FFFF - start: 1, end: 10

```

