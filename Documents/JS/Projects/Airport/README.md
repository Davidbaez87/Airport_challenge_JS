Airport Challenge JavaScript

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
