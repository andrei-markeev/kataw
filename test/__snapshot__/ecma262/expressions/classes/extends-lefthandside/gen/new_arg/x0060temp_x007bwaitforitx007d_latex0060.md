# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/classes/extends-lefthandside/gen/new_arg
> :: test: new arg
> :: case: `temp {waitforit} late`
## Options

`````js
{}
`````
## Input

`````js
new `temp {waitforit} late`
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 458761,
                    "text": "temp {waitforit} late",
                    "rawText": "temp {waitforit} late",
                    "flags": 134217824,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 27
                },
                "argumentList": null,
                "flags": 32,
                "transformFlags": 2048,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": false,
    "source": "new `temp {waitforit} late`",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript
new `temp {waitforit} late`;
```

### Diagnostics

```javascript
✔ No errors
```

