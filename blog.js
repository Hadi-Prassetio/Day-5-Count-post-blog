let blogs = []


function addBlog(event){
    event.preventDefault()

    let projectName = document.getElementById('input-project-name').value
    let description = document.getElementById('input-description').value
    let image = document.getElementById('input-blog-image').files
    let date1 = document.getElementById('input-start').value
    let date2 = document.getElementById('input-end').value 
    let tech1 = document.getElementById('js').checked
    let tech2 = document.getElementById('nodejs').checked
    let tech3 = document.getElementById('github').checked
    let tech4 = document.getElementById('phyton').checked

    let startDate = new Date(date1);
    let endDate = new Date(date2);
    
    let diffTime=Math.abs(endDate-startDate);
    let diffDays=Math.ceil(diffTime/(1000 * 60 * 60 * 24));
    let diffMonth=Math.floor(diffDays/30);
    let diffYear=Math.floor(diffMonth/12);

        if(startDate > endDate){
            return alert('Error date!')
        } else if(diffYear >=1){
            var time = (`${diffYear} Tahun`)
        }else if(diffMonth >=1){
            time = (`${diffMonth} Bulan`)
        }else{
            time = (`${diffDays} Hari`)
        }
 
    image = URL.createObjectURL(image[0])

    let getObject = {
            projectName,
            description,
            time,
            image,
            tech1,
            tech2,
            tech3,
            tech4
    }  
    
    blogs.push(getObject)
    renderBlogs()    
    // getDistanceTime()                              
    console.log(blogs);
}

function renderBlogs(){

    document.getElementById('project').innerHTML = ''

    for (let i = 0; i < blogs.length; i++) { 
        
        document.getElementById('project').innerHTML += `
        <div class="blog-list-item">
                  <div>
                      <img src="${blogs[i].image}" alt="" style="width:100%; border-radius: 10px;">
                  </div>
                  <a href="my-project-detail.html"><h3>${blogs[i].projectName}</h3></a>
                  <div>
                      durasi : ${blogs[i].time}  
                  </div>
                  <div>
                      <p>${blogs[i].description}</p>
                  </div>
                  <div class="blog-technology">
                      ${blogs[i].tech1?`<i class="fa-brands fa-js fa-2x"></i>` :''}
                      ${blogs[i].tech2?`<i class="fa-brands fa-node fa-2x"></i>` :''}
                      ${blogs[i].tech3?`<i class="fa-brands fa-github fa-2x"></i>` :''}
                      ${blogs[i].tech4?`<i class="fa-brands fa-python fa-2x"></i>` :''}
                  </div>
                  <div class="blog-list-button">
                      <a href="">edit</a>
                      <a href="">delete</a>
                  </div>
              </div>`
    }
}


