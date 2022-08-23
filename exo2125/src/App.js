let b=0
let d=0
let total = 0
let e1 = 0
let e2 = 0

const Header = (props) => {
  //console.log({props.course[0].parts[0].name}) key={props.course[0].parts[0].id}
  //
  //
  return(
    <h1>
    {props.course[0].name}
    </h1> 
   )
}

function TotalContent(props){
 var total=0
  return
 /// props.course.map(course => course.parts.map(parts => total += parts.exercises))
}



const Content = (props) => {
  console.log(props)
  
 const a=0
  return(
    <>
      <ul>
        {props.course.map((copytitle,index)=> (
          <>
            <div key={index}>{copytitle.name}</div>
            <ul>
              {copytitle.parts.map((copypart,index) =>
                <li key={index}>{copypart.name}: {copypart.exercises} </li>)}
                
            </ul>
            {copytitle.parts.reduce((a, b) => a += b.exercises, 0)}
            
          
          </>
        ))}
      </ul>
    </> 
  )
  
  
 /*
    return (      c.parts.reduce((sum, item) => sum += item.exercises, 0)}
      <ul>
      bb={props.course[0].parts}
      {bb.map(courses => <li key={bb.parts.id}>{bb.parts}</li>)}
      </ul>
    )
   */




}

const  Total = (props) => {



  //b=parseInt(props.course.parts[0].exercises)+parseInt(props.course.parts[1].exercises)+parseInt(props.course.parts[2].exercises)
  //console.log(b)
  
  

  //
  //  ((copypart)) =>(sum:
  //{copypart.exercises.reduce((sum, item) => sum += item.exercises, 0)}
      




 // props.course.map(course => course.parts.map(parts => total += parts.exercises))
 //.reduce(e1,e2 => e1+e2 )
  


  //const sum = props.course.parts.reduce(
  //(previousValue, currentValue) => previousValue += currentValue.exercises,0);
  //console.log(sum)

 // b=sum     {props.course.reduce((a, b) => a += b.exercises, 0)}  
  //parseInt({props.course. {props.course.map(course => course.parts.reduce((a, {exercises}) => a += exercises, 0))}parts[1].exercises})+parseInt({props.course.parts[2].exercises})
// {props.course.map(course => course.parts.reduce((a, {exercises}) => a += exercises, 0))}
  return (
    <>
     
  Sum  {b}
    </>
  )
}

const App = () => {
  //let a=0
  const course =[
    {  
      id: 1,
      name:'Half Stack application development',
      parts: [
        {
        id: 1,
        name: 'Fundamentals of React',
        exercises: 10,
        },
        {
        id: 2,
        name: 'Using props to pass data',
        exercises: 7,
        },
        {
        id: 3,  
        name: 'State of a component',
        exercises: 14,
        },
        {
        id: 4,  
        name: 'Redux',
        exercises: 11,
        }
      ]
    },   
    {
      id: 2,
      name: 'Node.js',
      parts: [
        {
        id: 1,
        name: 'Routing',
        exercises: 3,
        },
        {
          id: 2,
        name: 'Middlewares',
        exercises: 7,
        }
      ]
    }
  ]
  
  const calculateTotalExercises = course =>
  course.flatMap(({parts}) => parts).reduce((res, {exercises}) => res + exercises, 0)

 //const calculateTotal = course =>
 //course.map(course => course.parts.reduce(e1,e2 => e1+e2 ))
  
   //b=calculateTotalExercises const total = courses.map(course => course.parts.reduce(e1,e2 => e1+e2 ))

  //<Content   course={course} /> <Header course={course} /> <Total course={course}  />

    //a=parseInt(course.parts[0].exercises)+parseInt(course.parts[1].exercises)+parseInt(course.parts[2])   
  b=calculateTotalExercises(course)
  //d=calculateTotal(course)
    console.log( calculateTotalExercises(course))
  return (
    <div>
     
     <>
     
     <Content   course={course} />
     <Total course={course}  />
     
    </>
      
	    
      
    </div>
  )
}

export default App