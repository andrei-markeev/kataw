# Kataw parser test case

## Input

`````js
let {a:=c} = z;
`````

## Options

### Parser Options

`````js
{}
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
                "transformFlags": 0,
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
                                        "kind": 329,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 6
                                        },
                                        "value": {
                                            "kind": 16637,
                                            "text": "",
                                            "rawText": "",
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 7,
                                            "end": 7
                                        },
                                        "initializer": {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 9
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 9
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 5,
                                "end": 9
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 10
                        },
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 14
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 14
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 14
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "let {a:=c} = z;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Object literal keys that are strings or numbers must be a method or have a colon - start: 7, end: 8

```

