export default function About() {
    return(
        <div>
            <h1>About this project</h1>
            <p>The Context-Aware Speech Web-App is a project created by Jaydan Muyuela.</p>
            <h2>Why was this project made?</h2>

            <p>Ever have a conversation with your friend about a random topic and wonder why you started receiving ads that were directly related
            <br/> to your conversation afterwards? Did it ever feel like you were being listened to? It's probably because you were.
            </p>

            <p>Because of how rampant data collection is, I wanted to create a project that experimented with recommendation systems
            <br /> and how relevant content is pushed towards you using speech, through the use of an image API and speech-to-text plugin.
            </p>

            <p>This project is meant to be purely educational and informative.</p>

            <h2>Why is my microphone being used?</h2>
            <p>Using the microphone for speech-to-text aligns with the spirit of the project.</p>
            <p>However, speech is not required.</p>
            <p>The site will work exactly the same if only text is used.</p>
            <h2>Are transcripts/audio files stored after deletion?</h2>
            <p>Transcripts/audio files are not stored by the website and are deleted after being cleared.</p>
        </div>
    );
}