
import os
from elevenlabs.client import ElevenLabs
import uuid
from dotenv import load_dotenv

load_dotenv()
ELEVENLABS_API_KEY = os.getenv('ELEVENLABS_API_KEY')
elevenlabs = ElevenLabs(api_key=ELEVENLABS_API_KEY)


def generate_sound_effect(text: str):
    print("Generating sound effects...")

    result = elevenlabs.text_to_sound_effects.convert(
        text=text,
        duration_seconds=10,  # Optional, if not provided will automatically determine the correct length
        prompt_influence=0.3,  # Optional, if not provided will use the default value of 0.3
    )

    CLIENT_PUBLIC_FOLDER = os.path.abspath(
        os.path.join(os.path.dirname(__file__), "..", "..", "client", "public", "audio")
    )
    filename = uuid.uuid4()
    save_file_path = f"{filename}.mp3"
    save_file_path = os.path.join(CLIENT_PUBLIC_FOLDER, save_file_path)

    
    with open(save_file_path, "wb") as f:
        for chunk in result:
            f.write(chunk)

    return filename


# if __name__ == "__main__":
#     generate_sound_effect("Dog barking", "output.mp3")

