//
// structure bnana ha object ka


type Person={
    name: string;
    rollno: number;
    address: {
      city: string;
      count: string;
      
    };
}



let list: Person = {
  name: "nitin",
  rollno: 123,
  address: {
    city: "ynr",
    count: "ind",
  },
};





list["address"];





// Type Alias

// agar 1 object ka structre ko humne bar bar use krna hai to us k lie hota ha ye 
 

type product={
  name?:string;
  price:number;
  quatity:number
}


const p1:product={
    name:'Speaker',
    price:500,
    quatity:5
}

const {price,quatity}=p1

const calculateTotalPrice=(price:number,quatity:number)=>{
  return price*quatity

}


calculateTotalPrice(price,quatity)