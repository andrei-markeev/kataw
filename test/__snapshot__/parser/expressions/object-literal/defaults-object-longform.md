# Kataw parser test case

## Input

`````js
var { x: x = 10 } = x;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 8
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 8,
                                                "end": 10
                                            },
                                            "initializer": {
                                                "kind": 201392130,
                                                "text": 10,
                                                "rawText": "10",
                                                "flags": 96,
                                                "start": 12,
                                                "end": 15
                                            },
                                            "flags": 32,
                                            "start": 8,
                                            "end": 15
                                        },
                                        "flags": 32,
                                        "start": 5,
                                        "end": 15
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 32,
                                "start": 5,
                                "end": 15
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 17
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 19,
                            "end": 21
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 21
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "var { x: x = 10 } = x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
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
