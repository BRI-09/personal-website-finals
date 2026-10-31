import React from 'react';

const education = [
  {
    level: 'Bachelor of Science in Computer Science',
    school: 'Asia Pacific College',
    details: 'Specialization in Cybersecurity and Digital Forensics',
  },
  {
    level: 'Expected Graduation',
    school: '2027-2028',
  },
];

const hobbies = [
  { l: 'Cooking & Baking' },
  { l: 'Mobile Gaming' },
  { l: 'Exploring New Technologies' },
  { l: 'Spending Time with Pets' },
  { l: 'Crocheting' },
];

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="grid">
        <article className="card col-4 fade-in">
          <div className="card-header">Me & My Goals</div>

          <div className="card-body">
            <div className="bullet">
              <span className="dot" />
              <div>
                I'm a Computer Science student specializing in Cybersecurity and
                Digital Forensics at Asia Pacific College. I enjoy building
                software, exploring new technologies, solving problems through
                code, and continuously expanding my technical skills.
              </div>
            </div>

            <div className="bullet">
              <span className="dot" />
              <div>
                My goal is to build a successful career in technology while creating
                meaningful solutions that make a positive impact. In the future, I aspire
                to develop IoT and software projects that help people solve everyday
                problems, improve accessibility, and contribute to the welfare of animals.
              </div>
            </div>
          </div>
        </article>

        <article
          className="card col-4 fade-in"
          style={{ animationDelay: '0.08s' }}
        >
          <div className="card-header">Education</div>

          <div className="card-body">
            {education.map((e) => (
              <div className="bullet" key={e.level}>
                <span className="dot" />

                <div>
                  <strong
                    style={{
                      display: 'block',
                      fontSize: 13,
                      color: 'var(--text)',
                    }}
                  >
                    {e.level}
                  </strong>

                  <span
                    style={{
                      fontSize: 13,
                      color: 'var(--text-muted)',
                    }}
                  >
                    {e.school}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article
          className="card col-4 fade-in"
          style={{ animationDelay: '0.16s' }}
        >
          <div className="card-header">Hobbies & Interests</div>

          <div className="card-body">
            {hobbies.map((h) => (
              <div className="bullet" key={h.l}>
                <span className="dot" />
                <span>{h.l}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
