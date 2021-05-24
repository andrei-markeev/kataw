# Kataw parser test case

## Input

`````js
type C = Obj['bar'][foo]['boz'];
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
                "text": "C",
                "rawText": "C",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 268,
                "objectType": {
                    "kind": 268,
                    "objectType": {
                        "kind": 268,
                        "objectType": {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "Obj",
                                "rawText": "Obj",
                                "flags": 96,
                                "start": 8,
                                "end": 12
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 8,
                            "end": 12
                        },
                        "indexType": {
                            "kind": 134217967,
                            "value": "bar",
                            "flags": 0,
                            "start": 13,
                            "end": 18
                        },
                        "flags": 0,
                        "start": 13,
                        "end": 20
                    },
                    "indexType": {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 20,
                            "end": 23
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 20,
                        "end": 23
                    },
                    "flags": 0,
                    "start": 20,
                    "end": 25
                },
                "indexType": {
                    "kind": 134217967,
                    "value": "boz",
                    "flags": 0,
                    "start": 25,
                    "end": 30
                },
                "flags": 0,
                "start": 25,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        }
    ],
    "isModule": false,
    "source": "type C = Obj['bar'][foo]['boz'];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 32
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```
