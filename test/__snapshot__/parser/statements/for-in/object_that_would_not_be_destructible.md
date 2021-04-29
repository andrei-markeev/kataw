# Kataw parser test case

## Input

`````js
for ({a: x + y} in obj);
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

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 15,
                "end": 18
            },
            "kind": 166,
            "initializer": {
                "kind": 220,
                "propertyList": {
                    "kind": 218,
                    "properties": [
                        {
                            "kind": 219,
                            "asyncKeyword": null,
                            "getKeyword": null,
                            "setKeyword": null,
                            "left": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 10
                                },
                                "operatorToken": {
                                    "kind": 34098,
                                    "flags": 64,
                                    "start": 10,
                                    "end": 12
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 96,
                                    "start": 12,
                                    "end": 14
                                },
                                "flags": 32,
                                "start": 6,
                                "end": 14
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 6,
                                "end": 7
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 14
                        }
                    ],
                    "trailingComma": false,
                    "multiline": false,
                    "flags": 0,
                    "start": 6,
                    "end": 14
                },
                "flags": 32,
                "start": 5,
                "end": 15
            },
            "expression": {
                "kind": 134299649,
                "text": "obj",
                "rawText": "obj",
                "flags": 96,
                "start": 18,
                "end": 22
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 23,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "text": "for ({a: x + y} in obj);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Invalid left-hand side in for-in loop - start: 18, end: 22

```
