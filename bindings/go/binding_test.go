package tree_sitter_rexx_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_rexx "github.com/tree-sitter/tree-sitter-rexx/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_rexx.Language())
	if language == nil {
		t.Errorf("Error loading Rexx grammar")
	}
}
