import React, { useState } from "react";
import "./Admission.css";

import sguWhite from "../../assets/images/sguwhitehdpng.png";

// Tuition images
import bachelor1 from "../../assets/images/bachelor-1.png";
import bachelor2 from "../../assets/images/bachelor-2.png";
import master1 from "../../assets/images/master-1.png";

import lusiIMG from "../../assets/images/consultant-1.png";
import desnitaIMG from "../../assets/images/consultant-2.png";
import dennisIMG from "../../assets/images/consultant-3.png";

const Admission = () => {
  const [degree, setDegree] = useState("bachelor");

  return (
    <div className="admission_page">
      <header className="header">
        <img src={sguWhite} alt="SGU Logo" className="header-logo" />

        <nav className="nav-tabs">
          <button
            className={`nav-btn ${degree === "bachelor" ? "active" : ""}`}
            onClick={() => setDegree("bachelor")}
          >
            Bachelor Degree
          </button>
          <button
            className={`nav-btn ${degree === "master" ? "active" : ""}`}
            onClick={() => setDegree("master")}
          >
            Master Degree
          </button>
        </nav>
      </header>

      {/* TUITION IMAGES */}
      <div className="tuition-body">
        {degree === "bachelor" && (
          <>
            <img src={bachelor1} alt="Bachelor Tuition 1" />
            <img src={bachelor2} alt="Bachelor Tuition 2" />
          </>
        )}

        {degree === "master" && (
          <img src={master1} alt="Master Tuition" />
        )}
      </div>

      {/* CONTENT */}
      <div className="admission-content">
        {degree === "bachelor" && (
          <>
            <section>
              <h2>Persyaratan Umum</h2>
              <p>
                The candidate should be in 10th – 12th grade of high school /
                equivalent
              </p>

              <h3>Dokumen yang Dibutuhkan</h3>
              <p className="document-text">
                1. 1 salinan raport kelas 10, 11, dan 12 yang dilegalisir oleh Kepala Sekolah.
                <br />
                2. 1 fotokopi KTP / SIM / Paspor untuk pelajar lokal.
                <br />
                3. 1 lembar Paspor & KITAS untuk Sekolah Internasional.
                <br />
                4. 2 buah pas foto berukuran 4 x 6 cm (berwarna, dengan latar belakang merah).
                <br />
                5. 1 fotokopi Kartu Keluarga.
                <br />
                6. 1 fotokopi Surat Keterangan Keluarga (Kartu Keluarga).
                <br />
                7. Surat keterangan dokter yang menyatakan bahwa siswa tidak menderita buta warna
                (khusus untuk siswa Life Sciences).
                <br />
                8. 1 lembar fotokopi ijazah SMA / SMK / MA yang dilegalisir oleh kepala sekolah
                (SETELAH DITERBITKAN).
                <br />
                9. 1 lembar fotokopi Transkrip Nilai yang dilegalisir oleh kepala sekolah
                (SETELAH DITERBITKAN).
                <br />
                10. Calon lulusan luar negeri atau sekolah menengah internasional wajib melakukan
                penyetaraan ijazah melalui Kementerian Pendidikan Nasional RI atau mengikuti
                IJAZAH Paket C.
                </p>
            </section>

            <section>
              <h2>Prosedur Pendaftaran</h2>
              <ol>
                <li>
                  <strong>Pendaftaran:</strong> Dibuka 31 Juli 2026 (Tahun Ajaran
                  2025/2026)
                </li>
                <li>
                  <strong>Biaya Pendaftaran:</strong> Link pembayaran dikirim via
                  WhatsApp & Email
                </li>
                <li>
                  <strong>Tes Masuk:</strong> Bahasa Inggris & Matematika (online)
                </li>
                <li>
                  <strong>Interview:</strong> Online atau tatap muka di Kampus
                  SGU
                </li>
              </ol>
            </section>

            {/* CONSULTATION TEAM */}
            <section>
              <h2>Tim Konsultasi Pendidikan Kami</h2>

              <div className="consultant-grid">
                <div className="consultant-card">
                    <img src={lusiIMG} alt="Sari Lusiana" className="consultant-img" />
                    <h4>Sari Lusiana</h4>
                    <p>
                    Hai, saya Lusi. Jika ada yang ingin Anda tanyakan, jangan ragu untuk
                    menghubungi saya.
                    </p>
                    <br></br>
                    <button className="consultant-button">Whatsapp</button>
                </div>

                <div className="consultant-card">
                    <img src={desnitaIMG} alt="Desnita" className="consultant-img" />
                    <h4>Desnita</h4>
                    <p>
                    Halo semuanya, saya Desnita. Jika Anda memiliki pertanyaan, jangan ragu
                    untuk menghubungi saya.
                    </p>
                    <br></br>
                    <button className="consultant-button">Whatsapp</button>
                </div>

                <div className="consultant-card">
                    <img src={dennisIMG} alt="Dennis Gunadi" className="consultant-img" />
                    <h4>Dennis Gunadi</h4>
                    <p>
                    Greetings, my name is Dennis. If you have any questions, don’t hesitate to
                    contact me.
                    </p>
                    <br></br>
                    <button className="consultant-button">Whatsapp</button>
                </div>
                </div>

            </section>
          </>
        )}

        {degree === "master" && (
          <>
            <section>
              <h2>General Requirement</h2>
              <p className="document-text">
                1. 1 Copy of Bachelor’s Degree* Certificate
                <br />
                2. 1 Copy of Academic Transcript
                <br />
              </p>

              <h3>Required Documents</h3>
                <p className="document-text">
                1. 1 Copy of Bachelor’s Degree* Certificate
                <br />
                2. 1 Copy of Academic Transcript
                <br />
                3. 2 photographs of 4x6cm (in color, with red as background)
                <br />
                4. 1 fotokopi Kartu Keluarga.
                <br />
                5. 1 copy of Family Certificate (Kartu Keluarga – Pendaftar).
                <br />
                6. 1 copy of Family Certificate (Kartu Keluarga – Orang tua)
                <br />
                7. 1 Copy of ID Card/Passport/KITAS
                <br />
                8. 1 Copy of Any Other Relevant Certificates
                <br />
                9. Curriculum Vitae.
                <br />
                10. 2 Reference Letters from the Current Employer
                <br />
                11. Foreign Candidate/overseas graduate: should legalize the certificate through the Department of National Education
                <br />
                12. Foreign Candidate: Stay/Work Permit.
                <br />
                12. Statement of Agreement stamped Rp. 10,000,00 (materai)
                </p>
            </section>

            <section>
              <h2>Registration Procedure</h2>
              <ol>
                <li>
                  Registration opens on 31 July 2024 (Academic Year 2024/2025)
                </li>
                <li>Payment link sent via WhatsApp & Email</li>
                <li>Interview (Online or On-Campus)</li>
              </ol>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default Admission;
