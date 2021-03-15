# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
var yield = 4;
var x;

var result;
var vals = [];

result = [ x = yield ] = vals;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "var yield = 4;\nvar x;\n\nvar result;\nvar vals = [];\n\nresult = [ x = yield ] = vals;",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "yield",
                                "rawText": "yield",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 3,
                                "end": 9
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 4261540,
                                "text": 4,
                                "rawText": "4",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 13
                            },
                            "flags": 3,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 65536,
                            "end": 13
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 13
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 18,
                                "end": 20
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 18,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 65536,
                            "end": 20
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 20
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 0,
                "start": 14,
                "end": 21
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "result",
                                "rawText": "result",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 26,
                                "end": 33
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": null,
                            "flags": 26,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 65536,
                            "end": 33
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 26,
                    "end": 33
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 0,
                "start": 21,
                "end": 34
            },
            {
                "kind": 2097397,
                "declarationList": {
                    "kind": 244,
                    "declarations": [
                        {
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "vals",
                                "rawText": "vals",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 38,
                                "end": 43
                            },
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 67207686,
                                "elementList": {
                                    "kind": 65605,
                                    "elements": [],
                                    "trailingComma": false,
                                    "multiline": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 47,
                                    "end": 47
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 45,
                                "end": 48
                            },
                            "flags": 38,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 65536,
                            "end": 48
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 38,
                    "end": 48
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 0,
                "start": 34,
                "end": 49
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "result",
                        "rawText": "result",
                        "flags": 81920,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 49,
                        "end": 57
                    },
                    "operator": "=",
                    "right": {
                        "kind": 65550,
                        "left": {
                            "kind": 67207686,
                            "elementList": {
                                "kind": 65605,
                                "elements": [
                                    {
                                        "kind": 65550,
                                        "left": {
                                            "kind": 196712,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 61,
                                            "end": 63
                                        },
                                        "operator": "=",
                                        "right": {
                                            "kind": 196712,
                                            "text": "yield",
                                            "rawText": "yield",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 65,
                                            "end": 71
                                        },
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 61,
                                        "end": 71
                                    }
                                ],
                                "trailingComma": false,
                                "multiline": false,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 61,
                                "end": 71
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 59,
                            "end": 73
                        },
                        "operator": "=",
                        "right": {
                            "kind": 196712,
                            "text": "vals",
                            "rawText": "vals",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 75,
                            "end": 80
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 59,
                        "end": 80
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 49,
                    "end": 80
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 49,
                "end": 81
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 81
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 81
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```
