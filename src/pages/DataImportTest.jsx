import SEO from "../components/ui/SEO.jsx";
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import { fragments } from "../data/FragmentsData.jsx";

export default function DataImportTest() {
  return (
    <>
      <SEO
        title="About"
        description="Learn more about my background, skills, and experience as a UX Designer and Frontend Developer."
        url="/about"
      />
      <Section>
        <Container>{fragments.content}</Container>
      </Section>
    </>
  );
}
