import "./TopBar.css";

export default function TopBar() {
  return (
    <div id="top-header" className="top-bar">
      <div className="container top-bar-container">
        <div className="top-bar-inner">
          <div className="top-bar-left">
            {/* Noor tarafında şu anda boş */}
          </div>

          <div className="top-bar-right">
            <ul className="top-bar-links">
              <li>
                <a
                  href="https://mynoor.noorcap.ae/en/traders/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MyNoor
                </a>

                <span className="top-bar-separator">|</span>

                <a
                  href="https://agent.noorcap.ae"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agents
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}