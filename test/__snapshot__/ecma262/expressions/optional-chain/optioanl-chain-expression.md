# Kataw parser test case

## Input

`````js
a.b?.c()
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
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 5
                },
                "member": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 3
                    },
                    "flags": 32,
                    "transformFlags": 2,
                    "start": 0,
                    "end": 3
                },
                "chain": {
                    "kind": 204,
                    "chain": {
                        "kind": 302,
                        "chain": {
                            "kind": 202,
                            "chain": null,
                            "expression": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 6
                            },
                            "flags": 32,
                            "transformFlags": 2,
                            "start": 5,
                            "end": 6
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 6
                    },
                    "typeArguments": null,
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 7
                    },
                    "flags": 32,
                    "transformFlags": 1,
                    "start": 6,
                    "end": 8
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "source": "a.b?.c()",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
a.b?.c();
```

### Diagnostics

```javascript
✔ No errors
```

