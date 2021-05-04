# Kataw parser test case

## Input

`````js
let x = '\00';

let x = '\\09';

let x = '\\009';

'use strict'; let x = '\\0';
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
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "\u00000",
                            "rawText": "'\\00'",
                            "flags": 4194400,
                            "start": 7,
                            "end": 13
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 13
                    }
                ],
                "flags": 33554448,
                "start": 3,
                "end": 13
            },
            "flags": 33554448,
            "start": 0,
            "end": 14
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 14,
                "end": 19
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 19,
                            "end": 21
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "\\09",
                            "rawText": "'\\\\09'",
                            "flags": 4194400,
                            "start": 23,
                            "end": 30
                        },
                        "flags": 16,
                        "start": 19,
                        "end": 30
                    }
                ],
                "flags": 33554448,
                "start": 19,
                "end": 30
            },
            "flags": 33554448,
            "start": 14,
            "end": 31
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 31,
                "end": 36
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 36,
                            "end": 38
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "\\009",
                            "rawText": "'\\\\009'",
                            "flags": 4194400,
                            "start": 40,
                            "end": 48
                        },
                        "flags": 16,
                        "start": 36,
                        "end": 48
                    }
                ],
                "flags": 33554448,
                "start": 36,
                "end": 48
            },
            "flags": 33554448,
            "start": 31,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "use strict",
                "rawText": "'use strict'",
                "flags": 4194401,
                "start": 49,
                "end": 63
            },
            "flags": 16,
            "start": 49,
            "end": 64
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 64,
                "end": 68
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 68,
                            "end": 70
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "\\0",
                            "rawText": "'\\\\0'",
                            "flags": 4194400,
                            "start": 72,
                            "end": 78
                        },
                        "flags": 16,
                        "start": 68,
                        "end": 78
                    }
                ],
                "flags": 33554448,
                "start": 68,
                "end": 78
            },
            "flags": 33554448,
            "start": 64,
            "end": 79
        }
    ],
    "isModule": false,
    "source": "let x = '\\00';\n\nlet x = '\\\\09';\n\nlet x = '\\\\009';\n\n'use strict'; let x = '\\\\0';",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 79
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
