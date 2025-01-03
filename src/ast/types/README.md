# Types

```js
interface TypeNode <: SyntaxNode { }
```

### ArrayType

```js
interface ArrayType <: TypeNode {
  kind: NodeKind.ArrayType;
  type: TypeNode;
}
```

### ArrowFunctionType

```js
interface ArrowFunctionType <: TypeNode {
  kind: NodeKind.ArrowFunctionType;
  arrowTypeParameterList: ArrowTypeParameterList;
  arrowToken: SyntaxToken<TokenSyntaxKind> | null;
  returnType: TypeNode;
  typeParameters: TypeParameterDeclaration | null;
}
```

### ArrowTypeParameterList

```js
interface ArrowTypeParameterList <: TypeNode {
 kind: NodeKind.ArrowTypeParameterList;
 parameters: ArrowTypeParameter[];
 trailingComma: boolean;
}
```

### ArrowTypeParameter

```js
interface ArrowTypeParameter <: TypeNode {
 kind: NodeKind.ArrowTypeParameter;
 ellipsisToken: SyntaxToken<TokenSyntaxKind> | null;
 name: Identifier;
 optionalToken: SyntaxToken<TokenSyntaxKind> | null;
 types: TypeNode | null;
}
```

### FunctionType

```js
interface FunctionType <: TypeNode {
  kind: NodeKind.FunctionType;
  arrowTypeParameterList: FunctionTypeParameterList;
  arrowToken: SyntaxToken<TokenSyntaxKind> | null;
  returnType: TypeNode;
  typeParameters: TypeParameterDeclaration | null;
}
```

### FunctionTypeParameterList

```js
interface FunctionTypeParameterList <: TypeNode {
 kind: NodeKind.FunctionTypeParameterList;
 parameters: FunctionTypeParameter[];
 trailingComma: boolean;
}
```

### FunctionTypeParameter

```js
interface FunctionTypeParameter <: TypeNode {
 kind: NodeKind.FunctionTypeParameter;
 ellipsisToken: SyntaxToken<TokenSyntaxKind> | null;
 name: Identifier;
 optionalToken: SyntaxToken<TokenSyntaxKind> | null;
 types: TypeNode | null;
}
```

### IndexedAccessType

```js
interface IndexedAccessType <: TypeNode {
  kind: NodeKind.IndexedAccessType;
  objectType: TypeNode;
  indexType: TypeNode;
}
```

### NumberType

```js
interface NumberType <: TypeNode {
  kind: NodeKind.NumberType;
  text: number;
  rawText: string;
}
```

### BigIntType

```js
interface BigIntType <: TypeNode {
  kind: NodeKind.BigIntType;
  text: number;
  raw: string;
}
```

### NullableType

```js
interface NullableType <: TypeNode {
  kind: NodeKind.NullableType;
  nullableToken: SyntaxToken<TokenSyntaxKind>;
  type: TypeNode;
}
```

### CallSignature

```js
interface CallSignature <: TypeNode {
  kind: NodeKind.CallSignature;
  protoKeyword: SyntaxToken<TokenSyntaxKind> | null;
  typeParameter: TypeParameterDeclaration | null;
  kind: SyntaxKind.CallSignature;
  value: TypeNode;
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null;
  returnType: TypeNode;
}
```

### IndexSignatureDeclaration

```js
interface IndexSignatureDeclaration <: TypeNode {
  kind: NodeKind.IndexSignatureDeclaration;
  protoKeyword: SyntaxToken<TokenSyntaxKind> | null;
  key: Identifier | DummyIdentifier | StringLiteral | NumericLiteral | null;
  value: TypeNode | null;
  type: TypeNode;
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null;
}
```

### InternalSlot

```js
interface InternalSlot <: TypeNode {
  kind: SyntaxKind.InternalSlot;
  /* error recovery */
  protoKeyword: SyntaxToken<TokenSyntaxKind> | null;
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null;
  name: Identifier | DummyIdentifier | StringLiteral | NumericLiteral;
  optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  type: TypeNode;

}
```

### TypeProperty

```js
interface TypeProperty <: TypeNode {
  kind: NodeKind.TypeProperty;
  getKeyword: SyntaxToken<TokenSyntaxKind> | null;
  setKeyword: SyntaxToken<TokenSyntaxKind> | null;
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null;
  protoKeyword: SyntaxToken<TokenSyntaxKind> | null;
  key: Identifier | DummyIdentifier | StringLiteral | NumericLiteral;
  optionalToken: SyntaxToken<TokenSyntaxKind> | null;
  type: TypeNode;
}
```

### TypeSpreadProperty

```js
interface TypeSpreadProperty <: TypeNode {
  kind: NodeKind.TypeSpreadProperty;
  protoKeyword: SyntaxToken<TokenSyntaxKind> | null;
  ellipsisToken: SyntaxToken<TokenSyntaxKind>;
  kind: SyntaxKind.TypeSpreadProperty;
  type: TypeNode;
  staticKeyword: SyntaxToken<TokenSyntaxKind> | null;
}
```

###  ObjectType

```js
interface  ObjectType <: TypeNode {
  kind: NodeKind. ObjectType;
  properties: any[];
  trailingComma: boolean;
}
```

### OpaqueType

```js
interface OpaqueType <: TypeNode {
  kind: NodeKind.OpaqueType;
  declareToken: SyntaxToken<TokenSyntaxKind> | null;
  opaqueToken: SyntaxToken<TokenSyntaxKind> | null;
  typeToken: SyntaxToken<TokenSyntaxKind>;
  name: Identifier | DummyIdentifier;
  typeParameters: TypeParameterDeclaration | null;
  superType: TypeNode | null;
  impltype: TypeNode | null;
}
```

### ParenthesizedType

```js
interface ParenthesizedType <: TypeNode {
  kind: NodeKind.ParenthesizedType;
  ttype: TypeNode;
}
```

### QualifiedType

```js
interface QualifiedType <: TypeNode {
  kind: NodeKind.QualifiedType;
  qualification: Identifier | DummyIdentifier | QualifiedType;
  name: Identifier | DummyIdentifier;
}
```

### StringType

```js
interface StringType <: TypeNode {
  kind: NodeKind.StringType;
  text: string;
  rawText: string;
}
```

### SubtractionType

```js
interface SubtractionType <: TypeNode {
 kind: NodeKind.SubtractionType;
 subtractionToken: SyntaxToken<TokenSyntaxKind>;
 text: number;
}
```

### TupleType

```js
interface TupleType <: TypeNode {
  kind: NodeKind.TupleType;
  elementTypes: TypeNode[];
  trailingComma: boolean;
}
```

### TypeAlias

```js
interface TypeAlias <: TypeNode {
  kind: NodeKind.TypeAlias;
  declareToken: SyntaxToken<TokenSyntaxKind> | null;
  typeToken: SyntaxToken<TokenSyntaxKind>;
  name: Identifier;
  typeParameters: TypeParameterDeclaration | null;
  assignToken: SyntaxToken<TokenSyntaxKind>;
  type: TypeNode;
}
```

### TypeAnnotation

```js
interface TypeAnnotation <: TypeNode {
  kind: NodeKind.TypeAnnotation;
  bitwiseOrToken: SyntaxToken<TokenSyntaxKind> | null;
  bitwiseAndToken: SyntaxToken<TokenSyntaxKind> | null;
  type: TypeNode;
}
```

### TypeParameterDeclaration

```js
interface TypeParameterDeclaration <: TypeNode {
  kind: NodeKind.TypeParameterDeclaration;
  parameters: TypeParameter[];
  trailingComma: boolean;
}
```

### TypeParameterInstantiation

```js
interface TypeParameterInstantiation  <: TypeNode {
  kind: NodeKind.TypeParameterInstantiation;
  types: [TypeNode];
  trailingComma: boolean;
}
```

### TypeParameter

```js
interface TypeParameter <: TypeNode {
  kind: NodeKind.TypeParameter;
  type: TypeNode | null;
  defaultType: TypeNode | null;
}
```

### TypeReference

```js
interface TypeReference <: TypeNode {
  kind: NodeKind.TypeReference;
  typeName: Identifier | DummyIdentifier;
  typeParameters: TypeParameterInstantiationList | null;
}
```

### TypeofType

```js
interface TypeofType <: TypeNode {
  kind: NodeKind.TypeofType;
  typeOfKeyword: SyntaxToken<TokenSyntaxKind> | null;
  type: TypeNode;
}
```

### UnionType

```js
interface UnionType <: TypeNode {
  kind: NodeKind.UnionType;
  types: TypeNode[];
}
```

### RestType

```js
interface RestType <: TypeNode {
  ellipsisToken: SyntaxToken<TokenSyntaxKind>;
  type: TypeNode;
}
}
```

### OptionalType

```js
interface OptionalType <: TypeNode {
  type: TypeNode;
  optionalToken: SyntaxToken<TokenSyntaxKind>;
}
```

### OptionalIndexedAccess

```js
interface OptionalIndexedAccess <: TypeNode {
  kind: NodeKind.OptionalIndexedAccess;
  optionalIndexedToken: SyntaxToken<TokenSyntaxKind>;
  objectType: TypeNode;
  indexType: TypeNode;
}
```

