// Get references to page elements
var $exampleText = $("#example-text");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
var searchHistoryArray = []; 

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/askanything",
      data: JSON.stringify(example)
    });
  },
  getExamples: function(searchString) {
    return $.ajax({
      url: "api/askanything/" + encodeURIComponent(searchString),
      type: "GET"
    });
  },
  searchExamples: function(search) {
    return $.ajax({
      url: "api/search",
      type: "GET",
      data: search
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function(searchString) {

  searchHistoryArray.push(searchString); // add new items to array
      localStorage.setItem("history", JSON.stringify(searchHistoryArray));

  API.getExamples(searchString).then(function(data) {
    console.log("OG GET DATA: ", data);
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.answer)
        .attr("href", "/askanything/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);
      return $li;
    });
    console.log("AFTER MAP:", $examples);

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();
  refreshExamples($exampleText.val().trim());
  return;
  /*
  var example = {
    text: $exampleText.val().trim()
  };

  if (!(example.text)) {
    alert("You must enter an example text!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });
  */

  //$exampleText.val("");
};

// Add event listeners to the submit button
// $(".dropdown-menu").change(function () {
//   var str = "";

//   $("#serverconnect").each(function() {
//     str += $( this ).text() + " ";
//   });

//   $( "#example-text" ).text( str );
// }).change();

$submitBtn.on("click", handleFormSubmit);

$(".carousel").carousel({
  interval: 2000
});




$(document).ready(function(){
  
  var codeQ1 = $( "#serverconnect").text();
  $("#serverconnect").click(function(){
  $("#example-text").val(codeQ1);
  });

  var codeQ2 = $( "#loop").text();
  $("#loop").click(function(){
  $("#example-text").val(codeQ2);
  });

  var codeQ3 = $( "#git").text();
  $("#git").click(function(){
  $("#example-text").val(codeQ3);
  });

  var codeQ4 = $( "#package").text();
  $("#package").click(function(){
  $("#example-text").val(codeQ4);
  });

  var codeQ5 = $( "#dependencies").text();
  $("#dependencies").click(function(){
  $("#example-text").val(codeQ5);
  });

  var codeQ6 = $( "#files").text();
  $("#files").click(function(){
  $("#example-text").val(codeQ6);
  });

  var codeQ7 = $( "#dummy").text();
  $("#dummy").click(function(){
  $("#example-text").val(codeQ7);
  });

  var codeQ8 = $( "#comment").text();
  $("#comment").click(function(){
  $("#example-text").val(codeQ8);
  });

  var codeQ9 = $( "#sourcecode").text();
  $("#sourcecode").click(function(){
  $("#example-text").val(codeQ9);
  });

  var codeQ10 = $( "#youtube").text();
  $("#youtube").click(function(){
  $("#example-text").val(codeQ10);
  });


});






/*var searchHistory = require("../../../models/searchHistory");

function showSearchHistory() {
  // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
  $.ajax({ url: "/api/searchhistory", method: "GET" })
    .then(function(searchHistory) {

      // Here we then log the searchHistory to console, where it will show up as an object.
      console.log(searchHistory);
      console.log("------------------------------------");

      // Loop through and display each of the customers
      for (var i = 0; i < searchHistory.length; i++) {

        // Get a reference to the glossaryList element and populate it with tables
        var glossaryList = $("#glossaryList");

        // Then display the fields in the HTML (Section Name, Date, URL)
        var listItem = $("<li class='list-group-item mt-4'>");

        listItem.append(
          $("<h2>").text("Search #" + (i + 1)),
          $("<hr>"),
          $("<h2>").text("Question: " + searchHistory[i].codeQuestion),
          $("<h2>").text("Code Snippet: " + searchHistory[i].codeAnswer),
        );

        glossaryList.append(listItem);
      }
    });
}*/