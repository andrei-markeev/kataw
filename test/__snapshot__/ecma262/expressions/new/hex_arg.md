# Kataw parser test case

## Input

`````js
new 0x2.__proto__.constructor
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
                    "kind": 129,
                    "member": {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 3
                        },
                        "expression": {
                            "kind": 201392130,
                            "text": 2,
                            "rawText": "0x2",
                            "flags": 1048672,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 7
                        },
                        "argumentList": null,
                        "flags": 32,
                        "transformFlags": 2048,
                        "start": 0,
                        "end": 7
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "__proto__",
                        "rawText": "__proto__",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 17
                    },
                    "flags": 32,
                    "transformFlags": 2,
                    "start": 0,
                    "end": 17
                },
                "expression": {
                    "kind": 134299649,
                    "text": "constructor",
                    "rawText": "constructor",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 29
                },
                "flags": 32,
                "transformFlags": 2,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "new 0x2.__proto__.constructor",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
new 0x2.__proto__.constructor;
```

### Diagnostics

```javascript
✔ No errors
```

