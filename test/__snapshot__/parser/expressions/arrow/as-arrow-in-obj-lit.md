# Kataw parser test case

## Input

`````js
x = {arrow: (x) => ok};

x = {arrow: (x, y) => ok};
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
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
                                    "kind": 271,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 0,
                                        "start": 15,
                                        "end": 18
                                    },
                                    "typeParameters": null,
                                    "parameters": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 14
                                        }
                                    ],
                                    "asyncToken": null,
                                    "returnType": null,
                                    "contents": {
                                        "kind": 134299649,
                                        "text": "ok",
                                        "rawText": "ok",
                                        "flags": 96,
                                        "start": 18,
                                        "end": 21
                                    },
                                    "flags": 32,
                                    "start": 11,
                                    "end": 21
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "arrow",
                                    "rawText": "arrow",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 10
                                },
                                "flags": 32,
                                "start": 5,
                                "end": 21
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 5,
                        "end": 21
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 22
                },
                "flags": 32,
                "start": 0,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 23,
                    "end": 26
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 26,
                    "end": 28
                },
                "right": {
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
                                    "kind": 271,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 0,
                                        "start": 43,
                                        "end": 46
                                    },
                                    "typeParameters": null,
                                    "parameters": [
                                        [
                                            {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 38,
                                                "end": 39
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "y",
                                                "rawText": "y",
                                                "flags": 96,
                                                "start": 40,
                                                "end": 42
                                            }
                                        ]
                                    ],
                                    "asyncToken": null,
                                    "returnType": null,
                                    "contents": {
                                        "kind": 134299649,
                                        "text": "ok",
                                        "rawText": "ok",
                                        "flags": 96,
                                        "start": 46,
                                        "end": 49
                                    },
                                    "flags": 32,
                                    "start": 36,
                                    "end": 49
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "arrow",
                                    "rawText": "arrow",
                                    "flags": 96,
                                    "start": 30,
                                    "end": 35
                                },
                                "flags": 32,
                                "start": 30,
                                "end": 49
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 30,
                        "end": 49
                    },
                    "flags": 32,
                    "start": 28,
                    "end": 50
                },
                "flags": 32,
                "start": 23,
                "end": 50
            },
            "flags": 16,
            "start": 23,
            "end": 51
        }
    ],
    "isModule": false,
    "text": "x = {arrow: (x) => ok};\n\nx = {arrow: (x, y) => ok};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
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
