# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
export as namespace A;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export as namespace A;",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 76,
                "declaration": null,
                "namedExports": null,
                "exportFromClause": null,
                "fromClause": null,
                "isTypeOnly": false,
                "flags": 65538,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 6
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "as",
                    "rawText": "as",
                    "flags": 65538,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 6,
                    "end": 9
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 6,
                "end": 9
            },
            {
                "kind": 2097405,
                "name": {
                    "kind": 196712,
                    "text": "A",
                    "rawText": "A",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 19,
                    "end": 21
                },
                "body": {
                    "kind": 2097404,
                    "statements": [],
                    "multiline": false,
                    "flags": 65538,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 21,
                    "end": 21
                },
                "flags": 65538,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 9,
                "end": 21
            },
            {
                "kind": 6291526,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "parent": null,
                "emitNode": null,
                "start": 21,
                "end": 22
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 22
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "Unexpected token.",
            "start": 7,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 10,
            "length": 0
        },
        {
            "kind": 2,
            "source": 2,
            "message": "'{' expected.",
            "start": 21,
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
    "end": 22
}
```

### Printed


```javascript

export ;

as

namespace A {};

;

```

### Diagnostics


```javascript
@{x2716}@ Unexpected token. - start: 8, end: 0

```
