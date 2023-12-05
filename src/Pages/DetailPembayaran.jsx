import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/DetailPembayaran.css';
import { FaStar } from 'react-icons/fa6';
import { useEffect, useState } from "react"
import { useParams, useSearchParams } from 'react-router-dom';

const Pembayaran = () => {
  
  const [mentor1, setMentor1] = useState([]);
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const id = searchParams.get("id");
    getMentor(id);
  }, [searchParams]);

  async function getMentor(id) {
    try {
      const response = await fetch(`https://teal-colorful-lemur.cyclic.app/mentor/${id}`);
      const data = await response.json();
      setMentor1([data.data]);
    } catch (error) {
      console.error("Gagal mendapatkan data mentor:", error);
    }
  }

  const selectedMentor = mentor1.length > 0 ? mentor1[0] : null;


  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="src/assets/img/Only-Logo.png" alt="" srcSet="" className="me-1" />
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
                <li className="nav-item mx-5">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item mx-5">
                  <a className="nav-link" href="#">
                    Top Mentor
                  </a>
                </li>
                <li className="nav-item mx-5">
                  <a className="nav-link" href="#">
                    Event
                  </a>
                </li>
                <li className="nav-item mx-5">
                  <a className="nav-link" href="#">
                    Jadi Mentor
                  </a>
                </li>
              </ul>

              <div>
                <a href="/login">
                <button id="btnLogin" className="btn btn-flat">Login</button>
                </a>
                <a href="/regist">
                  <button id="btnRegist" className="btn btn-secondary">Register</button>
                  </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="breadcrumb-section">
          <div className="container">
            <div className="breadcrumb d-inline-flex gap-2 align-items-center">
              <i className="bi bi-arrow-left-short"><a href="/mentor">  </a></i>
              <h2>Konfirmasikan dan Bayar</h2>
            </div>
          </div>
        </section>

        <section className="payment-information-section">
          <div className="container">
            <div className="row">
              {selectedMentor ? (
                <div className="col-12 col-xl-7 col-md-12 col-sm-12">
                <div className="mentoring-details">
                  <h5>Mentoring Anda</h5>
                  <hr />
                  <h6>Mentor</h6>
                  <p id="namamentor">{selectedMentor.name}</p>
                  <h6>Hari/Tanggal</h6>
                  <p>Rabu, 02 November 2022</p>
                  <h6>Waktu</h6>
                  <p>13.00 - 13.45 WIB</p>
                </div>
                <br />
              </div>
              ): (
                <div>Loading...</div>
              )}

              <div className="col-12 col-xl-5 col-md-12 col-sm-12 py-xl-0 py-md-3 py-sm-4 py-3">
                <div className="card card-booking mb-3">
                  <div className="row g-0">
                    <div className="col-md-5 col-sm-12">
                      <img src="src/Assets/Img/card-detail.png" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h5 className="card-title">Mentoring 1 on 1 Oleh <br /> </h5>
                        <hr />
                        <div className="card-booking-rating d-inline-flex gap-2 align-items-center">
                          <i className="bi bi-star-fill"><FaStar/></i>4.9<b>(576)</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />

                <div className="mentoring-details">
                  <h5>Detail Pembayaran</h5>
                  <hr />
                  {/*  */}
                  <div className="payment-cart">
                    <div className="normal-price">
                      <h6>1 on 1 Mentoring</h6>
                      <h6>Rp90.000</h6>
                    </div>
                    <div className="discount">
                      <h6>Diskon Spesial</h6>
                      <h6>- Rp10.000</h6>
                    </div>
                    <hr />
                    <div className="total-payment">
                      <div>
                        <h6>Total Biaya</h6>
                      </div>
                      <div>
                        <h6 className="total-payment-higlight">Rp.80.000</h6>
                      </div>
                    </div>
                    <div id="cta-payment" className="cta-payment">
                      <a className="btn btn-primary" href="/barcode">Lakukan Pembayaran</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-black">
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-5 col-md-12 mb-4 mb-md-0">
              <img className="my-2" src="src/Assets/Img/Only-Logo.png" alt="" srcSet="" />
              <h5 className="text-logo">Mentor<span className="primary">ku</span></h5>
              <p>Booking dan temukan mentor profesional dengan mudah.</p>
              <div className="sosmed-footer">
                <div className="sosmed-logo">
                  <img src="src/Assets/Img/social media/instagram.png" alt="" srcSet="" />
                </div>
                <div className="sosmed-logo">
                  <img src="src/Assets/Img/social media/linkedin.png" alt="" srcSet="" />
                </div>
                <div className="sosmed-logo">
                  <img src="src/Assets/Img/social media/twitter.png" alt="" srcSet="" />
                </div>
                <div className="sosmed-logo">
                  <img src="src/Assets/Img/social media/youtube.png" alt="" srcSet="" />
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

      <script src="/script/detail-pembayaran.js"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default Pembayaran;
