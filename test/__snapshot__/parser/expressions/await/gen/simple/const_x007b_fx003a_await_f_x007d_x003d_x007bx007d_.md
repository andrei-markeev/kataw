# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: simple
> :: case: const { f: await f } = {};
## Input

`````js
const { f: await f } = {};
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "start": 7,
                                            "end": 10
                                        },
                                        "value": {
                                            "kind": 203,
                                            "ellipsisToken": null,
                                            "binding": {
                                                "kind": 134299649,
                                                "text": "await",
                                                "rawText": "await",
                                                "flags": 96,
                                                "start": 10,
                                                "end": 16
                                            },
                                            "initializer": null,
                                            "flags": 32,
                                            "start": 10,
                                            "end": 16
                                        },
                                        "flags": 32,
                                        "start": 7,
                                        "end": 16
                                    },
                                    {
                                        "kind": 222,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "f",
                                            "rawText": "f",
                                            "flags": 96,
                                            "start": 16,
                                            "end": 18
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 16,
                                        "end": 18
                                    }
                                ],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 32,
                                "start": 7,
                                "end": 18
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 20
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 0,
                                "start": 24,
                                "end": 24
                            },
                            "flags": 32,
                            "start": 22,
                            "end": 25
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 25
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 25
            },
            "flags": 33554448,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "const { f: await f } = {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ ',' expected - start: 16, end: 18

```
