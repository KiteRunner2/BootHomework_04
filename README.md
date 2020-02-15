# Quiz application
 
RULES of the game:
1. choose answer to the question, you have 60 sec to answer as many questions as you can
2. if question is correct then you score 1 point and next question is presented
3. if question is folse, your available time decreases by 5s
4. game lasts until time is finished or questions are finished
5. after game you can add your nick name to hall of fame


Application consistis of 3 main modules

1. initD - initiatlization of data -> it defines arrays of objects with questions and answers
2. dataCtrl module - used for selecting questions, adding, retrieving names for hall of fame
3. appCtrl module - main logic app for game; starting game, next question selection, result check, timer control

Application layout works well for desktop and mobile browser. On mobile it colapses into single column.
Layout is built using bootstrap.

# TO-DO
1. sorting hall of fame based on result - currently it adds name to front of the list
2. present hall of fame after game is finished and name is entered

