import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/jadwal.css'

const Jadwal = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="src/Assets/Img/Only-Logo.png" alt="" className="me-1" />
              Mentor<span className="primary">Ku</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item mx-5 mx-xl-5 mx-md-2">
                  <a className="nav-link active" aria-current="page" href="Home.html">
                    Home
                  </a>
                </li>
                <li className="nav-item mx-5 mx-xl-5 mx-md-2">
                  <a className="nav-link" href="#">
                    Top Mentor
                  </a>
                </li>
                <li className="nav-item mx-5 mx-xl-5 mx-md-2">
                  <a className="nav-link" href="#">
                    Event
                  </a>
                </li>
                <li className="nav-item mx-5 mx-xl-5 mx-md-2">
                  <a className="nav-link" href="#">
                    Jadi Mentor
                  </a>
                </li>
              </ul>

              <div>
                <button className="btn btn-flat">Login</button>
                <button className="btn btn-secondary">Register</button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="profile-sec">
              <img src="src/assets/img/mentor/Lina Wiona.png" alt="" />
              <h2>Lina Wiona</h2>
              <button className="button-link">https://linawiona.com</button>
            </div>
            <div className="side-bar">
              <a href="/dashboard">
                <button>Dashboard</button>
              </a>
              <a href="/jadwal">
                <button className="click">Jadwal Saya</button>
              </a>
              <a href="/event">
                <button>Event</button>
              </a>
              <a href="/transaksi">
                <button>Transaksi</button>
              </a>
              <a href="/">
                <button>Logout</button>
              </a>
            </div>
          </div>

          <div className="col-md-10" id="card-time-section">
      <div className="container mt-5">
        <div className="row">
          <h5>Jadwal Saya</h5>

          {/* Card 1 */}
          <button className="col-md-3">
            <div>
              <div className="card-body" id="card-time">
                <h5 className="card-title">Micho Suhada</h5>
                <p className="card-text">FrontEnd</p>
              </div>
              <div className="card" id="card-line"></div>
              <div className="card-body" id="card-time-text">
                <p className="card-title" id="card-time-day">
                  Selasa
                </p>
                <p className="card-text" id="card-time-date">
                  07 Sept
                </p>
                <p className="card-text" id="card-time-hour">
                  10:00 - 12:00
                </p>
              </div>
            </div>
          </button>

          {/* Card 2 */}
          <button className="col-md-3">
            <div>
              <div className="card-body" id="card-time">
                <h5 className="card-title">Micho Suhada</h5>
                <p className="card-text">FrontEnd</p>
              </div>
              <div className="card" id="card-line"></div>
              <div className="card-body" id="card-time-text">
                <p className="card-title" id="card-time-day">
                  Selasa
                </p>
                <p className="card-text" id="card-time-date">
                  07 Sept
                </p>
                <p className="card-text" id="card-time-hour">
                  10:00 - 12:00
                </p>
              </div>
            </div>
          </button>

          {/* Card 3 */}
          <button className="col-md-3">
            <div>
              <div className="card-body" id="card-time">
                <h5 className="card-title">Micho Suhada</h5>
                <p className="card-text">FrontEnd</p>
              </div>
              <div className="card" id="card-line"></div>
              <div className="card-body" id="card-time-text">
                <p className="card-title" id="card-time-day">
                  Selasa
                </p>
                <p className="card-text" id="card-time-date">
                  07 Sept
                </p>
                <p className="card-text" id="card-time-hour">
                  10:00 - 12:00
                </p>
              </div>
            </div>
          </button>

          {/* Card 4 */}
          <button className="col-md-3">
            <div>
              <div className="card-body" id="card-time">
                <h5 className="card-title">Micho Suhada</h5>
                <p className="card-text">FrontEnd</p>
              </div>
              <div className="card" id="card-line"></div>
              <div className="card-body" id="card-time-text">
                <p className="card-title" id="card-time-day">
                  Selasa
                </p>
                <p className="card-text" id="card-time-date">
                  07 Sept
                </p>
                <p className="card-text" id="card-time-hour">
                  10:00 - 12:00
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
        </div>
      </div>

      <footer className="text-black">
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-5 col-md-12 mb-4 mb-md-0">
              <img
                className="my-2"
                src="src/Assets/Img/Only-Logo.png"
                alt=""
              />
              <h5 className="text-logo">
                Mentor<span className="primary">ku</span>
              </h5>
              <p>
                Booking dan temukan mentor proffesional dengan mudah.
              </p>
              <div className="sosmed-footer">
                <div className="sosmed-logo">
                  <img
                    src="src/Assets/Img/social media/instagram.png"
                    alt=""
                  />
                </div>
                <div className="sosmed-logo">
                  <img
                    src="src/Assets/Img/social media/linkedin.png"
                    alt=""
                  />
                </div>
                <div className="sosmed-logo">
                  <img
                    src="src/Assets/Img/social media/twitter.png"
                    alt=""
                  />
                </div>
                <div className="sosmed-logo">
                  <img
                    src="src/Assets/Img/social media/youtube.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
              <h5>Mentorku</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!">Karir</a>
                </li>
                <li>
                  <a href="#!">Tentang Kami</a>
                </li>
                <li>
                  <a href="#!">Partner</a>
                </li>
                <li>
                  <a href="#!">Blog</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
              <h5>Layanan</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!">Mentoring</a>
                </li>
                <li>
                  <a href="#!">Course</a>
                </li>
                <li>
                  <a href="#!">Challenge</a>
                </li>
                <li>
                  <a href="#!">Event</a>
                </li>
                <li>
                  <a href="#!">Paket</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 mb-4 mb-md-0">
              <h5>Bantuan dan Panduan</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!">Syarat dan Ketentuan</a>
                </li>
                <li>
                  <a href="#!">Kebijakan Privasi</a>
                </li>
                <li>
                  <a href="#!">Bantuan</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default Jadwal;
