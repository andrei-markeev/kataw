# Kataw parser test case

## Input

`````js
function foo(callback: (_1:bool, ...foo:Array<number>) => number){}
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
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 8
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 8,
                "end": 12
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "callback",
                            "rawText": "callback",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 288,
                                "typeParameters": null,
                                "arrowTypeParameterList": {
                                    "kind": 292,
                                    "parameters": [
                                        {
                                            "kind": 284,
                                            "ellipsisToken": null,
                                            "name": {
                                                "kind": 134299649,
                                                "text": "_1",
                                                "rawText": "_1",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 24,
                                                "end": 26
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "bool",
                                                        "rawText": "bool",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 27,
                                                        "end": 31
                                                    },
                                                    "typeParameters": null,
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 27,
                                                    "end": 31
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 27,
                                                "end": 31
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 31
                                        },
                                        {
                                            "kind": 149,
                                            "ellipsisToken": {
                                                "kind": 524302,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 32,
                                                "end": 36
                                            },
                                            "name": {
                                                "kind": 134299649,
                                                "text": "foo",
                                                "rawText": "foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 36,
                                                "end": 39
                                            },
                                            "optionalToken": null,
                                            "types": {
                                                "kind": 139,
                                                "bitwiseOrToken": null,
                                                "bitwiseAndToken": null,
                                                "type": {
                                                    "kind": 144,
                                                    "typeName": {
                                                        "kind": 134299649,
                                                        "text": "Array",
                                                        "rawText": "Array",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 40,
                                                        "end": 45
                                                    },
                                                    "typeParameters": {
                                                        "kind": 310,
                                                        "types": [
                                                            {
                                                                "kind": 139,
                                                                "bitwiseOrToken": null,
                                                                "bitwiseAndToken": null,
                                                                "type": {
                                                                    "kind": 134234345,
                                                                    "flags": 2097216,
                                                                    "transformFlags": 0,
                                                                    "start": 46,
                                                                    "end": 52
                                                                },
                                                                "flags": 2097152,
                                                                "transformFlags": 0,
                                                                "start": 46,
                                                                "end": 52
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 2097152,
                                                        "transformFlags": 512,
                                                        "start": 46,
                                                        "end": 52
                                                    },
                                                    "flags": 2097152,
                                                    "transformFlags": 0,
                                                    "start": 40,
                                                    "end": 53
                                                },
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 40,
                                                "end": 53
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 53
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 53
                                },
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 54,
                                    "end": 57
                                },
                                "returnType": {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 57,
                                        "end": 64
                                    },
                                    "flags": 2097152,
                                    "transformFlags": 0,
                                    "start": 57,
                                    "end": 64
                                },
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 22,
                                "end": 64
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 64
                        },
                        "right": null,
                        "flags": 32,
                        "transformFlags": 4096,
                        "start": 13,
                        "end": 64
                    }
                ],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 64
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 66,
                    "end": 66
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 65,
                "end": 67
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 67
        }
    ],
    "isModule": false,
    "source": "function foo(callback: (_1:bool, ...foo:Array<number>) => number){}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 67
}
```

### Printed

```javascript
function foo(callback: (_1: bool, ...foo: Array<number>) => number) {}
```

### Diagnostics

```javascript
✔ No errors
```

