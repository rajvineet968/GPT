import "./Sidebar.css";
function Sidebar(){
    return(
        <section className="sidebar">
            {/* New chat*/}
            <button>
                {/* <img src="src/assets/gpt.png" alt="gptLogo" className="logo"></img> */}
                <i className="fa-brands fa-openai logo"></i>
                <span><i className="fa-solid fa-pen-to-square"></i></span>
            </button>
            {/* History*/}
            <ul className="history">
                <li>his1</li>
                <li>his2</li>
                <li>his3</li>
            </ul>
            {/* sign*/}
            <div className="sign">
                <p>User</p>
            </div>
        </section>
    )
}

export default Sidebar;