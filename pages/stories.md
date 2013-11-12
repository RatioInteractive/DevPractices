Stories
====
Writing good stories is an art. They must implicitly capture the value of the work to be done, be as concise and explicit to the requirements as possible, and be accessible to all audiences. 

_Anyone should be able to read the subject and understand how the product will be improved on completion._ 

#### Basic structure

A **\<role\>** can **\<act\>** for **[reason]**

* **REQ:** _a fact about the feature_
* **QUESTION:** _an unknown about the feature_
* **TEST:** _a way to verify the feature_

#### Explanation:
Single sentence stories are not complete. To fully instruct what needs to be built, a story must be _interrogated_. Thinking through scenarios of a story exposes _QUESTIONS_, which when answered become _REQUIREMENTS_ or _TESTS_. These must be captured in the story **description** as the facts and verification steps necessary to build and test the story. 

Example:
----
#### _A user can see the speed and estimated completion time of a download_

**REQ:** Speed will be determined as kilobytes per second and shown with label (Kbps).  
**REQ:** Estimated completion time will be calculated by dividing remaining kilobytes by Kbps and shown in this format HH:MM:SS.  
-- If less than 60 minutes, hide hours.  
-- If less than 60 seconds, hide minutes.  
**REQ:** Completion estimate will update every 2 seconds.  
**REQ:** a 3 second delay before initially showing the estimate.

**Q:** Is estimated time to completion valuable to the user when it's typically not accurate?  
**Q:** Should we average Kbps over time to reduce estimate fluctuation?  

**TEST:** Verify rough accuracy of calculated estimate by comparing total time of download against estimate samples.  
**TEST:** Verify the estimate does not fluctuate wildly from second to second.  


Additional info:
----
* This format is taken from Mike Cohn's book [User Stories Applied]
(http://www.mountaingoatsoftware.com/agile/user-stories).
* Use the [INVEST mnemonic](http://en.wikipedia.org/wiki/INVEST_(mnemonic\)) to evaluate story fitness.
