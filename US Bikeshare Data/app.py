from flask import Flask, render_template, request, redirect
from os import path
from bikeshare import load_data, time_stats, station_stats, trip_duration_stats, user_stats

app = Flask(__name__)
app.config["CACHE_TYPE"] = "null"

#Dataframes variables
cities = ['chicago', 'new york', 'washington']
months = ['all', 'january', 'february', 'march', 'april', 'may', 'june']
days = ['all', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

stats = ["time stats", "station stats", "trip duration stats", "user stats"]

#Delcaration of global variables
city = "chicago"
month = 6
day = 'monday'
df = load_data("chicago", 6, 'monday')
time_stats_data, station_stats_data, trip_duration_stats_data, user_stats_data, empty  = "", "", "", "", 0



@app.route("/", methods =["GET", "POST"])
def index():
    global city, month, day, df
    df = load_data(city, month, day)
    if request.method == "GET":
        return render_template("index.html", cities = cities, months = months, days = days)
            
    

@app.route("/data", methods = ["POST"])
def data():
    global city, month, day, empty
    city = request.form.get("city")
    month = months.index(request.form.get("month")) +1
    day = request.form.get("day")
    empty = 1
    print("REDIRECT")
    return redirect("/")


@app.route("/script")
def script():
    global df, time_stats_data, station_stats_data, trip_duration_stats_data, user_stats_data
    try:
        time_stats(df)
        station_stats(df)
        trip_duration_stats(df)
        user_stats(df)
    except:
        print("NO DATA")
    else:
        time_stats_data = time_stats(df)
        station_stats_data = station_stats(df)
        trip_duration_stats_data = trip_duration_stats(df)
        user_stats_data = user_stats(df)

        return render_template("script.js", time_stats = time_stats_data, station_stats = station_stats_data, trip_duration_stats = trip_duration_stats_data, user_stats = user_stats_data, empty = empty)
    return redirect("/")


if __name__ == "__main__":
  app.run(debug=True)





