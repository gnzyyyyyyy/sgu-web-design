import React, { useState } from "react";
import "./Coaches.css";

import sguWhite from "../../assets/images/sguwhitehdpng.png";

// Lecturer images
import eit1 from "../../assets/images/eit1.png";
import eit2 from "../../assets/images/eit2.png";
import eit3 from "../../assets/images/eit3.png";
import eit4 from "../../assets/images/eit4.png";
import eit5 from "../../assets/images/eit5.png";
import eit6 from "../../assets/images/eit6.png";
import eit7 from "../../assets/images/eit7.png";
import eit8 from "../../assets/images/eit8.png";
import eit9 from "../../assets/images/eit9.png";
import eit10 from "../../assets/images/eit10.png";
import eit11 from "../../assets/images/eit11.png";
import eit12 from "../../assets/images/eit12.png";
import eit13 from "../../assets/images/eit13.png";
import eit14 from "../../assets/images/eit14.png";
import eit15 from "../../assets/images/eit15.png";
import eit16 from "../../assets/images/eit16.png";
import eit17 from "../../assets/images/eit17.png";
import eit18 from "../../assets/images/eit18.png";
import eit19 from "../../assets/images/eit19.png";
import eit20 from "../../assets/images/eit20.png";
import eit21 from "../../assets/images/eit21.png";
import eit22 from "../../assets/images/eit22.png";
import eit23 from "../../assets/images/eit23.png";
import eit24 from "../../assets/images/eit24.png";
// import eit25 from "../../assets/images/eit25.png";
// import eit26 from "../../assets/images/eit26.png";
// import eit27 from "../../assets/images/eit27.png";
// import eit28 from "../../assets/images/eit28.png";
// import eit29 from "../../assets/images/eit29.png";
// import eit30 from "../../assets/images/eit30.png";\

import bc1 from "../../assets/images/bc1.webp";
import bc2 from "../../assets/images/bc2.webp";
import bc3 from "../../assets/images/bc3.webp";
import bc4 from "../../assets/images/bc4.webp";
import bc5 from "../../assets/images/bc5.webp";
import bc6 from "../../assets/images/bc6.webp";
import bc7 from "../../assets/images/bc7.webp";
import bc8 from "../../assets/images/bc8.webp";
import bc9 from "../../assets/images/bc9.webp";
import bc10 from "../../assets/images/bc10.webp";
import bc11 from "../../assets/images/bc11.webp";
import bc12 from "../../assets/images/bc12.webp";
import bc13 from "../../assets/images/bc13.webp";
import bc14 from "../../assets/images/bc14.webp";
import bc15 from "../../assets/images/bc15.webp";
import bc16 from "../../assets/images/bc16.webp";
import bc17 from "../../assets/images/bc17.webp";
import bc18 from "../../assets/images/bc18.webp";
import bc19 from "../../assets/images/bc19.webp";
import bc20 from "../../assets/images/bc20.webp";
import bc21 from "../../assets/images/bc21.webp";

import lst1 from "../../assets/images/lst1.webp";
import lst2 from "../../assets/images/lst2.webp";
import lst3 from "../../assets/images/lst3.webp";
import lst4 from "../../assets/images/lst4.webp";
import lst5 from "../../assets/images/lst5.webp";
import lst6 from "../../assets/images/lst6.webp";
import lst7 from "../../assets/images/lst7.webp";
import lst8 from "../../assets/images/lst8.webp";
import lst9 from "../../assets/images/lst9.webp";
import lst10 from "../../assets/images/lst10.webp";
import lst11 from "../../assets/images/lst11.webp";
import lst12 from "../../assets/images/lst12.webp";
import lst13 from "../../assets/images/lst13.webp";
import lst14 from "../../assets/images/lst14.webp";
import lst15 from "../../assets/images/lst15.webp";
import lst16 from "../../assets/images/lst16.webp";
import lst17 from "../../assets/images/lst17.webp";
import lst18 from "../../assets/images/lst18.webp";


// Lecturer data
const lecturers = [
  {
    name: "Dr. Maulahikmah Galinium, S.Kom., M.Sc.",
    job: "Dean of Faculty of Engineering and Information Technology",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit1,
  },
  {
    name: "Dr. Yunita Umniyati, S.Si., M.Sc",
    job: "Head of Mechatronics",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit2,
  },
  {
    name: "Yohanes Syailendra Kotualubun, S.Kom., M.Kom.",
    job: "Lecturer",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit3,
  },
  {
    name: "Dr. Widi Setiawan, M.Sc.",
    job: "Lecturer of Master of Mechanical Engineering",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit4,
  },
  {
    name: "Ir. Triarti Saraswati, M.Eng.",
    job: "Head of Mechatronics",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit5,
  },
  {
    name: "Assoc. Prof. Dr. Tanika D. Sofianti, S.T., M.T.",
    job: "Associate Professor",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit6,
  },
  {
    name: "Dr. Rusman Rusyadi",
    job: "Lecturer of Mechatronic",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit7,
  },
  {
    name: "Dr. Mulya R. Mashudi, S.T., M.E.M.",
    job: "Lecturer",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit8,
  },
  {
    name: "Dr. Ir. Mohammad A Soetomo, DSc",
    job: "Lecturer",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit9,
  },
  {
    name: "Dr. Magfirawaty, S.Si., M.Si.",
    job: "Lecturer",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit10,
  },
  {
    name: "Leonard Rusli, Ph.D",
    job: "Vice Rector for Academic Affairs",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit11,
  },
  {
    name: "Dipl.-Inf I Eng Kho",
    job: "Head of Information Technology",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit12,
  },
  {
    name: "Kalpin Erlangga Silaen, S.Si., M.Kom., CISSP, CEH, ECIH, ECSA, CHFI",
    job: "Lecturer",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit13,
  },
  {
    name: "Joseph Andreas S.Kom., B.Eng., M.Sc.",
    job: "Deputy Head of Information Technology",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit14,
  },
  {
    name: "Associate Professor James Purnama, S.Kom, M.Kom, M.Sc.",
    job: "Vice Rector for non Academic Affairs",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit15,
  },
  {
    name: "Iwan Setiawan S.H.,L.LM., PhD",
    job: "-",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit16,
  },
  {
    name: "Ivan Kurniawan, S.T., B.Eng., M.T., M.B.A.",
    job: "Assistant Professor",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit17,
  },
  {
    name: "Dr. Ita Mariza, M.M.",
    job: "Lecturer",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit18,
  },
  {
    name: "Dr. Ir. Heru Purnomo Ipung, M.Eng",
    job: "Lecturer",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit19,
  },
  {
    name: "Dr. Ir. Henry Nasution, M.T, IPP",
    job: "Associate Professors",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit20,
  },
  {
    name: "Hartono , , S.T., M.T..",
    job: "Deputy Head",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit21,
  },
  {
    name: "Dr. Hanny J Berchmans, S.T., M.T.",
    job: "Lecturer of Master of Mechanical Engineering",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit22,
  },
  {
    name: "Gunawan Zuardi, M.T, M.Sc",
    job: "Lecturer of Industrial Engineering",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit23,
  },
  {
    name: "Dr. Ir. Gembong Baskoro, M.Sc., IPU, ASEAN Eng., ACPE, APEC Eng.",
    job: "Head of Master of Mechanical Engineering",
    faculty: "FEIT",
    degree: "bachelor",
    img: eit24,
  },
  {
    name: "Dr. Nila Krisnawati Hidayat, SE., MM.",
    job: "Dean of Faculty of Business and Communication",
    faculty: "FBC",
    degree: "bachelor",
    img: bc1,
  },
  {
    name: "Dr. Ir. Yosman Bustaman, M.Buss.",
    job: "Lecturer of Master of Business Administration",
    faculty: "FBC",
    degree: "bachelor",
    img: bc2,
  },
  {
    name: "Sumini Salem",
    job: "Lecturer of Business Accounting",
    faculty: "FBC",
    degree: "bachelor",
    img: bc3,
  },
  {
    name: "Dr. Ir. Sukardi Silalahi, MBA.",
    job: "Lecturer of Master of Business Administration",
    faculty: "FBC",
    degree: "bachelor",
    img: bc4,
  },
  {
    name: "Dr. Soebowo Musa",
    job: "Head of Master of Business and Administration",
    faculty: "FBC",
    degree: "bachelor",
    img: bc5,
  },
  {
    name: "Robert La Are SST. Par, M. Par.",
    job: "Head of Hotel & Tourism Management",
    faculty: "FBC",
    degree: "bachelor",
    img: bc6,
  },
  {
    name: "Rashid Algani Sugiri, S.E., M.Par.",
    job: "-",
    faculty: "FBC",
    degree: "bachelor",
    img: bc7,
  },
  {
    name: "Dr. Nurdayadi, MSc.",
    job: "Lecturer of Business Accounting",
    faculty: "FBC",
    degree: "bachelor",
    img: bc8,
  },
  {
    name: "Muninggar Sri Saraswati, Ph.D",
    job: "Lecturer of Global Strategic Communications",
    faculty: "FBC",
    degree: "bachelor",
    img: bc9,
  },
  {
    name: "Dr. Munawaroh Zainal, S.E. M.M.",
    job: "Head of Business Management",
    faculty: "FBC",
    degree: "bachelor",
    img: bc10,
  },
  {
    name: "Mochammad Riyadh Rizky Adam, S.T., M.S.M.",
    job: "Deputy Head of Business Management",
    faculty: "FBC",
    degree: "bachelor",
    img: bc11,
  },
  {
    name: "Dr. Mira Maulida",
    job: "Lecturer of Master of Business Administration",
    faculty: "FBC",
    degree: "bachelor",
    img: bc12,
  },
  {
    name: "Margaretha T.P. Lingga, MM.",
    job: "Lecturer of Business Management",
    faculty: "FBC",
    degree: "bachelor",
    img: bc13,
  },
  {
    name: "Loina L. K. Perangin-angin, M.Si",
    job: "Head of Global Strategic Communications",
    faculty: "FBC",
    degree: "bachelor",
    img: bc14,
  },
  {
    name: "Dr. Fiter Abadi, M.B.A.",
    job: "Deputy Head of Master of Business Administration",
    faculty: "FBC",
    degree: "bachelor",
    img: bc15,
  },
  {
    name: "Deborah Nauli S., Ph.D",
    job: "Director - Lecturer of Global Strategic Communications",
    faculty: "FBC",
    degree: "bachelor",
    img: bc16,
  },
  {
    name: "Aulia Putri Meidina, S.Sos., M.A.",
    job: "Lecturer of Global Strategic Communications",
    faculty: "FBC",
    degree: "bachelor",
    img: bc17,
  },
  {
    name: "Dr. Anthon Stevanus Tondo, S.E., M.B.A.",
    job: "Lecturer of Business Management",
    faculty: "FBC",
    degree: "bachelor",
    img: bc18,
  },
  {
    name: "Anis Hamidati",
    job: "Lecturer of Global Strategic Communications",
    faculty: "FBC",
    degree: "bachelor",
    img: bc19,
  },
  {
    name: "Alfiandri, MAcc. CA",
    job: "Lecturer of Business Accounting",
    faculty: "FBC",
    degree: "bachelor",
    img: bc20,
  },
  {
    name: "Agung Joni Saputra, S.E., M.Akt., Cert DA.",
    job: "Head of Business Accounting",
    faculty: "FBC",
    degree: "bachelor",
    img: bc21,
  },
  {
    name: "Dr. Hery Sutanto, S.Si., M.Si.",
    job: "Dean of Faculty of Life Science & Technology",
    faculty: "FLST",
    degree: "bachelor",
    img: lst1,
  },
  {
    name: "Tabligh Permana, S.Si., M.Si.",
    job: "Lecturer of Food Technology",
    faculty: "FLST",
    degree: "bachelor",
    img: lst2,
  },
  {
    name: "Silvya Yusri, S.Si., M.T.",
    job: "Deputy Head of Chemical Engineering",
    faculty: "FLST",
    degree: "bachelor",
    img: lst3,
  },
  {
    name: "Dr. Dipl. -Ing. Samuel P. Kusumocahyo",
    job: "Rector",
    faculty: "FLST",
    degree: "bachelor",
    img: lst4,
  },
  {
    name: "Dr. Muhammad Fathony, PhD.",
    job: "Lecturer of Biomedical Engineering",
    faculty: "FLST",
    degree: "bachelor",
    img: lst5,
  },
  {
    name: "Maria D.P.T. Gunawan, M.Sc, Ph.D.",
    job: "Lecturer of Food Technology",
    faculty: "FLST",
    degree: "bachelor",
    img: lst6,
  },
  {
    name: "Kholis Audah, Ph.D.",
    job: "Head of Academic Research and Community Service & Lecturer of Biomedical Engineering",
    faculty: "FLST",
    degree: "bachelor",
    img: lst7,
  },
  {
    name: "Dr. Irvan Setiadi Kartawiria, S.T., M.Sc.",
    job: "Head of Food Technology",
    faculty: "FLST",
    degree: "bachelor",
    img: lst8,
  },
  {
    name: "Ir. Paulus Gunawan, MM.",
    job: "Lecturer of Chemical Engineering",
    faculty: "FLST",
    degree: "bachelor",
    img: lst9,
  },
  {
    name: "Dr. rer. nat. Filiana Santoso",
    job: "Lecturer of Food Technology",
    faculty: "FLST",
    degree: "bachelor",
    img: lst11,
  },
  {
    name: "Febbyandi Isnanda Pandiangan, S.Gz., M.Sc.",
    job: "Lecturer of Food Technology",
    faculty: "FLST",
    degree: "bachelor",
    img: lst12,
  },
  {
    name: "Dr. -Ing. Evita H. Legowo",
    job: "Coordinator of Sustainable Energy and Environment",
    faculty: "FLST",
    degree: "bachelor",
    img: lst13,
  },
  {
    name: "Elisabeth Kartika Prabawati, STP., MFoodSt., Ph.D.",
    job: "Lecturer of Food Technology",
    faculty: "FLST",
    degree: "bachelor",
    img: lst14,
  },
  {
    name: "Dr.-Ing Diah Indriani Widiputri, ST., MSc",
    job: "Head of Chemical Engineering",
    faculty: "FLST",
    degree: "bachelor",
    img: lst15,
  },
  {
    name: "Della Rahmawati, S.Si, M.Si, PhD",
    job: "Deputy Head of Food Technology",
    faculty: "FLST",
    degree: "bachelor",
    img: lst16,
  },
  {
    name: "Aulia Arif Iskandar, S.T., M.T.",
    job: "Head of Biomedical Engineering",
    faculty: "FLST",
    degree: "bachelor",
    img: lst17,
  },
  {
    name: "Dr. Ir. Abdullah Muzi Marpaung, MP.",
    job: "Lecturer of Food Technology",
    faculty: "FLST",
    degree: "bachelor",
    img: lst18,
  },
];

const Coaches = () => {
  const [degree, setDegree] = useState("bachelor");
  const [faculty, setFaculty] = useState("ALL");

  const filteredLecturers = lecturers.filter(
    (l) =>
      l.degree === degree && (faculty === "ALL" || l.faculty === faculty)
  );

  return (
    <div className="admission_page">
      <header className="header">
        <img src={sguWhite} alt="SGU Logo" className="header-logo" />

        <nav className="nav-tabs">
          {["ALL", "FEIT", "FBC", "FLST"].map((f) => (
          <button
            key={f}
            className={`filter-btn ${faculty === f ? "active" : ""}`}
            onClick={() => setFaculty(f)}
          >
            {f}
          </button>
        ))}
        </nav>
      </header>

      <h1>Coaches - {faculty === "ALL" ? "All Faculties" : faculty}</h1>

      {/* LECTURER CARDS */}
      <div className="lecturer-grid">
        {filteredLecturers.map((l) => (
          <div key={l.name} className="lecturer-card">
            <img src={l.img} alt={l.name} className="lecturer-img" />
            <h4>{l.name}</h4>
            <p>{l.job}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coaches;
