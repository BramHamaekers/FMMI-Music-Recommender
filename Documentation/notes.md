1. Click submit button
2. Save genres in local storage
3. Get new List select HTML page from server
4. In HTML page script ->
    4.1 Get genres from local storage
    4.2 Get songs from spotify API (based on genre seed)
    4.3 Place songs in HTML list select page
5. Select songs
6a. Submit songs + save selected songs in local storage

6b. 'I don't like any of these'
    6b.1 Reroll based on genres seed (in local storage)
    6b.2 Continue at 5    


7. Get new recommendations HTML page from server
8. In HTML page script -> 
    8.1 Get songs from local storage
    8.2 Get songs from spotify API (based on song seed) -> [Get larger collection than needed and take subset of this collection]
    8.3 Place songs in HTML recommendatons page

9a. 'I like these songs/submit'
10a. Questionnaire -> fill in + send to server with a user ID.
11a. GO to next type of recommender

9b. 'Refine'
10b. Select new songs from recommendation songs.
    IF "I don't like any of these" reroll based on new subset of collection from recommendations.
11b. Repeat until 9a.

