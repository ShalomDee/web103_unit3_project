# WEB103 Project 3 - *UnityGrid Plaza*

Submitted by: **Shalom**

About this web app: **UnityGrid Plaza is a virtual anime community space where users can explore upcoming events across four themed venues in Dallas, TX. Click on a location on the interactive map to see all events happening there — from cosplay showcases and mecha build contests to Dragon Ball tournaments and Sailor Moon proms.**

Time spent: **10** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [x] **The web app displays a title.**
- [x] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [x] *Note: A non-visual list of links to different locations is insufficient.*
- [x] **Each location has a detail page with its own unique URL.**
- [x] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [x] An additional page shows all possible events
  - [x] Users can sort *or* filter events by location.
- [ ] Events display a countdown showing the time remaining before that event
  - [ ] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

- [x] Interactive SVG map on the home page — hovering over a venue highlights it and reveals its name before navigating
- [x] Each location detail page shows the venue image, name, and full address pulled from the database
- [x] Anime-themed event images sourced from Unsplash for every event card
- [x] Fully responsive event cards with a slide-in overlay on hover showing event title, date, and time

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ScreenToGif
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

The main challenge was wiring the interactive SVG map to the React router — the map uses raw `<a href>` tags inside SVG polygons, which required keeping the href values in sync with the React route paths. Setting up the Render PostgreSQL connection also required making sure `dotenv` loaded from the correct `config/.env` path when the server runs from the `server/` directory.

## License

Copyright 2026 Shalom

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
