# **[Random-Rectangle-Colors](https://github.com/hanihzr/Random-Rectangle-Colors)**

> Note: This project is using [Angular Library](https://angular.io/guide/libraries) which contains services, models.

Please remember to use `ng build shared-lib` before running `ng serve`

# Project Description:

# Simple Test

Using the suggested API Endpoint

On Init => Retrieve data from the endpoint
On Success => Show the Layout

The container must be 400x200 centred inside the page, but if we resize it, the test should still work.

The colour of the ball must be random taken from the API, using the “hex” current colour.

![Rectangle woth color](https://i.ibb.co/kSBY4pT/image-000.png)

On Click => call the endpoint, retrieve the next “hex” random color then move animating the ball to the opposite corner clockwise.

![Rectangle woth color](https://i.ibb.co/pJXskxW/image-002.png)

On Click => call the endpoint, retrieve the next “hex” random color\_ then move animating the ball to the opposite corner clockwise.

![Rectangle woth color](https://i.ibb.co/zXBcMr3/image-004.png)

On Click => call the endpoint, retrieve the next “hex” random color\_ then move animating the ball to the opposite corner clockwise.

![Rectangle woth color](https://i.ibb.co/hHQrcVF/image-006.png)

On Click => return to first state.

You can choose your favourite JS framework, SCSS is preferable over simple CSS, use minimal HTML.
Clean code with syntax check is appreciated.

if you manage, minify the CSS and JS using a build tool (gulp, grunt, ngCli), in case provide a minimum of documentation.

## API_ENDPOINT: http://www.colr.org/json/color/random
