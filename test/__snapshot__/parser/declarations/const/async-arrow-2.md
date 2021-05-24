# Kataw parser test case

## Input

`````js
const f = async <T, R, S>(
  x: T,
  y: R,
  z: S,
) => {
  return null;
};
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 5,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 52,
                                "end": 55
                            },
                            "typeParameters": {
                                "kind": 265,
                                "typeParameters": [
                                    {
                                        "kind": 146,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "T",
                                            "rawText": "T",
                                            "flags": 96,
                                            "start": 17,
                                            "end": 18
                                        },
                                        "type": null,
                                        "defaultType": null,
                                        "flags": 0,
                                        "start": 17,
                                        "end": 18
                                    },
                                    {
                                        "kind": 146,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "R",
                                            "rawText": "R",
                                            "flags": 96,
                                            "start": 19,
                                            "end": 21
                                        },
                                        "type": null,
                                        "defaultType": null,
                                        "flags": 0,
                                        "start": 19,
                                        "end": 21
                                    },
                                    {
                                        "kind": 146,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "S",
                                            "rawText": "S",
                                            "flags": 96,
                                            "start": 22,
                                            "end": 24
                                        },
                                        "type": null,
                                        "defaultType": null,
                                        "flags": 0,
                                        "start": 22,
                                        "end": 24
                                    }
                                ],
                                "flags": 0,
                                "start": 15,
                                "end": 25
                            },
                            "parameters": [
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 26,
                                        "end": 30
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "T",
                                                "rawText": "T",
                                                "flags": 96,
                                                "start": 31,
                                                "end": 33
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 31,
                                            "end": 33
                                        },
                                        "flags": 0,
                                        "start": 30,
                                        "end": 33
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 26,
                                    "end": 33
                                },
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "start": 34,
                                        "end": 38
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "R",
                                                "rawText": "R",
                                                "flags": 96,
                                                "start": 39,
                                                "end": 41
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 39,
                                            "end": 41
                                        },
                                        "flags": 0,
                                        "start": 38,
                                        "end": 41
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 34,
                                    "end": 41
                                },
                                {
                                    "kind": 215,
                                    "ellipsisToken": null,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "z",
                                        "rawText": "z",
                                        "flags": 96,
                                        "start": 42,
                                        "end": 46
                                    },
                                    "optionalToken": null,
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 144,
                                            "id": {
                                                "kind": 134299649,
                                                "text": "S",
                                                "rawText": "S",
                                                "flags": 96,
                                                "start": 47,
                                                "end": 49
                                            },
                                            "typeParameters": null,
                                            "flags": 0,
                                            "start": 47,
                                            "end": 49
                                        },
                                        "flags": 0,
                                        "start": 46,
                                        "end": 49
                                    },
                                    "initializer": null,
                                    "flags": 32,
                                    "start": 42,
                                    "end": 49
                                }
                            ],
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "start": 9,
                                "end": 15
                            },
                            "returnType": null,
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [
                                        {
                                            "kind": 161,
                                            "returnKeyword": {
                                                "kind": 37757022,
                                                "flags": 1,
                                                "start": 57,
                                                "end": 66
                                            },
                                            "expression": {
                                                "kind": 269,
                                                "text": null,
                                                "flags": 96,
                                                "start": 66,
                                                "end": 71
                                            },
                                            "flags": 16,
                                            "start": 1,
                                            "end": 57
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 57,
                                    "end": 72
                                },
                                "flags": 32,
                                "start": 55,
                                "end": 74
                            },
                            "flags": 288,
                            "start": 9,
                            "end": 74
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 74
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 74
            },
            "flags": 33554448,
            "start": 0,
            "end": 75
        }
    ],
    "isModule": false,
    "source": "const f = async <T, R, S>(\n  x: T,\n  y: R,\n  z: S,\n) => {\n  return null;\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript

const f = async (x, y, z) =>  {
  return  null;
};
```

### Diagnostics

```javascript
✔ No errors
```
