import time
import pandas as pd


CITY_DATA = { 'chicago': 'chicago.csv',
              'new york': 'new_york.csv',
              'washington': 'washington.csv' }

months = ['all', 'january', 'february', 'march', 'april', 'may', 'june']

def load_data(city, month, day):
    """
    Loads data for the specified city and filters by month and day if applicable.

    Args:
        (str) city - name of the city to analyze
        (str) month - name of the month to filter by, or "all" to apply no month filter
        (str) day - name of the day of week to filter by, or "all" to apply no day filter
    Returns:
        df - Pandas DataFrame containing city data filtered by month and day
    """

    df = pd.read_csv(CITY_DATA[city])
    df['Start Time'] = pd.to_datetime(df['Start Time'])


    df['month'] = df['Start Time'].dt.month
    if month != 'all':
        df = df[df['month'] == month]

    df['day_name'] = df['Start Time'].dt.day_name()
    if day != 'all':
        df = df[df['day_name'] == day.capitalize()]


    return df


def time_stats(df):
    """Displays statistics on the most frequent times of travel."""

    start_time = time.time()
    global months

    time_stats_dict = {}

    # display the most common month
    time_stats_dict["common_month"] = months[df['month'].mode()[0] - 1]


    # display the most common day of week
    time_stats_dict["common_day"] = df['day_name'].mode()[0]


    # display the most common start hour
    time_stats_dict["common_hour"] = df['Start Time'].dt.hour.mode()[0]


    time_stats_dict["time"] =  time.time() - start_time

    return time_stats_dict


def station_stats(df):

    # print('\nCalculating The Most Popular Stations and Trip...\n')
    start_time = time.time()

    station_stats_dict = {}

    # display most commonly used start station
    station_stats_dict["popular_start"] = df['Start Station'].mode()[0]


    # display most commonly used end station
    station_stats_dict["popular_end"] = df['End Station'].mode()[0]



    # display most frequent combination of start station and end station trip
    df['Combination'] = df['Start Station'] + " as a start station and " + df['End Station'] + " as an end station."  
    station_stats_dict["popular_combination"] = df['Combination'].mode()[0]

    station_stats_dict["time"] = time.time() - start_time

    return station_stats_dict


def trip_duration_stats(df):
    """Displays statistics on the total and average trip duration."""

    # print('\nCalculating Trip Duration...\n')
    start_time = time.time()
    trip_duration_stats_dict = {}

    # display total travel time
    trip_duration_stats_dict['total_time'] = df['Trip Duration'].sum()


    # display mean travel time
    trip_duration_stats_dict['mean_time'] = round(df['Trip Duration'].mean(),3)


    trip_duration_stats_dict['time'] = time.time() - start_time

    return trip_duration_stats_dict
    


def user_stats(df):
    """Displays statistics on bikeshare users."""

    start_time = time.time()
    user_stats_dict = {}

    # Display counts of user types
    user_stats_dict["Subscribers"] = df['User Type'].value_counts()[0]
    user_stats_dict["Customers"] = df['User Type'].value_counts()[1]

    # Display counts of gender
    if 'Gender' in df:
        user_stats_dict["Males"] = df['Gender'].value_counts()[0]
        user_stats_dict["Females"] = df['Gender'].value_counts()[1]


    # Display earliest, most recent, and most common year of birth
    if 'Birth Year' in df:
        user_stats_dict["earliest"] = df['Birth Year'].min()
        user_stats_dict["most recent"] = df['Birth Year'].max()
        user_stats_dict["most common"] = df['Birth Year'].mode()[0]

    user_stats_dict["time"] = time.time() - start_time

    return user_stats_dict


def main():
    city, month, day = get_filters()
    # city = "new york"
    # month = "february"
    # day = "wednesday"
    df = load_data(city, month, day)
    print(df)

    # time_stats(df)
    # station_stats(df)
    # trip_duration_stats(df)
    # user_stats(df)

    # time_stats_var = time_stats(df)
    # station_stats_var = station_stats(df)
    # trip_duration_stats_var = trip_duration_stats(df)
    # user_stats_var = user_stats(df)
        


if __name__ == "__main__":
	main()
