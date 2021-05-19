# Kataw parser test case

## Input

`````js
var a: number[][][]
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

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
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 136,
                                "type": {
                                    "kind": 136,
                                    "type": {
                                        "kind": 136,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 6,
                                            "end": 13
                                        },
                                        "flags": 0,
                                        "start": 14,
                                        "end": 15
                                    },
                                    "flags": 0,
                                    "start": 16,
                                    "end": 17
                                },
                                "flags": 0,
                                "start": 18,
                                "end": 19
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 19
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 19
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "var a: number[][][]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

var a;
```

### Diagnostics

```javascript
✔ No errors
```
