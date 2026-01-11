import XCTest
import SwiftTreeSitter
import TreeSitterRexx

final class TreeSitterRexxTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_rexx())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Rexx grammar")
    }
}
