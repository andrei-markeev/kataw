import { SyntaxNode, SyntaxKind, NodeFlags, tokenToString } from '../ast/syntax-node';
import { TokenSyntaxKind, createToken, SyntaxToken } from '../ast/token';
import { nextToken } from './scanner/scanner';
import { DiagnosticSource, DiagnosticKind } from '../diagnostic/diagnostic';
import { DiagnosticCode, diagnosticMap } from '../diagnostic/diagnostic-code';
import { Identifier } from '../ast/expressions/identifier-expr';
import { ExpressionNode } from '../ast/expressions';
import { StatementNode } from '../ast/statements';
import { TypeNode } from '../ast/types';

export const enum Tristate {
  False, // There *cannot* be a parenthesized arrow function here.
  True, // We definitely expect a parenthesized arrow function here.
  Unknown // There *might* be a parenthesized arrow function here.
}

export const enum ParseFunctionFlag {
  None = 0,
  IsDefaultModifier = 1 << 0, // Parsed with 'default' modifer in 'eport default'
  DisallowAsyncArrow = 1 << 1, // Disallows async arrows in export declarations
  DisallowGenerator = 1 << 2 // Disallow generators in 'IfStatement' and 'LabelledStatement'
}

export const enum FunctionTypeFlags {
  None = 0,
  Getter = 1 << 0,
  Setter = 1 << 1
}

export const enum LeftHandSide {
  None = 0,
  NotAssignable = 1 << 0, // The left hand side is not assignable
  DisallowClassExtends = 1 << 1, // Disallow expr on the left side of 'class extends'
  ForStatement = 1 << 2, // Left hand side in 'ForStatement'
  NewExpression = 1 << 3
}

export const enum ObjectTypeFlag {
  None = 0,
  AllowStatic = 1 << 0, // Allows 'static' modifier if parsed as an declared class
  AllowProto = 1 << 1 // Allows '__proto__' if parsed as an declared class
}

export const enum Context {
  None = 0,
  OptionsNext = 1 << 0,
  OptionsAllowTypes = 1 << 1,
  OptionsDisableWebCompat = 1 << 2,
  TopLevel = 1 << 3, // If node was parsed at the top level
  InBlock = 1 << 4, // If node was parsed in either 'BlockStatement' or 'FunctionStatementList'
  ClassStaticBlockContext = 1 << 5, // If node was parsed in a static block.
  AllowRegExp = 1 << 6, // Allow parsing an regular expression
  DisallowInContext = 1 << 7, // If node was parsed in a context where 'in-expressions' are not allowed
  IsOutsideFnOrArrow = 1 << 8, // Disallows 'ReturnStatement' if outside either a function or arrow function
  YieldContext = 1 << 9, // If node was parsed in the 'yield' context created when parsing a generator
  AwaitContext = 1 << 10, // If node was parsed in the 'await' context created when parsing an async function
  InsideSwitch = 1 << 11, // If node was parsed in a 'SwitchStatement'
  InsideLoop = 1 << 12, // If node was parsed in a iteration loop
  NewTarget = 1 << 13, // Allow parsing 'NewTarget'
  Parameters = 1 << 14, // If node was parsed in a formal parameter list
  InForOfAwait = 1 << 15, // If node was parsed in a context where 'in-expressions' are not allowed
  SuperCall = 1 << 16,
  SuperProperty = 1 << 17,
  InConstructor = 1 << 18, // If node was parsed with a 'constructor'
  Strict = 1 << 19, // If node was parsed in strict mode  context
  Module = 1 << 20, // If node was parsed in module goal context
  InClassBody = 1 << 21, // If node was parsed in a class body. Used with 'PrivateIdentifiers'
  InConditionalExpr = 1 << 22, // If node was parsed as part of 'ConditionalExpression'
  ArrowOrigin = 1 << 24, // If node origin was not part of the types.
  AllowImportMeta = 1 << 25, // Allows parsing 'Import meta'. *Only* allowed for module goal
  LexicalContext = 1 << 26, // If node was parsed in a lexical context,
  DecoratorContext = 1 << 27,
  InTypeParameterInstantiation = 1 << 28,
  TaggedTemplate = 1 << 23,
  Autofix = 1 << 29
}

export const enum SubRules {
  None = 0,
  CharacterClass = 1 << 0,
  Function = 1 << 1,
  Pattern = 1 << 2,
  Forbid = 1 << 3, // Advice use of 'forOf' instead of 'forIn'
  Guard = 1 << 4 // Require `for-in` loops to include an `if` statement
}

export const enum LinterFlags {
  None = 0,
  NoCatchAssign = 1 << 0, // Disallow assignment operators in catch statement
  NoCommaOperator = 1 << 1,
  NoDebugger = 1 << 2,
  NoDelete = 1 << 3,
  NoEmpty = 1 << 4,
  DefaultClause = 1 << 5,
  NoBitwise = 1 << 6,
  //NonEmpty = 1 << 7,
  NoVar = 1 << 8,
  NoUnusedVariables = 1 << 9,
  NoSparseArray = 1 << 10,
  NoNestedTernary = 1 << 11,
  SwitchDefault = 1 << 12,
  NoUnsafeFinally = 1 << 13,
  Quotemark = 1 << 14,
  NoNullKeyword = 1 << 15,
  ForIn = 1 << 16,
  NoEval = 1 << 17,
  NoDuplicateSwitchCase = 1 << 18,
  NoConsole = 1 << 19,
  NoAny = 1 << 20,
  ArrowParens = 1 << 21,
  EnforceCurly = 1 << 22,
  LinebreakStyle = 1 << 23,
  NoArg = 1 << 24,
  NoDeleteVar = 1 << 25,
  NoNullUndefinedUnion = 1 << 26,
  NoTrailingWhitespace = 1 << 27,
  NoUseBeforeDeclare = 1 << 28,
  PreferConst = 1 << 29,
  NoWhitespace = 1 << 30
}

export const enum DestructibleKind {
  None = 0,
  MustDestruct = 1 << 0,
  NotDestructible = 1 << 1,
  Assignable = 1 << 2,
  Destructible = 1 << 3,
  DisallowTrailing = 1 << 4,
  CoverInitializedName = 1 << 5,
  EvalOrArguments = 1 << 6,
  YieldContext = 1 << 7
}

export const enum BindingType {
  None = 0,
  Pattern = 1 << 0,
  Assignment = 1 << 1,
  AllowLHS = 1 << 2,
  ArgumentList = 1 << 3,
  Let = 1 << 4,
  Const = 1 << 5,
  Var = 1 << 6,
  CatchIdentifier = 1 << 7,
  CatchPattern = 1 << 8,
  Literal = 1 << 9,
  FunctionLexical = 1 << 10,
  FunctionStatement = 1 << 11,
  Class = 1 << 12,
  Empty = 1 << 13,
  Export = 1 << 14,
  InArrow = 1 << 15
}
export const enum DestuctionKind {
  NORMAL,
  REST,
  FOR
}
/**
 * Scope kinds
 */
export const enum ScopeKind {
  None = 0,
  ForStatement = 1 << 0,
  Block = 1 << 1,
  CatchStatement = 1 << 2,
  SwitchStatement = 1 << 3,
  ArgList = 1 << 4,
  TryStatement = 1 << 5,
  CatchBlock = 1 << 6,
  FunctionBody = 1 << 7,
  FunctionRoot = 1 << 8,
  FunctionParams = 1 << 9,
  ArrowParams = 1 << 10,
  CatchIdentifier = 1 << 11
}

export type OnError = (
  source: DiagnosticSource,
  kind: DiagnosticKind,
  message: string,
  start: number,
  end: number
) => void | undefined;

/**
 * The scope interface.
 */
export interface ScopeState {
  scope: ScopeState | null;
  kind: ScopeKind;
  flags: ScopeFlags;
}

export const enum ScopeFlags {
  None = 0,
  Error = 1 << 0
}

/**
 * The parser interface.
 */
export interface ParserState {
  source: string;
  nodeFlags: NodeFlags;
  linterFlags: LinterFlags;
  subRules: SubRules;
  curPos: number;
  pos: number;
  token: any;
  tokenPos: number;
  end: number;
  onError: OnError;
  diagnosticStartPos: number;
  destructible: DestructibleKind;
  assignable: boolean;
  tokenValue: any;
  tokenRaw: string;
  previousErrorPos: number;
}

export function consumeOpt<T extends TokenSyntaxKind>(parser: ParserState, context: Context, token: T): boolean {
  if (parser.token === token) {
    nextToken(parser, context);
    return true;
  }
  return false;
}

export function consume<T extends TokenSyntaxKind>(
  parser: ParserState,
  context: Context,
  token: T,
  diagnosticMessage?: DiagnosticCode
): boolean {
  if (parser.token === token) {
    nextToken(parser, context);
    return true;
  }

  if (diagnosticMessage && parser.previousErrorPos !== parser.pos) {
    parser.previousErrorPos = parser.pos;
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[diagnosticMessage],
      parser.tokenPos,
      parser.pos
    );
  }
  return false;
}

export function consumeOptToken<T extends TokenSyntaxKind>(
  parser: ParserState,
  context: Context,
  token: T
): SyntaxToken<T> | any {
  if (parser.token === token) {
    const { curPos, token, nodeFlags } = parser;
    nextToken(parser, context);
    return createToken(token, nodeFlags | NodeFlags.NoChildren, curPos, parser.curPos);
  }
  return null;
}

export function consumeToken<T extends TokenSyntaxKind>(
  parser: ParserState,
  context: Context,
  token: T,
  diagnosticMessage?: DiagnosticCode
): SyntaxToken<T> | any {
  if (parser.token === token) {
    const { curPos, token, nodeFlags } = parser;
    nextToken(parser, context);
    return createToken(token, nodeFlags | NodeFlags.NoChildren, curPos, parser.curPos);
  }

  if (diagnosticMessage && parser.previousErrorPos !== parser.pos) {
    parser.previousErrorPos = parser.pos;
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[diagnosticMessage],
      parser.curPos,
      parser.pos
    );
  }
  return null;
}

export function consumeAndCheckForEscapeSequence<T extends TokenSyntaxKind>(
  parser: ParserState,
  context: Context,
  flag: NodeFlags,
  pos: number
): any {
  const { token, nodeFlags } = parser;
  if (nodeFlags & 0b00000000000000000110000000000000) {
    parser.onError(
      DiagnosticSource.Parser,
      DiagnosticKind.Error,
      diagnosticMap[DiagnosticCode.Keywords_cannot_contain_escape_characters],
      pos,
      parser.pos
    );
  }
  parser.assignable = false;
  nextToken(parser, context);
  return createToken(token, flag | NodeFlags.NoChildren | nodeFlags, pos, parser.curPos);
}

export function consumeKeywordAndCheckForEscapeSequence<T extends TokenSyntaxKind>(
  parser: ParserState,
  context: Context,
  token: T,
  flag: NodeFlags,
  pos: number,
  diagnosticMessage?: DiagnosticCode
): any {
  if (parser.token === token) {
    const { token, nodeFlags } = parser;
    if (nodeFlags & 0b00000000000000000110000000000000) {
      report(parser, parser.curPos, DiagnosticCode.Keywords_cannot_contain_escape_characters);
    }
    parser.assignable = false;
    nextToken(parser, context);
    return createToken(token, flag | NodeFlags.NoChildren | nodeFlags, pos, parser.curPos);
  }
  if (diagnosticMessage && parser.previousErrorPos !== parser.pos) {
    report(parser, parser.curPos, diagnosticMessage);
  }
  return null;
}

export function parseSemicolon(parser: ParserState, context: Context): boolean {
  // Check for automatic semicolon insertion according to
  // the rules given in ECMA-262, section 7.9, page 21.
  if (parser.token & SyntaxKind.Smi || parser.nodeFlags & NodeFlags.NewLine) {
    // consume the semicolon if it was explicitly provided.
    return consumeOpt(parser, context | Context.AllowRegExp, SyntaxKind.Semicolon);
  }
  if (parser.previousErrorPos !== parser.pos) {
    parser.previousErrorPos = parser.pos;
    report(
      parser,
      parser.curPos,
      DiagnosticCode._0_is_not_allowed_here_Did_you_mean_1,
      tokenToString(parser.token),
      ';'
    );
  }
  return false;
}

export function speculate(parser: ParserState, context: Context, callback: any, rollback: boolean) {
  const { pos, curPos, tokenPos, tokenRaw, token, tokenValue, nodeFlags } = parser;
  const result = callback(parser, context);

  // If our callback returned something 'falsy' or we're just looking ahead,
  // then unconditionally restore us to where we were.
  if (!result || rollback) {
    parser.pos = pos;
    parser.curPos = curPos;
    parser.tokenPos = tokenPos;
    parser.token = token;
    parser.tokenValue = tokenValue;
    parser.nodeFlags = nodeFlags;
    parser.tokenRaw = tokenRaw;
  }
  return result;
}

export function canParseSemicolon(parser: ParserState): number {
  // We can parse out an optional semicolon in ASI cases in the following cases.
  return parser.token & SyntaxKind.Smi || parser.nodeFlags & NodeFlags.NewLine;
}

export function isValidDirective(parser: ParserState): boolean {
  return (
    parser.token === SyntaxKind.NumericLiteral ||
    ((parser.token & (SyntaxKind.IsPropertyOrCall | SyntaxKind.IsBinaryOp | SyntaxKind.IsExpressionStart)) === 0 &&
      !!canParseSemicolon(parser))
  );
}

export function isIterationStatement(t: SyntaxKind): boolean {
  // If encounter 'for', 'while', or 'do', it's an valid iteration statement start
  //
  // Examples:
  //      for(...) {}
  //      while(...) {}
  //      do { } while(...)
  return t === SyntaxKind.ForKeyword || t === SyntaxKind.WhileKeyword || t === SyntaxKind.DoKeyword;
}

export function isCaseOrDefaultClause(t: SyntaxKind): boolean {
  return t === SyntaxKind.DefaultKeyword || t === SyntaxKind.CaseKeyword;
}

export function isTypeNode(node: SyntaxNode): node is TypeNode {
  return (node.flags & NodeFlags.IsTypeNode) === NodeFlags.IsTypeNode;
}

export function isStatementNode(node: SyntaxNode): node is StatementNode {
  return (node.flags & NodeFlags.IsStatement) === NodeFlags.IsStatement;
}

export function isExpressionNode(node: SyntaxNode): node is ExpressionNode {
  return (node.flags & NodeFlags.ExpressionNode) === NodeFlags.ExpressionNode;
}

export function hasNoChildren(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.NoChildren) === NodeFlags.NoChildren;
}

export function isSingleQuote(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.SingleQuote) === NodeFlags.SingleQuote;
}

export function containsSeparator(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.ContainsSeparator) === NodeFlags.ContainsSeparator;
}

export function hasUnicodeEscape(node: SyntaxNode): boolean {
  return (node.flags & (NodeFlags.ExtendedUnicodeEscape | NodeFlags.UnicodeEscape)) !== 0;
}

export function hasExtendedUnicodeEscape(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.ExtendedUnicodeEscape) === NodeFlags.ExtendedUnicodeEscape;
}

export function isConstructor(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.Constructor) === NodeFlags.Constructor;
}

export function isGenerator(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.Generator) === NodeFlags.Generator;
}
export function isAsync(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.Async) === NodeFlags.Async;
}

export function isLexical(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.Lexical) === NodeFlags.Lexical;
}

export function isDeclared(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.Declared) === NodeFlags.Declared;
}
export function isNoneSimpleParamList(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.NoneSimpleParamList) === NodeFlags.NoneSimpleParamList;
}

export function isImplicitOctal(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.LegacyOctal) === NodeFlags.LegacyOctal;
}
export function isOctalIntegerLiteral(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.OctalIntegerLiteral) === NodeFlags.OctalIntegerLiteral;
}
export function isBinaryIntegerLiteral(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.BinaryIntegerLiteral) === NodeFlags.BinaryIntegerLiteral;
}

export function hexIntegerLiteral(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.HexIntegerLiteral) === NodeFlags.HexIntegerLiteral;
}

export function containsInvalidEscape(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.ContainsInvalidEscape) === NodeFlags.ContainsInvalidEscape;
}

export function isAssignOp(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsAssignOp) === SyntaxKind.IsAssignOp;
}

export function isBinaryOp(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsBinaryOp) === SyntaxKind.IsBinaryOp;
}

export function isStatementStart(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsStatementStart) === SyntaxKind.IsStatementStart;
}

export function isIdentifier(node: SyntaxNode): node is Identifier {
  return (node.kind & SyntaxKind.IsIdentifier) === SyntaxKind.IsIdentifier;
}

export function isExpressionStart(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsExpressionStart) === SyntaxKind.IsExpressionStart;
}

export function isPropertyOrCall(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsPropertyOrCall) === SyntaxKind.IsPropertyOrCall;
}

export function isEllipsis(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsEllipsis) === SyntaxKind.IsEllipsis;
}

export function isInOrOf(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsInOrOf) === SyntaxKind.IsInOrOf;
}

export function isKeyword(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsKeyword) === SyntaxKind.IsKeyword;
}

export function isFutureReserved(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsFutureReserved) === SyntaxKind.IsFutureReserved;
}

export function isStartOfType(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsStartOfType) === SyntaxKind.IsStartOfType;
}

export function isSemicolon(node: SyntaxNode): boolean {
  return (node.kind & SyntaxKind.IsSemicolon) === SyntaxKind.IsSemicolon;
}

export function hasNewLine(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.NewLine) === NodeFlags.NewLine;
}

export function isTemplateLiteral(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.TemplateLiteral) === NodeFlags.TemplateLiteral;
}

export function shouldIgnoreNextNode(node: SyntaxNode): boolean {
  return (node.flags & NodeFlags.IgnoreNextNode) === NodeFlags.IgnoreNextNode;
}

export function addVarOrBlock(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  name: string,
  bindingType: BindingType
) {
  if (bindingType & BindingType.Var) {
    addVarName(parser, context, scope, name, bindingType);
  } else {
    addBlockName(parser, context, scope, name, bindingType);
  }
}

export function addVarName(
  parser: ParserState,
  context: Context,
  scope: ScopeState,
  name: string,
  kind: BindingType
): void {
  if (scope) {
    let currentScope: any = scope;

    while (currentScope && (currentScope.kind & ScopeKind.FunctionRoot) === 0) {
      if (currentScope['#' + name] & (BindingType.Let | BindingType.Const | BindingType.FunctionLexical)) {
        report(parser, parser.curPos, DiagnosticCode.Cannot_redeclare_block_scoped_variable_0, name);
      } else if (currentScope['#' + name] & (BindingType.CatchIdentifier | BindingType.CatchPattern)) {
        if (
          context & (Context.Strict | Context.OptionsDisableWebCompat) ||
          (currentScope['#' + name] & BindingType.CatchIdentifier) === 0
        ) {
          report(parser, parser.curPos, DiagnosticCode.Cannot_bound_an_already_bound_catch_clause_binding);
        }
      }

      currentScope['#' + name] = kind;
      currentScope = currentScope.scope;
    }
  }
}

export function addBlockName(parser: ParserState, context: Context, scope: any, name: string, type: BindingType): void {
  if (scope) {
    const value = scope['#' + name];

    if (value) {
      if ((value & BindingType.Empty) === 0) {
        if (type & BindingType.ArgumentList) {
          parser.diagnosticStartPos = parser.curPos;
          scope.flags = ScopeFlags.Error;
        } else if (
          context & Context.OptionsDisableWebCompat ||
          (value & BindingType.FunctionLexical) === 0 ||
          (context & Context.InBlock) === 0
        ) {
          report(parser, parser.curPos, DiagnosticCode.Duplicate_bindingidentifier_0, name);
        }
      }
    } else {
      const parent = scope.scope;
      if (scope.kind & ScopeKind.FunctionBody && parent['#' + name] && (parent['#' + name] & BindingType.Empty) === 0) {
        report(parser, parser.curPos, DiagnosticCode.Cannot_redeclare_block_scoped_variable_0, name);
      }

      if (
        scope.kind & ScopeKind.ArrowParams &&
        value &&
        (value & BindingType.Empty) === 0 &&
        type & BindingType.ArgumentList
      ) {
        parser.diagnosticStartPos = parser.curPos;
        scope.flags = ScopeFlags.Error;
      }

      if (
        scope.kind & ScopeKind.CatchBlock &&
        parent['#' + name] & (BindingType.CatchIdentifier | BindingType.CatchPattern)
      ) {
        parser.onError(
          DiagnosticSource.Parser,
          DiagnosticKind.Error,
          diagnosticMap[DiagnosticCode.A_block_scoped_variable_cannot_shadow_a_catch_clause_binding],
          parser.curPos,
          parser.pos
        );
      }
    }
    scope['#' + name] = type;
  }
}
export function lookupContinueTarget(labels: any, value: string): boolean {
  if (labels) {
    let set = labels;

    do {
      if (set.iteration && set.iteration.has(value)) {
        return false;
      }
    } while ((set = set.parent));
  }
  return true;
}

export function lookupBreakTarget(labels: any, value: string): boolean {
  if (labels) {
    let labelSet = labels;
    do {
      if (labelSet.statements.has(value)) {
        return false;
      }
    } while ((labelSet = labelSet.parent));
  }
  return true;
}

export function lastOrUndefined<T>(array: readonly T[]): any {
  return array.length === 0 ? undefined : array[array.length - 1];
}

export function report(parser: ParserState, pos: number, diagnostic: DiagnosticCode, ...args: string[]) {
  let message = diagnosticMap[diagnostic];
  if (arguments.length > 3) {
    message = message.replace(/{(\d+)}/g, (__match: string, i: number) => args[i]);
  }
  parser.onError(DiagnosticSource.Parser, DiagnosticKind.Error | DiagnosticKind.EarlyError, message, pos, parser.pos);
}
