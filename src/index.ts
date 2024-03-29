import type MarkdownIt from "markdown-it/lib"
import type StateCore from "markdown-it/lib/rules_core/state_core"

/**
 * An example plugin that adds a color to paragraphs
 */
export default function open_block_plugin(md: MarkdownIt): void {
  md.core.ruler.push("example", openBlockRule)
}

function openBlockRule(state: StateCore): boolean {
  for (const token of state.tokens) {
    if (token.type === "paragraph_open") {
      token.attrJoin("style", "color:blue;")
    }
  }
  return true
}