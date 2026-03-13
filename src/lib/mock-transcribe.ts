const MOCK_TRANSCRIPTS = [
  {
    base: "Hello and welcome to the presentation. Today we're going to be talking about the future of artificial intelligence and how it's going to transform the way we work and live. I think it's really important that we understand both the opportunities and the challenges that lie ahead.",
    variants: {
      gladia: "Hello and welcome to the presentation. Today we're going to be talking about the future of artificial intelligence and how it's going to transform the way we work and live. I think it's really important that we understand both the opportunities and the challenges that lie ahead.",
      elevenlabs: "Hello and welcome to the presentation. Today we're going to be talking about the future of artificial intelligence, and how it's going to transform the way we work and live. I think it's really important that we understand both the opportunities and the challenges that lie ahead.",
      deepgram: "Hello and welcome to the presentation. Today we're going to be talking about the future of artificial intelligence and how it's going to transform the way we work and live. I think it's really important that we understand both the opportunities and the challenges that lie ahead.",
      assemblyai: "Hello, and welcome to the presentation. Today we're going to be talking about the future of artificial intelligence and how it's going to transform the way we work and live. I think it's really important that we understand both the opportunities and the challenges that lie ahead.",
      speechmatics: "Hello and welcome to the presentation today. We're going to be talking about the future of artificial intelligence and how it's going to transform the way we work and live. I think it's really important that we understand both the opportunities and the challenges that lie ahead.",
    },
  },
  {
    base: "So the quarterly results are in and I'm happy to report that we've exceeded our targets by fifteen percent. Revenue came in at twelve point three million, which is a new record for the company. Our customer retention rate improved to ninety-two percent, up from eighty-seven percent last quarter.",
    variants: {
      gladia: "So the quarterly results are in and I'm happy to report that we've exceeded our targets by 15%. Revenue came in at $12.3 million, which is a new record for the company. Our customer retention rate improved to 92%, up from 87% last quarter.",
      elevenlabs: "So the quarterly results are in, and I'm happy to report that we've exceeded our targets by 15 percent. Revenue came in at 12.3 million dollars, which is a new record for the company. Our customer retention rate improved to 92 percent, up from 87 percent last quarter.",
      deepgram: "So the quarterly results are in and I'm happy to report that we've exceeded our targets by fifteen percent. Revenue came in at twelve point three million, which is a new record for the company. Our customer retention rate improved to ninety two percent, up from eighty seven percent last quarter.",
      assemblyai: "So the quarterly results are in, and I'm happy to report that we've exceeded our targets by 15%. Revenue came in at $12.3 million, which is a new record for the company. Our customer retention rate improved to 92%, up from 87% last quarter.",
      speechmatics: "So the quarterly results are in and I'm happy to report that we've exceeded our targets by 15%. Revenue came in at 12.3 million which is a new record for the company. Our customer retention rate improved to 92% up from 87% last quarter.",
    },
  },
  {
    base: "The thing about machine learning is that you really need to understand your data before you start building models. I've seen so many projects fail because teams just threw data at an algorithm without properly cleaning it or understanding the biases in the dataset. Garbage in, garbage out, as they say.",
    variants: {
      gladia: "The thing about machine learning is that you really need to understand your data before you start building models. I've seen so many projects fail because teams just threw data at an algorithm without properly cleaning it or understanding the biases in the dataset. Garbage in, garbage out, as they say.",
      elevenlabs: "The thing about machine learning is that you really need to understand your data before you start building models. I've seen so many projects fail because teams just threw data at an algorithm without properly cleaning it, or understanding the biases in the data set. Garbage in, garbage out, as they say.",
      deepgram: "The thing about machine learning is that you really need to understand your data before you start building models. I've seen so many projects fail because teams just threw data at an algorithm without properly cleaning it or understanding the biases in the data set. garbage in garbage out as they say.",
      assemblyai: "The thing about machine learning is that you really need to understand your data before you start building models. I've seen so many projects fail because teams just threw data at an algorithm without properly cleaning it or understanding the biases in the dataset. Garbage in, garbage out, as they say.",
      speechmatics: "The thing about machine learning is that you really need to understand your data before you start building models. I've seen so many projects fail because teams just through data at an algorithm without properly cleaning it or understanding the biases in the dataset. Garbage in garbage out as they say.",
    },
  },
  {
    base: "Bonjour tout le monde, merci d'être venus aujourd'hui. Je vais vous parler de notre nouvelle stratégie pour le marché européen. Nous avons identifié trois opportunités majeures qui pourraient doubler notre chiffre d'affaires d'ici deux ans.",
    variants: {
      gladia: "Bonjour tout le monde, merci d'être venus aujourd'hui. Je vais vous parler de notre nouvelle stratégie pour le marché européen. Nous avons identifié trois opportunités majeures qui pourraient doubler notre chiffre d'affaires d'ici deux ans.",
      elevenlabs: "Bonjour tout le monde, merci d'être venus aujourd'hui. Je vais vous parler de notre nouvelle stratégie pour le marché européen. Nous avons identifié trois opportunités majeures qui pourraient doubler notre chiffre d'affaires d'ici 2 ans.",
      deepgram: "Bonjour tout le monde merci d'être venus aujourd'hui. Je vais vous parler de notre nouvelle stratégie pour le marché européen. Nous avons identifié trois opportunités majeures qui pourraient doubler notre chiffre d'affaires d'ici deux ans.",
      assemblyai: "Bonjour tout le monde, merci d'être venus aujourd'hui. Je vais vous parler de notre nouvelle stratégie pour le marché Européen. Nous avons identifié 3 opportunités majeures qui pourraient doubler notre chiffre d'affaires d'ici 2 ans.",
      speechmatics: "Bonjour tout le monde merci d'être venus aujourd'hui je vais vous parler de notre nouvelle stratégie pour le marché européen. Nous avons identifié trois opportunités majeures qui pourraient doubler notre chiffre d'affaires d'ici deux ans.",
    },
  },
  {
    base: "I just wanted to quickly go over the project timeline. So we're looking at phase one being completed by the end of March, phase two should wrap up around mid-June, and then the final launch is targeted for September first. Does that work for everyone?",
    variants: {
      gladia: "I just wanted to quickly go over the project timeline. So we're looking at phase one being completed by the end of March, phase two should wrap up around mid-June, and then the final launch is targeted for September 1st. Does that work for everyone?",
      elevenlabs: "I just wanted to quickly go over the project timeline. So we're looking at phase one being completed by the end of March. Phase two should wrap up around mid June, and then the final launch is targeted for September 1st. Does that work for everyone?",
      deepgram: "I just wanted to quickly go over the project timeline. So we're looking at phase one being completed by the end of march phase two should wrap up around mid june and then the final launch is targeted for september first. Does that work for everyone?",
      assemblyai: "I just wanted to quickly go over the project timeline. So we're looking at Phase 1 being completed by the end of March. Phase 2 should wrap up around mid-June, and then the final launch is targeted for September 1st. Does that work for everyone?",
      speechmatics: "I just wanted to quickly go over the project timeline so we're looking at phase one being completed by the end of March. Phase two should wrap up around mid June and then the final launch is targeted for September first. Does that work for everyone?",
    },
  },
];

export interface MockTranscription {
  providerSlug: string;
  transcript: string;
}

export function getMockTranscriptions(
  providerASLug: string,
  providerBSlug: string
): { transcriptA: string; transcriptB: string } {
  const idx = Math.floor(Math.random() * MOCK_TRANSCRIPTS.length);
  const entry = MOCK_TRANSCRIPTS[idx];

  const transcriptA =
    entry.variants[providerASLug as keyof typeof entry.variants] || entry.base;
  const transcriptB =
    entry.variants[providerBSlug as keyof typeof entry.variants] || entry.base;

  return { transcriptA, transcriptB };
}

export function getMockDelay(): number {
  return 1500 + Math.random() * 1500;
}
