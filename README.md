# Ease Web Client [![Build Status](https://travis-ci.org/Right2Drive/ease-web.svg?branch=master)](https://travis-ci.org/Right2Drive/ease-web)
Can be used [here](https://ease-web.mybluemix.net/)

Ease-Web is a web client for Ease, with the goal of making it a little bit easier watch movies with the people that matter to you, regardless of the distance. 

Ease lets you broadcast your own local content to your friends and loved ones, completely in sync! All the audio and video sharing is peer-to-peer, ensuring your content stays private and safe, and we only use a small signaling server to help you discover other users.

In sync... what does this really mean for you? Well, if you click pause, it pauses for everyone. If you seek, it seeks for everyone. Best of all, everyone watching can do these things too! All the content is completely synced, allowing for a more personal experience (and avoiding the good old "3... 2... 1... Play!").

If you are looking for a similar experience for remote content (youtube etc), we suggest looking at Gaze or Rabb.it, both are great products!

## Getting started

Head over to [Ease](https://github.com/Right2Drive/ease) to install the desktop client! Unfortunately the host must use the desktop client, but peers are welcome to use this web client for greater convenience!

## Developing

### Building

- Building the project is as easy as:

  - `npm run rebuild`
  
- And you can run the file-watchers using:
  
  - `npm run watch`
  
### Start

- Again super easy, just run:
  
  - `npm start`
  
- And navigate to [localhost:8340](http://localhost:8340/)

### Tests

- To run all the tests simply run:

  - `npm test`
 
- To run the tests against the react components:

  - `npm run test:react`

**Note: Nodejs >6.0 required for several of the tests**
