// Get references to page elements
var $exampleText = $("#example-text");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function (example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/askanything",
      data: JSON.stringify(example)
    });
  },
  getExamples: function (searchString) {
    return $.ajax({
      url: "api/askanything/" + encodeURIComponent(searchString),
      type: "GET"
    });
  },
  searchExamples: function (search) {
    return $.ajax({
      url: "api/search",
      type: "GET",
      data: search
    })
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function (searchString) {
  API.getExamples(searchString).then(function (data) {
    console.log('OG GET DATA: ', data)
    var $examples = data.map(function (example) {
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
    console.log('AFTER MAP:', $examples)

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function (event) {
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
$submitBtn.on("click", handleFormSubmit);

$('.carousel').carousel({
  interval: 2000
});