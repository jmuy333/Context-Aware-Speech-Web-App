import { useMemo, useState } from "react";
import useSpeechRecognition from "../hooks/useSpeechRecognition.js";

export default function Home() {
    const { supported, listening, finalText, interimText, start, stop, clear } = useSpeechRecognition();
    const [typed, setTyped] = useState("");
    const combinedContext = useMemo(() => {
        return `${finalText} ${typed}`.trim();
    }, [finalText, typed]);

  return (
    <div>
        <p>Say something with the mic or type below, and the site will react!</p>
        <p style={{fontWeight: 'bold'}}>Note: Microphone Access will be requested, but is not required</p>
        {!supported && (<p style={{ color: "crimson" }}>
            Speech recognition isn’t supported in this browser. Try Chrome.
        </p>)}
    <div style={{display: "grid", gridTemplateColumns: "1fr 320px", gap: 16, alignItems: "stretch", 
        maxWidth: 1000,}}>
        <textarea
            rows={3}
            placeholder="Type extra context here…"
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            style={{ width: "100%", maxWidth: 720 }}
        />
            <div style={{border: "2px dashed #999", borderRadius: 8, padding: 12, minHeight: 160, 
                display: "flex", alignItems: "center", justifyContent: "center", background: "#fafafa",}}>
    <span>Image Output (placeholder)</span>
    </div>
    </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
            <button onClick={start} disabled={!supported || listening}>
                Start Mic
            </button>
            <button onClick={stop} disabled={!supported || !listening}>
                Stop Mic
            </button>
            <button onClick={() => {
                clear();
                setTyped("");
            }}
            >
            Clear
            </button>
        </div>

        <div style={{ marginTop: 12 }}>
            <strong>Live:</strong>
            <p>{interimText || "(nothing right now)"}</p>
            <strong>Transcript (from microphone):</strong>
            <p style={{ whiteSpace: "pre-wrap" }}>{finalText || "(empty)"}</p>
            <strong>Combined context (speech + typed):</strong>
            <p style={{ whiteSpace: "pre-wrap" }}>{combinedContext || "(empty)"}</p>
      </div>
    </div>
  );
}