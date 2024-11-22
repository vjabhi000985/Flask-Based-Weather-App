# Weather App

A simple weather application built with Flask that displays current weather, forecasts, and additional weather information for a given city.

## Features

- Displays current weather, temperature, and humidity for a given city.
- Provides a 5-day weather forecast with daily temperatures.
- Built with Python 3.12.5 using Flask.
- Fully responsive design with custom styles and dynamic updates.

## Requirements

- Python 3.12.5
- Virtual environment (recommended)

## Setup Instructions

1. Set up a Python virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
```

2. Install the required packages:

```bash
pip install -r requirements.txt
```

3. Add your API key and configuration settings in the .env file:

```bash
API_KEY=your_api_key_here # Get the api key from - https://www.tomorrow.io/
```

4. Start the Flask application:

```bash
python app.py
```

5. Open your browser and visit: `http://127.0.0.1:5000`

## Recommended Learning Path

1. Start with Python basics and Flask.
2. Learn HTML, CSS, and responsive design principles.
3. Integrate the weather API using Python's `requests` library and `json` library.
4. Add JavaScript for dynamic updates.
5. *Optional* Explore deployment to make the app live.
