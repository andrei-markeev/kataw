# Kataw parser test case

## Input

`````js
(a as number) = 42;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "(a as number) = 42;",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 66224,
                        "expression": {
                            "kind": 65546,
                            "expression": {
                                "kind": 196712,
                                "text": "a",
                                "rawText": "a",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 1,
                                "end": 2
                            },
                            "type": {
                                "kind": 161,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 5,
                                "end": 12
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 2,
                            "end": 12
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 0,
                        "end": 13
                    },
                    "operator": "=",
                    "right": {
                        "kind": 4261540,
                        "text": 42,
                        "rawText": "42",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 15,
                        "end": 18
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 0,
                    "end": 18
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 19
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 19
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
    "end": 19
}
```

### Printed


```javascript

(a as number) = 42

```

### Diagnostics


```javascript
@{x2714}@ No errors
```
