import {styleTags, tags as t} from "@lezer/highlight"

export const pythonHighlighting = styleTags({
  "async \"*\" \"**\" FormatConversion FormatSpec": t.modifier,
  "for while if elif else try except finally return raise break continue with pass assert await yield": t.controlKeyword,
  "in not and or is del": t.operatorKeyword,
  "from def class global nonlocal lambda": t.definitionKeyword,
  import: t.moduleKeyword,
  "with as print": t.keyword,
  Boolean: t.bool,
  None: t.null,
  VariableName: t.variableName,
  "CallExpression/VariableName": t.function(t.variableName),
  "FunctionDefinition/VariableName": t.function(t.definition(t.variableName)),
  "ClassDefinition/VariableName": t.definition(t.className),
  PropertyName: t.propertyName,
  "CallExpression/MemberExpression/PropertyName": t.function(t.propertyName),
  Comment: t.lineComment,
  Number: t.number,
  String: t.string,
  FormatString: t.special(t.string),
  UpdateOp: t.updateOperator,
  ArithOp: t.arithmeticOperator,
  BitOp: t.bitwiseOperator,
  CompareOp: t.compareOperator,
  AssignOp: t.definitionOperator,
  Ellipsis: t.punctuation,
  At: t.meta,
  "( )": t.paren,
  "[ ]": t.squareBracket,
  "{ }": t.brace,
  ".": t.derefOperator,
  ", ;": t.separator
})
