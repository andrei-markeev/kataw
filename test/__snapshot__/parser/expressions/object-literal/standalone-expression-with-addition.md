# Kataw parser test case

## Input

`````js
({["x" + "y"]: 10});
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
                                    "kind": 201392130,
                                    "text": 10,
                                    "rawText": "10",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 17
                                },
                                "right": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 3,
                                            "end": 6
                                        },
                                        "operatorToken": {
                                            "kind": 34098,
                                            "flags": 64,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "y",
                                            "rawText": "y",
                                            "flags": 96,
                                            "start": 8,
                                            "end": 12
                                        },
                                        "flags": 32,
                                        "start": 3,
                                        "end": 12
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 13
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 2,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 18
                },
                "flags": 32,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "({[\"x\" + \"y\"]: 10});",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
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
