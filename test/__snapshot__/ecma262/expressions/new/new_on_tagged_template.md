# Kataw parser test case

## Input

`````js
new Foo`bar`
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
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 226,
                    "member": {
                        "kind": 134299649,
                        "text": "Foo",
                        "rawText": "Foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 7
                    },
                    "template": {
                        "kind": 458761,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 134217824,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 12
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 12
                },
                "argumentList": null,
                "flags": 32,
                "transformFlags": 2048,
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
    "source": "new Foo`bar`",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
new Foo`bar`;
```

### Diagnostics

```javascript
✔ No errors
```

