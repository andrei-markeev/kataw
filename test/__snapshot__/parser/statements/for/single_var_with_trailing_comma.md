# Kataw parser test case

## Input

`````js
for (let {x,} = obj);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
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
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 10,
                                            "end": 11
                                        },
                                        "right": null,
                                        "flags": 32,
                                        "start": 10,
                                        "end": 11
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 32,
                                "start": 10,
                                "end": 12
                            },
                            "flags": 32,
                            "start": 8,
                            "end": 13
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 15,
                            "end": 19
                        },
                        "flags": 16,
                        "start": 8,
                        "end": 19
                    }
                ],
                "flags": 33554448,
                "start": 8,
                "end": 19
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 19,
                "end": 19
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 20,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "for (let {x,} = obj);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 19, end: 20
✖ Expression expected - start: 19, end: 20

```
