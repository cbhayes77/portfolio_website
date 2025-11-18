import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Resume() {
  return (
    <>
      <SEO
        title="Resume"
        description="View my professional resume and experience as a UX Designer and Frontend Developer."
        url="/resume"
      />
      <Section>
        <Container>
          <h1 className="heading-page">Resume</h1>
          <div className="mt-6">
            <iframe
              src="/chris_hayes_resume.pdf"
              width="100%"
              height="800px"
              title="Chris Hayes Resume"
              className="border border-gray-300 rounded-lg shadow-lg"
            >
              <p>
                Your browser does not support iframes.
                <a href="/chris_hayes_resume.pdf" target="_blank" rel="noopener noreferrer">
                  Click here to view the PDF directly.
                </a>
              </p>
            </iframe>
          </div>
        </Container>
      </Section>
    </>
  );
}
