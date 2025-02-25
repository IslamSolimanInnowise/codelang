import Aside from "@widgets/ui/Aside";
import { AddSnippetHeading, PageContent, PageMain } from "./AddSnippet.styles";
import NewPostForm from "@widgets/ui/NewPostForm";

const AddSnippetPage: React.FC = () => {
  return (
    <PageMain>
      <Aside />
      <PageContent>
        <AddSnippetHeading>Create new snippet!</AddSnippetHeading>
        <NewPostForm />
      </PageContent>
    </PageMain>
  );
};
export default AddSnippetPage;
