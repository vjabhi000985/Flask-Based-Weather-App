import os
import requests
from dotenv import load_dotenv

def setup_weather_api(city: str) -> dict:
    """
    Sets up the base URL and headers for the weather API.

    Args:
        city (str): Name of the city for which weather data is to be fetched.

    Returns:
        dict: A dictionary containing the API URL and headers.
    """
    # Load API key from the environment variables
    load_dotenv()
    api_key = os.getenv("API_KEY")

    if not api_key:
        raise ValueError("API_KEY not found in environment variables.")
    
    # Construct the API URL
    url = f"https://api.tomorrow.io/v4/weather/realtime?location={city}&apikey={api_key}"
    
    # Set headers for the request
    headers = {"accept": "application/json"}
    
    return {"url": url, "headers": headers}

def fetch_weather_data(city: str) -> dict:
    """
    Fetches real-time weather data for the given city.

    Args:
        city (str): Name of the city for which weather data is to be fetched.

    Returns:
        dict: Weather data in JSON format. If the request fails, returns an error message.
    """
    try:
        # Set up API configurations
        config = setup_weather_api(city)
    
        # Make the API request
        response = requests.get(config["url"], headers=config["headers"])
    
        # Check if the request was successful 
        response.raise_for_status()  # Raise HTTPError for bad responses (4xx and 5xx)
        data = response.json()  # Return the weather data as a dictionary

        # Extract relevant fields from the API response
        weather_data = {
            "city": data["location"]["name"],
            "temperature": int(data["data"]["values"]["temperature"]),
            "humidity": data["data"]["values"]["humidity"],
            "wind_speed": data["data"]["values"]["windSpeed"]
        }
    
        return {"success": True, "data": weather_data}
    
    except requests.exceptions.RequestException as e:
        # Log the error for debugging
        print(f"Error fetching weather data: {e}")
        return {"success": False, "error": str(e)}