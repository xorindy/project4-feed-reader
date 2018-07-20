 /* This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application. */

// Ensure tests don't run until the DOM is ready.
$(function() {

    // RSS Feed Test Suite

    describe('RSS Feeds', function() {

        // Test to make sure that the allFeeds variable has been defined and that it is not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Loops through each feed in the allFeeds object and
           ensures it has a URL defined and that the URL is not empty. */
         
        it('urls are defined', function() {
            for (var i=0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            };
        });


        /* Loops through each feed in the allFeeds object and
           ensures it has a name defined and that the name is not empty. */

        it('names are defined', function() {
            for (var i=0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            };
        });

    });

    // The Menu Test Suite

    describe('The Menu', function() {

        // Ensures the menu element is hidden by default.
        it('menu element is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

        // Ensure that the menu toggles on click
         it('toggles on click', function() {

            //Show menu on click, expect body to NOT have menu-hidden class 
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);

            //Hide menu on 2nd click, expect body to have menu-hidden class
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
    });

    // Initial Entries Test Suite
    describe('Initial Entries', function() {

        //Ensure loadFeed function is called, and completes it's work
        beforeEach(function (done) {
            loadFeed(0, function() {
                done();
            });
        });

        //Test if there's at least a single entry in the feed
        it ('more than 0 entries', function() {
            expect($('.entry .feed')).toBeDefined();
        });
    });

    // New Feed Selection Test Suite
    describe('New Feed Selection', function() {

         //Load current feed, then load new feed
        beforeEach(function(done) {
            loadFeed(0, function() {
                currentFeed = $('.feed').html();

                loadFeed(1, function() {
                    newFeed = $('.feed').html();
                    done();
                });

            });
        });

        // Ensure content change
        it('content changes', function() {
            expect(currentFeed).not.toBe(newFeed);
        });
    });
}());
