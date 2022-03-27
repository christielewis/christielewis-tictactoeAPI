#!/bin/bash

curl "https://tic-tac-toe-api-production.herokuapp.com/games" \

  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "book": {
      "title": "'"${TITLE}"'",
      "author": "'"${AUTHOR}"'"
    }
  }'

echo