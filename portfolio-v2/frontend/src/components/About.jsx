import React from 'react';

const education = [
  { level: 'Elementary', school: 'Lagawe Central School' },
  { level: 'High School', school: 'Don Bosco (Lagawe, Ifugao)' },
  { level: 'Senior High', school: 'NVGCHS' },
  { level: 'College (Current)', school: 'Asia Pacific College' },
];

const hobbies = [
  { l: 'Cooking & Baking' },
  { l: 'Eating' },
  { l: 'Sleeping' },
  { l: 'Mobile Games' },
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
                My goal is to build a successful career in technology while
                creating projects that make a positive impact, including
                solutions that can help improve the welfare and adoption of
                stray cats and dogs.
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
