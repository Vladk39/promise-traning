let parent = document.querySelector(".parent")

async function getActivity(){
    const active = await fetch('https://www.boredapi.com/api/activity');
    const data = await active.json();
        return data.activity;
    }



async function main(){
    try{
        parent.innerHTML ="";
        const result = await Promise.all([
            getActivity(),
            getActivity(),
            getActivity(),
        ])
        
        for(const elem of result){
            let text = document.createElement('div');
            text.innerHTML = `${elem}`;
            parent.appendChild(text);
        }

    }
    catch(e){
        console.log(e)
    }
}
