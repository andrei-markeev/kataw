# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-21
- From: d
- Path: e
> :: test: case
> :: case: let {...obj1,} = foo
## Input

`````js
let {...obj1,} = foo
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
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
                                        "kind": 222,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 5,
                                            "end": 8
                                        },
                                        "left": {
                                            "kind": 134299649,
                                            "text": "obj1",
                                            "rawText": "obj1",
                                            "flags": 96,
                                            "start": 8,
                                            "end": 12
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 5,
                                        "end": 12
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 32,
                                "start": 5,
                                "end": 13
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 14
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 16,
                            "end": 20
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 20
                    }
                ],
                "flags": 33554448,
                "start": 3,
                "end": 20
            },
            "flags": 33554448,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "let {...obj1,} = foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Trailing comma not allowed after rest element - start: 13, end: 14

```
