# Auto-generated test cases ( Kataw )
<<<<<<< HEAD
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_block_in_variable_stmt
=======
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_block_in_variable_stmt
>>>>>>> chore: autogen & update snapshots
> :: test: in block in variable stmt
> :: case:  Partial<T> = {};
## Input

`````js
{ var x!: }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "{ var x!: }",
    "filename": "",
    "statements": [
        {
            "kind": 2099237,
            "block": {
                "kind": 2084,
                "statements": [
                    {
                        "kind": 2097397,
                        "declarationList": {
                            "kind": 244,
                            "declarations": [
                                {
                                    "kind": 16627,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 5,
                                        "end": 7
                                    },
                                    "exclamation": true,
                                    "type": {
                                        "kind": 134226156,
                                        "typeName": {
                                            "kind": 196712,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 1,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 9,
                                            "end": 9
                                        },
                                        "typeArguments": null,
                                        "flags": 1,
                                        "symbol": null,
                                        "transformFlags": 2097152,
                                        "start": 9,
                                        "end": 11
                                    },
                                    "initializer": null,
                                    "flags": 5,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 9
                                }
                            ],
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 9
                        },
                        "flags": 1,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 9
                    }
                ],
                "multiline": false,
                "flags": 1,
                "symbol": null,
                "transformFlags": 0,
                "start": 1,
                "end": 9
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Type expected",
            "start": 10,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
