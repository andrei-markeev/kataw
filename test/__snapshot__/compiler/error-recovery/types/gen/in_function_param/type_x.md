# Auto-generated test cases ( Kataw )
<<<<<<< HEAD
- Regenerated: 2021-03-15
- From: kataw15/test\__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw15/test\__snapshot__\compiler\error-recovery\types\gen\in_function_param
=======
- Regenerated: 2021-03-14
- From: kataw/test/__snapshot__/compiler/error-recovery/types/autogen.md
- Path: kataw/test/__snapshot__/compiler/error-recovery/types/gen/in_function_param
>>>>>>> chore: autogen & update snapshots
> :: test: in function param
> :: case: type x
## Input

`````js
function ( type x ) ;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "function ( type x ) ;",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "",
                "rawText": "",
                "flags": 1,
                "symbol": null,
                "transformFlags": 1025,
                "start": 8,
                "end": 8
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "type",
                            "rawText": "type",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 10,
                            "end": 15
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
                        "start": 10,
                        "end": 15
                    },
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 1,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 15,
                            "end": 17
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
                        "start": 15,
                        "end": 17
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 10,
                "end": 19
            },
            "type": null,
            "contents": null,
            "typeParameters": null,
            "flags": 0,
            "symbol": null,
            "transformFlags": 2097152,
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
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "Expression or comma expected.",
            "start": 16,
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
