# GRID DataJam 2023

## Overview
Welcome to the GRID Esports DataJam GitHub, where you will find the data sets and documentation needed to complete your submission for our DataJam, organized in partnership with Opera GX and Esports Insider.

If you haven’t signed up yet, [head over to our Devpost page and join the challenge](http://grid-esports-datajam23.devpost.com).

Participation is free and you can win exclusive awards including a prize pool of over 20k USD, access to the GRID Data Platform, and consulting sessions with industry professionals.

## About GRID Esports
:wave: [GRID](https://grid.gg) is a data platform serving the game industry with end-to-end in-game data infrastructure, data management, and asset distribution solutions. GRID offers only official data, directly from the source through partnerships with over 90 rights holders such as Riot Games, KRAFTON, WePlay and PGL. GRID Data is used by over 350 commercial clients in over 20 use cases such as betting, integrity, media, player coaching, talent scouting, and AI.

:tada: P.S. We are hiring! [There are multiple engineering roles available so make sure you don't miss out on building the next-generation of game-tech with us!](https://grid.recruitee.com)

## Getting Started
Inside the `data_files` folder you'll find two zip files once unzipped, you'll find a few different data files. These are the real events coming from our Series Events API, these are stored as JSONL files.

We have also included a simple node script that will allow you to connect via a websocket and consume the events files. 

## Data Available
Each ID listed here is what's known as our GRID Series ID, you can reference this within the attached data files or using the server we have bundled with this repository. 

-   CCT Online Finals #1
	-   Final 
		- ID: 2579089
	-   Semifinals
		- ID: 2579048
		- ID: 2578928gi
-   DotA 2 The International 2022
	-   Final 
		- ID: 2432453
	-   Semifinals
		- ID: 2364966
		- ID: 2432302
-   PGL Arlington Major 2022
	-   Final 
		- ID: 1598060
	-   Semifinals
		- ID: 1597139
		- ID: 1614507

### GIT LFS
We use git LFS to store the files you should install this from the [git lfs website](https://git-lfs.com/), and then run `git lfs fetch --all` to get the files from LFS. You'll then need to unarchive the ZIP files to be able to run the test server. 

### Test Server
Included is a test server, this is written in node and will allow you to connect to a websocket connection 

```
npm install
npm run start
```

Once the server is running you can connect via the following URL `ws://localhost:8080/{series_ID}` replacing the `{SERIES_ID}` with one listed above. 
