import "./styles.scss";

import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { EditorContent, ReactNodeViewRenderer, useEditor } from "@tiptap/react";
import { all, createLowlight } from "lowlight";

import CodeBlockComponent from "./CodeBlockComponent.tsx";
import StarterKit from "@tiptap/starter-kit";

// create a lowlight instance
const lowlight = createLowlight(all);

// const MenuBar = ({ editor }) => {
//   if (!editor) {
//     return null;
//   }

//   return (
//     <div className="control-group">
//       <div className="button-group">
//         <button
//           onClick={() => editor.chain().focus().toggleCodeBlock().run()}
//           className={editor.isActive("codeBlock") ? "is-active" : ""}
//         >
//           Toggle code block
//         </button>
//       </div>
//     </div>
//   );
// };

export const TipTapCode = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.extend({
        addNodeView() {
          return ReactNodeViewRenderer(CodeBlockComponent);
        },
      }).configure({ lowlight }),
    ],
    content: `
        <p>
          That's a boring paragraph followed by a fenced code block:
        </p>
        <pre><code class="language-javascript">for (var i=1; i <= 20; i++)
{
  if (i % 15 == 0)
    console.log("FizzBuzz");
  else if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}</code></pre>
        <p>
          Press Command/Ctrl + Enter to leave the fenced code block and continue typing in boring paragraphs.
        </p>
      `,
  });

  return (
    <>
      {/* <MenuBar editor={editor} /> */}
      <EditorContent editor={editor} />
    </>
  );
};
