import type { Metadata } from "next";
import Image from "next/image";
import { PROVIDERS } from "@/lib/providers";

export const metadata: Metadata = {
  title: "About | Comper STT",
  description: "Why we built Comper STT — the blind speech-to-text benchmark.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <span
        className="mb-4 block font-mono text-xs uppercase tracking-[0.16em]"
        style={{ color: "var(--color-text-brand)" }}
      >
        About the project
      </span>

      <h1
        className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl"
        style={{ color: "var(--color-text-primary)", letterSpacing: "-0.02em" }}
      >
        Why Comper STT exists
      </h1>

      <div
        className="flex flex-col gap-6 text-base leading-relaxed"
        style={{ color: "var(--color-text-secondary)" }}
      >
        <p>
          Every speech-to-text provider claims to be the best. They publish
          benchmarks on cherry-picked datasets, compare against last year&apos;s
          models, and sprinkle asterisks everywhere. We&apos;ve all read those
          blog posts. We&apos;ve all squinted at those WER tables. And we&apos;ve
          all wondered: <em>but how do they actually compare on my audio?</em>
        </p>

        <p>
          Comper STT was born from that frustration. Instead of trusting
          self-reported numbers, we let <strong>you</strong> be the judge. Record
          your voice, upload a meeting snippet, throw in a podcast clip — whatever
          you want. Two providers transcribe it blindly, side by side, and you pick
          the one that got it right. No names attached. No bias. Just text.
        </p>

        <p>
          Every vote feeds into an{" "}
          <strong>ELO rating system</strong> — the same kind used to rank chess
          players. Over time, the leaderboard converges toward something no
          corporate benchmark can replicate: a ranking shaped by real people,
          real accents, real noise, and real conversations.
        </p>

        <div
          className="my-2 rounded-[var(--radius-xl)] border p-6"
          style={{
            background: "var(--color-bg-tertiary)",
            borderColor: "var(--color-border-primary)",
          }}
        >
          <p
            className="text-sm italic leading-relaxed"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            &ldquo;The best benchmark is the one you can&apos;t game — because
            you don&apos;t know what&apos;s coming next, and you don&apos;t know
            who you&apos;re up against.&rdquo;
          </p>
        </div>

        <h2
          className="mt-4 text-xl font-semibold tracking-tight"
          style={{ color: "var(--color-text-primary)" }}
        >
          How it works
        </h2>

        <ol
          className="flex flex-col gap-3 pl-5"
          style={{ listStyleType: "decimal" }}
        >
          <li>
            <strong>You submit audio</strong> — record live or upload a file
            (up to 2 minutes).
          </li>
          <li>
            <strong>Two random providers transcribe it</strong> — their
            identities are hidden. You see &ldquo;Model A&rdquo; vs
            &ldquo;Model B&rdquo;.
          </li>
          <li>
            <strong>You vote</strong> — pick the better transcription, or call
            it a tie. The providers are revealed after your vote.
          </li>
          <li>
            <strong>ELO ratings update</strong> — every vote shifts the
            leaderboard. The more votes, the more accurate the ranking.
          </li>
        </ol>

        <h2
          className="mt-4 text-xl font-semibold tracking-tight"
          style={{ color: "var(--color-text-primary)" }}
        >
          Current providers
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {PROVIDERS.map((p) => (
            <div
              key={p.slug}
              className="flex items-center gap-3 rounded-[var(--radius-lg)] border px-4 py-3"
              style={{
                background: "var(--color-bg-tertiary)",
                borderColor: "var(--color-border-primary)",
              }}
            >
              <Image
                src={p.logoUrl}
                alt={p.name}
                width={20}
                height={20}
                className="flex-shrink-0"
              />
              <div className="min-w-0">
                <p
                  className="text-sm font-medium truncate"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {p.name}
                </p>
                <p
                  className="text-xs truncate"
                  style={{ color: "var(--color-text-tertiary)" }}
                >
                  {p.model}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h2
          className="mt-4 text-xl font-semibold tracking-tight"
          style={{ color: "var(--color-text-primary)" }}
        >
          What we don&apos;t do
        </h2>

        <ul
          className="flex flex-col gap-2 pl-5"
          style={{ listStyleType: "disc" }}
        >
          <li>We don&apos;t store your audio or transcriptions.</li>
          <li>We don&apos;t track you — no cookies, no accounts, no IP logging.</li>
          <li>We don&apos;t sell data. There is no data to sell.</li>
          <li>We don&apos;t take money from providers to rig the leaderboard.</li>
        </ul>

        <p>
          The only thing we keep is the vote outcome: who won, who lost, or
          whether it was a tie. That&apos;s it.
        </p>

        <h2
          className="mt-4 text-xl font-semibold tracking-tight"
          style={{ color: "var(--color-text-primary)" }}
        >
          Sponsored by Gladia
        </h2>

        <p>
          Comper STT is a free, open, non-commercial project sponsored by{" "}
          <a
            href="https://gladia.io"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: "var(--color-text-brand)" }}
          >
            Gladia
          </a>
          . Yes, Gladia is also one of the providers in the arena. No, they
          don&apos;t get special treatment. The matchmaking is random, the voting
          is blind, and the leaderboard is driven purely by community votes. If
          Gladia&apos;s model is good, it&apos;ll climb. If it&apos;s not, it
          won&apos;t. That&apos;s the whole point.
        </p>

        <p>
          Want to add a provider, report a bug, or just say hi?{" "}
          <a
            href="mailto:privacy@gladia.io"
            className="underline"
            style={{ color: "var(--color-text-brand)" }}
          >
            Reach out
          </a>
          .
        </p>
      </div>
    </div>
  );
}
