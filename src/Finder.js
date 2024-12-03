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
  const [filtered,setFiltered] = useState([...fruits]);
  const [result,setResult] = useState({
    season:[],
    origin:[],
    kcal:[],
    result:[],
  });
  const [selected, setSelected] = useState({
    season:[],
    origin:[],
    kcal:[],
  });
/*  const [selected, setSelected] = useState([
    {
      order:undefined,
      id:"season",
      kind:[],
    },
    {
      order:undefined,
      id:"origin",
      kind:[],
    },
    {
      order:undefined,
      id:"kcal",
      kind:[],
    },
  ]);*/
  
  useEffect(()=>{
    //페이지 진입 시 fruits.kcal 부분 계산하여 filtered.kcal에 값 변경
    fruits.map(function(element, index){
      if(element.kcal < 40){
        return filtered[index].kcal = "less_than40";
      } else if(element.kcal >= 40 && element.kcal <= 60 ){
        return filtered[index].kcal = "more_than40_and_less_than_60";
      } else if(element.kcal > 60) {
        return filtered[index].kcal = "more_than_60";
      }
      return setFiltered([...filtered]);
    });
    console.log(filtered);
    
  }, []);
  
  useEffect(() => {
    /* TODO::
    *   1. 바나나같이 여러 계절이 있을 경우
    *   2. filter 걸기
    *
    *  */

    //console.log(Array.isArray(fruits[19].season)) 배열인지 확인하는 메서드
    
    //첫 선택이 season 일때 (origin, kcal은 0개 일 때)
/*    if(selected.season.length !== 0 && selected.origin.length === 0 && selected.kcal.length === 0){
      selected.season.map(function(element){
        filtered.filter((fruits) => fruits.season === element);
      });
    }
    
    //origin
    if(selected.origin.length !== 0){
      selected.origin.map(function(element){
        console.log(element, filtered.filter((fruits) => fruits.origin === element));
      });
    }
    
    //kcal
    if(selected.kcal.length !== 0){
      selected.kcal.map(function(element){
        console.log(element, filtered.filter((fruits) => fruits.kcal === element));
      });
    }*/
    
    //console.log(filtered);

  }, [selected]);

  return (<div>
      <h1>내가 원하는 과일은?</h1>
      {setps.map(function(element, index){
        return(<div key={index}>
          <p>{element.name}</p>
          {element.select.kind.map(function(child, childIndex){
            return (<div key={childIndex}>
              <input type="checkbox" name={child.english} id={child.english} value={child.english} onClick={(event)=>{
                //클릭 true면 selected에 값 추가
                const targetValue = event.target.value;
                const clickId = element.select.id;
                const clickCategory = selected[clickId];
                //const clickCategory = Object.entries(selected).find((filterEle)=>filterEle[0] === clickId); //이걸로 사용할 경우 clickCategory[1]
                if(!clickCategory.includes(targetValue)){
                  //clickCategory 에 없을 때
                  clickCategory.push(targetValue);
                  console.log(clickCategory, selected);
                }else {
                  //clickCategory 에 있을 때
                  const findIndex = clickCategory.indexOf(targetValue); //target.value index 확인
                  clickCategory.splice(findIndex, 1); //삭제
                }
                setSelected((prev)=> ({...selected, [clickId]: clickCategory}));
/*                const targetValue = event.target.value;
                const clickId = element.select.id;
                const clickCategory = selected.find((filterEle)=>filterEle.id === clickId);
                
                //console.log(clickCategory.kind.includes(targetValue), clickCategory)
                
                if(!clickCategory.kind.includes(targetValue)){
                  //clickCategory.kind 에 없을 때
                  clickCategory.kind.push(targetValue);
                }else {
                  //clickCategory.kind 에 있을 때
                  const findIndex = clickCategory.kind.indexOf(targetValue); //target.value index 확인
                  clickCategory.kind.splice(findIndex, 1); //삭제
                }
                //setSelected 에 어떻게 업로드할지 고민*/
              }}/>
              <label htmlFor={child.english}>{child.korean}</label>
            </div>)
          })}
        </div>)
      })}
      <button type="button" onClick={()=>{
        if(selected.season.length !== 0){
          const update = selected.season.map(function(element){
            const clickResult = filtered.filter((fruits) => fruits.season === element);
            return [...clickResult];
          });
          update.map(function(element, index){
            console.log(update[0]);
          });
          
          setResult({ season: update[0].concat(update[1]) });
          console.log("map out: ", update, update.concat(update))
        }
      }}>결과 확인!</button>
      <hr/>
      <h3>내가 고른 과일은?</h3>
      <p>
      {result.season.map(function(element, index){
          return (<span key={index}>
            {`${index}. ${element.name} ` }
          </span>)
      })}
      </p>
  </div>)
}