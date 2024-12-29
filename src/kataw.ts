import { parse, Options, LinterRules, LinterOptions } from './parser/parser';
import { DiagnosticSource, DiagnosticKind } from './diagnostic/diagnostic';
import { PrinterOptions } from './printer';
import { Context, OnError } from './parser/common';
import { RootNode } from './ast/root-node';
import { printSource } from './printer';
export { SyntaxKind, SyntaxNode } from './ast/syntax-node';
export { NodeFlags } from './ast/syntax-node';
export { TokenSyntaxKind, createToken, SyntaxToken } from './ast/token';
export { createBlockStatement, BlockStatement } from './ast/statements/block-stmt';
export { createBlock, Block } from './ast/statements/block';
export { createLabelledStatement, LabelledStatement } from './ast/statements/labelled-stmt';
export { createBreakStatement, BreakStatement } from './ast/statements/break-stmt';
export { createContinueStatement, ContinueStatement } from './ast/statements/continue-stmt';
export { createCaseBlock, CaseBlock } from './ast/statements/case-block';
export { createCaseClause, CaseClause } from './ast/statements/case-clause';
export { createCatch, CatchClause } from './ast/statements/catch-stmt';
export { createDebuggerStatement, DebuggerStatement } from './ast/statements/debugger-stmt';
export { createTryStatement, TryStatement } from './ast/statements/try-stmt';
export { createDefaultClause, DefaultClause } from './ast/statements/default-clause';
export { createDoWhileStatement, DoWhileStatement } from './ast/statements/do-stmt';
export { createEmptyStatement, EmptyStatement } from './ast/statements/empty-stmt';
export { createForInStatement, ForInStatement } from './ast/statements/for-in-stmt';
export { createForOfStatement, ForOfStatement } from './ast/statements/for-of-stmt';
export { createForStatement, ForStatement } from './ast/statements/for-stmt';
export { createIfStatement, IfStatement } from './ast/statements/if-stmt';
export { createReturnStatement, ReturnStatement } from './ast/statements/return-stmt';
export { createSwitchStatement, SwitchStatement } from './ast/statements/switch-stmt';
export { createThrowStatement, ThrowStatement } from './ast/statements/throw-stmt';
export { createWhileStatement, WhileStatement } from './ast/statements/while-stmt';
export { createWithStatement, WithStatement } from './ast/statements/with-stmt';
export { createIndexExpressionChain, IndexExpressionChain } from './ast/expressions/index-expr-chain';
export { createDecoratorList, DecoratorList } from './ast/expressions/decorator-list';
export { createDecorator, Decorator } from './ast/expressions/decorators';
export { createMemberAccessChain, MemberAccessChain } from './ast/expressions/member-access-chain';
export { createCallChain, CallChain } from './ast/expressions/call-chain';
export { createOptionalExpression, OptionalExpression } from './ast/expressions/optional-expr';
export { createOptionalChain, OptionalChain } from './ast/expressions/optional-chain';
export { createImportCall, ImportCall } from './ast/expressions/import-call';
export { createImportMeta, ImportMeta } from './ast/expressions/import-meta';
export { createTemplateExpression, TemplateExpression } from './ast/expressions/template-expression';
export { createClassElement, ClassElement } from './ast/expressions/class-element';
export { createStaticBlock, StaticBlock } from './ast/expressions/static-block';
export { createClassTail, ClassTail } from './ast/expressions/class-tail';
export { createClassBody, ClassBody } from './ast/expressions/class-body';
export { createClassExpression, ClassExpression } from './ast/expressions/class-expr';
export { createFieldDefinition, FieldDefinition } from './ast/expressions/field-definition';
export { createClassHeritage, ClassHeritage } from './ast/expressions/class-heritage';
export { createTemplateSpan, TemplateSpan } from './ast/expressions/template-span';
export { createTemplateTail, TemplateTail } from './ast/expressions/template-tail';
export { createTaggedTemplate, TaggedTemplate } from './ast/expressions/tagged-template';
export { createAwaitExpression, AwaitExpression } from './ast/expressions/await-expr';
export { createObjectLiteral, ObjectLiteral } from './ast/expressions/object-literal';
export { createPropertyDefinition, PropertyDefinition } from './ast/expressions/property-definition';
export { createPropertyMethod, PropertyMethod } from './ast/expressions/property-method';
export { createSpreadProperty, SpreadProperty } from './ast/expressions/spread-property';
export { createCoverInitializedName, CoverInitializedName } from './ast/expressions/cover-initialized-name';
export { createMethodDefinition, MethodDefinition } from './ast/expressions/method-definition';
export { createArrowFunction, ArrowFunction } from './ast/expressions/arrow-function';
export { createRegularExpressionLiteral, RegularExpressionLiteral } from './ast/expressions/regular-expr';
export { createExpressionStatement, ExpressionStatement } from './ast/statements/expression-stmt';
export { createNameSpaceImport, NameSpaceImport } from './ast/module/namespace-import';
export { createFromClause, FromClause } from './ast/module/from-clause';
export { createExportDeclaration, ExportDeclaration } from './ast/module/export-declaration';
export { createExportDefault, ExportDefault } from './ast/module/export-default';
export { createExportFromClause, ExportFromClause } from './ast/module/export-from-clause';
export { createExportSpecifier, ExportSpecifier } from './ast/module/export-specifier';
export { createExportsList, ExportsList } from './ast/module/exports-list';
export { createImportClause, ImportClause } from './ast/module/import-clause';
export { createImportDeclaration, ImportDeclaration } from './ast/module/import-declaration';
export { createImportsList, ImportsList } from './ast/module/imports-list';
export { createNamedExports, NamedExports } from './ast/module/named-exports';
export { createNamedImports, NamedImports } from './ast/module/named-imports';
export { createImportSpecifier, ImportSpecifier } from './ast/module/import-specifier';
export { createSpreadElement, SpreadElement } from './ast/expressions/spread-element';
export { createNewTarget, NewTarget } from './ast/expressions/new-target';
export { createYieldExpression, YieldExpression } from './ast/expressions/yield-expr';
export { createNewExpression, NewExpression } from './ast/expressions/new-expr';
export { createArgumentList, ArgumentList } from './ast/expressions/argument-list';
export { createFunctionBody, FunctionBody } from './ast/expressions/function-body';
export { createFunctionExpression, FunctionExpression } from './ast/expressions/function-expr';
export { createFunctionStatementList, FunctionStatementList } from './ast/expressions/function-stmt-list';
export { createFormalParameterList, FormalParameterList, FormalParameter } from './ast/expressions/formal-parameter-list';
export { createElison, Elison } from './ast/expressions/elison';
export { createBindingElementList, BindingElementList } from './ast/expressions/binding-element-list';
export { createBindingElement, BindingElement } from './ast/expressions/binding-element';
export { createArrayBindingPattern, ArrayBindingPattern } from './ast/expressions/array-binding-pattern';
export { createElementList, ElementList } from './ast/expressions/element-list';
export { createBindingProperty, BindingProperty } from './ast/expressions/binding-property';
export { createBindingPropertyList, BindingPropertyList } from './ast/expressions/binding-property-list';
export { createObjectBindingPattern, ObjectBindingPattern } from './ast/expressions/object-binding-pattern';
export { createRootNode, RootNode } from './ast/root-node';
export { createIdentifier, Identifier } from './ast/expressions/identifier-expr';
export { createComputedPropertyName, ComputedPropertyName } from './ast/expressions/computed-property-name';
export { createArrayLiteral, ArrayLiteral } from './ast/expressions/array-literal';
export { createAssignmentExpression, AssignmentExpression } from './ast/expressions/assignment-expr';
export { createParenthesizedExpression, ParenthesizedExpression } from './ast/expressions/parenthesized-expr';
export { createUnaryExpression, UnaryExpression } from './ast/expressions/unary-expr';
export { createPostfixUpdateExpression, PostfixUpdateExpression } from './ast/expressions/postfix-update-expr';
export { createPrefixUpdateExpression, PrefixUpdateExpression } from './ast/expressions/prefix-update-expr';
export { createPrivateIdentifier, PrivateIdentifier } from './ast/expressions/private-identifier';
export { createIndexExpression, IndexExpression } from './ast/expressions/index-expr';
export { createMemberAccessExpression, MemberAccessExpression } from './ast/expressions/member-access-expr';
export { createCallExpression, CallExpression } from './ast/expressions/call-expr';
export { createCommaOperator, CommaOperator } from './ast/expressions/comma-operator';
export { createNumericLiteral, NumericLiteral } from './ast/expressions/numeric-literal';
export { createStringLiteral, StringLiteral } from './ast/expressions/string-literal';
export { createBigIntLiteral, BigIntLiteral } from './ast/expressions/big-int-literal';
export { createConditionalExpression, ConditionalExpression } from './ast/expressions/conditional-expr';
export { createBinaryExpression, BinaryExpression } from './ast/expressions/binary-expr';
export { createSubtractionType, SubtractionType } from './ast/types/subtraction-type';
export { createIndexedAccessType, IndexedAccessType } from './ast/types/indexed-access-type';
export { createTypeSpreadProperty, TypeSpreadProperty } from './ast/types/type-spread-property';
export { createInternalSlot, InternalSlot } from './ast/types/internal-slot';
export { createArrayType, ArrayType } from './ast/types/array-type';
export { createTypeofType, TypeofType } from './ast/types/typeof-type';
export { createNullableType, NullableType } from './ast/types/nullable-type';
export { createObjectType, ObjectType } from './ast/types/object-type';
export { createStringType, StringType } from './ast/types/string-type';
export { createNumberType, NumberType } from './ast/types/number-type';
export { createCallSignature, CallSignature } from './ast/types/call-signature';
export { createIndexSignatureDeclaration, IndexSignatureDeclaration } from './ast/types/index-signature-declaration';
export { createIntersectionType, IntersectionType } from './ast/types/intersection-type';
export { createUnionType, UnionType } from './ast/types/union-type';
export { createTypeAnnotation, TypeAnnotation } from './ast/types/type-annotation';
export { createQualifiedType, QualifiedType } from './ast/types/qualified-type';
export { createTypeReference, TypeReference } from './ast/types/type-reference';
export { createTypeParameter, TypeParameter } from './ast/types/type-parameter';
export { createTupleType, TupleType } from './ast/types/tuple-type';
export { createArrowFunctionType, ArrowFunctionType } from './ast/types/arrow-function-type';
export { createParenthesizedType, ParenthesizedType } from './ast/types/parenthesized-type';
export { createFunctionType, FunctionType } from './ast/types/function-type';
export { createFunctionTypeParameterList, FunctionTypeParameterList } from './ast/types/function-type-parameter-list';
export { createFunctionTypeParameters, FunctionTypeParameter } from './ast/types/function-type-parameter';
export { createTypeParameterDeclaration, TypeParameterDeclaration } from './ast/types/type-parameter-declaration';
export { createBindingList, BindingList } from './ast/statements/binding-list';
export { createVariableDeclarationList, VariableDeclarationList } from './ast/statements/variable-declarationList';
export { createVariableStatement, VariableStatement } from './ast/statements/variable-stmt';
export { createVariableDeclaration, VariableDeclaration } from './ast/statements/variable-declaration';
export { createClassDeclaration, ClassDeclaration } from './ast/statements/class-declaration';
export { createLexicalBinding, LexicalBinding } from './ast/statements/lexical-binding';
export { createLexicalDeclaration, LexicalDeclaration } from './ast/statements/lexical-declaration';
export { createTypeAlias, TypeAlias } from './ast/types/type-alias-declaration';
export { createOpaqueType, OpaqueType } from './ast/types/opaque-type';
export { createTypeProperty, TypeProperty } from './ast/types/type-property';
export { createFunctionDeclaration, FunctionDeclaration } from './ast/statements/function-declaration';
export { createDummyIdentifier, DummyIdentifier } from './ast/internal/dummy-identifier';
export { getLeadingComments, getTrailingComments } from './parser/scanner/comments';
export { visitEachChild, visitNodes, visitNode } from './visitor';
export { createUniqueIdentifier, UniqueIdentifier } from './ast/internal/unique-identifier';
export { createTransform, Transform } from './transform/core';
export { fuzzModule, fuzzScript } from './fuzzer/';
export { aladdin } from './diagnostic/reporters/aladdin';
export { eslint } from './diagnostic/reporters/eslint';
export { compact } from './diagnostic/reporters/compact';
export { unix } from './diagnostic/reporters/unix';
export {
  isStatementNode,
  isExpressionNode,
  hasNoChildren,
  isSingleQuote,
  containsSeparator,
  hasUnicodeEscape,
  isConstructor,
  isGenerator,
  isAsync,
  isDeclared,
  isNoneSimpleParamList,
  isIdentifier,
  hasExtendedUnicodeEscape,
  isImplicitOctal,
  isOctalIntegerLiteral,
  isBinaryIntegerLiteral,
  hexIntegerLiteral,
  containsInvalidEscape,
  isAssignOp,
  isBinaryOp,
  hasNewLine,
  isStatementStart,
  isExpressionStart,
  isPropertyOrCall,
  isEllipsis,
  isInOrOf,
  isKeyword,
  isLexical,
  isFutureReserved,
  isStartOfType,
  isSemicolon,
  isTypeNode,
  isTemplateLiteral,
  shouldIgnoreNextNode
} from './parser/common';

/**
 * Parse a script, optionally with various options.
 */
export function parseScript(source: string, options?: Options, onError?: OnError): RootNode {
  return parse(
    source,
    /* filename */ '__root__',
    Context.TopLevel,
    /* isModule */ false,
    onError || function () {},
    options
  );
}

/**
 * Parse a module, optionally with various options.
 */
export function parseModule(source: string, options?: Options, onError?: OnError): RootNode {
  return parse(
    source,
    '__root__',
    Context.Module | Context.TopLevel | Context.Strict | Context.AllowImportMeta,
    /* isModule */ true,
    onError || function () {},
    options
  );
}

export function print(root: any, options?: PrinterOptions): string {
  return printSource(root, options);
}

export function lintScript(source: string, options: LinterOptions, lint: LinterRules): RootNode {
  return parse(
    source,
    /* filename */ '__root__',
    Context.TopLevel | (options.fix ? Context.Autofix : Context.None),
    /* isModule */ false,
    function (diagnosticSource: DiagnosticSource, kind: DiagnosticKind, message: string, start: number, end: number) {
      options.reporter(diagnosticSource, kind, message, start, end, source);
    },
    { lint }
  );
}

export function lintModule(source: string, options: LinterOptions, lint: LinterRules): RootNode {
  return parse(
    source,
    '__root__',
    Context.Module |
      Context.TopLevel |
      Context.Strict |
      Context.AllowImportMeta |
      (options.fix ? Context.Autofix : Context.None),
    /* isModule */ true,
    function (diagnosticSource: DiagnosticSource, kind: DiagnosticKind, message: string, start: number, end: number) {
      options.reporter(diagnosticSource, kind, message, start, end, source);
    },
    { lint }
  );
}

export function printScript(source: string, options?: PrinterOptions): string {
  return printSource(
    parseScript(source, { next: true }, function (_source, _kind, msg, line, column) {
      throw msg + '(' + line + ', ' + column + ')';
    }),
    options
  );
}

export function printModule(source: string, options?: PrinterOptions): string {
  return printSource(
    parseModule(source, { next: true }, function (_source, _kind, msg, line, column) {
      throw msg + '(' + line + ', ' + column + ')';
    }),
    options
  );
}
