
(function escopo(){
    (pageStatic=>{
        const body=document.querySelector("body");
        function recEvent(event){
            event.preventDefault();
        }
        body.addEventListener("submit",recEvent);
    })();
    function Calculadora(){
        this.start= ()=>{
            this.display.focus();
            this.actionClick();
            this.actionKeys();
        }
        this.display=document.querySelector(".result");      
        this.actionClick= ()=>{
            document.addEventListener("click",(event)=>{
                const recEvent=event.target;
                if(recEvent.classList.contains("button-num")){
                    this.showDisplay(recEvent.innerText);
                
                }else if(recEvent.classList.contains("button-x")){
                    this.showDisplay("*");
                }else if(recEvent.classList.contains("button-ac")){
                    this.allClear();
                    this.display.focus();
                }else if(recEvent.classList.contains("button-c")){
                    this.oneClear();
                    
                }else if(recEvent.classList.contains("button")){
                    this.calculate();
                    this.display.focus();
                }
            })
        }
        this.actionKeys=()=>{
            document.addEventListener("keydown",(event)=>{
                if(event.key=="Backspace"){
                    this.oneClear();
                }else if(event.key=="Enter"){
                    this.calculate();
                    this.display.focus();
                }
            })
        }
        this.showDisplay=(num)=> this.display.value+=num;
        this.allClear=()=>this.display.value=" ";
        this.oneClear=()=>this.display.value=this.display.value.slice(0,-1);       
        this.calculate=()=>{
            let valor=this.display.value;
            try {
                valor=eval(valor);
                if(!valor){
                    alert("Operação não disponivel para valores inseridos!");
                    this.allClear();
                    return;
                }
                this.display.value=String(valor);
            } catch (error) {
                alert("Operação não disponivel para valores inseridos!");
                this.allClear();
                return;
            }
        }
    }
    const callCalculadora= new Calculadora();
    callCalculadora.start();
})();
