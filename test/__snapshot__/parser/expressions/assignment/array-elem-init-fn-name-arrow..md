# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
result = [ arrow = () => {} ] = vals;
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
                    "text": "result",
                    "rawText": "result",
                    "flags": 96,
                    "start": 0,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 125,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "arrow",
                                        "rawText": "arrow",
                                        "flags": 96,
                                        "start": 10,
                                        "end": 16
                                    },
                                    "operatorToken": {
                                        "kind": 4125,
                                        "flags": 64,
                                        "start": 16,
                                        "end": 18
                                    },
                                    "right": {
                                        "kind": 271,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 0,
                                            "start": 21,
                                            "end": 24
                                        },
                                        "typeParameters": null,
                                        "parameters": [],
                                        "asyncToken": null,
                                        "returnType": null,
                                        "contents": {
                                            "kind": 216,
                                            "functionStatementList": {
                                                "kind": 217,
                                                "directives": [],
                                                "statements": [],
                                                "multiline": false,
                                                "flags": 32,
                                                "start": 26,
                                                "end": 26
                                            },
                                            "flags": 32,
                                            "start": 24,
                                            "end": 27
                                        },
                                        "flags": 32,
                                        "start": 18,
                                        "end": 27
                                    },
                                    "flags": 32,
                                    "start": 10,
                                    "end": 27
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 10,
                            "end": 27
                        },
                        "flags": 32,
                        "start": 8,
                        "end": 29
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 29,
                        "end": 31
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "vals",
                        "rawText": "vals",
                        "flags": 96,
                        "start": 31,
                        "end": 36
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 36
                },
                "flags": 32,
                "start": 0,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": true,
    "text": "result = [ arrow = () => {} ] = vals;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
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
