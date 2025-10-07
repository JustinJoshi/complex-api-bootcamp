# 📊 Project: Complex API 

### Goal: Use data returned from one api to make a request to another api and display the data returned

### How to submit your code for review:

- Fork and clone this repo
- Create a new branch called answer
- Checkout answer branch
- Push to your fork
- Issue a pull request
- Your pull request description should contain the following:
  - (1 to 5 no 3) I completed the challenge
  - (1 to 5 no 3) I feel good about my code
  - Anything specific on which you want feedback!


I completed the challenge: 5
I feel good about my code: 4
I enjoyed making this one

Artist Cities Api


https://justinjoshi.github.io/complex-api-bootcamp/

How It's Made:

Tech used: HTML, CSS, JavaScript, Framework of choice

I used the musicbrainz api to access a database of artists , and the cityninja api to get data about the cities. This project was a lot of fun to make. I enjoyed reading the musicbrainz documentation, its a very good api. No api key required! 

I first setup two inputs, one for the artist first name, one for the artist last name. Then I setup my fetch request to get data from the API. I inserted the url link into the fetch request using a template literal and inserted the value of the inputs into that url following the api documentations guidelines. After doing this, I was able to get back a lot of information about the artist. I selected the value that shows where they were originally from, and fed that data into another API that has information about different cities. I inserted that city into the URL of another fetch request for the city API. This then returned population of the city they are from. I then inserted that city into the dom!

Optimizations


I really enjoy working with apis. Apis are a lot of fun and its always enjoyable to manipulate data coming from fetch requests. However this time around,  my creativity felt really stunted. Leon mentioned we should make a project that "looks good" and put time into these. But i really couldnt think of ideas that i resonated with that i could achieve in a reasonable time frame. So i ended up having to settle with finding whatever APi that actually works and making something that completes the assignment. Reading through documentation can be fun sometimes, especially when its something youre passionate about. This week, i just wanted to complete the assignment and help everybody make sure they completed theirs too. I had a lot of fun helping people with their assignments this week.

Lessons Learned:
I learned that sometimes you need to focus on your own projects even when others are asking for help. This api was a lot of fun to build and I learned a lot about reading documentation. The music brainz api has a lot of good content in it, i definitely want to use this api again. I learned about grabbing data from a fetch and using it wherever I want. 

