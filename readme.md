# wrbl
(say: "warble")

The most minimalist of minimalist Twitter clients.

## purpose
The idea for wrbl came out of a conversation with @anthonyongaro, @pyry, and @experimat about ways we could be more intentional about our use of social.

## instructions
First, clone this repository:

```bash
git clone https://github.com/skylineproject/wrbl
```

Ensure you have [Node.js](http://nodejs.org) installed on your computer. If you do not, install it from the [Node.js website](http://nodejs.org).

In a terminal, open the directory created when you cloned this repo. Run the command: ```npm install``` to install the required dependencies.

Then, find your Twitter App Credentials:
1. Open the [Twitter Application Management page](https://apps.twitter.com)
2. Click **Create New App**
3. Enter whatever name and info you like (note that a website is required. For "oauth callback URL," enter twitter.com -- this part of wrbl is not yet implemented, so we won't be using that parameter until Issue #1 is resolved)
4. Switch to the **Keys and Access Tokens** tab
5. Add your **Consumer Key** and **Consumer Secret** into config.json.
6. Scroll to the bottom of the page, and generate an **Access Token**.
7. Add your **Access Token** and **Access Token Secret** into config.json.
8. Save and close config.json

Back in that terminal window you used before, run ```npm start``` and open a web browser to [http://localhost:8080](http://localhost:8080). Your one tweet per hour awaits!


## status
wrbl is under active development. You're currently looking at *release 0.0.0*.

## next steps
1. *Implement OAuth.* Signing into wrbl should be as easy as logging in with your Twitter username and password. I simply haven't figured out how to do that yet. Twitter has some good info on their dev site, but I haven't yet been able to dig deep enough to feel good about the aspects of the implementation I could get running. See Issue #1 for more info.

2. *Make tweet selection smart.* Right now, wrbl picks one tweet at random from the past hour's tweets. See Issue #2 for more info.

3. *Add inline reply, retweet, fav logic*. This depends on Issue #1's resolution.
