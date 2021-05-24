# Kataw parser test case

## Input

`````js
var a : { (): number }
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
                                "kind": 134234353,
                                "properties": [],
                                "indexers": [],
                                "callProperties": [
                                    {
                                        "kind": 196,
                                        "typeParameter": null,
                                        "value": {
                                            "kind": 208,
                                            "functionTypeParameterList": [],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "start": 11,
                                            "end": 11
                                        },
                                        "staticToken": null,
                                        "returnType": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 13,
                                            "end": 20
                                        },
                                        "flags": 0,
                                        "start": 9,
                                        "end": 20
                                    }
                                ],
                                "internalSlots": [],
                                "flags": 0,
                                "start": 7,
                                "end": 22
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 22
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 22
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "var a : { (): number }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
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
