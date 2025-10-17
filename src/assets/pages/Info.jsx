import React from "react";

function Info() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
        }

        .about-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          background: url('https://images6.alphacoders.com/124/1249214.jpg') no-repeat center center/cover;
          position: relative;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(10px);
          z-index: 1;
        }

        .content {
          position: relative;
          z-index: 2;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .main-title {
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: 2px;
          margin: 0;
          text-transform: uppercase;
        }

        .author {
          font-size: 1rem;
          opacity: 0.85;
          margin: 0;
        }

        .logo {
          max-width: 240px;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .description-box {
          background: rgba(255, 255, 255, 0.15);
          padding: 1rem 2rem;
          border-radius: 12px;
          backdrop-filter: blur(5px);
          font-size: 1rem;
          max-width: 320px;
        }

        .footer-info {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          font-size: 0.85rem;
          opacity: 0.9;
        }

        .footer-info a {
          color: #4fc3f7;
          text-decoration: none;
        }

        .footer-info a:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 2rem;
          }
          .logo {
            max-width: 180px;
          }
          .description-box {
            font-size: 0.9rem;
          }
        }
      `}</style>

      <div className="about-page">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="main-title">DISNEY API</h1>
          <p className="author">Nicolle Alejandra Carvajal Guzman </p>

          <img
            className="logo"
            src="https://cdn-icons-png.flaticon.com/512/8545/8545387.png"
           
          />

          <div className="description-box">
            Api con información de 9820 personajes de Disney
          </div>

          <div className="footer-info">
            <a href="https://github.com/nicollealejandra26/disney_app" target="_blank" rel="noreferrer">
              github.com/nicollealejandra26
            </a>
            <p>v 1.0.1</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
