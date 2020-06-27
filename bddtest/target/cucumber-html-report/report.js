$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("indeed.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#----------------------------------"
    },
    {
      "line": 2,
      "value": "# Empty Cucumber .feature file"
    },
    {
      "line": 3,
      "value": "#----------------------------------"
    }
  ],
  "line": 4,
  "name": "Indeed Search Test Feature",
  "description": "",
  "id": "indeed-search-test-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Indeed Search Scenario",
  "description": "",
  "id": "indeed-search-test-feature;indeed-search-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is already on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of Home Page is Indeed",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters data jobTitle and city",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on FindJobs button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on SearchRsults Page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.user_is_already_on_Home_Page()"
});
formatter.result({
  "duration": 6367744500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.title_of_Home_Page_is_Indeed()"
});
formatter.result({
  "duration": 27514100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_enters_data_jobTitle_and_city()"
});
formatter.result({
  "duration": 860792300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_clicks_on_FindJobs_button()"
});
formatter.result({
  "duration": 2914478100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_is_on_SearchRsults_Page()"
});
formatter.result({
  "duration": 5727600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_close_the_browser()"
});
formatter.result({
  "duration": 4346350900,
  "status": "passed"
});
});