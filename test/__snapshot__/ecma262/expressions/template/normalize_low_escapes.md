# Kataw parser test case

## Input

`````js
tag`start \0137 \x18 \u{05} \0 finish`;
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
                "kind": 226,
                "member": {
                    "kind": 134299649,
                    "text": "tag",
                    "rawText": "tag",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "start \\0137 \\x18 \\u{05} \\0 finish",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 38
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "tag`start \\0137 \\x18 \\u{05} \\0 finish`;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript
tag`start \0137 \x18 \u{05} \0 finish`;
```

### Diagnostics

```javascript
✔ No errors
```

