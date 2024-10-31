import './MyComponent.css';
import { useState } from 'react';
export default function ItemList(){
   let nextId=5;

    const[deviceInputValue,setDeviceInputValue]=useState("");
    const[devices,setDevices]=useState ([
        {id:1,name:"iphone"},
        {id:2,name:"mac"},
        {id:3,name:"samsung"},
        {id:4,name:"widows"},
        
    ]);
    
     const deviceList=devices.map((device)=>{
        return(
            <li key={device.id}>{device.name}<button 
            onClick={(()=>{
                handleDeleteClick(device.id)

            })}>Delete</button>
            <button 
            onClick={(()=>{
                handleEditClick(device.id)

            })}>Edit</button>
            </li>
        )
     });

     function handleAddClick(){
        // const newDevices=[...devices];
        // newDevices.push(deviceInputValue)
        // setDevices(newDevices)
    setDevices([...devices,{id:nextId,name:deviceInputValue}]);
      nextId=nextId+1
      console.log(nextId)
    }
    
    function handleDeleteClick(id){
      //  const newdevices=[...devices]
    //   let index=0;
    //   let selectedIndex=0;

    //   for(let device of newdevices){
    //     if(device.id==id){
    //         selectedIndex=index;
    //     }
       // index++;
 const newDevice=devices.filter((device)=>{
// if(device.id==id){
//     return false
// }
//     return true;
return device.id!=id;
 });
 setDevices(newDevice);
      }

    function  handleEditClick(id){
      const NewDevices= devices.map((device)=>{
      if(device.id==id){
        let newdevice={...device,name:device.name+"0"};
          return newdevice
      }else
      return device
      })
      setDevices(NewDevices)

    }
    return(
<>

        <div style={{color:"blue", marginTop:"100px",fontSize:"30px", textAlign:"center"}}>
           {deviceList} 
        </div>
        <div>
        <div className="container">
      <input value={deviceInputValue} 
      onChange={(event=>{
        setDeviceInputValue(event.target.value)

      })}
      type="text" placeholder="Add Item" className="input" />
      <button onClick={handleAddClick} className="button">Add</button>
    </div>

        </div>
        
       
        </>
    );
}
