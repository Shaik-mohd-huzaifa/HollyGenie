from flask import Flask, request, jsonify
from flask_cors import CORS
from models.tts import text_to_speech_file
from models.soundGeneration import generate_sound_effect
from models.dalle import getImage

app = Flask(__name__)


CORS(app, origins="*")

@app.route("/texttospeech", methods=["POST"])
def tts():
    res = request.get_json()
    
    prompt = res.get("prompt")
    
    filename = text_to_speech_file(prompt)
    print(filename)
        
    return jsonify({"filename": filename}), 200


@app.route("/soundCreation", methods=["POST"])
def soundGen():
    res = request.get_json()
    
    prompt = res.get("prompt")
    
    filename = generate_sound_effect(prompt)
    print(filename)
        
    return jsonify({"filename": filename}), 200

@app.route("/ImageGen", methods=["POST"])
def ImageGen():
    res = request.get_json()
    
    prompt = res.get("prompt")
    
    url = getImage(prompt)
        
    return jsonify({"url": url}), 200



if __name__ == "__main__":
    app.run(debug=True, port=8000)