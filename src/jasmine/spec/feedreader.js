/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  describe('RSS Feeds', function() {
    /* Tests to make sure that the allFeeds variable has been
     * defined and that it is not empty.
     */
    it('are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
    });


    /* Test that loops through each feed in the allFeeds
     * object and ensures it has a URL defined and that the
     * URL is not empty.
     */
    it('have urls', function(){
      allFeeds.forEach(function(feed){
        expect(feed.url).toBeDefined();
        expect(feed.url).not.toEqual('');
      });
    });


    /* Test that loops through each feed in the allFeeds
     * object and ensures it has a name defined and that the
     * name is not empty.
     */
    it('have names', function(){
      allFeeds.forEach(function(feed){
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toEqual('');
      });
    });
  });

  describe('The menu', function() {
    /* Test that ensures the menu element is hidden by default. */
    it('starts hidden', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });


    /* Test that ensures the menu changes visibility when the
     * menu icon is clicked.
     */
    it('changes visibility when clicked', function(){
      var menuIcon = $('.menu-icon-link');
      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });
  
  describe('Initial entries', function() {
    /* Test that ensures when the loadFeed function is called
     * and completes its work, there is at least a single
     * .entry element within the .feed container.
     */
    beforeEach(function(done){
      loadFeed(0, done);
    });
    
    it('feeds load', function(done) {
      var entries = $('.feed .entry');
      expect(entries.length).toBeGreaterThan(0);
      done();
    });
  });

  describe('New feed selection', function() {
    /* Test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     */
    beforeEach(function(done){
      var self = this;
      loadFeed(0, function(){
        self.oldSample = $('.feed > .entry-link').attr('href');
        loadFeed(1, function(){
          done();
        });
      });
    });
    
    it('content changes', function(done) {
      var sample = $('.feed > .entry-link').attr('href');
      expect(sample).not.toEqual(this.oldSample);
      done();
    });
  });
}());
