import {useEffect, useState} from "react";

const fruits = [
  {name:"딸기", season:"spring", origin:"domestic", kcal:27},
  {name:"체리", season:"spring", origin:"imports", kcal:60},
  {name:"키위", season:"spring", origin:"domestic", kcal:55},
  {name:"파인애플", season:"spring", origin:"imports", kcal:55},
  {name:"오렌지", season:"spring", origin:"domestic", kcal:47},
  {name:"수박", season:"summer", origin:"domestic", kcal:31},
  {name:"복숭아", season:"summer", origin:"domestic", kcal:34},
  {name:"자두", season:"summer", origin:"domestic", kcal:34},
  {name:"망고", season:"summer", origin:"imports", kcal:68},
  {name:"블루베리", season:"summer", origin:"imports", kcal:56},
  {name:"사과", season:"autumn", origin:"domestic", kcal:57},
  {name:"배", season:"autumn", origin:"domestic", kcal:51},
  {name:"감", season:"autumn", origin:"domestic", kcal:54},
  {name:"포도", season:"autumn", origin:"domestic", kcal:58},
  {name:"귤", season:"winter", origin:"domestic", kcal:46},
  {name:"대추", season:"winter", origin:"domestic", kcal:104},
  {name:"자몽", season:"winter", origin:"imports", kcal:35},
  {name:"레몬", season:"winter", origin:"imports", kcal:45},
  {name:"메론", season:"summer", origin:"imports", kcal:35},
  {name:"바나나", season:["spring", "summer", "autumn", "winter"], origin:"imports", kcal:80},
];

const setps = [
  {name:"계절을 선택하세요", select:{id:"season", kind:[{korean:"봄", english:"spring"}, {korean:"여름", english:"summer"}, {korean:"가을", english:"autumn"}, {korean:"겨울", english:"winter"}]}},
  {name:"수입 or 국산을 선택하세요", select:{id:"origin", kind:[{korean:"국산", english:"domestic"}, {korean:"수입", english:"imports"}]}},
  {name:"칼로리를 선택하세요", select:{id:"kcal", kind:[{korean:"40미만", english:"less_than40"}, {korean:"40이상 60미만", english:"more_than40_and_less_than_60"}, {korean:"60이상", english:"more_than_60"}]}},
];

export default function Findex(){
  const [fruit] = useState([
    {name:"딸기", season:"spring", origin:"domestic", kcal:27},
    {name:"체리", season:"spring", origin:"imports", kcal:60},
    {name:"키위", season:"spring", origin:"domestic", kcal:55},
    {name:"파인애플", season:"spring", origin:"imports", kcal:55},
    {name:"오렌지", season:"spring", origin:"domestic", kcal:47},
    {name:"수박", season:"summer", origin:"domestic", kcal:31},
    {name:"복숭아", season:"summer", origin:"domestic", kcal:34},
    {name:"자두", season:"summer", origin:"domestic", kcal:34},
    {name:"망고", season:"summer", origin:"imports", kcal:68},
    {name:"블루베리", season:"summer", origin:"imports", kcal:56},
    {name:"사과", season:"autumn", origin:"domestic", kcal:57},
    {name:"배", season:"autumn", origin:"domestic", kcal:51},
    {name:"감", season:"autumn", origin:"domestic", kcal:54},
    {name:"포도", season:"autumn", origin:"domestic", kcal:58},
    {name:"귤", season:"winter", origin:"domestic", kcal:46},
    {name:"대추", season:"winter", origin:"domestic", kcal:104},
    {name:"자몽", season:"winter", origin:"imports", kcal:35},
    {name:"레몬", season:"winter", origin:"imports", kcal:45},
    {name:"메론", season:"summer", origin:"imports", kcal:35},
    {name:"바나나", season:["spring", "summer", "autumn", "winter"], origin:"imports", kcal:80},
  ]);
  const [setp] = useState([
    {name:"계절을 선택하세요", select:{id:"season", kind:[{korean:"봄", english:"spring"}, {korean:"여름", english:"summer"}, {korean:"가을", english:"autumn"}, {korean:"겨울", english:"winter"}]}},
    {name:"수입 or 국산을 선택하세요", select:{id:"origin", kind:[{korean:"국산", english:"domestic"}, {korean:"수입", english:"imports"}]}},
    {name:"칼로리를 선택하세요", select:{id:"kcal", kind:[{korean:"40미만", english:"less_than40"}, {korean:"40이상 60미만", english:"more_than40_and_less_than_60"}, {korean:"60이상", english:"more_than_60"}]}},
  ]);

  const [filtered,setFileterd] = useState([...fruits]);
  const [selected, setSelected] = useState({
    season:['S', "w"],
    origin:[],
    kcal:[],
  });
  useEffect(() => {

/*    setFileterd(()=>{
      return fruits.filter((22)=>{22. === prev.})
    });*/


    /*
    * 1. 원본(fruits)은 건들지 말것.
    * 2. array.contains // include
    * */

    /*  selected 에 내용이 있다면
    *   ㅇ
    *
    * */


  }, [selected]);

  return (<div>
      <h1>내가 원하는 과일은?</h1>
      {setps.map(function(element){
        return(<div>
          <p>{element.name}</p>
          {element.select.kind.map(function(child){
            return (<div>
              <input type="checkbox" name={child.english} id={child.english} onClick={()=>{
                //클릭 true면 selected에 값 추가
              }}/>
              <label htmlFor={child.english}>{child.korean}</label>
            </div>)
          })}
        </div>)
      })}
  </div>)
}