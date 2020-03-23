import React , { Component} from 'react';

class Hot extends Component { 
    
    state = {
        count:0,
        flag:0
    };
    
    
    choices = ["success","danger","warning","info"]
    
    userinput = (e)=>{
            e.preventDefault()
            const option = e.target.elements.input1.value 
            var result = document.getElementById('result')
            console.log(option)
            const randomno = Math.floor(Math.random()*100);
            console.log(randomno)
            var result1 =Math.abs( parseInt(option) - parseInt(randomno))
            console.log(result1)
            if(this.state.flag===3){
                this.setState({flag:this.state.flag=0})
            }
            this.setState({count:this.state.count=0})
            if(result1 === 0)
            {
                result.textContent = "Correct!"
                this.setState({count:this.state.count,flag:this.state.flag+1})
                
                
            }
            else if( result1 > 0 && result1<=4){
                result.textContent = "Hot"
                this.setState({count:this.state.count+1});
            }
            else if( result1 > 4 & result1 <= 15){
                result.textContent = "Warm"
                this.setState({count:this.state.count+2});
            }
            else{
                result.textContent = "Cold"
                this.setState({count:this.state.count+3});
            }
           
            
        }

    
      
       
    
    
        
    
    
    render(){
        
        
        var badge="badge badge-";
        
        if(this.state.flag===1)
        {
            return (<div className="second" >
            <h4 className="start">Enter a number b/w 1 & 100</h4>
            <form onSubmit={this.userinput}  >
            <input  id="input1" name="input1" type="text" ></input>
            <button  type="submit" value="submit"  className="btn btn-outline-success" id="sub" >submit</button>
            
           
           <p className="ok">your result is :</p>
           <div >
          <h1> <p className={badge+this.choices[this.state.count]} id="result" ></p></h1>
          </div>
          </form>
           
           
            
           
            <div className="second" >
            <h4 className="start">Enter a number b/w 1 & 200</h4>
            <form onSubmit={this.userinput}  >
            <input  id="input1" name="input1" type="text" ></input>
            <button  type="submit" value="submit" onClick={this.timeout} className="btn btn-outline-success" id="sub" >submit</button>
            
           
           
          </form>
          </div>
           
            </div>
            
        );
        }
        else if(this.state.flag===2)
        {   
            return (<div className="second" >
            <h4 className="start">Enter a number b/w 1 & 100</h4>
            <form onSubmit={this.userinput}  >
            <input  id="input1" name="input1" type="text" ></input>
            <button  type="submit" value="submit" onClick={this.timeout} className="btn btn-outline-success" id="sub" >submit</button>
            
           
           <p className="ok">your result is :</p>
           <div >
          <h1> <p className={badge+this.choices[this.state.count]} id="result" ></p></h1>
          </div>
          </form>
           
           
            
           
            <div className="second" >
            <h4 className="start">Enter a number b/w 1 & 200</h4>
            <form onSubmit={this.userinput}  >
            <input  id="input1" name="input1" type="text" ></input>
            <button  type="submit" value="submit" onClick={this.timeout} className="btn btn-outline-success" id="sub" >submit</button>
            
           
           
          </form>
          </div>
          <div className="second" >
            <h4 className="start">Enter a number b/w 1 & 300</h4>
            <form onSubmit={this.userinput}  >
            <input  id="input1" name="input1" type="text" ></input>
            <button  type="submit" value="submit" onClick={this.timeout} className="btn btn-outline-success" id="sub" >submit</button>
            
           
           
          </form>
          </div>
            </div>
            
        );
        
        }
        else{
            return (<div className="second" >
                <h4 className="start">Enter a number b/w 1 & 100</h4>
                <form onSubmit={this.userinput}  >
                <input  id="input1" name="input1" type="text" ></input>
                <button  type="submit" value="submit" onClick={this.timeout} className="btn btn-outline-success" id="sub" >submit</button>
                
               
               <p className="ok">your result is :</p>
               <div >
              <h1> <p className={badge+this.choices[this.state.count]} id="result" ></p></h1>
              </div>
              </form>
               
               
                </div>
                
            );
            }
            
        }
    
    
   
    
} 
   


export default Hot;

