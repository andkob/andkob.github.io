import { useEffect } from 'react';

const Section = ({ title, bullets, body }) => {
  return (
    <section className="mt-6 first:mt-0">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>

      {bullets?.length ? (
        <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-200">
          {bullets.map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {body?.length ? (
        <div className="mt-4 space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
          {body.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      ) : null}
    </section>
  );
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const details = project.details;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="relative mx-auto flex min-h-full max-w-4xl items-center justify-center px-4 py-10 overflow-y-auto">
        <div className="w-full max-h-[90vh] flex flex-col rounded-2xl bg-white dark:bg-gray-900 shadow-2xl ring-1 ring-black/10 dark:ring-white/10 overflow-hidden">
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h2>
                {project.subtitle ? (
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    {project.subtitle}
                  </p>
                ) : null}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-lg px-3 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Close
              </button>
            </div>

            {project.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          {/* Body */}
          <div className="px-6 py-6 flex-1 min-h-0 overflow-y-auto">
            {details?.overview?.length ? (
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                {details.overview.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            ) : null}

            {details?.sections?.length ? (
              <div className="mt-8">
                {details.sections.map((s, idx) => (
                  <Section
                    key={idx}
                    title={s.title}
                    bullets={s.bullets}
                    body={s.body}
                  />
                ))}
              </div>
            ) : null}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-end">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;