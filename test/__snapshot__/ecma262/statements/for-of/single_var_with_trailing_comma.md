# Kataw parser test case

## Input

`````js
for (let {x,} of obj);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 8
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
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 10,
                                            "end": 11
                                        }
                                    ],
                                    "trailingComma": true,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 10,
                                    "end": 12
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 13
                            },
                            "type": null,
                            "initializer": null,
                            "flags": 16,
                            "transformFlags": 4224,
                            "start": 8,
                            "end": 13
                        }
                    ],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 13
                },
                "flags": 33554448,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "transformFlags": 0,
                "start": 13,
                "end": 16
            },
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "transformFlags": 0,
                "start": 16,
                "end": 20
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 21,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "for (let {x,} of obj);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
for (let { x } of obj);
```

### Diagnostics

```javascript
✔ No errors
```

