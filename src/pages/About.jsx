import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";
import Button from "../components/ui/Button.jsx";
import { aboutData } from "../data/about.js";

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn more about my background, skills, and experience as a UX Designer and Frontend Developer."
        url="/about"
      />

      {/* Hero/Intro Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-page">About Me</h1>
            <div className="mt-6 space-y-4 body-default">
              <p className="text-lg leading-relaxed">{aboutData.bio.intro}</p>
              <p>{aboutData.bio.background}</p>
              <p>{aboutData.bio.current}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-section text-center mb-12">What Drives My Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list">
              {aboutData.values.map((value) => (
                <article
                  key={value.id}
                  className="card-base rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-200 focus-within:ring-2 focus-within:ring-white/60 focus-within:ring-offset-2 focus-within:ring-offset-black"
                  role="listitem"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">
                    {value.icon}
                  </div>
                  <h3 className="subheading-primary mb-2">{value.title}</h3>
                  <p className="body-default text-white/70">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Experience Timeline */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section mb-12">Professional Journey</h2>
            <ol className="space-y-8" aria-label="Professional experience timeline">
              {aboutData.experience.map((job) => (
                <li key={job.id} className="relative pl-8 border-l-2 border-white/20 pb-8 last:pb-0">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-black"
                    aria-hidden="true"
                  ></div>

                  <article>
                    <header className="mb-2">
                      <h3 className="subheading-primary">{job.role}</h3>
                      <p className="body-default text-white/70">
                        <span className="sr-only">at</span> {job.company} <span aria-hidden="true">•</span>{" "}
                        <time>{job.duration}</time>
                      </p>
                    </header>

                    <p className="body-default mb-3">{job.description}</p>

                    {job.achievements && job.achievements.length > 0 && (
                      <>
                        <h4 className="sr-only">Key Achievements</h4>
                        <ul className="list-disc pl-5 body-default text-white/70 space-y-1">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      {/* Education Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-section mb-8">Education & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {aboutData.education.map((edu) => (
                <article
                  key={edu.id}
                  className="card-base rounded-xl p-6 focus-within:ring-2 focus-within:ring-white/60 focus-within:ring-offset-2 focus-within:ring-offset-black"
                  role="listitem"
                >
                  <h3 className="font-semibold mb-1">{edu.degree}</h3>
                  <p className="body-small text-white/70 mb-2">{edu.institution}</p>
                  <p className="body-small text-white/60 mb-3">
                    <time>{edu.year}</time>
                  </p>
                  <p className="body-small text-white/70">{edu.details}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Interests Section with Images */}
      <Section>
        <Container>
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-section mb-4">Beyond the Code</h2>
            <p className="body-default text-white/70 max-w-2xl mx-auto text-center mb-12">{aboutData.bio.personal}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              {aboutData.interests.map((interest) => (
                <article
                  key={interest.id}
                  className="group card-base rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-200 focus-within:ring-2 focus-within:ring-white/60 focus-within:ring-offset-2 focus-within:ring-offset-black"
                  role="listitem"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={interest.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                      aria-hidden="true"
                    ></div>
                    <div
                      className="absolute bottom-4 left-4 text-4xl"
                      aria-hidden="true"
                      role="img"
                      aria-label={interest.name}
                    >
                      {interest.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-semibold mb-2">{interest.name}</h3>
                    <p className="body-small text-white/70">{interest.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto text-center card-base rounded-2xl p-12">
            <h2 className="heading-section mb-4">{aboutData.cta.heading}</h2>
            <p className="body-default text-white/70 mb-8">{aboutData.cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button as="a" href={aboutData.cta.primaryAction.href} variant="primary" size="lg">
                {aboutData.cta.primaryAction.text}
              </Button>
              <Button as="a" href={aboutData.cta.secondaryAction.href} variant="secondary" size="lg">
                {aboutData.cta.secondaryAction.text}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
