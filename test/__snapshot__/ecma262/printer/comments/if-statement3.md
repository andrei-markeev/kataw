# Kataw parser test case

## Input

`````js

/* comment 1 */

if /* comment 2 */ (x) /* comment 3 */ {}

/* comment 4 */
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 164,
            "ifKeyword": {
                "kind": 37757019,
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 20
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 38,
                "end": 39
            },
            "consequent": {
                "kind": 124,
                "block": {
                    "kind": 249,
                    "statements": [],
                    "flags": 16,
                    "transformFlags": 0,
                    "start": 58,
                    "end": 58
                },
                "flags": 16,
                "transformFlags": 0,
                "start": 40,
                "end": 59
            },
            "elseKeyword": null,
            "alternate": null,
            "flags": 17,
            "transformFlags": 0,
            "start": 0,
            "end": 59
        }
    ],
    "isModule": false,
    "source": "\n/* comment 1 */\n\nif /* comment 2 */ (x) /* comment 3 */ {}\n\n/* comment 4 */",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 76
}
```

### Printed

```javascript
/* comment 1 */
/* comment 1 */
if (x)/* comment 3 */  {}
```

### Diagnostics

```javascript
✔ No errors
```

