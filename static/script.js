let renkler = [];
let logolar = [];
let boxes = [document.getElementById("repositoriesContainer")];
function fetchAndWriteRepositories(){
  let userdata, reposdata;
  fetch("https://api.github.com/users/hasan-kilici").then(async (data)=>{
    userdata = await data.json();
  }).then(async (response)=>{
    setTimeout(()=>{
     fetch("https://api.github.com/users/hasan-kilici/repos?per_page=100&page=1").then(async(res)=>{
       reposdata = await res.json();
     }).then(async (set)=>{
       for(let i = 0; i < userdata.public_repos;i++){
         if(reposdata[i].language){
           console.log(reposdata[i].language);
           document.getElementById("repositoriesContainer").innerHTML += `
          <div class="col-md-3">
           <div class="card mt-3" style="height:12vh;">
              <div class="row">
                <div class="col-4" style="background:${renkler[reposdata[i].language]};height:12vh;padding:24px;margin-top:-1px;border-top-left-radius:8px;border-bottom-left-radius:8px">
                  <img class="w-100" src="${logolar[reposdata[i].language]}" style="filter:grayscale(100%) hue-rotate(190deg);">
                </div>
                <div class="col-8" style="24px">
                    ${reposdata[i].name}
                </div>
              </div>
           </div>
          </div>
           `;
         }
       }
     })
    },100)
  })
}

renkler["EJS"] = "#A61E4F";
renkler["JavaScript"] = "#f0db4f";
renkler["TypeScript"] = "#2b7489";
renkler["C"] = "#666667";
renkler["C++"] = "#F34F80";
renkler["C#"] = "#178600";
renkler["Dart"] = "#01b4ab";
renkler["Go"] = "#00ADD8";
renkler["Svelte"] = "#FF4002";
renkler["Vue"] = "#41B783";
renkler["HTML"] = "#E34C26";
renkler["PHP"] = "#4F5D95";
renkler["Brainfuck"] = "#3D343E";
renkler["Python"] = "#3572a5";
renkler["CSS"] = "#563D7C";

logolar["EJS"] = "/static/ejs.svg";
logolar["JavaScript"] = "/static/javascript.svg";
logolar["TypeScript"] = "/static/typescript.svg";
logolar["C"] = "/static/language-c.svg";
logolar["C++"] = "/static/language-cpp.svg";
logolar["C#"] = "/static/cs.svg";
logolar["Dart"] = "/static/dartlang.svg";
logolar["Go"] = "/static/golang.svg";
logolar["Svelte"] = "/static/svelte.svg";
logolar["Vue"] = "/static/logo-vue.svg";
logolar["HTML"] = "/static/html.svg";
logolar["PHP"] = "/static/php.svg";
logolar["Brainfuck"] = "/static/brainfuck.svg";
logolar["Python"] = "/static/python.svg";
logolar["CSS"] = "/static/css.svg";