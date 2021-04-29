# Kataw parser test case

## Input

`````js
x = {
    method(test) {

    }
};;
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
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "method",
                                    "rawText": "method",
                                    "flags": 96,
                                    "start": 5,
                                    "end": 16
                                },
                                "typeParameters": null,
                                "formalParameters": {
                                    "kind": 214,
                                    "formalParameterList": [
                                        {
                                            "kind": 215,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "test",
                                                "rawText": "test",
                                                "flags": 96,
                                                "start": 17,
                                                "end": 21
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 17,
                                            "end": 21
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 17,
                                    "end": 22
                                },
                                "type": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "multiline": true,
                                        "flags": 32,
                                        "start": 24,
                                        "end": 24
                                    },
                                    "flags": 32,
                                    "start": 22,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 16,
                                "end": 31
                            }
                        ],
                        "trailingComma": false,
                        "multiline": true,
                        "flags": 1,
                        "start": 5,
                        "end": 31
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 33
                },
                "flags": 32,
                "start": 0,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 34
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 34,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "x = {\n    method(test) {\n\n    }\n};;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
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
