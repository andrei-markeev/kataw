# Kataw parser test case

## Input

`````js
const fn = async (a?: any): Promise<void> => {};
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
                "flags": 80,
                "transformFlags": 0,
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
                            "text": "fn",
                            "rawText": "fn",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 8
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": {
                                "kind": 82031,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 10,
                                "end": 16
                            },
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 19
                                        },
                                        "optionalToken": {
                                            "kind": 134217750,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 20
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234252,
                                                "flags": 2097216,
                                                "transformFlags": 0,
                                                "start": 21,
                                                "end": 25
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 25
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 18,
                                        "end": 25
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 41
                            },
                            "returnType": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "Promise",
                                        "rawText": "Promise",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 27,
                                        "end": 35
                                    },
                                    "typeParameters": {
                                        "kind": 310,
                                        "types": [
                                            {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 138477615,
                                                    "flags": 2097216,
                                                    "transformFlags": 0,
                                                    "start": 36,
                                                    "end": 40
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 36,
                                                "end": 40
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 2097152,
                                        "transformFlags": 512,
                                        "start": 36,
                                        "end": 40
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 27,
                                    "end": 41
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 27,
                                "end": 41
                            },
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 44
                            },
                            "contents": {
                                "kind": 216,
                                "functionStatementList": {
                                    "kind": 217,
                                    "directives": [],
                                    "statements": [],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 46,
                                    "end": 46
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 44,
                                "end": 47
                            },
                            "flags": 288,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 47
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 47
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 47
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "const fn = async (a?: any): Promise<void> => {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
const fn = async (a? : any) => {};
```

### Diagnostics

```javascript
✔ No errors
```

