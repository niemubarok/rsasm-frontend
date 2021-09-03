import { reactive } from "vue";
import { date } from "quasar";

const data = reactive({
  detail: {
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
    tgl_daftar:null
  },
  formattedBirthDate: () => {
    return date.formatDate(new Date(data.detail.birthDate), "DD MMMM YYYY");
  },
});

export default data;
