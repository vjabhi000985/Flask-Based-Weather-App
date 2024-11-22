from flask import Flask, request, jsonify, render_template
from weather_service import fetch_weather_data
import datetime

app = Flask(__name__)

today = datetime.datetime.now()
day_name = today.strftime("%A")  # Full day name (e.g., Sunday)
current_date = today.strftime("%d %B %Y")  # Format as "18 September 2023"

@app.route("/")
def index():
    """
    Serves the index.html file from the templates folder.
    """
    # Get current day and date
    today = datetime.datetime.now()
    day_name = today.strftime("%A")  # Full day name (e.g., Sunday)
    current_date = today.strftime("%d %B %Y")  # Format as "18 September 2023"
    current_time = today.strftime("%I:%M %p")  # Format: 05:30 PM

    weather = None
    city = f"Delhi"
    result = fetch_weather_data(city)
    if result["success"]:
        weather = result["data"]
    
    return render_template("index.html", day=day_name, date=current_date, time=current_time, weather=weather)
    # return render_template("index.html")

@app.route('/weather', methods=['POST'])
def get_weather():
    """
    Endpoint to fetch weather data for a specified city.

    Query Parameters:
        city (str): Name of the city for which weather data is to be fetched. Defaults to 'Ranchi'.

    Returns:
        JSON: Weather data for the specified city or an error message if the request fails.
    """
    # city = request.form.get('city') # Get city from the query parameter

    # if not city:
    #     return jsonify({"success": False, "error": "City is required"}), 400  # Handle case where city is not provided

    # weather_data = fetch_weather_data(city)   # Fetch weather data using the service function

    # return jsonify(weather_data)

    # weather_data = fetch_weather_data(city)   # Fetch weather data using the service function
  
    # return jsonify(weather_data)
    weather = None
    if request.method == "POST":
        city = request.form.get("city")
        result = fetch_weather_data(city)
        if result["success"]:
            weather = result["data"]
    
    return render_template("index.html", day=day_name, date=current_date, weather=weather)

if __name__ == "__main__":
    app.run(debug=True)