# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: n
> :: test: expression_paren
> :: case: a\n get
## Input

`````js
(class { a\n get });
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
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 0,
                        "start": 1,
                        "end": 6
                    },
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "asyncKeyword": null,
                                "key": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 10
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 32,
                                "start": 8,
                                "end": 10
                            }
                        ],
                        "flags": 32,
                        "start": 8,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "n",
                "rawText": "n",
                "flags": 96,
                "start": 11,
                "end": 12
            },
            "flags": 16,
            "start": 11,
            "end": 12
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "get",
                "rawText": "get",
                "flags": 96,
                "start": 12,
                "end": 16
            },
            "flags": 16,
            "start": 12,
            "end": 16
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 19,
            "end": 20
        }
    ],
    "isModule": false,
    "text": "(class { a\\n get });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid hexadecimal escape sequence - start: 8, end: 10
✖ Invalid hexadecimal escape sequence - start: 10, end: 10
✖ Statement expected - start: 10, end: 11
✖ Statement expected - start: 16, end: 18
✖ Statement expected - start: 18, end: 19

```
