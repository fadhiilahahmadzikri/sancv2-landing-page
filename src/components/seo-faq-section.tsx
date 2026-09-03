import { HOME_SEARCH_INTENTS, SANCTRUM_SEO_FAQS } from "@/config/seo"

export function SeoFaqSection() {
  return (
    <section
      id="faq"
      className="relative w-full scroll-mt-14 overflow-hidden border-b border-line bg-background text-foreground"
    >
      <div className="relative mx-auto max-w-6xl border-x border-line bg-background">
        <div className="grid border-b border-line lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)]">
          <div className="flex flex-col gap-4 p-6 sm:p-8 lg:p-10">
            <h2 className="max-w-3xl text-2xl leading-[1.15] font-medium tracking-tight text-balance text-foreground sm:text-3xl md:text-4xl">
              Microsoft TTS alternative for Windows voice workflows.
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-balance text-muted-foreground sm:text-base">
              Sanctrum Voice gives Windows users open-source text-to-speech,
              Whisper speech-to-text, Kokoro neural TTS, selection read aloud,
              and hands-free desktop control in one native app.
            </p>
          </div>

          <div className="grid border-t border-line sm:grid-cols-2 lg:border-t-0 lg:border-l">
            {HOME_SEARCH_INTENTS.map((intent) => (
              <div
                key={intent}
                className="flex min-h-20 items-center border-b border-line px-5 py-4 font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
              >
                {intent}
              </div>
            ))}
          </div>
        </div>

        <div className="divide-y divide-line">
          {SANCTRUM_SEO_FAQS.map((faq) => (
            <article
              key={faq.question}
              className="grid gap-4 px-6 py-6 sm:px-8 md:grid-cols-[minmax(220px,0.45fr)_minmax(0,1fr)] lg:px-10"
            >
              <h3 className="text-base leading-snug font-semibold text-foreground sm:text-lg">
                {faq.question}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
