# TwitterFeed Component

## Description

The TwitterFeed component is displaying a Twitter List timeline that shows a stream of Tweets from selected accounts. This way we won't miss a Tweet from the accounts that are most important. 

---
## How it's built

This is using a NPM React module that allows twitter widgets to be added to our react project.
* Name of NPM module: react-twitter-embed
* NPM Module URL: https://www.npmjs.com/package/react-twitter-embed


---
## Usage

Location of Component is here:
 * sxswreview/sxsw_review/src/TwitterFeed.js
 * I also created the route to this component in the App.js file

I used the Timeline option but there are other options available that can be reviewed in the module URL above.
* <TwitterTimelineEmbed   
    sourceType="list"  
    id="1492017716118622208"  <<<---Update this line<---  
    options={{height: 800, width: 220 }}     
    /> 
 
#### Specify which List to use in the component 
* Update the "id" field with your ID number located in the Twitter List URL. (image below)
* Update the "options" field if you'd like to adjust the height and width of widget.
---
## Maintaining widget

Currently this list is coming from the following Twitter user account. 
* Username: sxsw_unoreviews
* Password: Dontchangeme1996!

Moving forward simply create a list in Kevin's (@sxswreview) profile then update the Twitterfeed.js file as mentioned in the Usage section above. 

Otherwise, log into the account listed above and follow these steps on updating the list. You would do the same steps when creating/updating your list under your profile. 

1. Log into Twitter.com with credentials provided or Kevin's profile.
2. Navigate to the Lists menu
    * From Kevin's profile (@sxswreview) click on the "New List" icon in the top right corner and follow the prompts.
2. From the @sxsw_unoreviews account listed above:
2. Select "SXSW List" under "Your Lists"
3. Click on Edit List
4. Click on Manage Members
5. Click "Remove" next to any member you would like to remove
6. Click the Suggested tab to add new members 
    * Enter username and then click "Add"
8. Once finished click Back Arrow in top left corner and then click "Done"
---
![ID in URL](https://github.com/ACCSoftwareBootcamp/sxswreview/blob/master/Readme/Images/sxswlistID.jpg)

---
## Current accounts on list:
1. @sxsaviors
2. @WhoaoCo
3. @sxswsecrets
4. @sxswhiphop
5. @festexperts
6. @atxconcert
7. @sxswreview
8. @sxswmafia
9. @sxsweats
10. @rsvpforyourlife
11. @atxshhh
12. @sxswmf
13. @openbaratx
14. @thefreenoms
15. @rsvpster
16. @freeatsxsw
17. @360sxsw
18. @sxswparty
19. @do512

---
# Twitterfeed Sample

![ID in URL](https://github.com/ACCSoftwareBootcamp/sxswreview/blob/master/Readme/Images/TwitterFeedsample.jpg)



