$(function(){describe("RSS Feeds",function(){it("are defined",function(){expect(allFeeds).toBeDefined(),expect(allFeeds.length).not.toBe(0)}),it("have urls",function(){allFeeds.forEach(function(e){expect(e.url).toBeDefined(),expect(e.url).not.toEqual("")})}),it("have names",function(){allFeeds.forEach(function(e){expect(e.name).toBeDefined(),expect(e.name).not.toEqual("")})})}),describe("The menu",function(){it("starts hidden",function(){expect($("body").hasClass("menu-hidden")).toBe(!0)}),it("changes visibility when clicked",function(){var e=$(".menu-icon-link");e.click(),expect($("body").hasClass("menu-hidden")).toBe(!1),e.click(),expect($("body").hasClass("menu-hidden")).toBe(!0)})}),describe("Initial entries",function(){beforeEach(function(e){loadFeed(0,function(){e()})}),it("feeds load",function(e){var n=$(".feed > .entry-link");expect(n.length).toBeGreaterThan(0),e()})}),describe("New feed selection",function(){beforeEach(function(e){var n=this;loadFeed(0,function(){n.oldSample=$(".feed > .entry-link").attr("href"),console.log(n.oldSample),loadFeed(1,function(){e()})})}),it("content changes",function(e){var n=$(".feed > .entry-link").attr("href");expect(n).not.toEqual(this.oldSample),e()})})}());