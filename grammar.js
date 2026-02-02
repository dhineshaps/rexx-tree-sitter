/**
 * @file To Create Rexx Control Flow
 * @author Dhinesh Palanisamy <dhinesh.palanisamy@yahoo.com>
 * @license MIT
 */


///https://www.cs.ox.ac.uk/people/ian.collier/Docs/rexx_info/whole.html use this as reference

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: 'rexx',

  extras: $ => [
    /\s+/,
    $.comment,
  ],

  rules: {

    source_file: $ => repeat($.statement),


    statement: $ =>
      choice(
        $.say_statement,
        $.identifier,
        $.string
      ),

    say_statement: $ => seq(
      'say',
      choice(
      $.string,   //this will handle pattern of words with doub;r quotes  "hello"
      $.identifier // this will handle hello
      )
    ),

    string: $ => token(choice 
                  (/"[^"]*"/, //will consider entire thing as one text, will ake it black box
                   /'[^']*'/
                  )),

    identifier: $ => /[a-zA-Z_=+*/]\w*/,

    //comment: $ => token(seq('\/\*[\s\S]*?\*\/')),

    comment: $ => token(choice(
      /\/\/.*/,
      /\/\*[\s\S]*?\*\//
    )),

    SAY: $ => /say/i,
  }
});

