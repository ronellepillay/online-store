import React from 'react';
import { LandingPageWrapper } from './styled';

function LandingPage() {
  return (
    <LandingPageWrapper>
      {/* Heading */}
      <h2>Welcome to Awesome T's</h2>
      
      {/* Description */}
      <p>
      Awesome T's was established in 2016, as a fun clothing brand of custom-printed t-shirts and apparel. We are a family-run business, started by Noluvuyo who comes from a design background and initially designed ladies' clothes. 
        {/* Explanation of the business */}
        Buntu and Xhanti (Husband & Son) now help with the day-to-day running of the business. We all work hard together to provide a top-quality handmade brand. Starting out in a spare room, we soon realized how popular our slogan t-shirts were. 
        {/* Designer's passion and target audience */}
        Having a background in the fashion & apparel industry, meant we not only knew how to produce the very best quality prints, but at the right price for our customers. This has seen us grow from a startup in 2016 to a multiple 6 figure business which we are super proud of.
        {/* Growth and reputation of the brand */}
      </p>
    </LandingPageWrapper>
  );
}

export default LandingPage;