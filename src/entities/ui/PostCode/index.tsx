import { Highlight, themes } from "prism-react-renderer";
import { PostCodeBlock, PostCodePre, PostCodeSpan } from "./PostCode.styles";

interface PostCodeProps {
  code: string;
  language: string;
}

const PostCode: React.FC<PostCodeProps> = ({ code, language }) => {
  return (
    <Highlight theme={themes.vsDark} code={code} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <PostCodePre>
          {tokens.map((line, i) => (
            <PostCodeBlock key={i} {...getLineProps({ line })}>
              <PostCodeSpan>{i + 1}</PostCodeSpan>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </PostCodeBlock>
          ))}
        </PostCodePre>
      )}
    </Highlight>
  );
};
export default PostCode;
