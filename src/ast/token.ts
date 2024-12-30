import { SyntaxKind, SyntaxNode, NodeFlags, TransformFlags } from './syntax-node';

/**
 * A token. This can include single characters, operators and keywords.
 */
export interface SyntaxToken<TokenKind extends TokenSyntaxKind> extends SyntaxNode {
  kind: TokenKind;
}

export type TokenSyntaxKind =
  | SyntaxKind.EndOfFileToken
  | SyntaxKind.LeftBrace
  | SyntaxKind.RightBrace
  | SyntaxKind.LetKeyword
  | SyntaxKind.Colon
  | SyntaxKind.LeftBracket
  | SyntaxKind.LooseEqual
  | SyntaxKind.RightBracket
  | SyntaxKind.LeftParen
  | SyntaxKind.LogicalOr
  | SyntaxKind.LogicalOrAssign
  | SyntaxKind.LogicalAnd
  | SyntaxKind.LogicalAndAssign
  | SyntaxKind.RightParen
  | SyntaxKind.Decrement
  | SyntaxKind.UnknownToken
  | SyntaxKind.Increment
  | SyntaxKind.DeleteKeyword
  | SyntaxKind.ProtoKeyword
  | SyntaxKind.Negate
  | SyntaxKind.Complement
  | SyntaxKind.PrivateIdentifier
  | SyntaxKind.QuestionMarkPeriod
  | SyntaxKind.TemplateCont
  | SyntaxKind.Target
  | SyntaxKind.Meta
  | SyntaxKind.TemplateTail
  | SyntaxKind.ImplementsKeyword
  | SyntaxKind.FromKeyword
  | SyntaxKind.Add
  | SyntaxKind.AddAssign
  | SyntaxKind.Subtract
  | SyntaxKind.SubtractAssign
  | SyntaxKind.EvalIdentifier
  | SyntaxKind.ArgumentsIdentifier
  | SyntaxKind.ConstKeyword
  | SyntaxKind.TypeofKeyword
  | SyntaxKind.TypeofType
  | SyntaxKind.VoidKeyword
  | SyntaxKind.GetKeyword
  | SyntaxKind.SetKeyword
  | SyntaxKind.ContinueKeyword
  | SyntaxKind.EnumKeyword
  | SyntaxKind.InstanceofKeyword
  | SyntaxKind.NewTarget
  | SyntaxKind.PackageKeyword
  | SyntaxKind.PrivateKeyword
  | SyntaxKind.ProtectedKeyword
  | SyntaxKind.Exponentiate
  | SyntaxKind.ExponentiateAssign
  | SyntaxKind.PublicKeyword
  | SyntaxKind.ConstructorKeyword
  | SyntaxKind.Comma
  | SyntaxKind.Multiply
  | SyntaxKind.MultiplyAssign
  | SyntaxKind.YieldKeyword
  | SyntaxKind.Period
  | SyntaxKind.ExtendsKeyword
  | SyntaxKind.QuestionMarkPeriod
  | SyntaxKind.QuestionMarkQuestionMark
  | SyntaxKind.CoalesceAssign
  | SyntaxKind.NumericLiteral
  | SyntaxKind.StaticKeyword
  | SyntaxKind.StringLiteral
  | SyntaxKind.NewKeyword
  | SyntaxKind.AsKeyword
  | SyntaxKind.Decorator
  | SyntaxKind.FromKeyword
  | SyntaxKind.SuperKeyword
  | SyntaxKind.TemplateTail
  | SyntaxKind.TemplateSpan
  | SyntaxKind.ImportKeyword
  | SyntaxKind.ThisKeyword
  | SyntaxKind.NullKeyword
  | SyntaxKind.BigIntLiteral
  | SyntaxKind.TrueKeyword
  | SyntaxKind.QuestionMark
  | SyntaxKind.AnyKeyword
  | SyntaxKind.BooleanKeyword
  | SyntaxKind.UndefinedKeyword
  | SyntaxKind.UnknownKeyword
  | SyntaxKind.LessThan
  | SyntaxKind.LessThanOrEqual
  | SyntaxKind.GreaterThan
  | SyntaxKind.GreaterThanOrEqual
  | SyntaxKind.BitwiseOr
  | SyntaxKind.BitwiseOrAssign
  | SyntaxKind.BitwiseAnd
  | SyntaxKind.BitwiseAndAssign
  | SyntaxKind.BitwiseXor
  | SyntaxKind.BitwiseXorAssign
  | SyntaxKind.FalseKeyword
  | SyntaxKind.Arrow
  | SyntaxKind.Ellipsis
  | SyntaxKind.Assign
  | SyntaxKind.Semicolon
  | SyntaxKind.DoKeyword
  | SyntaxKind.ElseKeyword
  | SyntaxKind.IfKeyword
  | SyntaxKind.WhileKeyword
  | SyntaxKind.DefaultKeyword
  | SyntaxKind.CaseKeyword
  | SyntaxKind.AwaitKeyword
  | SyntaxKind.OfKeyword
  | SyntaxKind.InKeyword
  | SyntaxKind.ForKeyword
  | SyntaxKind.ContinueKeyword
  | SyntaxKind.BreakKeyword
  | SyntaxKind.ThrowKeyword
  | SyntaxKind.TryKeyword
  | SyntaxKind.CatchKeyword
  | SyntaxKind.FinallyKeyword
  | SyntaxKind.FunctionKeyword
  | SyntaxKind.DebuggerKeyword
  | SyntaxKind.SwitchKeyword
  | SyntaxKind.WithKeyword
  | SyntaxKind.ReturnKeyword
  | SyntaxKind.TypeKeyword
  | SyntaxKind.VarKeyword
  | SyntaxKind.BooleanKeyword
  | SyntaxKind.EmptyKeyword
  | SyntaxKind.StringKeyword
  | SyntaxKind.NumberKeyword
  | SyntaxKind.NeverKeyword
  | SyntaxKind.ObjectKeyword
  | SyntaxKind.BigIntLiteral
  | SyntaxKind.MixedKeyword
  | SyntaxKind.DeclareKeyword
  | SyntaxKind.ClassKeyword
  | SyntaxKind.OpaqueKeyword
  | SyntaxKind.ExportKeyword
  | SyntaxKind.SymbolKeyword
  | SyntaxKind.RegularExpression
  | SyntaxKind.Multiply
  | SyntaxKind.MultiplyAssign
  | SyntaxKind.AsyncKeyword
  | SyntaxKind.Modulo
  | SyntaxKind.ModuloAssign
  | SyntaxKind.Divide
  | SyntaxKind.DivideAssign
  | SyntaxKind.StrictEqual
  | SyntaxKind.LooseNotEqual
  | SyntaxKind.StrictNotEqual
  | SyntaxKind.ShiftRight
  | SyntaxKind.ShiftRightAssign
  | SyntaxKind.LogicalShiftRight
  | SyntaxKind.LogicalShiftRightAssign
  | SyntaxKind.ShiftLeft
  | SyntaxKind.ShiftLeftAssign
  | SyntaxKind.Identifier;

export function createToken<T extends TokenSyntaxKind>(
  tokenKind: T,
  flags: NodeFlags,
  start: number,
  end: number
): SyntaxToken<T> {
  let transformFlags = TransformFlags.None;

  // `>>>`, `>>`, `<<`
  if (
    tokenKind === SyntaxKind.ShiftRight ||
    tokenKind === SyntaxKind.LogicalShiftRight ||
    tokenKind === SyntaxKind.ShiftLeft
  ) {
    transformFlags |= TransformFlags.BitshiftOperators;
  }

  // `!==`, `!=`, `===`, `==`
  if (
    tokenKind === SyntaxKind.StrictEqual ||
    tokenKind === SyntaxKind.LooseNotEqual ||
    tokenKind === SyntaxKind.LooseEqual ||
    tokenKind === SyntaxKind.StrictNotEqual
  ) {
    transformFlags |= TransformFlags.EqualityOperators;
  }

  // `*`, `%`, `/`
  if (tokenKind === SyntaxKind.Multiply || tokenKind === SyntaxKind.Modulo || tokenKind === SyntaxKind.Divide) {
    transformFlags |= TransformFlags.MultiplicativeOperators;
  }

  return {
    kind: tokenKind,
    flags,
    transformFlags,
    start,
    end
  };
}
