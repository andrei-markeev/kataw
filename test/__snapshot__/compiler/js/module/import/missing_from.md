# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import {a, b} fromx "c"
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "import {a, b} fromx \"c\"",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 110,
                "fromClause": {
                    "kind": 196712,
                    "text": "fromx",
                    "rawText": "fromx",
                    "flags": 65538,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 13,
                    "end": 19
                },
                "moduleSpecifier": null,
                "importClause": {
                    "kind": 109,
                    "nameSpaceImport": null,
                    "namedImports": {
                        "kind": 153,
                        "importsList": {
                            "kind": 115,
                            "specifiers": [
                                {
                                    "kind": 113,
                                    "moduleExportName": null,
                                    "name": {
                                        "kind": 4325406,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 8,
                                        "end": 9
                                    },
                                    "binding": {
                                        "kind": 4325406,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 8,
                                        "end": 9
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 8,
                                    "end": 9
                                },
                                {
                                    "kind": 113,
                                    "moduleExportName": null,
                                    "name": {
                                        "kind": 4325406,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "binding": {
                                        "kind": 4325406,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 10,
                                    "end": 12
                                }
                            ],
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 8,
                            "end": 12
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 6,
                        "end": 13
                    },
                    "isTypeOnly": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 6,
                    "end": 13
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 19
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 67279,
                    "text": "c",
                    "rawText": "c",
                    "flags": 65538,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 19,
                    "end": 23
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 19,
                "end": 23
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 23
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "'from' expected.",
            "start": 14,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 20,
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
    "end": 23
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```
