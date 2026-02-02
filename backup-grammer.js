/**
 * @file To Create Rexx Control Flow
 * @author Dhinesh Palanisamy <dhinesh.palanisamy@yahoo.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: 'rexx',

  extras: $ => [
    /\s+/,
  ],

  rules: {
    // ---------
    // Entry
    // ---------
    source_file: $ => repeat($.statement),

    // ---------
    // Statements
    // ---------
    statement: $ =>
      choice(
        $.if_statement,
        $.do_statement,
        $.call_statement
      ),

    // ---------
    // IF statement
    // ---------
    if_statement: $ =>
      seq(
        $.IF,
        $.condition,
        $.THEN,
        $.statement
      ),


    //DO Statement
    do_statement : $ =>
      seq(
        field('keyword', $.DO),
        field('body', repeat($.statement)),
        field('end', $.END)
      ),

    // ---------
    // Condition (intentionally opaque)
    // ---------
    condition: $ =>
      repeat1(
        token(prec(-1, /[^ \t\r\n]+/))
      ),

    // ---------
    // CALL statement
    // ---------
    call_statement: $ =>
      seq(
        field('keyword', $.CALL),
        field('target', $.identifier)
      ),

    // ---------
    // Tokens
    // ---------
    IF: $ => /if/i,
    THEN: $ => /then/i,
    CALL: $ => /call/i,
    DO: $ => /do/i,
    END: $ => /end/i,

    identifier: $ => /[A-Za-z_][A-Za-z0-9_]*/,
  }
});

