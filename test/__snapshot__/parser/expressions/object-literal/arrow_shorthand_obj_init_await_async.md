# Kataw parser test case

## Input

`````js
async ({await = x}) => x
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 0,
                "start": 19,
                "end": 22
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 205,
                                "left": {
                                    "kind": 134299649,
                                    "text": "await",
                                    "rawText": "await",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 13
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 15,
                                    "end": 17
                                },
                                "flags": 32,
                                "start": 8,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "multiline": false,
                        "flags": 0,
                        "start": 8,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 18
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 64,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 22,
                "end": 24
            },
            "flags": 288,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "async ({await = x}) => x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
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
