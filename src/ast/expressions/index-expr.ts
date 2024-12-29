import { SyntaxNode, SyntaxKind, NodeFlags, TransformFlags } from '../syntax-node';
import { ExpressionNode } from '.';
import { Identifier } from './identifier-expr';
import { PrivateIdentifier } from './private-identifier';

export interface IndexExpression extends SyntaxNode {
  readonly member: ExpressionNode;
  readonly expression: Identifier | PrivateIdentifier;
}

export function createIndexExpression(
  member: ExpressionNode,
  expression: Identifier | PrivateIdentifier,
  flags: NodeFlags,
  start: number,
  end: number
): IndexExpression {
  return {
    kind: SyntaxKind.IndexExpression,
    member,
    expression,
    flags,
    transformFlags: TransformFlags.IndexExpression,
    start,
    end
  };
}
