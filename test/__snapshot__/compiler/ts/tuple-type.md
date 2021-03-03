# Kataw parser test case

## Input

`````js
type Foo = [string, string?]
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "type Foo = [string, string?]",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 4,
                    "end": 8
                },
                "type": {
                    "kind": 224,
                    "elementTypes": [
                        {
                            "kind": 4194510,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 12,
                            "end": 18
                        },
                        {
                            "kind": 173,
                            "valueType": {
                                "kind": 4194510,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 19,
                                "end": 26
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 26,
                            "end": 27
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 10,
                    "end": 28
                },
                "typeParameters": null,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 28
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 28
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
    "end": 28
}
```

### Printed


```javascript

type Foo = [string, string?];

```

### Diagnostics


```javascript
@{x2714}@ No errors
```
