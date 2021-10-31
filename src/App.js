import './App.css';

function Greet({name}) {
  return <h1>Hello,{name}</h1>
  
};

export default function App()
{
 return (
   <section><Greet name="Mike"/>
 <Greet name="KIKI"/>
 <Greet name="YUYU"/></section>
 ) 

};
