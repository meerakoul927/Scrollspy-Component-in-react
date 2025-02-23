import React , {useEffect , useRef , useState} from 'react'


function Body(props) {
  const { menus,  sectionRef ,navBarHeight ,setNavBarHeight} = props;
  const [sectionHeight , setSectionHeight] = useState();
  const sections = menus?.map((item)=>{
     return (<div>
        <h1>{item}</h1>
        <p
        style={{
           lineHeight : '1.5rem',
           fontSize:'16px'
        }}
        >Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </p>
      </div>)
  });
 
  useEffect(()=>{
      const sectionHeight = sectionRef.current.offsetHeight;
      const childrens = sectionRef.current.children;
       const sectionsHeight = childrens?.map(item => item.offsetTop - navBarHeight)
      setSectionHeight(sectionHeight);

  },[sectionRef]);
  console.log("section height",sectionHeight);
  return (
    <>
      <div
         ref={sectionRef}
        style = {{
           position : 'absolute',
           zIndex : '-1',
           paddingTop:'60px'
        }}
      >{sections}</div>
    </>
  )
}

export default Body