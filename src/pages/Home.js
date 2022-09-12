
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate=useNavigate();

    const [input,setInput]=useState()
   // 3. Print this series 0,2,5,9,14,20...... upto  60.
   let ans=[0]
   let add=0
   for(let i=2;i<=60;i++){
   
      add+=i
      if(add<=60){
      ans.push(add)

      }
    
   // console.log(ans)
   }
   console.log(ans.join(" "))
//4. Write a program for binary sorting ( 10,5,100,50,70,80,20 ) without using In built function.
     let arr=[10,5,100,50,70,80,20]
     let n=arr.length
    
      for(var i=0;i<n;i++){
        for(var j=0;j<n-1-i;j++){
            
            if(arr[j]>arr[j+1]){
                
              var  temp=arr[j]
              
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
          //  console.log(arr+"1")
        }
       //  console.log(arr+"2")
  }
  console.log("sort", arr)

  //5. Given a string, reverse each word in the sentence ( Welcome to this javascript interview) without using In built function.
      let str=["Welcome", "to", "this", "javascript", "interview"];

    
const userName=JSON.parse(localStorage.getItem("user"));
    
const handleLogout=()=>{
localStorage.removeItem("loggedin");
 navigate("/login")
}
    
  return (
    <>
        <section className='vh-100 bg-image'
        style={{
            backgroundImage:
            "url('http://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"
        }}>

        <div className='mask d-flex align-items-center h-100 gradient-custom-3'>
            <div className='container h-100'>
              <div className='row d-flex justify-content-center align-items-center h-100'>
                <div className='col-12 col-md-9 col-lg-7 col-xl-6'>
                    <div className="card" id='card' style={{borderRadius:"15px"}}>
                    <div className='card-body p-5'>
                        <h2 className='text-uppercase text-center mb-5'>
                            HomePage
                        </h2>
                        <p className='text-center'>Welcome -{userName.name}</p>
                        <button
                        onClick={handleLogout}
                        type='button'
                        className='btn btn-success btn-block btn-lg gradient-custom-4 text-body center'>Logout</button>

                     
                    </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
        
        
        </section>
    </>
  )
}

export default Home