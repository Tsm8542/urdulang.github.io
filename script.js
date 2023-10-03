function create_option(option_value,inner_html,start,limit){
    let x ="";
    for(let i=start;i<limit+1;i++){
        let a = '<option value="'+String(option_value+i)+'">'+inner_html+i+'</option>';
        x += a;
    }
    return x;
}
function create_pr(std,limit){
    let x="";
    let m = 1;
    let n=30;
    for(let i=1;i<limit+1;i++){
        let mn = m+'-'+n;
        let a = '<option value="std_'+std+'_pr_'+mn+'">'+mn+'</option>';
        x+=a;
        m+=30;n+=30;
    }
    x+='<option value="all'+std+'">All</option>';
    return x;
}
function s(){
    var a = document.querySelector("#genre").value;
    var m = document.querySelector("#standard");
    switch(a){
        case 'baag_e_urdu':
            m.innerHTML = create_option("std","Std ",9,10);
            break;
        case 'balbharti':
            m.innerHTML = '<option value="std1p1">Std 1-Part 1</option><option value="std1p2">Std 1-Part 2</option><option value="std1p3">Std 1-Part 3</option><option value="std1p4">Std 1-Part 4</option>'
            m.innerHTML += create_option("std","Std ",2,8);
            break;
        case 'kumarbharti':
            m.innerHTML = create_option("std","Std ",9,10);
            break;
        case 'taroof_e_urdu':
            m.innerHTML = create_option("std","Std ",5,10);
            break;
        case 'yuvakbharti':
            m.innerHTML = create_option("std","Std ",11,12);
            break;
        case 'download':
            tg("false");
            break;
        default:
            m.innerHTML = create_option("std","Std ",9,10);
            break;
    }
    x();
}
function x(){
    var s = document.querySelector("#standard").value;
    var t = document.querySelector("#page_range");
    if(document.querySelector("#genre").value=="baag_e_urdu"){
        switch(s){
            case 'std9':
                t.innerHTML = create_pr(9,3)
                break;
            case 'std10':
                t.innerHTML = create_pr(10,3)
                break;
            default:
                t.innerHTML = create_pr(9,3)
                break;
        }
        z();
    }
    else if(document.querySelector("#genre").value=="balbharti"){
        switch(s){
            case 'std1p1':
                t.innerHTML = create_pr(1,5);
                break;
            case 'std1p2':
                t.innerHTML = create_pr(1,5);
                break;
            case 'std1p3':
                t.innerHTML = create_pr(1,4);
                break;
            case 'std1p4':
                t.innerHTML = create_pr(1,4);
                break;
            case 'std2':
                t.innerHTML = create_pr(2,3);
                break;
            case 'std3':
                t.innerHTML = create_pr(3,4);
                break;
            case 'std4':
                t.innerHTML = create_pr(4,4);
                break;
            case 'std5':
                t.innerHTML = create_pr(5,4);
                break;
            case 'std6':
                t.innerHTML = create_pr(6,4);
                break;
            case 'std7':
                t.innerHTML = create_pr(7,4);
                break;
            case 'std8':
                t.innerHTML = create_pr(8,4);
                break;
            default:
                t.innerHTML = create_pr(1,5);
                break;
        }
        z();
    }
    else if(document.querySelector("#genre").value=="kumarbharti"){
        switch(s){
            case 'std9':
                tg("true");
                t.innerHTML = create_pr(9,5);
                break;
            case 'std10':
                tg("true");
                t.innerHTML = create_pr(10,5);
                break;
            default:
                tg("true");
                t.innerHTML = create_pr(9,5);
                break;
        }
        z();
    }
    else if(document.querySelector("#genre").value=="taroof_e_urdu"){
        switch(s){
            case 'std5':
                tg("true");
                t.innerHTML = create_pr(5,2);
                break;
            case 'std6':
                tg("true");
                t.innerHTML = create_pr(6,2);
                break;
            case 'std7':
                tg("true");
                t.innerHTML = create_pr(7,2);
                break;
            case 'std8':
                tg("true");
                t.innerHTML = create_pr(8,3);
                break;
            case 'std9':
                tg("true");
                t.innerHTML = create_pr(9,3);
                break;
            case 'std10':
                tg("true");
                t.innerHTML = create_pr(10,4);
                break;
            default:
                tg("true");
                t.innerHTML = create_pr(5,2);
                break;
        }
        z();
    }
    else if(document.querySelector("#genre").value=="yuvakbharti"){
        switch(s){
            case 'std11':
                tg("true");
                t.innerHTML = create_pr(11,7);
                break;
            case 'std12':
                tg("true");
                t.innerHTML = create_pr(12,6)
                break;
            default:
                tg("true");
                t.innerHTML = create_pr(11,7);
                break;
        }
        z();
    }
}

function z(){
    var n = document.querySelector("#page_range").value;
    var y = document.querySelector("#frame");
    let genre = document.querySelector("#genre").value;
    let x = document.querySelector("#standard").value;
    if(genre=="baag_e_urdu")genre="Baag-e-Urdu";
    else if(genre=="balbharti"){
        if(x=="std1p1"){y.src="Balbharti Urdu Std 1/Part 1/"+n+".html";return 0;}
        else if(x=="std1p2"){y.src="Balbharti Urdu Std 1/Part 2/"+n+".html"; return 0;}
        else if(x=="std1p3"){y.src="Balbharti Urdu Std 1/Part 3/"+n+".html"; return 0;}
        else if(x=="std1p4"){y.src="Balbharti Urdu Std 1/Part 4/"+n+".html"; return 0;}
        else genre="Balbharti Urdu";
    }
    else if(genre=="kumarbharti")genre="Kumarbharti Urdu";
    else if(genre=="taroof_e_urdu")genre="Taroof-e-Urdu";
    else if(genre=="yuvakbharti")genre="Yuvakbharti Urdu";
    let m="";
    for(let i=0;i<n.length;i++){
        if(n[i]=='p'){
            for(let z=i;z<n.length;z++){
                m+=n[z];
            }
            break;
        }
        else if(n[i]=='a'){
            m="main";
            break;
        }
    }
    let std ="";
    for(let i=3;i<x.length;i++){
        std += x[i];
    }
    y.src = genre+' Std '+std+'/'+m+'.html';
}

function tg(v){
    if(v=="true"){
        document.querySelector("#standard").style.display="inline-block";
        document.querySelector("#page_range").style.display="inline-block";
        document.querySelector("#frame").style.display="block"
    }
    else{
        document.querySelector("#frame").style.display="none";
        document.querySelector(".download").style.display="block";
        document.querySelector("#standard").style.display="none";
        document.querySelector("#page_range").style.display="none";
    }
}
