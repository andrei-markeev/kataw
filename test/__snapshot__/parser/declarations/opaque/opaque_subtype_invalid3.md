# Kataw parser test case

## Input

`````js
opaque stuff: Box<T> = Container<T>
`````


## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "opaque",
                "rawText": "opaque",
                "flags": 96,
                "start": 0,
                "end": 6
            },
            "flags": 16,
            "start": 0,
            "end": 6
        },
        {
            "kind": 163,
            "label": {
                "kind": 134299649,
                "text": "stuff",
                "rawText": "stuff",
                "flags": 96,
                "start": 6,
                "end": 12
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "Box",
                            "rawText": "Box",
                            "flags": 96,
                            "start": 13,
                            "end": 17
                        },
                        "operatorToken": {
                            "kind": 536971330,
                            "flags": 64,
                            "start": 17,
                            "end": 18
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 18,
                            "end": 19
                        },
                        "flags": 32,
                        "start": 13,
                        "end": 19
                    },
                    "operatorToken": {
                        "kind": 34883,
                        "flags": 64,
                        "start": 19,
                        "end": 20
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 20,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 13,
                    "end": 20
                },
                "flags": 16,
                "start": 13,
                "end": 20
            },
            "flags": 16,
            "start": 6,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "Container",
                        "rawText": "Container",
                        "flags": 96,
                        "start": 22,
                        "end": 32
                    },
                    "operatorToken": {
                        "kind": 536971330,
                        "flags": 64,
                        "start": 32,
                        "end": 33
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 33,
                        "end": 34
                    },
                    "flags": 32,
                    "start": 22,
                    "end": 34
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 64,
                    "start": 34,
                    "end": 35
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 35,
                    "end": 35
                },
                "flags": 32,
                "start": 22,
                "end": 35
            },
            "flags": 16,
            "start": 22,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "opaque stuff: Box<T> = Container<T>",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 20, end: 22
✖ Statement expected - start: 20, end: 22
✖ Expression expected - start: 35, end: 35

```
