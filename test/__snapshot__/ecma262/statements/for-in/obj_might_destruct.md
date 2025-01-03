# Kataw parser test case

## Input

`````js
for ({x,...x}=x in x) ;
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 7
                            },
                            {
                                "kind": 224,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 11
                                },
                                "argument": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 12
                                },
                                "flags": 1073741856,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 12
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 12
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 5,
                    "end": 13
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 13,
                    "end": 14
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 15
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 18
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 20
                    },
                    "flags": 32,
                    "transformFlags": 5120,
                    "start": 14,
                    "end": 20
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 5,
                "end": 20
            },
            "condition": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 20,
                "end": 20
            },
            "incrementor": null,
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 21,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "for ({x,...x}=x in x) ;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 20, end: 21

```

