# Kataw parser test case

## Input

`````js
type A = (string) => void
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 261,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 17,
                    "end": 20
                },
                "parameters": [
                    {
                        "kind": 134234347,
                        "flags": 64,
                        "start": 10,
                        "end": 16
                    }
                ],
                "returnType": {
                    "kind": 138477615,
                    "flags": 64,
                    "start": 20,
                    "end": 25
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "type A = (string) => void",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```
