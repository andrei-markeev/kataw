# Auto-generated test cases ( Kataw )
- Regenerated: 2021-02-18
- From: kataw8\test\__snapshot__/compiler/js/expressions/arrow/position/autogen.md
- Path: kataw8\test\__snapshot__\compiler\js\expressions\arrow\position\gen\arr_tail
> :: test: arr tail
> :: case: async (x, y) => ok
## Input

`````js
[async (x, y) => ok].x
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "[async (x, y) => ok].x",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 74424,
                    "member": {
                        "kind": 67207686,
                        "elementList": {
                            "kind": 65605,
                            "elements": [
                                {
                                    "kind": 16,
                                    "arrowParameters": {
                                        "kind": 65545,
                                        "typeParameters": null,
                                        "elements": [
                                            {
                                                "kind": 89,
                                                "ellipsis": false,
                                                "binding": {
                                                    "kind": 4325406,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 10,
                                                    "end": 12
                                                },
                                                "isOptional": false,
                                                "type": null,
                                                "initializer": null,
                                                "decorators": null,
                                                "accessModifier": null,
                                                "isReadOnly": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 10,
                                                "end": 13
                                            },
                                            {
                                                "kind": 89,
                                                "ellipsis": false,
                                                "binding": {
                                                    "kind": 4325406,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "parent": null,
                                                    "emitNode": null,
                                                    "start": 8,
                                                    "end": 9
                                                },
                                                "isOptional": false,
                                                "type": null,
                                                "initializer": null,
                                                "decorators": null,
                                                "accessModifier": null,
                                                "isReadOnly": false,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 1,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 10,
                                                "end": 13
                                            }
                                        ],
                                        "type": null,
                                        "accessModifier": null,
                                        "trailingComma": false,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 9,
                                        "end": 13
                                    },
                                    "contents": {
                                        "kind": 196712,
                                        "text": "ok",
                                        "rawText": "ok",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 16,
                                        "end": 19
                                    },
                                    "flags": 536870912,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 1,
                                    "end": 19
                                }
                            ],
                            "trailingComma": false,
                            "multiline": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 1,
                            "end": 19
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 0,
                        "end": 20
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 21,
                        "end": 22
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 20,
                    "end": 22
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 22
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 22
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
    "end": 22
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
