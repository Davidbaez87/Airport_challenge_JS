Airport Challenge JavaScript/ Learning a new language.

Once I started to see the amount of information used on the Airport challenge walkthroughs, I realize that I needed more time understanding the logic and syntax of JS before I could start tackling the challenge. But I also knew that if i didn't pushed myself to do the challenge I will not understand it.

At the same time that I was doing the challenge I was doing research about each term I found confusing/weird but I realize that terminology changes based on what users have encounter. It's not just like a new language that someone can explain, it depends a lot on what are you trying to learn and the functionality of it.

Many sites explain JS with examples, but these examples bring another negative to the equation and that is that they bring more terminology and more new confusing/weird words and ways on how to solve the issue, I guess this is why JS is so popular. It has a few ways to confront an issue which it makes JS a very powerful tool.

Once I started to understand the logic and compared to Ruby it all started to make a little more sense in the challenge. little did I know that the walkthroughs will have refactor content that create a little confusion, which it maked me come with the conflicts below.


-- I'm not sure why did the walkthrough create a feature test. Based on previous exercises feature test to my understanding are to test how the user will interact with our app, rather than how the app will interact with itself.

Also if we are testing that planes can land and take off, why do we do the same tests on 'planeSpec.js' and 'airportSpec.js'. I have also commented on my approach to the user stories based on the logic that I've learn seeing the first test.

I've notice that JS uses the 'SpyOnObj' very often. why is the reson for this. In Ruby the uses of doubles to my understanding is useful but I never saw on previous exercises of Ruby used them like JS, in particularjust when you start testing the first user stories. I guess in the future it will be useful, but for now is very confusin when to use them and when not to.

If we could find a Jasmine matchers cheat sheet that has the meaning of each one of them will be really useful. I tried to find one but I couldn't, and when you google each one of them you get people understanding and each person has a different approach as well as a different way to define them and use them depending on the examples that they are trying to solve.

I manage to finishn the user stories below with some help of the walkthroughs, although I did create my own code but was unsuccessfull in passing the test, just a couple of them worked. 

1. As an air traffic controller 
So I can get passengers to a destination 
I want to instruct a plane to land at an airport.

2. As an air traffic controller 
So I can get passengers on the way to their destination 
I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport
