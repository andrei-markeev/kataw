# Kataw parser test case

## Input

`````js
a?.b
/c/
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
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 205,
                        "chainToken": {
                            "kind": 393240,
                            "flags": 0,
                            "start": 1,
                            "end": 3
                        },
                        "member": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "start": 0,
                            "end": 1
                        },
                        "chain": {
                            "kind": 206,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 3,
                                    "end": 4
                                },
                                "flags": 32,
                                "start": 3,
                                "end": 4
                            },
                            "flags": 32,
                            "start": 3,
                            "end": 4
                        },
                        "flags": 32,
                        "start": 0,
                        "end": 4
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 65,
                        "start": 4,
                        "end": 6
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "start": 6,
                        "end": 7
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 35640,
                    "flags": 64,
                    "start": 7,
                    "end": 8
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 8,
                    "end": 8
                },
                "flags": 32,
                "start": 0,
                "end": 8
            },
            "flags": 16,
            "start": 0,
            "end": 8
        }
    ],
    "isModule": false,
    "text": "a?.b\n/c/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 8
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 8, end: 8

```
