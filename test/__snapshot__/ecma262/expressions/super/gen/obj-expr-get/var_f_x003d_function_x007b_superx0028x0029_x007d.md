# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/super/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/super/gen/obj-expr-get
> :: test: obj-expr-get
> :: case: var f = function { super(); }
## Options

`````js
{}
`````
## Input

`````js
({ get x() { var f = function { super(); } } })
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
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [],
                    "flags": 32,
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 44
                },
                "flags": 34,
                "transformFlags": 0,
                "start": 0,
                "end": 44
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "({ get x() { var f = function { super(); } } })",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Missing an opening parentheses - '( - start: 30, end: 31
✖ Object literal keys that are strings or numbers must be a method or have a colon - start: 37, end: 38
✖ ',' expected - start: 37, end: 38
✖ Expected a ')' to match the '(' token here - start: 45, end: 46
✖ Declaration or statement expected - start: 46, end: 47

```

