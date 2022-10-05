(function escopo(){
    (pageStatic=>{
        const body= document.querySelector("body");
        function recEvent(event){
            event.preventDefault();
        }
        body.addEventListener("submit",recEvent);
    })();
    function calculadora(){
        return{
            display:document.querySelector(".result"),
            get start(){
                this.actionButton;
                this.actionKeys;
                this.display.focus();
            },
            get actionButton(){
                document.addEventListener("click",(event)=>{
                    const recEvent=event.target;
                    if(recEvent.classList.contains("button-num")){
                        this.showDisplay(recEvent.innerText);
                    
                    }else if(recEvent.classList.contains("button-x")){
                        this.showDisplay("*");

                    }else if(recEvent.classList.contains("button-ac")){
                        this.clearAllDisplay;
                    
                    }else if(recEvent.classList.contains("button-c")){
                        this.clearOne;
                    
                    }else if(recEvent.classList.contains("button")){
                        this.calcular;
                    }
                })
            },
            get actionKeys(){
                document.addEventListener("keydown",(event)=>{
                    const recEvent=event.target; 
                    if(event.key=="Backspace"){ 
                        this.clearOne;
                    }else if(event.key=="Enter"){
                        this.calcular;
                        this.display.focus();
                    }   
                })
            },
            showDisplay(valor){
                this.display.value+=valor;
            },
            get clearAllDisplay(){
                this.display.value=" ";
            },
            get clearOne(){
                this.display.value=this.display.value.slice(0,-1);
            },
            get calcular(){
                let calcular=this.display.value;
                try{
                    calcular=eval(calcular);
                    if(!calcular){
                        alert("Valores divergentes para operação");
                        this.display.focus();
                        this.clearAllDisplay;
                        return;
                    }
                    this.display.value=String(calcular);
                    this.display.focus();
                }catch(e){
                    alert("Valores divergentes para operação");
                    this.display.focus();
                    this.clearAllDisplay;
                    return;
                }
                }              
            }
    };
    const callCalculadora=calculadora();
    callCalculadora.start;
})();