# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/gen/stand-alone
> :: test: stand-alone
> :: case: return => {}
## Options

`````js
{}
`````
## Input

`````js
return => {} ;
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 161,
            "returnKeyword": {
                "kind": 37757022,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "expression": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 6,
                "end": 6
            },
            "flags": 16,
            "transformFlags": 256,
            "start": 0,
            "end": 6
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "transformFlags": 0,
                "start": 11,
                "end": 11
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 9,
            "end": 12
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 12,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "return => {} ;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ A return statement can only be used within a function_body - start: 0, end: 6
✖ Identifier expected - start: 6, end: 9

```

