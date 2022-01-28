//for smooth scroll

var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
//console.log(navMenuAnchorTags); 
for(var i=0;i<navMenuAnchorTags.length;i++)
{
  navMenuAnchorTags[i].addEventListener('click',function(event)
  {
    event.preventDefault();
    var targetSectionId=this.textContent.trim().toLowerCase();
    var targetSection=document.getElementById(targetSectionId);
    //console.log(targetSection);
    var interval=setInterval(function()
    {
      var targetSectionCoord=targetSection.getBoundingClientRect();
      //console.log(targetSectionCoord);
      if(targetSectionCoord.top<=0)
      {
        clearInterval(interval);
        return;
      }
      window.scrollBy(0,50);
    }
    ,30);
  });
}

/*skill bar auto-fill*/
var progressBar=document.querySelectorAll('.skill-progress>div');
var skillsContainer=document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone=false;

//to keep initial width of bar as 0
function initialiseBars()
{
  for(let bar of progressBar)
  {
    bar.style.width=0+'%';
  }
}
initialiseBars();

//to check if skills section is reached
function checkScroll()
{
  var skillsContainerCoord=skillsContainer.getBoundingClientRect();
  //animationDone is to check if bar is filled once
  if(!animationDone && skillsContainerCoord.top<=window.innerHeight)
  {
    animationDone=true;
    console.log("skills visible");
    fillBars();
  }
  //to fill bars everytime we come from top to the bars
  else if(skillsContainerCoord.top>window.innerHeight)
  {
    animationDone=false;
    initialiseBars();
  }
}

//to fill the skill bars
function fillBars()
{
  //if we use var, only last bar will be filled
   for (let bar of progressBar)
   {
     let targetWidth=bar.getAttribute('data-bar-width');
     let currentWidth=0;
     let interval=setInterval(function()
     {
       if(currentWidth>targetWidth)
       {
         clearInterval(interval);
         return;
       }
       currentWidth++;
       bar.style.width=currentWidth+'%';
     },5);
   }
}