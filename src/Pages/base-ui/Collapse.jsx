import React, { useState } from 'react'


function CollapseButton({children,onClick,className = ""}){
  return(
    <button className={`btn text-white btn-sm px-3 py-2 fw-medium ${className}`} style={{backgroundColor : "#ff5e29",borderRadius : "10px"}} onClick={onClick}>
      {children}

    </button>
  );

}

function CollapseContent({children,width}){
  return (
    <div className='card card-body bg-light border-0 rounded-3 p-3' style={{fontSize : "0.8rem",...(width ? {width} : {})}}>
      {children}
    </div>
  );
}

function SectionCard({id,title,children}){
  return (
    <div className='card border-0 shadow-sm rounded-3 p-4 bg-white mb-4' id={id}>
      <h6 className='fw-bold text-dark mb-2'>{title}</h6>
      {children}

    </div>
  );

}

function TableOfContents (){
  const links =[
    {
      id : "default-example",
      label : "Default Example",
    },
    {
      id : "horizontal-collapse",
      label : "Horizontal Collapse",
    },
    {
      id : "multiple-targets",
      label : "Multiple Targets",
    },
  ];
  return (
    <div className='col-xl-3 col-lg-4'>
      <div className='card border-0 shadow-sm rounded-3 p-3 bg-white sticky-top' style={{top : "80px",zIndex : 10}}>
        <div className='d-flex flex-column gap-2' style={{fontSize : "0.8rem"}}>
          {links.map((link)=>(
            <a key={link.id} href={`#${link.id}`} className='text-decoration-none text-secondary py-1'>
              {link.label}

            </a>
          ))}

        </div>

      </div>

    </div>
  );
}
function Collapse() {
  const [openDefault,setOpenDefault] = useState(false);
  const [openHorizontal,setOpenHorizontal] = useState(false);
  const [openFirst,setOpenFirst] = useState(false);
  const[openSecond,setOpenSecond] = useState(false);
  const toggleDefault = ()=>{
    setOpenDefault((prev)=>!prev);
  }
  const toggleHorizontal = ()=>{
    setOpenHorizontal((prev)=> !prev);
  }
  const toggleFirst = ()=>{
    setOpenFirst((prev)=> !prev);
  }
  const toggleSecond = ()=>{
    setOpenSecond((prev)=> !prev);
  }
  const toggleBoth = ()=>{
    const bothOpen = openFirst && openSecond;
    setOpenFirst(!bothOpen);
    setOpenSecond(!bothOpen);
  };
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-xl-9 col-lg-8'>
          <SectionCard id="default-example" title="Default Example">
            <p className='text-muted small mb-2' style={{fontSize : "0.78rem"}}>
              Click the buttons below to show and hide another element via class changes:
            </p>
            <ul className='text-muted small mb-3 ps-3' style={{fontSize : "0.78rem"}}>
              <li><code>.collapse </code> hides content</li>
              <li><code>.collapsing </code> is applies during transitions</li>
              <li><code>.collapse </code> .show shows content</li>

            </ul>
            <p className='text-muted small mb-3' style={{fontSize : "0.78rem"}}>
              Genereally , we recommend using a button with the {" "}<code>data-bs-target</code>
              attribute. While not recommend from a semantic point of view,  you can also use a link with the {" "}
              <code>href</code> attribute (and a <code>role="button"</code>).
              In both cases, the <code>data-bs-toggle = "collapse"</code> is required.

            </p>
            <div className='d-flex flex-wrap gap-2 mb-3'>
              <CollapseButton onClick={toggleDefault}>
              Link with href
              </CollapseButton>
              <CollapseButton onClick={toggleDefault}>
              Button with data bs-target
              </CollapseButton>
            </div>
            {
              openDefault && (
                <CollapseContent>
                Some placeholder content for the collapse component. This 
                panel is hidden by default but revealed when the user activites
                the relevant trigger.
                </CollapseContent>
              )
            }

          </SectionCard>
          <SectionCard id="horizontal-collapse" title="Horizontal">
            <p className='text-muted small mb-3' style={{fontSize : "0.78rem"}}>
              The collapse plugin also supports horizontal collapsing. Add the {" "}
              <code>.collapse-horizontal</code> modifier class to transition 
              the <code>width</code> instead of <code>height</code> and set a {" "}
              <code>width</code> on the immediate child element. Feel free to 
              write your own custom Sass, use inline styles, or use our width
              utilities.

            </p>
            <CollapseButton onClick={toggleHorizontal} className='mb-3'>
            Toggle width collapse</CollapseButton>
            {
              openHorizontal && (
                <div style={{minHeight : "120px"}}>
                  <CollapseButton width="300px">
                  This is some placeholder content for a horizontal collapse.
                  It's hidden by default and shown when triggered.</CollapseButton>

                </div>
              )
            }

          </SectionCard>
          <SectionCard id="multiple-targets" title="Multiple Targets">
           <p
              className="text-muted small mb-3"
              style={{ fontSize: "0.78rem" }}
            >
              A <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can show
              and hide multiple elements by referencing them with a selector
              in its <code>href</code> or <code>data-bs-target</code> attribute.
              Multiple <code>&lt;button&gt;</code> or{" "}
              <code>&lt;a&gt;</code> can show and hide an element if they each
              reference it with their <code>href</code> or{" "}
              <code>data-bs-target</code> attribute.
            </p>

            <div className='d-flex flex-wrap gap-2 mb-3'>
              <CollapseButton onClick={toggleFirst}>
              Toggle first element</CollapseButton>
              <CollapseButton onClick={toggleSecond}>
              Toggle second element</CollapseButton>
              <CollapseButton onClick={toggleBoth}>
              Toggle both elements</CollapseButton>

            </div>
            <div className='row g-3'>
              {
                openFirst && (
                  <div className='col-md-6'>
                    <CollapseContent>
                    Some Placeholder content for the first collapse component of this multiple target example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </CollapseContent>
                  </div>
                )
              }
              {
                openSecond && (
                  <div className='col-md-6'>
                    <CollapseContent>
                    Some placeholder content for the second collapse component of this multiple target example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                    </CollapseContent>
                  </div>
                )
              }

            </div>

          </SectionCard>
        </div>
        <TableOfContents/>
      </div>
    </div>
  )
}

export default Collapse;