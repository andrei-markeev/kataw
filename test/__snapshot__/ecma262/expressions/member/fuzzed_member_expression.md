# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true }
`````

## Input

`````js
(2[x,x],x)>x
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
                "kind": 198,
                "left": {
                    "kind": 121,
                    "expression": {
                        "kind": 132,
                        "expressions": [
                            {
                                "kind": 130,
                                "member": {
                                    "kind": 201392130,
                                    "text": 2,
                                    "rawText": "2",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 2
                                },
                                "expression": {
                                    "kind": 132,
                                    "expressions": [
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 3,
                                            "end": 4
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 5,
                                            "end": 6
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 1024,
                                    "start": 3,
                                    "end": 6
                                },
                                "flags": 32,
                                "transformFlags": 4,
                                "start": 1,
                                "end": 7
                            },
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 9
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 1024,
                        "start": 0,
                        "end": 9
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 11
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 12
                },
                "flags": 32,
                "transformFlags": 5120,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "(2[x,x],x)>x",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript
(2[x, x], x) > x;
```

### Diagnostics

```javascript
✔ No errors
```

