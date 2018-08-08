document.addEventListener('DOMContentLoaded', function loaded (event)
{
    console.log("I'm Loaded!");
    var image = document.getElementById('Image');
    image.addEventListener('click', function imageClick (e)
    {
        console.log("I just clicked on the sandwich iamge.")
        console.log(image.scr)
        if (document.getElementById("Image").src == "https://media-cdn.tripadvisor.com/media/photo-s/09/6c/42/7a/homemade-soups-and-sandwiches.jpg") 
        {
            document.getElementById("Image").src = "https://cms.splendidtable.org/sites/default/files/styles/w2000/public/SaladSandwich_DAY3.AV_..0053.jpg?itok=SXzKMGyz";
        }
        else 
        {
            document.getElementById("Image").src = "https://media-cdn.tripadvisor.com/media/photo-s/09/6c/42/7a/homemade-soups-and-sandwiches.jpg";
        }
    })
})