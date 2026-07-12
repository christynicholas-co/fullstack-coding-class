
The Unofficial
SxswReview.com

Database:
D0: Event Name
D0.1:  RSVP Yes/No/Mabye  RSVP link
D0.2:  Badge req/preference/not listed
D1: Approaching Time Stamp:  Event Time minus 30 (do not display element)
D2: Active Time Stamp:  Event Start Time
D3: Active Time Stamp end: Event End Time 


        Code Challenge D1 & D2 linked to event preview window
        Code Challenge D1 & D2 & D3 linked to event map API 

            sollution?:
                if (D1 >= NOW -30 && < NOW) then display Object Pin on map w/ info box
                if(D2 >= Now && Now <= D3) then display Object pin on map w/ info box
                
D3.1:  Status:  Future. Upcoming(30min), Active, Over
D4: Location Name
D5: Location Address
        code challenge  import D5 to map api

D6:  Event Highlights Description (Freebies features)
D7:  Event Interest Rating 
D8:  Link to event review article (preview)
D9:  Image of Event if available
D10: Full Review with links to images 
        Code Challenge/relevance  it may be simpler to store all info in one MongoDB and then call it where appropiate.   The full review won't be called on the preview card only on the full review view linked to at D8


* import all elements into card which will be easily readable as multiple cards on website or scrolled through on phone screen

* coding challenge?  update on the fly with new info and or links to new reviews



Map API:
ALL Accounts LOGIN: sxswapp@outlook.com ALL Accounts pw: TestUser123!
cache 

A.   Choose API  Google vs Leaflet

Active Map Tasks:
1.  Establish users location

2.  Let user choose radius to search--NO

3.  Sort Active Events (will this require a new sub database of active/pending/done )
4.  Grab D5 from events and send to map api
5.  Process return data from maping api or send user out to map api site  (which is more feasible?)
6.  link location info to D0(event name) and data

alt:  link map api to card and only show User location and Event location on individual card.

Map: Dowtown Just E. of Comal to Just w. of Lamar, N. to 15th S. to ??? So Co....


Twitter Feed API:

1. Set up sxswreview twitter (finalize)
2. Choose feeds to follow

3. Link twitter api to feed window on page
4. test


Site map:  
Home, Event-Map, Tips, Reviews, Contact, Links, About (Disclaimer, Team, Acc) Search.

* coding challenge...how do you do a search and is this menu too busy, maybe use some sub menus (how will this affect mobile?)

* flesh out site map outline


Home Page Initial Rough Outline/Ideas:
Header:
Upcomming/Active Events:
    Window, centered. scrollable  vh 40% approx  
    Show preview of D1 and D2 events:   Event Time (D2) (D3), Event name (D0), 
                                        Event location(D4),
                                        Event Highlights (D6) (char limit)
                                        Link to preview card

Twitter Feed Window (scroll through recent tweets)  appear on right margin on desktop centered on phone

Map Window of what's going on...

Recent Reviews/Previews

Footer




Preview Card:
D0: 
D0.1
D2: 
D3: 
D3.1:  
D4: 
D5: 
D6:  
D7:  
D8:  Link to event review article (preview)
D9:  Image of Event if available


* coding challenge?  update on the fly with new info and or links to new reviews


Review cards

Review Card: (adjust formating to focus on review maybe spread above info in 2-3 column box at top or side)
D0: 
D0.1:
D2: 
D3: 
D3.1:  
D4: 
D5: 
D6:  
D7:  
D8:  Link to event review article (preview)
D8.2: By-line credit
D9:  Image of Event if available


D10 :Review, link to more pics                              
    


* coding challenge?  update on the fly





