# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/statements/if/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\statements\if\gen\if_triple
> :: test: if triple
> :: case: catch { try
## Input

`````js
if if if catch { try
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "if if if catch { try",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097257,
                "expression": {
                    "kind": 131322,
                    "text": "",
                    "flags": 6,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 2,
                    "end": 2
                },
                "consequent": {
                    "kind": 2097257,
                    "expression": {
                        "kind": 131322,
                        "text": "",
                        "flags": 6,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 5,
                        "end": 5
                    },
                    "consequent": {
                        "kind": 2097257,
                        "expression": {
                            "kind": 131322,
                            "text": "",
                            "flags": 6,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 8,
                            "end": 8
                        },
                        "consequent": {
                            "kind": 2097375,
                            "block": {
                                "kind": 2099237,
                                "block": {
                                    "kind": 2084,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 8,
                                    "end": 8
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 8,
                                "end": 8
                            },
                            "catchClause": {
                                "kind": 2095,
                                "catchParameter": null,
                                "block": {
                                    "kind": 2099237,
                                    "block": {
                                        "kind": 2084,
                                        "statements": [
                                            {
                                                "kind": 2097375,
                                                "block": {
                                                    "kind": 2099237,
                                                    "block": {
                                                        "kind": 2084,
                                                        "statements": [],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 20,
                                                        "end": 20
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 20,
                                                    "end": 20
                                                },
                                                "catchClause": null,
                                                "finallyBlock": {
                                                    "kind": 2099237,
                                                    "block": {
                                                        "kind": 2084,
                                                        "statements": [],
                                                        "multiline": false,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "parent": null,
                                                        "emitNode": null,
                                                        "start": 20,
                                                        "end": 20
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 20,
                                                    "end": 20
                                                },
                                                "flags": 2,
                                                "intersects": false,
                                                "transformFlags": 0,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 16,
                                                "end": 20
                                            }
                                        ],
                                        "multiline": false,
                                        "flags": 2,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 16,
                                        "end": 20
                                    },
                                    "flags": 2,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 14,
                                    "end": 20
                                },
                                "flags": 2,
                                "intersects": false,
                                "transformFlags": 16,
                                "parent": null,
                                "emitNode": null,
                                "start": 8,
                                "end": 20
                            },
                            "finallyBlock": null,
                            "flags": 2,
                            "intersects": false,
                            "transformFlags": 16,
                            "parent": null,
                            "emitNode": null,
                            "start": 8,
                            "end": 20
                        },
                        "alternate": null,
                        "isWebCompat": true,
                        "flags": 2,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 5,
                        "end": 20
                    },
                    "alternate": null,
                    "isWebCompat": true,
                    "flags": 2,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 2,
                    "end": 20
                },
                "alternate": null,
                "isWebCompat": true,
                "flags": 2,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 20
            }
        ],
        "transformFlags": 0,
        "flags": 2,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 20
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 3,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 6,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'(' expected.",
            "start": 9,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 17,
            "length": 0
        }
    ],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
