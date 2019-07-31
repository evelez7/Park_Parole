$( document ).ready(function() {
<% for (var i = 0; i < searchResult.length; i++) { %>
    document.getElementById('result').innerHTML += '<p> <%= searchResult[i][ID] %>.<%= searchResult[i]['Name'] %></p>'
    
    document.getElementById('result').innerHTML += '<p> Issue Category: <%= searchResult[i]
    ['Category'] %><br>Description: <% =searchResult[i]['Description'] %> </p>'
    
    document.getElementById('result').innerHTML += '<p>Date: <%= searchResult[i]
    ['Date'] %><br>Location: <% =searchResult[i]['Location'] %> </p>'
    <% } %>
    
    document.getElementById('result').innerHTML += '<p>Image: <%= searchResult[i]
    ['Image']%> </p>'
    <% } %>
  });
