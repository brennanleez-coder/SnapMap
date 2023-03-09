
# SnapMap - Real-time Traffic and Weather Information
SnapMap is a web app that uses real-time traffic and weather information for Singapore from the Traffic Images and Weather Forecast APIs by data.gov.sg. It lets users choose a date and time to view a list of locations with traffic cam photos, displayed with user-friendly location names using a reverse geocoding service. Users can select a location to view the traffic cam photo and weather information.
## Tech Stack
- ReactJS
- ContextAPI
- Styled Components
- Traffic Images (https://data.gov.sg/dataset/traffic-images)
- Weather Forecast (https://data.gov.sg/dataset/weather-forecast)





## Rationale 
**Assumptions**
ApiKeys are not stored in dotenv file. This is a bad practice.

**Why ContextAPI instead of Redux?**

Redux is more performant than ContextAPI for large, complex applications because it provides a centralized way to manage state. This reduces the number of component rerenders and can help to improve application performance. However, considering the little functionality and global state required, ContextAPI has lesser boilerplate and is in-built into React. 


**Why Styled Components instead of TailwindCSS?**

Styled Components provides more flexibility and control over your styles because you can use all of the features of CSS, including media queries and pseudo-selectors. With TailwindCSS, I may need to write custom CSS to achieve more complex layouts or interactions.

Styled Components can be more scalable than TailwindCSS because it generates unique class names for each component. Also, TailwindCSS, on the other hand, can lead to large amounts of HTML with lots of classes, which can be difficult to manage and maintain as SnapMap grows.
## User Stories

| User Story | As a... | I want to... | So that... |
| --- | --- | --- | --- |
| US1 | User | Choose a date and time | I can view traffic cam photos for a specific time |
| US2 | User | See a list of locations with traffic cam photos | I can select a location to view |
| US3 | User | See user-friendly location names | I can understand the location better |
| US4 | User | See a traffic cam photo for a selected location | I can see the traffic conditions in that location |
| US5 | User | See weather information for a selected location | I can plan my activities based on the weather in that location |
| US6 | User | See weather information for the nearest available location | I can still plan my activities even if weather data is not available for the selected location |

## API Reference

### Traffic Images API:
Base URL: https://api.data.gov.sg/v1/transport/traffic-images
#### Get all Cameras

```http
  GET /cameras
```
Returns a list of traffic cameras with their image URLs and locations.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `date_time` | `string` | Optional. Specifies the date/time in the format yyyy-MM-dd[T]HH:mm:ss. Only images captured after this date/time will be returned. |
| `camera_id` | `string` | Optional. Specifies the ID of the traffic camera. Only images captured by this camera will be returned. |

#### Get Images from Cameras

```http
  GET /images
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `date_time` | `string` | Optional. Specifies the date/time in the format yyyy-MM-dd[T]HH:mm:ss. Only images captured after this date/time will be returned. |
| `camera_id` | `string` | Optional. Specifies the ID of the traffic camera. Only images captured by this camera will be returned. |


### Weather Forecast API:
Base URL: https://api.data.gov.sg/v1/environment
#### Get 2-hour-weather-forecast

```http
  GET /2-hour-weather-forecast
```
Returns a list of weather forecasts for various locations in Singapore for the next 2 hours.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `date_time` | `string` | Optional. Specifies the date/time in the format yyyy-MM-dd[T]HH:mm:ss. Only images captured after this date/time will be returned. |
| `camera_id` | `string` | Optional. Specifies the ID of the traffic camera. Only images captured by this camera will be returned. |

#### Get Nearest PSI

```http
  GET /nearest-psi
```
Returns the Pollutant Standards Index (PSI) readings for the nearest location to a specified latitude and longitude.


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `date_time` | `string` | Optional. Specifies the date/time in the format yyyy-MM-dd[T]HH:mm:ss. Only weather forecasts captured after this date/time will be returned. |
| `latitude` | `float` | Optional. Specifies the latitude of the location to retrieve the PSI reading. |
| `longitude` | `float` | Optional. Specifies the longitude of the location to retrieve the PSI reading. |


## Features
- Choose a date and time to view traffic cam photos for a specific time
- View a list of locations with traffic cam photos and select a location to view
- See user-friendly location names using a reverse geocoding service
- View a traffic cam photo for a selected location
- See weather information for a selected location
- See weather information for the nearest available location if data is not available for the selected location
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```


## Roadmap

### Authentication with Firebase
- Implement user authentication using Firebase Authentication to secure user data and protect against unauthorized access.
- Allow users to sign up for an account, log in, and log out.
- Implement authorization rules using Firebase's security rules to control access to certain features of the application.

### Additional Features
- Allow users to save their favorite locations for easy access.
- Implement notifications to alert users of traffic or weather events in their selected locations.
- Allow users to set alerts for certain weather conditions or traffic incidents in their selected locations.
- Implement a feature to suggest alternative routes based on traffic conditions.
- Allow users to provide feedback on the application or report issues using a feedback form.
- Implement a feature to display historical traffic and weather data for a selected location.
- Allow users to customize the application's appearance using different themes or color schemes.
## Authors

- [@brennanleez-coder](https://www.github.com/brennanleez-coder)

