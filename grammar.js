/**
 * @file To Create Rexx Control Flow
 * @author Dhinesh Palanisamy <dhinesh.palanisamy@yahoo.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: "rexx",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
