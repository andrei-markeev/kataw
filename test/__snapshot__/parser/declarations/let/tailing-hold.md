# Kataw parser test case

## Input

`````js
let [a,,]=0
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
                            "kind": 201,
                            "elementList": {
                                "kind": 202,
                                "elements": [
                                    {
                                        "kind": 244,
                                        "ellipsisToken": null,
                                        "binding": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 5,
                                            "end": 6
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 5,
                                        "end": 6
                                    },
                                    {
                                        "kind": 230,
                                        "flags": 96,
                                        "start": 7,
                                        "end": 7
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 32,
                                "start": 5,
                                "end": 8
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 9
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 0,
                            "rawText": "0",
                            "flags": 96,
                            "start": 10,
                            "end": 11
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 11
                    }
                ],
                "flags": 33554448,
                "start": 3,
                "end": 11
            },
            "flags": 33554448,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "text": "let [a,,]=0",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```
