#! /bin/bash

mongoimport --host mongodb --db test --collection todos --mode=upsert --type json --file /mongo-seed/todolist.json --jsonArray