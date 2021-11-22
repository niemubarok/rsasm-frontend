import { reactive, ref, inject } from "vue";
import { date } from "quasar";
import axios from "axios";
import state from "../doctor/index";

const data = reactive({
  detail: {
    noRM: "",
    nik: "",
    noBPJS: "-",
    name: "",
    birthDate: "",
    phone: "",
    jnsBayar: "",
    jk: "",
    tmp_lahir: "",
    nm_ibu: "",
    alamat: "",
    gol_darah: "", //enum('A', 'B', 'O', 'AB', '-')
    pekerjaan: "",
    stts_nikah: "", //enum('BELUM MENIKAH', 'MENIKAH', 'JANDA', 'DUDHA',
    agama: "",
    umur: "",
    pnd: "-", //'TS', 'TK', 'SD', 'SMP', 'SMA', 'SLTA/SEDERAJ'.''
    keluarga: "", //enum('AYAH', 'IBU', 'ISTRI', 'SUAMI', 'SAUDARA'
    namakeluarga: "",
    kd_pj: "-",
    kd_kel: "80545",
    kd_kec: "1",
    kd_kab: "1",
    pekerjaanpj: "-",
    alamatpj: "-",
    kelurahanpj: "KELURAHAN",
    kecamatanpj: "KECAMATAN",
    kabupatenpj: "KABUPATEN",
    perusahaan_pasien: "-",
    suku_bangsa: "1",
    bahasa_pasien: "5",
    cacat_fisik: "1",
    email: "-",
    nip: "-",
    kd_prop: "1",
    propinsipj: "-",
    isPasienBaru: false,
    tgl_daftar: null,
    tgl_periksa: "",
  },
  formattedBirthDate: () => {
    return date.formatDate(new Date(data.detail.birthDate), "DD MMMM YYYY");
  },
  formattedTglPeriksa: () => {
    return date.formatDate(new Date(data.detail.tgl_periksa), "DD MMMM YYYY");
  },
  storePasienLama: () => {},
  storePasienBaru: () => {
    axios.post(
      process.env.API_ENDPOINT + "pendaftaran/pasien-baru",
      data.detail
    );
  },
  registrationDetail: {
    qrcode: ref("https://via.placeholder.com/150x150"),
    estimasiDipanggil: ref(""),
    antrian: ref(""),
  },
  table: () => {
    return {
      "No. KTP": data.detail.nik,
      "Nama Pasien": data.detail.name,
      "Tanggal Lahir": data.formattedBirthDate(),
      "No. Whatsapp": data.detail.phone,
      "Dokter Tujuan": state.state.selected?.name,
      Klinik: state.state.selected?.specialist(),
      "Jenis Bayar": data.detail.jnsBayar,
      "Tanggal Periksa": data.formattedTglPeriksa(),
    };
  },
});

export default data;
