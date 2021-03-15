# Kataw parser test case

## Input

`````js
f = ([xCls2 = class { static name() {} }]) => {}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "f = ([xCls2 = class { static name() {} }]) => {}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 196712,
                        "text": "f",
                        "rawText": "f",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    "operator": "=",
                    "right": {
                        "kind": 67592,
                        "typeParameters": null,
                        "arrowParameters": {
                            "kind": 65545,
                            "elements": [
                                {
                                    "kind": 89,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 33554437,
                                        "elementList": {
                                            "kind": 29,
                                            "elements": [
                                                {
                                                    "kind": 134217756,
                                                    "left": {
                                                        "kind": 4325406,
                                                        "text": "xCls2",
                                                        "rawText": "xCls2",
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 0,
                                                        "start": 6,
                                                        "end": 11
                                                    },
                                                    "right": {
                                                        "kind": 82483,
                                                        "name": null,
                                                        "typeParameters": null,
                                                        "classHeritage": null,
                                                        "implementClauses": null,
                                                        "members": {
                                                            "kind": 50,
                                                            "elements": [
                                                                {
                                                                    "kind": 49,
                                                                    "isStatic": true,
                                                                    "isAbstract": false,
                                                                    "isReadOnly": false,
                                                                    "isOptional": false,
                                                                    "method": {
                                                                        "kind": 16844946,
                                                                        "name": {
                                                                            "kind": 196711,
                                                                            "text": "name",
                                                                            "rawText": "name",
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 28,
                                                                            "end": 33
                                                                        },
                                                                        "formalParameters": {
                                                                            "kind": 90,
                                                                            "formalParameterList": [],
                                                                            "trailingComma": false,
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 34,
                                                                            "end": 35
                                                                        },
                                                                        "isSetter": false,
                                                                        "isGetter": false,
                                                                        "contents": {
                                                                            "kind": 91,
                                                                            "functionStatementList": {
                                                                                "kind": 94,
                                                                                "statements": [],
                                                                                "multiline": false,
                                                                                "flags": 0,
                                                                                "intersects": false,
                                                                                "transformFlags": 0,
                                                                                "start": 37,
                                                                                "end": 37
                                                                            },
                                                                            "flags": 0,
                                                                            "intersects": false,
                                                                            "transformFlags": 0,
                                                                            "start": 35,
                                                                            "end": 38
                                                                        },
                                                                        "decorators": null,
                                                                        "type": null,
                                                                        "accessModifier": null,
                                                                        "typeParameters": null,
                                                                        "flags": 0,
                                                                        "intersects": false,
                                                                        "transformFlags": 0,
                                                                        "start": 33,
                                                                        "end": 38
                                                                    },
                                                                    "flags": 0,
                                                                    "intersects": false,
                                                                    "transformFlags": 1,
                                                                    "start": 21,
                                                                    "end": 38
                                                                }
                                                            ],
                                                            "flags": 0,
                                                            "intersects": false,
                                                            "transformFlags": 1,
                                                            "start": 21,
                                                            "end": 40
                                                        },
                                                        "decorators": null,
                                                        "flags": 0,
                                                        "intersects": false,
                                                        "transformFlags": 1,
                                                        "start": 13,
                                                        "end": 40
                                                    },
                                                    "flags": 0,
                                                    "intersects": false,
                                                    "transformFlags": 0,
                                                    "start": 6,
                                                    "end": 40
                                                }
                                            ],
                                            "trailingComma": false,
                                            "multiline": false,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 40
                                        },
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 5,
                                        "end": 41
                                    },
                                    "isOptional": false,
                                    "type": null,
                                    "initializer": null,
                                    "decorators": null,
                                    "accessModifier": null,
                                    "isReadOnly": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "start": 3,
                                    "end": 42
                                }
                            ],
                            "type": null,
                            "accessModifier": null,
                            "trailingComma": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 42
                        },
                        "contents": {
                            "kind": 91,
                            "functionStatementList": {
                                "kind": 94,
                                "statements": [],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 47
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 45,
                            "end": 48
                        },
                        "flags": 536870912,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 48
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 48
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 48
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 48
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```
