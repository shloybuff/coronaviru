import React,{ useEffect, useState } from 'react';
import { Case } from './component/Card'
import axios from 'axios';
import { Country } from './component/Country';
import { SearchCountry } from './component/SearchCountry';
import Columns from 'react-columns'

function App() {

  const [latest , setLatest] = useState('')
  const [country, setCountry] = useState([])
  const [search, setSearch] = useState('')


useEffect( ()=> {

  axios.all([
    axios.get('https://corona.lmao.ninja/v2/all'),
    axios.get('https://corona.lmao.ninja/v2/countries')
  ])
.then(res => { 
  setLatest(res[0].data)
  setCountry(res[1].data)})

.catch(err => console.log(err))
},[])

const filterSearch = country.filter( item =>{
   return(
     search !== ''?
     item.country.includes(search)
     :item
   ) 
       
})

const countries = filterSearch.map((data,i) => {
  return (
    <Country 
    key={i}
    country={data.country}
    casesCountry={data.cases}
    deathsCountry={data.deaths}
    recoveredCountry={data.recovered}
    todaycasesCountry={data.todayCases}
    todayDeathsCountry={data.todayDeaths}
    activeCountry={data.active}
    criticalCountry={data.critical}
    flag={data.countryInfo.flag}/>
  )
})
var queries = [{
  columns: 2,
  query: 'min-width: 500px'
}, {
  columns: 3,
  query: 'min-width: 1000px'
}];

 if (latest !== '') {
  return (
    <div className="App">
      <SearchCountry search={(e) => setSearch(e.target.value)}/>
      {search === '' ?
        <Case 
        cases={latest.cases}
        deaths={latest.deaths}
        recovered={latest.recovered}
       />
      :null
      }

      <Columns queries={queries}>{countries}</Columns>
      
    </div>
  );
 }else{
   return(
     <p style={{fontSize:35, marginTop:'10%',display:'flex',justifyContent:'center', fontFamily:'Holtwood One SC, serif'}}>Loading...</p>
   )
 }
  
}

export default App;
