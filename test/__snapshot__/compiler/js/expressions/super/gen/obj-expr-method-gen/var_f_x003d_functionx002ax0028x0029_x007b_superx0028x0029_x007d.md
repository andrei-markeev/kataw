# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/super/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\super\gen\obj-expr-method-gen
> :: test: obj-expr-method-gen
> :: case: var f = function*() { super(); }
## Input

`````js
({ *method() { var f = function*() { super(); } } })
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "({ *method() { var f = function*() { super(); } } })",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 67224232,
                        "propertyList": {
                            "kind": 65722,
                            "properties": [
                                {
                                    "kind": 17303650,
                                    "name": {
                                        "kind": 196711,
                                        "text": "method",
                                        "rawText": "method",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 4,
                                        "end": 10
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 11,
                                        "end": 12
                                    },
                                    "isSetter": false,
                                    "isGetter": false,
                                    "contents": {
                                        "kind": 91,
                                        "functionStatementList": {
                                            "kind": 94,
                                            "statements": [
                                                {
                                                    "kind": 2097397,
                                                    "declarationList": {
                                                        "kind": 244,
                                                        "declarations": [
                                                            {
                                                                "kind": 243,
                                                                "binding": {
                                                                    "kind": 131102,
                                                                    "text": "f",
                                                                    "rawText": "f",
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 1025,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 18,
                                                                    "end": 20
                                                                },
                                                                "exclamation": false,
                                                                "type": null,
                                                                "initializer": {
                                                                    "kind": 8915041,
                                                                    "name": null,
                                                                    "formalParameters": {
                                                                        "kind": 90,
                                                                        "formalParameterList": [],
                                                                        "trailingComma": false,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 33,
                                                                        "end": 34
                                                                    },
                                                                    "contents": {
                                                                        "kind": 91,
                                                                        "functionStatementList": {
                                                                            "kind": 94,
                                                                            "statements": [
                                                                                {
                                                                                    "kind": 2097233,
                                                                                    "expression": {
                                                                                        "kind": 66091,
                                                                                        "expression": {
                                                                                            "kind": 4260561,
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "transformFlags": 0,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 36,
                                                                                            "end": 42
                                                                                        },
                                                                                        "typeArguments": null,
                                                                                        "argumentList": {
                                                                                            "kind": 3,
                                                                                            "elements": [],
                                                                                            "trailingComma": false,
                                                                                            "transformFlags": 0,
                                                                                            "flags": 0,
                                                                                            "intersects": false,
                                                                                            "parent": null,
                                                                                            "emitNode": null,
                                                                                            "start": 44,
                                                                                            "end": 44
                                                                                        },
                                                                                        "flags": 0,
                                                                                        "intersects": false,
                                                                                        "transformFlags": 65536,
                                                                                        "parent": null,
                                                                                        "emitNode": null,
                                                                                        "start": 42,
                                                                                        "end": 44
                                                                                    },
                                                                                    "flags": 0,
                                                                                    "intersects": false,
                                                                                    "transformFlags": 0,
                                                                                    "parent": null,
                                                                                    "emitNode": null,
                                                                                    "start": 36,
                                                                                    "end": 45
                                                                                }
                                                                            ],
                                                                            "multiline": false,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "parent": null,
                                                                            "emitNode": null,
                                                                            "start": 36,
                                                                            "end": 45
                                                                        },
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "parent": null,
                                                                        "emitNode": null,
                                                                        "start": 34,
                                                                        "end": 47
                                                                    },
                                                                    "typeParameters": null,
                                                                    "type": null,
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 128,
                                                                    "parent": null,
                                                                    "emitNode": null,
                                                                    "start": 22,
                                                                    "end": 47
                                                                },
                                                                "flags": 18,
                                                                "intersects": false,
                                                                "transformFlags": 0,
                                                                "parent": null,
                                                                "emitNode": null,
                                                                "start": 0,
                                                                "end": 47
                                                            }
                                                        ],
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 18,
                                                        "end": 47
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 14,
                                                    "end": 47
                                                }
                                            ],
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 14,
                                            "end": 47
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 12,
                                        "end": 49
                                    },
                                    "decorators": null,
                                    "type": null,
                                    "accessModifier": null,
                                    "typeParameters": null,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 10,
                                    "end": 49
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 2,
                            "end": 49
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 1,
                        "end": 51
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 52
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 52
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 52
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 52
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
