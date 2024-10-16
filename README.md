# Flask & React Vite Application

This is a full-stack web application built using Flask as the backend and React with Vite as the frontend. The application integrates various APIs and services for functionalities such as text-to-speech conversion, image generation, and more.

## Features

- **Backend**: Python Flask API for handling requests and integrating with external services like ElevenLabs and Azure OpenAI.
- **Frontend**: React Vite app for the user interface, including interactive components and audio playback.
- **APIs and Integrations**: Uses third-party APIs to generate audio, images, and other resources.

## Prerequisites

Make sure you have the following installed:

- [Python 3.7+](https://www.python.org/downloads/)
- [Node.js & npm](https://nodejs.org/en/download/) (for React Vite)
- [Flask](https://flask.palletsprojects.com/) and its dependencies
- [Vite](https://vitejs.dev/) for the React frontend

## Environment Variables

Create a `.env` file in the root directories for both backend and frontend. Configure the following environment variables:

### Backend `.env` File

```bash
FLEAK_API_KEY=your_fleak_api_key_here
ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
AZURE_OPENAI_ENDPOINT=https://your-azure-openai-endpoint.api.azure.com
AZURE_OPENAI_KEY=your_azure_openai_key_here
```

These environment variables are used to securely connect to external services like ElevenLabs and Azure OpenAI.

### Frontend `.env` File

For the React app, create a `.env.local` file in the root of the Vite project:

```bash
VITE_API_BASE_URL=http://localhost:5000
```

This variable is used to specify the base URL for making API requests from the frontend to the Flask backend.

## Installation

### Backend Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Shaik-mohd-huzaifa/HollyGenie.git
   cd HollyGenie/backend
   ```

2. **Set up a virtual environment**:

   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment**:

   - On Windows:
     ```bash
     .\venv\Scripts\activate
     ```
   - On macOS and Linux:
     ```bash
     source venv/bin/activate
     ```

4. **Install dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

5. **Run the Flask application**:

   ```bash
   flask run
   ```

   The backend will start on `http://localhost:5000`.

### Frontend Setup

1. **Navigate to the client directory**:

   ```bash
   cd ../client
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the React Vite application**:

   ```bash
   npm run dev
   ```

   The frontend will start on `http://localhost:3000`.

## Usage

1. Start the backend server:

   ```bash
   flask run
   ```

2. Start the frontend development server:

   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to access the application.

## API Endpoints

The Flask backend exposes several API endpoints, such as:

- **Text-to-Speech Generation**: `/api/tts` (POST request with a `prompt` parameter)
- **Image Generation**: `/api/image` (POST request with a `prompt` parameter)
- **OpenAI Integration**: `/api/openai` (POST request with a `query` parameter)

## Project Structure

```
/your-flask-react-app
├── backend
│   ├── app.py
│   ├── requirements.txt
│   └── .env
├── client
│   ├── src
│   ├── public
│   ├── vite.config.js
│   └── .env.local
└── README.md
```

- **backend/**: Contains the Flask backend code.
- **client/**: Contains the React Vite frontend code.
- **README.md**: This file.

## Configuration

Ensure that the `.env` files in both the backend and frontend are set up with the correct environment variables.

## Deployment

### Backend

For deployment, consider using services like Heroku, AWS, or DigitalOcean. Make sure to configure environment variables for production.

### Client

The frontend can be deployed on platforms like Vercel, Netlify, or any static hosting provider.
