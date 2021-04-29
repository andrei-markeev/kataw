# Kataw parser test case

## Input

`````js
wrap({.9:a, 0x84:b, 0b1:c, 0o27:d, 1e234:e});
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "wrap",
                    "rawText": "wrap",
                    "flags": 96,
                    "start": 0,
                    "end": 4
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
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
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 10
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 0.9,
                                            "rawText": ".9",
                                            "flags": 32864,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "flags": 32,
                                        "start": 6,
                                        "end": 10
                                    },
                                    {
                                        "kind": 219,
                                        "asyncKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 132,
                                            "rawText": "0x84",
                                            "flags": 1048672,
                                            "start": 11,
                                            "end": 16
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 18
                                    },
                                    {
                                        "kind": 219,
                                        "asyncKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "start": 24,
                                            "end": 25
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1,
                                            "rawText": "0b1",
                                            "flags": 524384,
                                            "start": 19,
                                            "end": 23
                                        },
                                        "flags": 32,
                                        "start": 19,
                                        "end": 25
                                    },
                                    {
                                        "kind": 219,
                                        "asyncKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "start": 32,
                                            "end": 33
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 23,
                                            "rawText": "0o27",
                                            "flags": 262240,
                                            "start": 26,
                                            "end": 31
                                        },
                                        "flags": 32,
                                        "start": 26,
                                        "end": 33
                                    },
                                    {
                                        "kind": 219,
                                        "asyncKeyword": null,
                                        "getKeyword": null,
                                        "setKeyword": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 96,
                                            "start": 41,
                                            "end": 42
                                        },
                                        "right": {
                                            "kind": 201392130,
                                            "text": 1e+234,
                                            "rawText": "1e234",
                                            "flags": 96,
                                            "start": 34,
                                            "end": 40
                                        },
                                        "flags": 32,
                                        "start": 34,
                                        "end": 42
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 6,
                                "end": 42
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 43
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 5,
                    "end": 43
                },
                "flags": 32,
                "start": 0,
                "end": 44
            },
            "flags": 16,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "text": "wrap({.9:a, 0x84:b, 0b1:c, 0o27:d, 1e234:e});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
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
