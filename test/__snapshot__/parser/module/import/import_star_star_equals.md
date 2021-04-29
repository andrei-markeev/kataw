# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
import **= from 'f';
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 263,
            "importKeyword": {
                "kind": 37814364,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "fromClause": null,
            "moduleSpecifier": null,
            "importClause": null,
            "flags": 16,
            "start": 6,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "from",
                "rawText": "from",
                "flags": 96,
                "start": 10,
                "end": 15
            },
            "flags": 16,
            "start": 10,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "f",
                "rawText": "f",
                "flags": 4194400,
                "start": 15,
                "end": 19
            },
            "flags": 16,
            "start": 15,
            "end": 20
        }
    ],
    "isModule": true,
    "text": "import **= from 'f';",
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
✖ Unexpected token. - start: 6, end: 10
✖ Statement expected - start: 6, end: 10

```
