# Kataw parser test case

## Input

`````js
null?.
  `hello`
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
                "kind": 205,
                "chainToken": {
                    "kind": 393240,
                    "flags": 0,
                    "start": 4,
                    "end": 6
                },
                "member": {
                    "kind": 269,
                    "text": null,
                    "flags": 96,
                    "start": 0,
                    "end": 4
                },
                "chain": {
                    "kind": 206,
                    "chain": {
                        "kind": 226,
                        "member": null,
                        "template": {
                            "kind": 458761,
                            "text": "hello",
                            "rawText": "hello",
                            "flags": 96,
                            "start": 6,
                            "end": 16
                        },
                        "flags": 32,
                        "start": 6,
                        "end": 16
                    },
                    "flags": 32,
                    "start": 6,
                    "end": 16
                },
                "flags": 32,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "text": "null?.\n  `hello`",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Tagged template expressions are not permitted in an optional chain. - start: 6, end: 16

```
