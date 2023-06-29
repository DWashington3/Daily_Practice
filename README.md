# [DWashington3](https://github.com/DWashington3)
Fundamental Practicing 

</details>
  
<details><summary> APRIL 2023 </summary>
<p>
  
  ### April 2nd 
  
  Well, that wasn't daily practice. Haha! I've managed to do light VBA practice at work almost daily, however, I have a desire to learn other things! I learned I really enjoy DevOps. My team is fairly new but very valuable so i personally want to better my skills. 
  
  So I said all of that just to say my focus has changed and I will be practicing different things daily. 
  My new intrest consist of the following: 
 -  JIRA cloud
 -  Confluence
 - JQL
 - Python
 - SQL
  - Miro
  -  VBA
  - Excel
    
  I don't really have an elaborate plan to build anything, but i will be checking in daily to work on something.   
    
    With that being said i am feeling extremely overwhelmed with the skills I should remember but have forgotten so I think before i even get to the skills mentioned above i have to relearn  git bash commands, and branch basics. That’s going to be critical to my documenting my process daily so i will start there. Also, since I do daily work with confluence and JIRA i will work on how i can document that work legally with my work restrictions.

**Objective 1:** Relearn Version control, Git Basics, and look into bitbucket

[i am starting here](https://docs.github.com/en/get-started)

And i am going to use datacamp since i really like how they explain the WHY/ Mechnaisms behind certain things, which is very helpful for my science brain.

### April 3rd

Until i figure out the work doucmentation, i will just summarize my day here.
Today I played with Miro. Our team is fairly new and we are still in the process of developing our own processes. I am researching the tools we can use for wireframes becasue we have been running into the problem of unsatified stakeholders. Not because the requirements weren't met but because the stakeholder didn't know what they wanted visually. So i will be looking into miro wireframs that we can use for the front-end dashboard development.  

In addition, to that I did some daily backlog grooming. Attended a few meetings and updated the user stories with requirments, and the team wiki space.

### April 14th

Version Control
- What is it?
  Version- Contentes of a file at a given point in time and the metadata 
  VErsion control- group of systems and process to manage changes made to programs, documents 

- Why is it importatnt?
 Enables transparency 
 Tracks files in different states
 Combine version of the file
 Revert changes 
 
 - Useful commands for navigating 
 pwd- locate print location in directory
 ls - get list of files in directory
 ls-a - will show all directories including hidden
 cd- change directory
 git status - find which files are in the staging area
 git restore
  
  
 Editing with command shell
 - Nano file_name.csv - will open a text editor enabling content modifcation
 - Crtl + 0- Save changes
 - Ctrl+ X - Exit the text editor
 - echo- create /edit a file
 - git --version - check the git version
    
 Saving Files
 - Repository is made up of the files, directory, and git storage
 - Do not delete .git
 - The process of saving invlives staging and committing
  1. Staging = saving a draft
  - git add - add a single file
  - git add . - add all the files and directors in current location
  2. Comitting = saving file/ update the repo
  - git commit -m " insert comment"
  
  
  </p>
</details>
<details><summary> MAY 2023 </summary>
  <p> Still have not got my daily groove yet, but i have made some major break throughs at work. Our team is adopting the agile ceremonies very well. The reshaping of how we do grooming has been so much more effective for the team. Tomorrow I’m going to try to have a successful sprint planning. This time around i will be in a way better place. I will have stories that originated from idea day that we can put in order and give me a framework to work  for requirement.
  
In the meantime outside of work i really need to focus on the basics because my skills can be leveraged more. I just have to be confident and right now I don't think the team is confident because i am not so that’s what this whole daily programming thing is all about.

 So i will pick right back up from where i started. 
 
  - sub directores don't have.git stored
  - most of the work i did was in data camp, less definitions more application. 
    
    end of may. ,erp. its been a rough month but i Started diggining into PBI at work. Will be generating reports soon. 
           
  </p>
</details>


<details><summary> JUNE 2023 </summary>  
 <p> Today is may 31st but im getting june set up for success!
   - git diff filename : Compare an unstaged file name with the last committed version
   - git diff -r HEAD filename : compare a staged file with the last committed version
   - git diff -r HEAD : compare all staged files with the last committed version
  
   Storage
   Commit structure
   Commit: metadata
   Tree: tracks the names and locations of the repo
   Blob: 
     Binary large object
     may contain data of any kind
     compressed snapshot of a file's contents
   
   -git log: view commit info to repo in chronological order
   
   -git hash: 40 character alphanumeric string that is unique for each commit
    
   Useful when trying to locate a particular commit
    - git log
    capture the first 6-8 characters
   - git show (6-8 characters)

June 29th
-   I've learned powerBI at work, and created a repo for the team in bitbucket.
-   
i'm going to pivot my personal studies to python as i forsee thatto be more useful at the moment.


   
  <p/></details>

  
  
  
  
  


<details><summary> APRIL 2022 </summary>  
<p>
  
  ### April 9th

**FOCUS: Begin to familiarize myself with HTML and JavaScript**

**TECHNOLOGIES: Plotly, HTML and JavaScript**

Tonight I decided to refocus on JS. I really have a million projects I want to explore but after taking almost a month off I need a refresher so that means getting back to the basics.
Today I played with plotly to create some plots:
- [x] Line Graph
- [x] Horizontal Bar Graph
- [x] Vertical Bar Graph
- [x] Scatter Plot
- [x] Pie Chart

I used Visual Studio as my environment and the Git Bash terminal to commit my work. 

**TROUBLESHOOTING** 
- I struggled to get the objects of the horizontal bar graph to show in my live browser. While inspecting I noted the element didn't show at all. I moved onto the next plot to determine if it was an issue with the JS file or HTML file. The same  occurred when I tried to generate my scatter plot. Thus it's an issue with my index.HTML. file. 

- RESOLVE: I made  a new <body> tag for each plot which was preventing them from rendering. I nested the plots all within one <body> tag. This successfully fixed my issue. 

#### Resources
- https://plotly.com/javascript/basic-charts/
- https://www.random.org/integer-sets/?sets=3&num=50&min=1&max=100&seqnos=on&commas=on&sort=on&order=index&format=html&rnd=new
- https://www.w3schools.com/whatis/whatis_html.asp
- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links
  
Tomorrow's Goal
  
- [ ] Recreate these plots with Python in Jupyter Notebook
- [ ] I will note the data sets used, as they were randomly generated [Random.org](https://www.random.org/integer-sets/?sets=3&num=50&min=1&max=100&seqnos=on&commas=on&sort=on&order=index&format=html&rnd=new).
- [ ] I need to format my [github page](https://dwashington3.github.io/Daily_Practice/) but for now I have it lauched for daily tracking. 


  
### April 10th
  
Today I added the captions, detailing what data was used to generate each plot. 
I also made a copy of my index.html file so that i can develop one into a dashboard and play with the plotly library in the other.

  - [x] Add data detials to each graph.
  
 ### April 13th 

 I'm eager to start manipulating data with JavaScript so I think I will start on that today.
 - well, i forgot what the .map() did so i'm going to play with that and looping through data to get started. I am using my google chrome browser console. 

 ///<insert 4.13.22.map here>

 The "num" parameter that goes inside function can be named anything. That's simply an arbitrary name for the parameter. This provides me the ability to create transformations in my data that are clearly defined, and probsbly several other things now that i sit and reflect. I can divide, multiply, add to any array in a "loop-like" fashion.
  - im pretty sure we can do it with Objects as well. I'm going to try!
  - but first I am going to make sure i understand  how to create an object. I know that i will make Keys: values pairs, I just need to ensure correct syntax. 
    - In my first attempt to run my own object in the console i ran into a syntax error.
    - Second attempt:
    - Third attempt:

  Now I will try implementing the .map() Method:


  Since that was a sucess, I started playing with .filter()


</p>

# Resources
- https://plotly.com/javascript/basic-charts/
- https://www.random.org/integer-sets/?sets=3&num=50&min=1&max=100&seqnos=on&commas=on&sort=on&order=index&format=html&rnd=new
- https://www.w3schools.com/whatis/whatis_html.asp
- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links
