# Note: DALL-E 3 requires version 1.0.0 of the openai-python library or later
import os
from openai import AzureOpenAI
import json
from dotenv import loadenv

loadenv()

client = AzureOpenAI(
    api_version="2024-05-01-preview",
    azure_endpoint=os.getenv("AZURE_OPENAI_ENDPOINT"),
    api_key=os.getenv("AZURE_OPENAI_APIKEY"),
)


def getImage(prompt):
    result = client.images.generate(
        model="dall-e-3",  # the name of your DALL-E 3 deployment
        prompt=prompt,
        n=1,
    )
    image_url = json.loads(result.model_dump_json())["data"][0]["url"]
    return image_url
