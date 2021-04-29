# Kataw parser test case

## Input

`````js
({ __proto__: null, __proto__ })
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asyncKeyword": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "left": {
                                    "kind": 269,
                                    "text": null,
                                    "flags": 96,
                                    "start": 13,
                                    "end": 18
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "__proto__",
                                    "rawText": "__proto__",
                                    "flags": 96,
                                    "start": 2,
                                    "end": 12
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 18
                            },
                            {
                                "kind": 134299649,
                                "text": "__proto__",
                                "rawText": "__proto__",
                                "flags": 96,
                                "start": 19,
                                "end": 29
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 29
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 31
                },
                "flags": 32,
                "start": 0,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "text": "({ __proto__: null, __proto__ })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
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
