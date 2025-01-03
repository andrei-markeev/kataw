# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
 x(/^(<[^>]+>)/)[1];

 x(y, /a/);
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
                "kind": 130,
                "member": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 2
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 371,
                                "text": "/^(<[^>]+>)/",
                                "rawText": "/^(<[^>]+>)/",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 3,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 15
                    },
                    "flags": 32,
                    "transformFlags": 1,
                    "start": 0,
                    "end": 16
                },
                "expression": {
                    "kind": 201392130,
                    "text": 1,
                    "rawText": "1",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 18
                },
                "flags": 32,
                "transformFlags": 4,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 20,
                    "end": 24
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 26
                        },
                        {
                            "kind": 371,
                            "text": "/a/",
                            "rawText": "/a/",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 31
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 25,
                    "end": 31
                },
                "flags": 32,
                "transformFlags": 1,
                "start": 20,
                "end": 32
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 20,
            "end": 33
        }
    ],
    "isModule": true,
    "source": " x(/^(<[^>]+>)/)[1];\n\n x(y, /a/);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript
x(/^(<[^>]+>)/)[1];
x(y, /a/);

```

### Diagnostics

```javascript
✔ No errors
```

