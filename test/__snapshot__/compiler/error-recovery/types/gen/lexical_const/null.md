# Auto-generated test cases ( Kataw )
<<<<<<< HEAD
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\lexical_const
=======
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/lexical_const
>>>>>>> chore: autogen & update snapshots
> :: test: lexical const
> :: case: null
## Input

`````js
const x: null= {x:null}:null
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "const x: null= {x:null}:null",
    "filename": "",
    "statements": [
        {
            "kind": 142,
            "isConst": true,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
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
                        "exclamation": false,
                        "type": {
                            "kind": 4202655,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 8,
                            "end": 13
                        },
                        "initializer": {
                            "kind": 98984,
                            "propertyList": {
                                "kind": 65722,
                                "properties": [
                                    {
                                        "kind": 65721,
                                        "left": {
                                            "kind": 196711,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "right": {
                                            "kind": 4260512,
                                            "text": null,
                                            "flags": 0,
                                            "symbol": null,
                                            "transformFlags": 0,
                                            "start": 18,
                                            "end": 22
                                        },
                                        "accessModifier": null,
                                        "decorators": null,
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 0,
                                        "start": 16,
                                        "end": 22
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 22
                            },
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 23
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 23
                    }
                ],
                "flags": 9,
                "symbol": null,
                "transformFlags": 0,
                "start": 5,
                "end": 23
            },
            "flags": 9,
            "symbol": null,
            "transformFlags": 769,
            "start": 0,
            "end": 23
        },
        {
            "kind": 2097233,
            "expression": {
                "kind": 4260512,
                "text": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 24,
                "end": 28
            },
            "flags": 0,
            "symbol": null,
            "transformFlags": 0,
            "start": 24,
            "end": 28
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "',' expected.",
            "start": 23,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```
