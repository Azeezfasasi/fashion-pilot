function JobDescriptionText() {
  return (
    <div className="w-full lg:w-[45%] mx-auto flex flex-col gap-6 items-start justify-start bg-white p-2 sm:p-0 mt-4">
      <h2 className="text-gray-900 text-xl sm:text-2xl font-semibold mb-2">
        Job Description
      </h2>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        Velstar is a Shopify Plus agency, and we partner with brands to help them
        grow, we also do the same with our people!
      </p>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        Here at Velstar, we don't just make websites, we create exceptional
        digital experiences that consumers love. Our team of designers, developers,
        strategists, and creators work together to push brands to the next level.
        From Platform Migration, User Experience &amp; User Interface Design, to
        Digital Marketing, we have a proven track record in delivering outstanding
        eCommerce solutions and driving sales for our clients.
      </p>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        The role will involve translating project specifications into clean,
        test-driven, easily maintainable code. You will work with the Project and
        Development teams as well as with the Technical Director, adhering closely
        to project plans and delivering work that meets functional &amp;
        non-functional requirements. You will have the opportunity to create new,
        innovative, secure and scalable features for our clients on the Shopify
        platform.
      </p>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
        Want to work with us? You're in good company!
      </p>

      {/* Requirements */}
      <div className="w-full">
        <h3 className="text-gray-900 text-lg font-semibold mb-1">Requirements</h3>
        <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-1">
          <li>
            Great troubleshooting and analytical skills combined with the desire to
            tackle challenges head-on
          </li>
          <li>
            3+ years of experience in back-end development working either with
            multiple smaller projects simultaneously or large-scale applications
          </li>
          <li>
            Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel
          </li>
          <li>
            Working regularly with APIs and Web Services (REST, GraphQL, SOAP,
            etc)
          </li>
          <li>
            Experience/awareness in Agile application development, commercial
            off-the-shelf software, middleware, servers and storage, and database
            management
          </li>
          <li>
            Familiarity with version control and project management systems (e.g.,
            Github, Jira)
          </li>
          <li>
            Ambitious and hungry to grow your career in a fast-growing agency
          </li>
        </ul>
      </div>

      {/* Desirable */}
      <div className="w-full">
        <h3 className="text-gray-900 text-lg font-semibold mb-1">Desirable</h3>
        <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-1">
          <li>
            Working knowledge of eCommerce platforms, ideally Shopify but also
            others e.g. Magento, WooCommerce, Visualsoft to enable seamless
            migrations
          </li>
          <li>Working knowledge of payment gateways</li>
          <li>API platform experience / Building restful APIs</li>
        </ul>
      </div>

      {/* Benefits */}
      <div className="w-full">
        <h3 className="text-gray-900 text-lg font-semibold mb-1">Benefits</h3>
        <ul className="list-disc list-inside text-gray-700 text-base sm:text-lg space-y-1">
          <li>
            Early finish on Fridays for our end of week catch up (4:30 finish, and
            drink of your choice from the bar)
          </li>
          <li>
            28 days holiday (including bank holidays) rising by 1 day per year
            PLUS an additional day off on your birthday
          </li>
          <li>Generous annual bonus</li>
          <li>Healthcare package</li>
          <li>Paid community days to volunteer for a charity of your choice</li>
          <li>£100 contribution for your own personal learning and development</li>
          <li>Free Breakfast on Mondays and free snacks in the office</li>
          <li>
            Access to Perkbox with numerous discounts plus free points from the
            company to spend as you wish
          </li>
          <li>Cycle 2 Work Scheme</li>
          <li>Brand new MacBook Pro</li>
          <li>
            Joining an agency on the cusp of exponential growth and being part of
            this exciting story
          </li>
        </ul>
      </div>
    </div>
  );
}

export default JobDescriptionText;