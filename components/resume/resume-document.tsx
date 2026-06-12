import { resume } from "@/data/resume";

export function ResumeDocument() {
  return (
    <article className="resume-document mx-auto max-w-[820px] bg-white px-10 py-9 text-[#111827] print:px-8 print:py-7">
      <header className="border-b border-[#d1d5db] pb-5">
        <h1 className="text-3xl font-bold tracking-tight text-[#0f172a]">{resume.name}</h1>
        <p className="mt-1 text-base font-medium text-[#0f766e]">{resume.title}</p>
        <p className="mt-3 text-sm leading-6 text-[#374151]">
          {resume.location} · {resume.workType} · {resume.company} (HQ: {resume.companyHQ})
        </p>
        <p className="mt-1 text-sm leading-6 text-[#374151]">
          <a href={`mailto:${resume.email}`} className="text-[#0f766e] no-underline">
            {resume.email}
          </a>
          {" · "}
          {resume.phone}
          {" · "}
          <a href={resume.links.linkedin} className="text-[#0f766e] no-underline">
            LinkedIn
          </a>
          {" · "}
          <a href={resume.links.github} className="text-[#0f766e] no-underline">
            GitHub
          </a>
          {" · "}
          <a href={resume.portfolio} className="text-[#0f766e] no-underline">
            Portfolio
          </a>
        </p>
      </header>

      <section className="mt-5">
        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">Professional Summary</h2>
        <p className="mt-2 text-sm leading-6 text-[#374151]">{resume.professionalSummary}</p>
      </section>

      <section className="mt-5">
        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">Core Competencies</h2>
        <p className="mt-2 text-sm leading-6 text-[#374151]">{resume.coreCompetencies.join(" · ")}</p>
      </section>

      <section className="mt-5">
        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">Technical Skills</h2>
        <div className="mt-2 space-y-1.5">
          {Object.entries(resume.skills).map(([group, skills]) => (
            <p key={group} className="text-sm leading-6 text-[#374151]">
              <span className="font-semibold text-[#111827]">{group}:</span> {skills.join(", ")}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">Professional Experience</h2>
        <div className="mt-3 space-y-4">
          {resume.experience.map((job) => (
            <div key={`${job.company}-${job.role}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-bold text-[#111827]">
                  {job.role} · {job.company}
                </h3>
                <p className="text-xs font-medium text-[#6b7280]">{job.period}</p>
              </div>
              <p className="mt-0.5 text-xs text-[#6b7280]">{job.location}</p>
              <p className="mt-1.5 text-sm leading-6 text-[#374151]">{job.summary}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[#374151]">
                {job.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">Selected Projects</h2>
        <div className="mt-3 space-y-3">
          {resume.selectedProjects.map((project) => (
            <div key={project.name}>
              <h3 className="text-sm font-bold text-[#111827]">{project.name}</h3>
              <p className="mt-0.5 text-xs text-[#6b7280]">{project.stack}</p>
              <p className="mt-1 text-sm leading-6 text-[#374151]">{project.highlight}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">Education</h2>
        <div className="mt-3 space-y-2">
          {resume.education.map((item) => (
            <div key={`${item.institution}-${item.degree}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-bold text-[#111827]">
                  {item.degree} · {item.institution}
                </h3>
                <p className="text-xs font-medium text-[#6b7280]">{item.period}</p>
              </div>
              <p className="text-sm text-[#374151]">
                {item.score}
                {item.location ? ` · ${item.location}` : ""}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-5">
        <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#0f766e]">Achievements</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-[#374151]">
          {resume.achievements.map((item) => (
            <li key={item.label}>
              <span className="font-semibold text-[#111827]">
                {item.label} ({item.value})
              </span>
              {item.year ? ` — ${item.year}` : ""}: {item.detail}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
