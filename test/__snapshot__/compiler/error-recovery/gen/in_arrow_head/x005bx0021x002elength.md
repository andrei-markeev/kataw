# Auto-generated test cases ( Kataw )
<<<<<<< HEAD
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\gen\in_arrow_head
=======
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/gen/in_arrow_head
>>>>>>> chore: autogen & update snapshots
> :: test: in arrow head
> :: case: [!.length
## Input

`````js
([ [!.length ]) => {}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "([ [!.length ]) => {}",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 83976,
                "typeParameters": null,
                "arrowParameters": {
                    "kind": 81929,
                    "elements": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 33554437,
                                "elementList": {
                                    "kind": 29,
                                    "elements": [
                                        {
                                            "kind": 33554437,
                                            "elementList": {
                                                "kind": 29,
                                                "elements": [
                                                    {
                                                        "kind": 65774,
                                                        "operator": "!",
                                                        "operand": {
                                                            "kind": 67175096,
                                                            "member": {
                                                                "kind": 131322,
                                                                "text": "",
                                                                "flags": 3,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 5,
                                                                "end": 5
                                                            },
                                                            "expression": {
                                                                "kind": 196711,
                                                                "text": "length",
                                                                "rawText": "length",
                                                                "flags": 0,
                                                                "symbol": null,
                                                                "transformFlags": 0,
                                                                "start": 6,
                                                                "end": 12
                                                            },
                                                            "flags": 0,
                                                            "symbol": null,
                                                            "transformFlags": 0,
                                                            "start": 5,
                                                            "end": 12,
                                                            "period": {
                                                                "kind": 255,
                                                                "pos": 5,
                                                                "end": 6
                                                            }
                                                        },
                                                        "flags": 0,
                                                        "symbol": null,
                                                        "transformFlags": 0,
                                                        "start": 4,
                                                        "end": 12
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "multiline": false,
                                                "flags": 0,
                                                "symbol": null,
                                                "transformFlags": 0,
                                                "start": 4,
                                                "end": 12
                                            },
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 2,
                                            "end": 14
                                        }
                                    ],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 1,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 14
                                },
                                "flags": 1,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 1,
                                "end": 14
                            },
                            "isOptional": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 0,
                            "end": 15
                        }
                    ],
                    "type": null,
                    "accessModifier": null,
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 15
                },
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 20,
                        "end": 20
                    },
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 21
                },
                "flags": 1073741824,
                "symbol": null,
                "transformFlags": 0,
                "start": 0,
                "end": 21
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Identifier expected",
            "start": 5,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 14,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
