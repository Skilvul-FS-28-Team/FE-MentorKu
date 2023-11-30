import "../style/detail-mentor.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaDribbble, FaInstagram, FaLinkedin, FaYoutube, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react"

const Mentor = () => {
  const [mentor1, setMentor1] = useState([]);

   useEffect(() => {
   getMentor();
},[]);

async function getMentor() {
  try{
    const response = await fetch("https://teal-colorful-lemur.cyclic.app/mentor");
  const data = await response.json();
  setMentor1(data.data);
  } catch (error){
    console.error("Gagal mendapatkan data mentor:", error)
  }
}

const selectedMentor = mentor1.length > 0 ? mentor1[0] : null;

  
  return (
    <>
      {/* Header Section Start */}
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="src/assets/img/Only-Logo.png" alt="" className="me-1" />
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
                <li className="nav-item mx-2 mx-lg-5">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item mx-2 mx-lg-5">
                  <a className="nav-link" href="#">
                    Top Mentor
                  </a>
                </li>
                <li className="nav-item mx-2 mx-lg-5">
                  <a className="nav-link" href="#">
                    Event
                  </a>
                </li>
                <li className="nav-item mx-2 mx-lg-5">
                  <a className="nav-link" href="#">
                    Jadi Mentor
                  </a>
                </li>
              </ul>
              <div>
                <a href="/login">
                  <button id="btnLogin" className="btn btn-flat">
                    Login
                  </button>
                </a>
                <a href="/regist">
                  <button id="btnRegist" className="btn btn-secondary">
                    Register
                  </button>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Header Section End */}

      {/* Hero Section start */}
      <div className="background"></div>
      {/* <div className="background"></div> */}
      {selectedMentor ? (
        <div className="container" id="hero">
          <div className="hero-section">
            <div className="hero-text">
              <img
                src={selectedMentor.profile_image}
                alt="MentorKu"
              />
              <div className="hero-desc">
                <h2>
                  {selectedMentor.name}<span>{selectedMentor.position} di {selectedMentor.company}</span>
                </h2>
                <div className="hero-social-media">
                  <a href={selectedMentor.linkedin} className="fa">
                    <FaLinkedin />
                  </a>
                  <a href={selectedMentor.instagram} className="fa">
                    <FaInstagram />
                  </a>
                  <a href={selectedMentor.personal_web} className="fa">
                    <FaDribbble />
                  </a>
                  <a href="#" className="fa">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card" id='card-line'></div>
        </div>
      ) : (
        <div>Loading...</div>
      )}

      {/* Description Section Start */}
      <div className="container">
        <div className="row">
      {selectedMentor ? (
        <div className="col-md-7 wider-column" id="description">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title" id="desc-card">
                Deskripsi Mentor
              </h3>
              <p className="card-text" id="desc-text">
                {selectedMentor.desc}
              </p>
              <h3 className="card-title" id="desc-card">
                Pengalaman Kerja
              </h3>
              <p className="card-text" id="desc-text">
                <span>{selectedMentor.skill_1} ( 2020 - Sekarang )</span>
                <span>{selectedMentor.skill_2} ( 2018 - 2019 )</span>
                <span>{selectedMentor.skill_3} ( 2017 )</span>
              </p>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="button-professional">
                    <button type="button" className="btn-professional">
                      {selectedMentor.skill_1}
                    </button>
                    <button type="button" className="btn-professional">
                      {selectedMentor.skill_2}
                    </button>
                    <button type="button" className="btn-professional">
                      {selectedMentor.skill_3}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="social-media-btn">
                <a href={selectedMentor.linkedin} className="fa">
                  <FaLinkedin />
                </a>
                <a href={selectedMentor.instagram} className="fa">
                  <FaInstagram />
                </a>
                <a href={selectedMentor.personal_web} className="fa">
                  <FaDribbble />
                </a>
                <a href="#" className="fa">
                  <FaYoutube />
                </a>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="button-tutorial">
                    <p>Bingung Memulai Mentoring?</p>
                    <button type="button" className="btn-tutorial">
                      Panduan Mentoring &gt;&gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
          <div className="col-md-5">
            {/* Dua kolom kanan */}
            <div className="row">
              <div className="col-md-12" id="card-sesi-jadwal">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title" id="card-jadwal">
                      Pilih Jadwal
                    </h3>
                    <div className="card" id="card-list-jadwal"></div>
                    <p className="card-sesi">Sesi Tersedia</p>
                    <div className="button-sesi">
                      <button type="button" className="btn-sesi">
                        <div className="sesi-hari">Senin</div>
                        <div className="sesi-tgl">02 Okt</div>
                        <div className="sesi-slot-no">01 Slot</div>
                      </button>
                      <button type="button" className="btn-sesi">
                        <div className="sesi-hari">Selasa</div>
                        <div className="sesi-tgl">03 Okt</div>
                        <div className="sesi-slot-yes">10 Slot</div>
                      </button>
                      <button type="button" className="btn-sesi">
                        <div className="sesi-hari">Rabu</div>
                        <div className="sesi-tgl">04 Okt</div>
                        <div className="sesi-slot-yes">15 Slot</div>
                      </button>
                      <button type="button" className="btn-sesi">
                        <div className="sesi-hari">Kamis</div>
                        <div className="sesi-tgl">05 Okt</div>
                        <div className="sesi-slot-yes">20 Slot</div>
                      </button>
                      <button type="button" className="btn-sesi">
                        <div className="sesi-hari">Jumat</div>
                        <div className="sesi-tgl">06 Okt</div>
                        <div className="sesi-slot-yes">05 Slot</div>
                      </button>
                    </div>
                    <p className="card-sesi">Waktu Tersedia</p>
                    <div className="button-time">
                      <button type="button" className="btn-time" id="button">
                        10:00
                      </button>
                      <button type="button" className="btn-time" id="button">
                        13:00
                      </button>
                      <button type="button" className="btn-time" id="button">
                        15:00
                      </button>
                      <button type="button" className="btn-time" id="button">
                        19:00
                      </button>
                      <button type="button" className="btn-time" id="button">
                        20:00
                      </button>
                      <button type="button" className="btn-time" id="button">
                        21:00
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card" id="detail-pembayaran">
                    <div className="card-body">
                      <h3 className="card-title" id="card-detail">
                        Detail Pembayaran
                      </h3>
                      <div className="card"></div>
                      <button type="button" id="btn-card-promo">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-credit-card"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                          <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
                        </svg>
                        <p>Makin Hemat Pakai Promo</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-arrow-right"
                          viewBox="0 0 16 16"
                        >
                          {/* <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          /> */}
                        </svg>
                      </button>
                      <div className="range-mentoring">
                        <p>1 on 1 Mentoring</p>
                        <p>Rp90.000</p>
                      </div>
                      <div className="range-diskon">
                        <p>Diskon Spesial</p>
                        <p>- Rp10.000</p>
                      </div>
                      <div className="card"></div>
                      <div className="range-total">
                        <p>Total Biaya</p>
                        <p className="range-total-harga">Rp80.000</p>
                      </div>
                      <div className="button-book">
                        <a href="/pembayaran">
                          <button
                            id="btn-booking-mentor"
                            type="button"
                            className="btn-book"
                          >
                            Booking Mentor
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Description Section End */}

      <div className="container" id="card-rating-container">
        <div className="row">
          <div className="col-md-7" id="rating-card">
            <div className="card">
              <div className="container" id="card-rating">
                <div className="card-rating-reviewer">
                  <h5 className="card-tittle-rating">Ulasan Mentor</h5>
                  <div className="rate-mentor">
                    <div className="rating-mentor">
                      <div className="rating-mentor-2">
                        <div className="rating-mentor-3">
                          <p className="description-rating">
                            <span>4.8</span>/5
                          </p>
                          <div className="star-rating">
                            <div className="star-rating-yes">
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-star-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-star-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-star-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-star-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <div className="star-rating-no">
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-star-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skill">
                          <div className="skill-bar">
                            <div
                              className="skill-level"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                          <div className="skill-bar">
                            <div
                              className="skill-level"
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                          <div className="skill-bar">
                            <div
                              className="skill-level"
                              style={{ width: "20%" }}
                            ></div>
                          </div>
                          <div className="skill-bar">
                            <div
                              className="skill-level"
                              style={{ width: "10%" }}
                            ></div>
                          </div>
                          <div className="skill-bar">
                            <div
                              className="skill-level"
                              style={{ width: "10%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="container" id="rate-star-container">
                    <div className="row">
                      <div className="col-md-2" id="rate-star">
                        <div className="p-3">
                          <p>Semua (20)</p>
                        </div>
                      </div>
                      <div className="col-md-2" id="rate-star">
                        <div className="p-3">
                          <p>Bintang 5 (19)</p>
                        </div>
                      </div>
                      <div className="col-md-2" id="rate-star">
                        <div className="p-3">
                          <p>Bintang 4 (1)</p>
                        </div>
                      </div>
                      <div className="col-md-2" id="rate-star">
                        <div className="p-3">
                          <p>Bintang 3 (0)</p>
                        </div>
                      </div>
                      <div className="col-md-2" id="rate-star">
                        <div className="p-3">
                          <p>Bintang 2 (0)</p>
                        </div>
                      </div>
                      <div className="col-md-2" id="rate-star">
                        <div className="p-3">
                          <p>Bintang 1 (0)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="card-container-reviewer">
        <div className="row">
          {/* Repeat the following block for each card */}
          <div className="col-md-4" id="card-box">
            <div className="card" id="box-card">
              <div className="card-body" id="card-reviewer">
                <img
                  src="src/assets/img/reviewer/Catherine.jpg"
                  alt="Catherine"
                />
                <div className="card-body-reviewer">
                  <h5 className="tittle-card">Catherine Cukurukuk</h5>
                  <p className="card-work">Student</p>
                  <div className="card-star">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="container" id="text-card">
                <p>
                  Keren parahh dan konstruktif, semua diskusinya sangat
                  bijaksana. Saya mendapat banyak wawasan setelah sesi 45 menit!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" id="card-box">
            <div className="card" id="box-card">
              <div className="card-body" id="card-reviewer">
                <img
                  src="src/assets/img/reviewer/Catherine.jpg"
                  alt="Catherine"
                />
                <div className="card-body-reviewer">
                  <h5 className="tittle-card">Catherine Cukurukuk</h5>
                  <p className="card-work">Student</p>
                  <div className="card-star">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="container" id="text-card">
                <p>
                  Keren parahh dan konstruktif, semua diskusinya sangat
                  bijaksana. Saya mendapat banyak wawasan setelah sesi 45 menit!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" id="card-box">
            <div className="card" id="box-card">
              <div className="card-body" id="card-reviewer">
                <img
                  src="src/assets/img/reviewer/Catherine.jpg"
                  alt="Catherine"
                />
                <div className="card-body-reviewer">
                  <h5 className="tittle-card">Catherine Cukurukuk</h5>
                  <p className="card-work">Student</p>
                  <div className="card-star">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="container" id="text-card">
                <p>
                  Keren parahh dan konstruktif, semua diskusinya sangat
                  bijaksana. Saya mendapat banyak wawasan setelah sesi 45 menit!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" id="card-box">
            <div className="card" id="box-card">
              <div className="card-body" id="card-reviewer">
                <img
                  src="src/assets/img/reviewer/Catherine.jpg"
                  alt="Catherine"
                />
                <div className="card-body-reviewer">
                  <h5 className="tittle-card">Catherine Cukurukuk</h5>
                  <p className="card-work">Student</p>
                  <div className="card-star">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="container" id="text-card">
                <p>
                  Keren parahh dan konstruktif, semua diskusinya sangat
                  bijaksana. Saya mendapat banyak wawasan setelah sesi 45 menit!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" id="card-box">
            <div className="card" id="box-card">
              <div className="card-body" id="card-reviewer">
                <img
                  src="src/assets/img/reviewer/Catherine.jpg"
                  alt="Catherine"
                />
                <div className="card-body-reviewer">
                  <h5 className="tittle-card">Catherine Cukurukuk</h5>
                  <p className="card-work">Student</p>
                  <div className="card-star">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="container" id="text-card">
                <p>
                  Keren parahh dan konstruktif, semua diskusinya sangat
                  bijaksana. Saya mendapat banyak wawasan setelah sesi 45 menit!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" id="card-box">
            <div className="card" id="box-card">
              <div className="card-body" id="card-reviewer">
                <img
                  src="src/assets/img/reviewer/Catherine.jpg"
                  alt="Catherine"
                />
                <div className="card-body-reviewer">
                  <h5 className="tittle-card">Catherine Cukurukuk</h5>
                  <p className="card-work">Student</p>
                  <div className="card-star">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="container" id="text-card">
                <p>
                  Keren parahh dan konstruktif, semua diskusinya sangat
                  bijaksana. Saya mendapat banyak wawasan setelah sesi 45 menit!
                </p>
              </div>
            </div>
          </div>
          <div className="button-centered">
            <button className="button-reviewer" id="load-more-button">
              Lihat Ulasan Lainnya
            </button>
          </div>
        </div>
      </div>

      <section className="recomendation-section">
          <div className="container">
            <h2>Temukan Mentor Terbaikmu</h2>
            <div className="row row-cols-1 row-cols-xl-4 row-cols-md-3 ow-cols-sm-1 g-xl-4 g-md-2 g-sm-1">
              {mentor1.length == 0 ? (
                <div>Loading...</div>
              ) : (
                mentor1.map((item) => (
                  <div className="col" key={item.id}>
                    <a href="mentor?id=1">
                      <div className="card card-mentor">
                        <img
                          src={item.profile_image}
                          alt={item.profile_image}
                          srcSet=""
                        />
                        <h3>{item.name}</h3>
                        <div className="mentor-company d-inline-flex gap-2 align-items-center">
                          <i className="bi bi-suitcase-lg"></i>
                          <div className="mentor-company-text">
                            {item.position} di {item.company}
                          </div>
                        </div>
                        <div className="mentor-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                          <div className="mentor-experience">
                            Experience <br /> <b>{item.yoe} Tahun</b>
                          </div>
                          <div className="mentor-status">available</div>
                        </div>
                        <div className="price-info d-inline-flex gap-2 align-items-center justify-content-between flex-lg-row flex-md-column flex-sm-row">
                          <div className="price">Rp{item.price}</div>
                          <div className="rating d-inline-flex gap-1">
                            <i className="bi bi-star-fill">
                              <FaStar />
                            </i>
                            4.9<b>(576)</b>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))
              )}

            </div>
            <div className="d-flex justify-content-center py-5">
              <button className="button-mentor">Lihat Lainnya</button>
            </div>
          </div>
        </section>

      <footer className="text-black">
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-5 col-md-12 mb-4 mb-md-0">
              <img className="my-2" src="src/Assets/Img/Only-Logo.png" alt="" />
              <h5 className="text-logo">
                Mentor<span className="primary">ku</span>
              </h5>
              <p>Booking dan temukan mentor profesional dengan mudah.</p>
              <div className="sosmed-footer">
                <div className="sosmed-logo">
                  <img src="src/Assets/Img/social media/instagram.png" alt="" />
                </div>
                <div className="sosmed-logo">
                  <img src="src/Assets/Img/social media/linkedin.png" alt="" />
                </div>
                <div className="sosmed-logo">
                  <img src="src/Assets/Img/social media/twitter.png" alt="" />
                </div>
                <div className="sosmed-logo">
                  <img src="src/Assets/Img/social media/youtube.png" alt="" />
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
    </>
  );
};

export default Mentor;
