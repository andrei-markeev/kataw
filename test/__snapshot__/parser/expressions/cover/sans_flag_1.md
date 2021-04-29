# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
_ => _
/foo/
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
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 0,
                    "start": 1,
                    "end": 4
                },
                "typeParameters": null,
                "parameters": {
                    "kind": 134299649,
                    "text": "_",
                    "rawText": "_",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "asyncToken": null,
                "returnType": null,
                "contents": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "_",
                            "rawText": "_",
                            "flags": 96,
                            "start": 4,
                            "end": 6
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 65,
                            "start": 6,
                            "end": 8
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 8,
                            "end": 11
                        },
                        "flags": 32,
                        "start": 4,
                        "end": 11
                    },
                    "operatorToken": {
                        "kind": 35640,
                        "flags": 64,
                        "start": 11,
                        "end": 12
                    },
                    "right": {
                        "kind": 16637,
                        "text": "",
                        "flags": 68,
                        "start": 12,
                        "end": 12
                    },
                    "flags": 32,
                    "start": 4,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": true,
    "text": "_ => _\n/foo/",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 12, end: 12

```
