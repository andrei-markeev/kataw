# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
for (import.meta in null) ;
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 299,
                "importKeyword": {
                    "kind": 37814364,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 11
                },
                "metaIdentifier": {
                    "kind": 16595,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 16
                },
                "flags": 11,
                "transformFlags": 0,
                "start": 96,
                "end": 16
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 0,
                "start": 16,
                "end": 19
            },
            "expression": {
                "kind": 138477575,
                "flags": 96,
                "transformFlags": 0,
                "start": 19,
                "end": 24
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 25,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": true,
    "source": "for (import.meta in null) ;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 19, end: 24

```

