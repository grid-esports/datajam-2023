# GRID DataJam 2023

## Overview

## Getting Started
Inside the data_files folder you'll find two zip files once unzipped, you'll find a few different data files. These are the real events coming from our Series Events API, these are stored as JSONl files.

We have also included a simple node script that will allow you to connect via a websocket and consume the events files. 

## Data Available

The ID listed here is what's know as our GRID Series ID you can reference this within the attached data files or using the server we have bundled with this repository. 

-   CCT Online Finals #1
	-   Final 
		- ID: 2579089
	-   Semifinals
		- ID: 2579048
		- ID: 2578928
-   CSGO PGL Major Antwerp 2022
	-   Final 
		- ID: 663412
	-   Semifinals
		- ID: 661916
		- ID: 661945
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
