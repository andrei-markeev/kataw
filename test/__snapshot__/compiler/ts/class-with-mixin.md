 Kataw parser test case

## Input

`````js
function M<T extends Constructor<{}>>(Base: T) {
    return class extends Base { }
}

class X extends M<any>(C) implements I { }

class C { }
interface I { }
type Constructor<T> = new (...args: any[]) => T;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "function M<T extends Constructor<{}>>(Base: T) {\n    return class extends Base { }\n}\n\nclass X extends M<any>(C) implements I { }\n\nclass C { }\ninterface I { }\ntype Constructor<T> = new (...args: any[]) => T;",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "M",
                    "rawText": "M",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 8,
                    "end": 10
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "Base",
                                "rawText": "Base",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "parent": null,
                                "emitNode": null,
                                "start": 38,
                                "end": 42
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "T",
                                    "rawText": "T",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 43,
                                    "end": 45
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 43,
                                "end": 46
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 1,
                            "parent": null,
                            "emitNode": null,
                            "start": 38,
                            "end": 45
                        }
                    ],
                    "trailingComma": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 38,
                    "end": 46
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097346,
                                "expression": {
                                    "kind": 82483,
                                    "name": null,
                                    "typeParameters": null,
                                    "classHeritage": {
                                        "kind": 52,
                                        "expression": {
                                            "kind": 196712,
                                            "text": "Base",
                                            "rawText": "Base",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 73,
                                            "end": 78
                                        },
                                        "typeArguments": null,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 73,
                                        "end": 78
                                    },
                                    "implementClauses": null,
                                    "members": {
                                        "kind": 50,
                                        "elements": [],
                                        "flags": 81920,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 80,
                                        "end": 82
                                    },
                                    "decorators": null,
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 1,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 59,
                                    "end": 82
                                },
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 48,
                                "end": 82
                            }
                        ],
                        "multiline": true,
                        "flags": 81920,
                        "intersects": false,
                        "transformFlags": 0,
                        "parent": null,
                        "emitNode": null,
                        "start": 48,
                        "end": 82
                    },
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 46,
                    "end": 84
                },
                "typeParameters": {
                    "kind": 233,
                    "typeParameterList": [
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 11,
                                "end": 12
                            },
                            "constraint": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "Constructor",
                                    "rawText": "Constructor",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 20,
                                    "end": 32
                                },
                                "typeArguments": {
                                    "kind": 227,
                                    "typeArgumentsList": [
                                        {
                                            "kind": 230,
                                            "objectTypeMembers": {
                                                "kind": 169,
                                                "members": [],
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "parent": null,
                                                "emitNode": null,
                                                "start": 34,
                                                "end": 35
                                            },
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "parent": null,
                                            "emitNode": null,
                                            "start": 33,
                                            "end": 35
                                        }
                                    ],
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 33,
                                    "end": 35
                                },
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 20,
                                "end": 37
                            },
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 11,
                            "end": 36
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 11,
                    "end": 36
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 256,
                "parent": null,
                "emitNode": null,
                "start": 0,
                "end": 84
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "X",
                    "rawText": "X",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 91,
                    "end": 93
                },
                "typeParameters": null,
                "classHeritage": {
                    "kind": 52,
                    "expression": {
                        "kind": 66091,
                        "expression": {
                            "kind": 196712,
                            "text": "M",
                            "rawText": "M",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 101,
                            "end": 103
                        },
                        "typeArguments": {
                            "kind": 227,
                            "typeArgumentsList": [
                                {
                                    "kind": 4194306,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 104,
                                    "end": 107
                                }
                            ],
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 104,
                            "end": 108
                        },
                        "argumentList": {
                            "kind": 3,
                            "elements": [
                                {
                                    "kind": 196712,
                                    "text": "C",
                                    "rawText": "C",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 109,
                                    "end": 110
                                }
                            ],
                            "trailingComma": false,
                            "transformFlags": 0,
                            "flags": 65536,
                            "intersects": false,
                            "parent": null,
                            "emitNode": null,
                            "start": 109,
                            "end": 110
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 103,
                        "end": 111
                    },
                    "typeArguments": null,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 101,
                    "end": 111
                },
                "implementClauses": {
                    "kind": 107,
                    "clauses": [
                        {
                            "kind": 106,
                            "type": {
                                "kind": 236,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "I",
                                    "rawText": "I",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 122,
                                    "end": 124
                                },
                                "typeArguments": null,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "parent": null,
                                "emitNode": null,
                                "start": 122,
                                "end": 126
                            },
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 122,
                            "end": 124
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 122,
                    "end": 124
                },
                "members": {
                    "kind": 50,
                    "elements": [],
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 1,
                    "parent": null,
                    "emitNode": null,
                    "start": 126,
                    "end": 128
                },
                "decorators": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 1,
                "parent": null,
                "emitNode": null,
                "start": 84,
                "end": 128
            },
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "C",
                    "rawText": "C",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "parent": null,
                    "emitNode": null,
                    "start": 135,
                    "end": 137
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [],
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 1,
                    "parent": null,
                    "emitNode": null,
                    "start": 139,
                    "end": 141
                },
                "decorators": null,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 1,
                "parent": null,
                "emitNode": null,
                "start": 128,
                "end": 141
            },
            {
                "kind": 119,
                "name": {
                    "kind": 196712,
                    "text": "I",
                    "rawText": "I",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 151,
                    "end": 153
                },
                "typeParameters": null,
                "heritageClauses": null,
                "objectTypeMembers": {
                    "kind": 169,
                    "members": [],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 155,
                    "end": 155
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 141,
                "end": 157
            },
            {
                "kind": 225,
                "name": {
                    "kind": 196712,
                    "text": "Constructor",
                    "rawText": "Constructor",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "parent": null,
                    "emitNode": null,
                    "start": 162,
                    "end": 174
                },
                "type": {
                    "kind": 59,
                    "isReadOnly": false,
                    "accessModifier": null,
                    "typeParameters": null,
                    "parameters": {
                        "kind": 175,
                        "parameterList": [
                            {
                                "kind": 174,
                                "ellipsis": true,
                                "binding": {
                                    "kind": 131102,
                                    "text": "args",
                                    "rawText": "args",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 188,
                                    "end": 192
                                },
                                "isOptional": false,
                                "type": {
                                    "kind": 7,
                                    "elementType": {
                                        "kind": 4194306,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "parent": null,
                                        "emitNode": null,
                                        "start": 193,
                                        "end": 197
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "parent": null,
                                    "emitNode": null,
                                    "start": 193,
                                    "end": 200
                                },
                                "initializer": null,
                                "accessModifier": null,
                                "isReadOnly": false,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 4097,
                                "parent": null,
                                "emitNode": null,
                                "start": 185,
                                "end": 199
                            }
                        ],
                        "trailingcomma": false,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 185,
                        "end": 199
                    },
                    "returnType": {
                        "kind": 236,
                        "typeName": {
                            "kind": 196711,
                            "text": "T",
                            "rawText": "T",
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 0,
                            "parent": null,
                            "emitNode": null,
                            "start": 203,
                            "end": 205
                        },
                        "typeArguments": null,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 2097152,
                        "parent": null,
                        "emitNode": null,
                        "start": 203,
                        "end": 206
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 179,
                    "end": 205
                },
                "typeParameters": {
                    "kind": 233,
                    "typeParameterList": [
                        {
                            "kind": 232,
                            "name": {
                                "kind": 196711,
                                "text": "T",
                                "rawText": "T",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "parent": null,
                                "emitNode": null,
                                "start": 175,
                                "end": 176
                            },
                            "constraint": null,
                            "defaultType": null,
                            "expression": null,
                            "flags": 65536,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "parent": null,
                            "emitNode": null,
                            "start": 175,
                            "end": 176
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "parent": null,
                    "emitNode": null,
                    "start": 175,
                    "end": 176
                },
                "flags": 81920,
                "intersects": false,
                "transformFlags": 2097152,
                "parent": null,
                "emitNode": null,
                "start": 157,
                "end": 206
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "parent": null,
        "emitNode": null,
        "start": 0,
        "end": 206
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "parent": null,
    "emitNode": null,
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 206
}
```

### Printed


```javascript

function M<T extends Constructor<{

        }>>(Base: T) {
    return class extends Base {

    };
}

class X extends M<any>(C) implements I {

}

class C {

}

interface I {
}

type Constructor<T> = new (...args: any[]) => T;

```

### Diagnostics


```javascript
@{x2714}@ No errors
```
