# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: e
> :: test: with_strict_dirctive
> :: case: yield * \n { yield: 12 }
## Input

`````js
'use strict'; yield * \n { yield: 12 }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "use strict",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "yield",
                    "rawText": "yield",
                    "flags": 96,
                    "start": 13,
                    "end": 19
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 19,
                    "end": 21
                },
                "right": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 21,
                    "end": 21
                },
                "flags": 32,
                "start": 13,
                "end": 21
            },
            "flags": 16,
            "start": 13,
            "end": 21
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 23,
                "end": 24
            },
            "flags": 16,
            "start": 23,
            "end": 24
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 26,
                            "end": 32
                        },
                        "flags": 16,
                        "start": 26,
                        "end": 32
                    }
                ],
                "multiLine": false,
                "flags": 16,
                "start": 26,
                "end": 32
            },
            "flags": 16,
            "start": 24,
            "end": 32
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 12,
                "rawText": "12",
                "flags": 96,
                "start": 33,
                "end": 36
            },
            "flags": 16,
            "start": 33,
            "end": 36
        }
    ],
    "isModule": false,
    "text": "'use strict'; yield * \\n { yield: 12 }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 21, end: 22
✖ Expression expected - start: 21, end: 23
✖ Statement expected - start: 21, end: 23
✖ Statement expected - start: 32, end: 33
✖ Statement expected - start: 36, end: 38

```
