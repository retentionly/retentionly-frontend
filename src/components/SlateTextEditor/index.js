import isHotkey from "is-hotkey"
import React, { useCallback, useMemo } from "react"
import {
  createEditor, Editor
} from "slate"
import { withHistory } from "slate-history"
import { Editable, Slate, useSlate, withReact } from "slate-react"

import { Button, Toolbar } from "./Component"
import { EditorStyled } from "./style"

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code"
}

const LIST_TYPES = ["numbered-list", "bulleted-list"]
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"]

const TextEditor = ({ placeholder, value, handleInputChange}) => {
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  return (
    <Slate editor={editor} value={value} onChange={handleInputChange}>
      <Toolbar>
        <MarkButton format="bold" text="B" />
        <MarkButton format="italic" text="I" />
        <MarkButton format="underline" text="U" />
      </Toolbar>
      <EditorStyled>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder={placeholder}
          spellCheck
          onKeyDown={event => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault()
                const mark = HOTKEYS[hotkey]
                toggleMark(editor, mark)
              }
            }
          }}
          style={{
            background: "",
            maxHeight: "140px",
            minHeight: "140px !important",
            padding: "10px 20px 20px 16px",
            border: "2px solid #2B2B2B",
            overflow: "hidden auto",
            color: "#000",
            wordWrap: "wrap"
          }}
        />
      </EditorStyled>
    </Slate>
  )
}

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const Element = ({ attributes, children, element }) => {
  const style = { textAlign: "left" }
  switch (element.type) {
    case "block-quote":
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      )
    case "bulleted-list":
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      )
    case "heading-one":
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      )
    case "heading-two":
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      )
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      )
    case "numbered-list":
      return (
        <ol style={style} {...attributes}>
          {children}
        </ol>
      )
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      )
  }
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

// const BlockButton = ({ format, icon }) => {
//   const editor = useSlate()
//   return (
//     <Button
//       active={isBlockActive(
//         editor,
//         format,
//         TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
//       )}
//       onMouseDown={event => {
//         event.preventDefault()
//         toggleBlock(editor, format)
//       }}
//     >
//       <Icon>{icon}</Icon>
//     </Button>
//   )
// }

const MarkButton = ({ format, text }) => {
  const editor = useSlate()
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      {text}
    </Button>
  )
}


export default TextEditor
