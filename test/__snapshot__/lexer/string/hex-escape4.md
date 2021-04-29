# Kataw parser test case

## Input

`````js
"\x000"
;
"\x128"
;
"\x34a"
;
"\x56X"
;
"\x78{"
;
"\x9a\
"
;
"\xAb@{x9}@"
;
"\xBc "
;
"\xCd#"
;
"\xDe\x00"
;
"\xEfok"
;
"pre\xF0"
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
                "kind": 201392131,
                "text": "\u00000",
                "rawText": "\u00000",
                "flags": 96,
                "start": 0,
                "end": 7
            },
            "flags": 16,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "\u00128",
                "rawText": "\u00128",
                "flags": 97,
                "start": 9,
                "end": 17
            },
            "flags": 16,
            "start": 9,
            "end": 19
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "4a",
                "rawText": "4a",
                "flags": 97,
                "start": 19,
                "end": 27
            },
            "flags": 16,
            "start": 19,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "VX",
                "rawText": "VX",
                "flags": 97,
                "start": 29,
                "end": 37
            },
            "flags": 16,
            "start": 29,
            "end": 39
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "x{",
                "rawText": "x{",
                "flags": 97,
                "start": 39,
                "end": 47
            },
            "flags": 16,
            "start": 39,
            "end": 49
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "",
                "rawText": "",
                "flags": 97,
                "start": 49,
                "end": 58
            },
            "flags": 16,
            "start": 49,
            "end": 60
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "«@{x9}@",
                "rawText": "«@{x9}@",
                "flags": 97,
                "start": 60,
                "end": 73
            },
            "flags": 16,
            "start": 60,
            "end": 75
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "¼ ",
                "rawText": "¼ ",
                "flags": 97,
                "start": 75,
                "end": 83
            },
            "flags": 16,
            "start": 75,
            "end": 85
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Í#",
                "rawText": "Í#",
                "flags": 97,
                "start": 85,
                "end": 93
            },
            "flags": 16,
            "start": 85,
            "end": 95
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "Þ\u0000",
                "rawText": "Þ\u0000",
                "flags": 97,
                "start": 95,
                "end": 106
            },
            "flags": 16,
            "start": 95,
            "end": 108
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "ïok",
                "rawText": "ïok",
                "flags": 97,
                "start": 108,
                "end": 117
            },
            "flags": 16,
            "start": 108,
            "end": 119
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "preð",
                "rawText": "preð",
                "flags": 97,
                "start": 119,
                "end": 129
            },
            "flags": 16,
            "start": 119,
            "end": 129
        }
    ],
    "isModule": false,
    "text": "\"\\x000\"\n;\n\"\\x128\"\n;\n\"\\x34a\"\n;\n\"\\x56X\"\n;\n\"\\x78{\"\n;\n\"\\x9a\\\n\"\n;\n\"\\xAb@{x9}@\"\n;\n\"\\xBc \"\n;\n\"\\xCd#\"\n;\n\"\\xDe\\x00\"\n;\n\"\\xEfok\"\n;\n\"pre\\xF0\"",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 129
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
