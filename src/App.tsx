import {
  BoldExtension,
  HeadingExtension,
  ItalicExtension,
  UnderlineExtension
} from "remirror/extensions";
import {
  BasicFormattingButtonGroup,
  HeadingLevelButtonGroup,
  HistoryButtonGroup,
  useRemirror,
  Remirror,
  ThemeProvider,
  Toolbar
} from "@remirror/react";
import { AllStyledComponent } from "@remirror/styles/emotion";

const extensions = () => [
  new HeadingExtension(),
  new BoldExtension({}),
  new ItalicExtension(),
  new UnderlineExtension()
];

export default function App() {
  const { manager, state } = useRemirror({
    extensions,
    content: "<p><u>Hello</u> there <b>friend</b> and <em>partner</em>.</p>",
    selection: "end",
    stringHandler: "html"
  });
  return (
    <AllStyledComponent>
      <ThemeProvider>
        <Remirror manager={manager} initialContent={state} autoFocus autoRender="end">
          <Toolbar>
            <HistoryButtonGroup />
            <BasicFormattingButtonGroup />
            <HeadingLevelButtonGroup showAll />
          </Toolbar>
        </Remirror>
      </ThemeProvider>
    </AllStyledComponent>
  );
}

