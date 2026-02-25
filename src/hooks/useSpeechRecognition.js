import { useEffect, useRef, useState } from "react";

export default function useSpeechRecognition() {
    const recognitionRef = useRef(null);

    const [supported, setSupported] = useState(true);
    const [listening, setListening] = useState(false);
    const [finalText, setFinalText] = useState("");
    const [interimText, setInterimText] = useState("");

    useEffect(() => {
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SR) {
            setSupported(false);
            return;
        }
        const r = new SR();
        r.continuous = true;
        r.interimResults = true;
        r.lang = "en-US";
        r.onresult = (event) => {
            let interim = "";
            let finalChunk = "";
            for (let i = event.resultIndex; i < event.results.length; i++) {
                const text = event.results[i][0].transcript;
                if (event.results[i].isFinal) finalChunk += text + " ";
                else interim += text;
            }
        setInterimText(interim);
        if (finalChunk) setFinalText((prev) => (prev + " " + finalChunk).trim());
        };
        r.onstart = () => setListening(true);
        r.onend = () => {
            setListening(false);
            setInterimText("");
        };
        r.onerror = () => {
            setListening(false);
            setInterimText("");
        };
        recognitionRef.current = r;

        return () => {
            try {
                r.stop();
            } catch {
            }
        };
    }, []);

  const start = () => recognitionRef.current?.start();
  const stop = () => recognitionRef.current?.stop();
  const clear = () => {
    setFinalText("");
    setInterimText("");
  };

  return { supported, listening, finalText, interimText, start, stop, clear };
}