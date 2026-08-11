import React from 'react';
import {BsCheckLg, BsCloudDownload, BsExclamationTriangleFill, BsHeartFill,BsStarFill}from "react-icons/bs";

function Buttons() {
  const colors ={
    primary : "#ff5e29",
    secondary : "#64748b",
    success : "#10b981",
    info : "#06b6d4",
    warning : "#f59e0b",
    danger : "#ef4444",
    dark : "#1e293b",
    purple : "#8b5cf6",
    pink : "#ec4899",
    orange : "#ff5e29",
    light : "#f1f5f9",
    lightText : "#334155",
  };

  const softBgs = {
    primary : "#eeedfd",
    secondary : "#f1f5f9",
    success : "#e6f4ea",
    info : "#e0f2fe",
    warning : "#fef3c7",
  }
  const btnStyle = {
    borderRadius : "0.375rem",
    fontSize : "0.85rem",
    padding : "0.45rem 0.9rem",
    fontWeight : "500",
    border : "none",

  };

  const pillStyle = {
    ...btnStyle,borderRadius : "50rem",
  };
  const defaultButtons = [
  { label: "Primary", bg: colors.primary, color: "#fff" },
  { label: "Secondary", bg: colors.secondary, color: "#fff" },
  { label: "Success", bg: colors.success, color: "#fff" },
  { label: "Info", bg: colors.info, color: "#fff" },
  { label: "Warning", bg: colors.warning, color: "#fff" },
  { label: "Danger", bg: colors.danger, color: "#fff" },
  { label: "Dark", bg: colors.dark, color: "#fff" },
  { label: "Purple", bg: colors.purple, color: "#fff" },
  { label: "Pink", bg: colors.pink, color: "#fff" },
  { label: "Orange", bg: colors.orange, color: "#fff" },
  { label: "Light", bg: colors.light, color: colors.lightText },
  {
    label: "Link",
    bg: "transparent",
    color: colors.secondary,
    className: "text-decoration-none",
  },
];

  const outlineButtons =[
    {label : "Primary",color : colors.primary},
    {label : "Secondary",color : colors.secondary},
    {label : "Succcess",color : colors.success},
    {label : "Info",color : colors.info},
    {label : "Warning",color : colors.warning},
    {label : "Purple",color : colors.purple},
    {label : "Pink",color : colors.pink},
    {label : "Orange",color : colors.orange},
  ];

  const softButtons = [
    {label : "Primary",color : colors.primary,bg : softBgs.primary},
    {label : "Secondary",color : colors.secondary,bg : softBgs.secondary},
    {label : "Succcess",color : colors.success,bg : softBgs.success},
    {label : "Info",color : colors.info,bg : softBgs.info},
    {label : "Warning",color : colors.warning, bg : softBgs.warning},

  ];

  const widthButtons = [
    {label : "Extra Large",bg : colors.orange,width : "160px"},
    {label : "Large",bg : colors.secondary,width : "130px"},
    {label : "Middle",bg : colors.success,width : "100px"},
    {label : "Small",bg : colors.info,width : "75px"},
    {label : "Xs",bg : colors.warning,width : "50px"},
  ];

  const sizeButtons = [
    {label : "Large",bg : colors.orange,className : "btn-lg",style : {padding : "0.65rem 1.25rem"},},
    {label : "Normal",bg : colors.secondary,className : "",style : {},},
    {label : "Small",bg : colors.success,className : "btn-sm",style : {padding : "0.25rem 0.6rem",fontSize : "0.78rem"},},
  ];

  const iconButtons = [
    {icon : <BsHeartFill/>,
      bg  : colors.danger,
      circle  : true,
    },
    {icon : <BsStarFill/>,
      bg  : colors.secondary,
      circle  : true,
    },
    {icon :<BsCheckLg/> ,
      bg  : colors.success,
      circle  : true,
    },
    {icon : <BsCloudDownload/>,
      bg  : colors.info ,
      text : "Cloud Hosting",
    },
    {icon : <BsExclamationTriangleFill/>,
      bg  : colors.warning,
      text : "Warning",
    },
  ];

  const navLinks = [
    ["default-buttons","Default Example"],
    ["rounded-buttons","Rounded Buttons"],
    ["outline-buttons","Outline Buttons"],
    ["outline-rounded-buttons", "Outline Rounded Buttons"],
    ["soft-buttons","Soft Buttons"],
    ["soft-rounded-buttons","Soft Rounded Buttons"],
    ["button-width","Button Width"],
    ["button-sizes","Button Sizes"],
    ["disabled-button","Disabled Button"],
    ["icon-button","Icon Button"],
    ["button-group","Button Group"],
    ["block-button","Block Button"],
  ];

  const renderFilledButtons = (buttons,style)=>(
    <div className='d-flex flex-wrap gap-2'>
      {
        buttons.map((btn)=>(
          <button key={btn.label} className={`btn ${btn.className || ""}`} style={{...style,backgroundColor : btn.bg, color : btn.color,}}>{btn.label}</button>
        ))
      }
    </div>
  );

  const renderOutlineButtons = (buttons,style)=>(
    <div className='d-flex flex-wrp gap-2'>
      {buttons.map((btn)=>(
        <button key={btn.label} className='btn' style={{...style,backgroundColor : "transparent", border : `1px solid ${btn.color}`,color : btn.color,}}>
          {btn.label}
        </button>
      ))}

    </div>
  );

  return (
    <div className='container-fluid p-4'>
      <div className='row g-4'>
        <div className='col-xl-9 col-lg-8'>
          <div className='card border-0 shadow-sm rounded-3 p-4 bg-white mb-4' id='default-buttons'>
            <h6 className='fw-bold text-dark mb-1'>Default Buttons</h6>
            <p className='text-muted small mb-3'>Use the button Classes on an <code>&lt;a&gt;</code>,{" "} <code>&lt;button&gt;</code> or <code>&lt;input&gt;</code> element.</p>
            {renderFilledButtons(defaultButtons,btnStyle)}
          </div>

          <div className='card border-0 shadow-sm rounded-3 p-4 bg-white mb-4' id='rounded-buttons'>
            <h6 className='fw-bold text-dark mb-1'>Rounded Buttons</h6>
            <p className='text-muted small mb-3'> Add<code>.rounded-pill</code> to default button to get rounded corners.</p>
            {renderFilledButtons(defaultButtons,pillStyle)}
          </div>
          <div className='card border-0 shadow-sm rounded-3 p-4 bg-white mb-4' id='outline-buttons'>
            <h6 className='fw-bold text-dark mb-1'>Outline Buttons</h6>
            <p className='text-muted small mb-3'>
              Use <code>.btn-outline-*</code> to quickly create bordered buttons.
            </p>
            {renderOutlineButtons(outlineButtons,btnStyle)}
          </div>

          <div className='card border-0 shadow-sm rounded-3 p-4 bg-white mb-4' id='outline-rounded-buttons'>
            <h6 className='fw-bold text-dark mb-1'>Outline Rounded Buttons</h6>
            <p className='text-muted small mb-3'>
              Use <code>.rounded-pill</code> with {" "}<code>.btn-outline-*</code>.
            </p>
            {renderOutlineButtons(outlineButtons.slice(0,5),pillStyle)}
          </div>
          <div className='card border-0 shadow-sm rounded-3 p-4 bg-white mb-4' id='soft-buttons'>
            <h6 className='fw-bold text-dark mb-1'>Soft Buttons</h6>
            <p className='text-muted small mb-3'>
              Use <code>.btn-soft-*</code> to quickly create buttons with soft background.
            </p>
            {renderFilledButtons(softButtons,btnStyle)}
          </div>

          <div className='card border-0 shadow-sm rounded-3 p-4 bg-white mb-4' id='soft-rounded-buttons'>
            <h6 className='fw-bold text-dark mb-1'>Soft Rounded Buttons</h6>
            <p className='text-muted small mb-3'>
              Use<code>.rounded-pill</code> with{" "}<code>.btn-soft-*</code>.
            </p>
            {renderFilledButtons(softButtons,pillStyle)}
          </div>

          <div className='card border-0 shadow-sm rounded-3 p-4 bg-white mb-4' id='button-width'>
            <h6 className='fw-bold text-dark mb-1'>Button Width</h6>
            <p className='text-muted small mb-3'>
              create buttons with minimum width by adding {" "}
              <code>.w-xs</code>,<code>.w-sm</code>,{" "}
              <code>.w-md</code>,<code>.w-lg</code> or{" "}
              <code>.w-xl</code>.
            </p>

            <div className='d-flex flex-wrap gap-2 align-itms-center'>
              {
                widthButtons.map((btn)=>(
                  <button key={btn.label} className='btn text-white' style={{...btnStyle,backgroundColor : btn.bg,minWidth : btn.width,}}>
                    {btn.label}
                  </button>
                ))
              }

            </div>
            </div>

            <div className='card border-0 shadow-sm rounded-3 p-4 bg-white mb-4' id='button-sizes'>
              <h6 className='fw-bold text-dark mb-1'>Button Sizes</h6>
              <p className='text-muted small mb-3'> Add <code>.btn-lg</code>,<code>.btn-sm</code>for additional size.</p>
              <div className='d-flex flex-wrap gap-2 align-items-center'>
                {sizeButtons.map((btn)=>(
                  <button key={btn.label} className={`btn &{btn-className} text-white`} style={{...btnStyle,...btn.style,backgroundColor : btn.bg,}}>
                    {btn.label}

                  </button>
                ))}

              </div>

            </div>

                <div className='card border-0 shadow-sm rounded-3 p-4 bg-white mb-4' id='disabled-button'>
              <h6 className='fw-bold text-dark mb-1'>Disabled Button</h6>
              <p className='text-muted small mb-3'> Add <code>disabled</code> attribute to buttons.</p>
              <div className='d-flex flex-wrap gap-2'>
                {softButtons.map((btn)=>(
                  <button key={btn.label} disabled className="btn text-white opacity-65" style={{...btnStyle,backgroundColor : btn.color,cursor:"not-allowed"}}>
                    {btn.label}

                  </button>
                ))}

              </div>

            </div>

            <div className='card border-0 shadow-sm rounded-3 p-4 bg-white mb-4' id='icon-button'>
              <h6 className='fw-bold text-dark mb-1'>Icon Button</h6>
              <p className='text-muted small mb-3'>Icon only button.</p>
              <div className='d-flex flex-wrap gap-2 align-items-center'>
                {iconButtons.map((btn,index)=>(
                  <button key={index}  className="btn text-white d-flex align-items-center justify-content-center gap-2" style={{...btnStyle,backgroundColor : btn.bg,width : btn.circle ? "38px":"auto",height : "38px",padding : btn.circle ? 0 : undefined,}}>
                    {btn.icon}
                    {btn.text}

                  </button>
                ))}

              </div>

            </div>

            <div className='card border-0 shadow-sm rounded-3 p-4 bg-white mb-4' id='button-group'>
              <h6 className='fw-bold text-dark mb-1'>Button Group</h6>
              <p className='text-muted small mb-3'> Wrap a series of buttons with <code>.btn-group</code>.</p>
              <div className='row g-3'>
                <div className='col-md-6'>
                  <div className='d-flex flex-wrap gap-2 mb-3'>
                    {[
                      ["Left","Middle","Right"],
                      ["1","2","3","4"],
                    ].map((group,index)=>(
                      <div key={index} className='btn-group rounded-3 overflow-hidden'>
                        {
                          group.map((item)=>(
                            <button key={item} className={`btn ${
                              item === "2" || item === "4" ? "btn-secondary" : "btn-light"
                            }`} style={{fontSize : "0.825rem"}}>{item}</button>
                          )
                        )}

                      </div>
                    ))}
                  </div>
                  <div className='btn-group rounded-3 overflow-hidden'>
                    {["5","6","7"].map((item)=>(
                      <button key={item} className={`btn ${item === "6" ? "btn-secondary" : "btn-light"}`} style={{fontSize : "0.825rem"}}>{item}</button>
                    ))}

                    <button className='btn btn-light dropdown-toggle' style={{fontSize : "0.825rem"}}>Dropdown</button>
                  </div>

                </div>

                <div className='col-md-6'>
                  <div className='d-flex gap-3'>
                    {[
                      ["Top", "Middle", "Bottom"],
                      ["Button 1", "Button 2", "Button 3"],
                    ].map((group,index)=>(
                      <div  key={index} className='btn-group-vertical rounded-3 overflow-hidden'>
                        {group.map((item)=>(
                          <button key={item} className={`btn btn-light ${item === "Button 3" ? "dropdown-toggle" : ""}`} style={{fontSize  : "0.825rem"}}>{item}</button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            <div className='card border-0 shadow-sm rounded-3 p-4 bg-white mb-4' id='block-button'>
              <h6 className='fw-bold ytext-dark mb-1'>Block Button</h6>
              <p className='text-muted small mb-3'>
                Create block level buttons by adding {" "}
                <code>.d-grid</code> to parent div.
              </p>

              <div className='d-grid gap-2'>
                {[
                  {bg : colors.orange,
                    color : "#fff",
                  },
                  {
                    bg : colors.secondary,
                    color : "#fff",
                  },{
                    bg : colors.light,
                    color : colors.lightText,
                  },
                ].map((btn,index)=>(
                  <button key={index} className='btn py-2 fw-medium ' style={{...btnStyle,backgroundColor : btn.bg,color : btn.color,}}>
                    Block Button

                  </button>
                ))}

              </div>
            </div>





        </div>



        <div className='col-xl-3 col-lg-4'>
          <div className='card border-0 shadow-sm rounded-3 p-3 bg-white sticky-top' style={{top:"80px",zIndex : 10,}}>
            <div className='d-flex flex-column gap-2'style={{fontSize:"0.8rem",}}>
              {navLinks.map(([id,title])=>(
                <a key={id} href={`#${id}`} className='text-decoration-none text-secondary py-1'>
                  {title}
                </a>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buttons