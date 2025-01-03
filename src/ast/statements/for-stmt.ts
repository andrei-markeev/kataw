import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { SyntaxToken, TokenSyntaxKind } from '../token';
import { StatementNode } from '.';
import { ExpressionNode } from '../expressions/index';
import { BindingList } from './binding-list';
import { ForBinding } from './for-binding';
import { LexicalDeclaration } from './lexical-declaration';

/**
 * Represents a `for` statement
 */
export interface ForStatement extends SyntaxNode {
  readonly forKeyword: SyntaxToken<TokenSyntaxKind>;
  readonly initializer: ExpressionNode | ForBinding | LexicalDeclaration | null;
  readonly condition: ExpressionNode | null;
  readonly incrementor: ExpressionNode | null;
  readonly statement: StatementNode;
}

export function createForStatement(
  forKeyword: SyntaxToken<TokenSyntaxKind>,
  initializer: ExpressionNode | ForBinding | LexicalDeclaration | null,
  condition: ExpressionNode | null,
  incrementor: ExpressionNode | null,
  statement: StatementNode,
  flags: NodeFlags,
  start: number,
  end: number
): ForStatement {
  return {
    kind: SyntaxKind.ForStatement,
    forKeyword,
    initializer,
    condition,
    incrementor,
    statement,
    flags,
    transformFlags: TransformFlags.None,
    start,
    end
  };
}
