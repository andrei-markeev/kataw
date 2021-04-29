# Auto-generated test cases ( Kataw )
- Regenerated: 2021-04-09
- From: d
- Path: g
> :: test: new arg
> :: case: super.foo
## Input

`````js
new super.foo
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
                "kind": 129,
                "member": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 0,
                        "start": 0,
                        "end": 3
                    },
                    "expression": {
                        "kind": 225,
                        "superKeyword": {
                            "kind": 4259935,
                            "flags": 0,
                            "start": 3,
                            "end": 9
                        },
                        "flags": 96,
                        "start": 3,
                        "end": 9
                    },
                    "argumentList": null,
                    "flags": 32,
                    "start": 0,
                    "end": 9
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 10,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "text": "new super.foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ 'super' can only be referenced in members of derived classes or object literal expressions - start: 9, end: 10

```
