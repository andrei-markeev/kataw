# Kataw parser test case

## Input

`````js
do /* comment */ {}

/* comment 1 */


while (x) {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 18
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 2,
                "end": 19
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 81,
                "transformFlags": 0,
                "start": 19,
                "end": 44
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 46,
                "end": 47
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 48
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 50,
                "end": 50
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 48,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "do /* comment */ {}\n\n/* comment 1 */\n\n\nwhile (x) {}",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript
do  {}
while (x);
{}

```

### Diagnostics

```javascript
✔ No errors
```

