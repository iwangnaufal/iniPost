import React, { Component } from 'react';
import FasilitasPembayaran from '../Components/FasilitasPembayaran';
import Confirm from '../Components/Confirm';
import Success from '../Components/Success';
import DataPembiayaanDimiliki from '../Components/DataPembiayaanDimiliki'
import FormDataAgunan from '../Components/FormDataAgunan'
import FormDataPemohon from '../Components/FormDataPemohon'
import DataSuamiIstri from '../Components/DataSuamiIstri'
import DataPekerjaanSuamiIstri from '../Components/DataPekerjaanSuamiIstri'
import FormDataPekerjaanPemohon from '../Components/FormDataPekerjaanPemohon';
import axios from 'axios';

export class UserForm extends Component {
  state = {
    step: 1,
    statusLainnya: '',
    statusProgram: '',
    objekDibiayai: '',
    skemaPengajuan: '',
    pilihProgram: '',
    fasilitasDiajukan: '',
    totalPlafon: '',
    waktuPembiayaan: '',
    tujuanPembiayaan: '',
    specialMmq: '',
    jenisPenjualan: '',
    namaPenjual: '',
    uangMuka: '',
    namaProyek: '',
    kondisiBangunan: '',
    bankSebelumnya: '',
    akadFasilitas: '',
    pelunasanTakeover: '',
    plafondTop: '',
    program: '',
    luasBangunan: '',
    statusKepemilikan: '',
    peruntukanPembiayaan: '',
    nomorPenjual: '',
    jenisBank: '',
    namaBankSebelum: '',
    lainBank: '',
    program: '',
    statusAgunan: '',
    atasNamaSertifikat: '',
    nomorSertifikat: '',
    nomorSPRDeveloper: '',
    alamatPropertiAgunan: '',
    provinsiAgunan: '',
    kabupatenKotaAgunan: '',
    kecamatanAgunan: '',
    kelurahanAgunan: '',
    rtRwAgunan: '',
    kodePosAgunan: '',
    //page2
    pembiayaanLain: '',
    jumlahPembiayaan: '',
    jumlahAngsuran: '',
    jenisPembiayaan: '',
    namaKreditur: '',
    tanggalTempo: '',
    namaLengkap: '',
    tempatLahir: '',
    tanggalLahir: '',
    jenisAgunan: '',
    noKTP: '',
    noNPWP: '',
    namaGadisIbuKandung: '',
    statusPerkawinan: '',
    pendidikanTerakhir: '',
    statusTempatTinggal: '',
    alamatKTP: '',
    provinsiKTP: '',
    kotaKabupatenKTP: '',
    kelurahanKTP: '',
    kecamatanKTP: '',
    kodeposKTP: '',
    alamatSaatIni: '',
    provinsiSaatIni: '',
    kotaKabupatenSaatIni: '',
    kelurahanSaatIni: '',
    kecamatanSaatIni: '',
    kodeposSaatIni: '',
    alamatSuratMenyurat: '',
    noTeleponRumah: '',
    email: '',
    noHP: '',

    //sabrina
    namaSuamiIstri: '',
    tempatLahirSuamiIstri: '',
    tanggalLahirSuamiIstri: '',
    nomorKTPSuamiIstri: '',
    nomorNPWPSuamiIstri: '',
    pekerjaanSuamiIstri: '',
    // Page 6
    lamaBekerjaSuamiIstri: '',
    jenisPekerjaanSuamiIstri: '',
    statusPekerjaanSuamiIstri: '',
    namaPerusahaanSuamiIstri: '',
    tempatUsahaSuamiIstri: '',
    kategoriInstansiSuamiIstri: '',
    bidangUsahaSuamiIstri: '',
    jumlahKaryawanSuamiIstri: '',
    teleponKantorSuamiIstri: '',
    teleponHrdSuamiIstri: '',
    jabatanSuamiIstri: '',
    pendapatanBulananSuamiIstri: '',
    pembayaranGajiSuamiIstri: '',
    emailHrdSuamiIstri: '',
    emailAtasanSuamiIstri: '',
    teleponAtasanSuamiIstri: '',

    //sageri form
    lamaBekerja: '',
    jenisPekerjaan: '',
    statusPekerjaan: '',
    namaPerusahaan: '',
    alamatKantor: '',
    kategoriInstansi: '',
    bidangUsaha: '',
    jumlahKaryawan: '',
    teleponKantor: '',
    teleponHRD: '',
    jabatan: '',
    pendapatanPerBulan: '',
    pembayaranGaji: '',
    emailHRD: '',
    emailAtasan: '',
    teleponAtasan: '',

    //daftarAlamat
    daftarProvinsi: [], daftarKabupatenKota: [],
    daftarKecamatan: [], daftarKelurahan: [],
    provinsiTerpilih: null, kabupatenKotaTerpilih: null,
    kecamatanTerpilih: null, kelurahanTerpilih: null,
    isLainnya: false, isMmq: false, isLainProgram: false, isAkad: false, isBank: false, isYa: false
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };


  handleAlamatSama = () => {
    this.setState({
      provinsiSaatIni: this.state.provinsiKTP,
      kotaKabupatenSaatIni: this.state.kotaKabupatenKTP,
      kecamatanSaatIni: this.state.kecamatanKTP,
      kelurahanSaatIni: this.state.kelurahanKTP,
      alamatSaatIni: this.state.alamatKTP
    })
  }


  handleLainnya = input => e => {
    this.setState({ [input]: e.target.value });
    if (e.target.value === "Lainnya") {
      this.setState({ isLainnya: true })
    } else {
      this.setState({ isLainnya: false })
    }
  }

  handleMmq = input => e => {
    this.setState({ [input]: e.target.value });
    if (e.target.value === "MMQ") {
      this.setState({ isMmq: true })
      this.setState({ isLainProgram: false })

    } else if (e.target.value === "Lainnyaa") {
      this.setState({ isLainProgram: true })
      this.setState({ isMmq: false })

    } else {
      this.setState({ isMmq: false })
      this.setState({ isLainProgram: false })
    }
  }

  handleAkad = input => e => {
    this.setState({ [input]: e.target.value });
    if (e.target.value === "LainAkad") {
      this.setState({ isAkad: true })
    } else {
      this.setState({ isAkad: false })
    }
  }

  handlePembiayaan = input => e => {
    this.setState({ [input]: e.target.value });
    if (e.target.value === "PropertiKendaraan") {
      this.setState({ isPropertiKendaraan: true })
      this.setState({ isProperti: false })
      this.setState({ isTakeOver: false })

    } else if (e.target.value === "Properti") {
      this.setState({ isProperti: true })
      this.setState({ isTakeOver: false })
      this.setState({ isPropertiKendaraan: false })

    } else if (e.target.value === "TakeOver") {
      this.setState({ isProperti: false })
      this.setState({ isPropertiKendaraan: false })
      this.setState({ isTakeOver: true })

    } else {
      this.setState({ isPropertiKendaraan: false })
      this.setState({ isProperti: false })
      this.setState({ isTakeOver: false })


    }
  }

  handleFasilitas = input => e => {
    this.setState({ [input]: e.target.value });
    if (e.target.value === "LainFasilSebelum") {
      this.setState({ isFasilitas: true })
    } else {
      this.setState({ isFasilitas: false })
    }
  }

  handleAkadFasilitas = input => e => {
    this.setState({ [input]: e.target.value });
    if (e.target.value === "LainnyaAkad") {
      this.setState({ isBank: true })
    } else {
      this.setState({ isBank: false })
    }
  }

  handleKeuangan = input => e => {
    this.setState({ [input]: e.target.value });
    if (e.target.value === "jikaYa") {
      this.setState({ isYa: true })
    } else {
      this.setState({ isYa: false })
    }
  }

  getDaftarProvinsi() {
    axios.get("https://dev.farizdotid.com/api/daerahindonesia/provinsi")
      .then((response) => {
        console.log(response)
        this.setState({ daftarProvinsi: response.data.provinsi })
      })
      .catch((err) => console.log(err))
  }

  getDaftarKabupatenKota(provinsiId) {
    axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinsiId}`)
      .then((response) => {
        console.log(response)
        this.setState({ daftarKabupatenKota: response.data.kota_kabupaten })
      })
      .catch((err) => console.log(err))
  }

  getDaftarKecamatan(kota_kabupatenId) {
    axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${kota_kabupatenId}`)
      .then((response) => {
        console.log(response)
        this.setState({ daftarKecamatan: response.data.kecamatan })
      })
      .catch((err) => console.log(err))
  }

  getDaftarKelurahan(kecamatanId) {
    axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${kecamatanId}`)
      .then((response) => {
        console.log(response)
        this.setState({ daftarKelurahan: response.data.kelurahan })
      })
      .catch((err) => console.log(err))
  }

  componentDidMount() {
    this.getDaftarProvinsi()
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  onProvinsiMenuItemClick = provinsi => e => {
    this.getDaftarKabupatenKota(provinsi.id)
    this.setState({ provinsiTerpilih: e.target.value })
  }

  onKabupatenKotaMenuItemClick = kota_kabupaten => e => {
    this.getDaftarKecamatan(kota_kabupaten.id)
    this.setState({ kabupatenKotaTerpilih: e.target.value })
  }

  onKecamatanMenuItemClick = kecamatan => e => {
    this.getDaftarKelurahan(kecamatan.id)
    this.setState({ kecamatanTerpilih: e.target.value })
  }

  onKelurahanMenuItemClick = kelurahan => e => {
    this.setState({ kelurahanTerpilih: kelurahan })
  }
  // masukan if kesini
  render() {
    const { step } = this.state;
    const {
      //Fasilitas Pembayaran
      statusLainnya, statusProgram, specialMmq, skemaPengajuan, objekDibiayai, pilihProgram, totalPlafon, fasilitasDiajukan, waktuPembiayaan, tujuanPembiayaan, jenisPenjualan, namaPenjual, nomorPenjual, uangMuka, namaProyek,
      kondisiBangunan, jenisBank, namaBankSebelum, bankSebelumnya, akadFasilitas, lainBank, pelunasanTakeover, plafondTop, pembiayaanLain, jumlahPembiayaan, jumlahAngsuran, jenisPembiayaan, namaKreditur,

      //input location dan form angunan dan pemohon
      luasBangunan, statusKepemilikan, peruntukanPembiayaan, tanggalTempo, statusAgunan, atasNamaSertifikat, nomorSertifikat, nomorSPRDeveloper,
      alamatPropertiAgunan, provinsiAgunan, kabupatenKotaAgunan, kecamatanAgunan, kelurahanAgunan, rtRwAgunan, kodePosAgunan, namaLengkap, tempatLahir, tanggalLahir, noKTP, noNPWP, statusTempatTinggal,
      alamatKTP, provinsiKTP, kotaKabupatenKTP, kelurahanKTP, kecamatanKTP, kodeposKTP, alamatSaatIni, provinsiSaatIni, kotaKabupatenSaatIni, jenisAgunan, kelurahanSaatIni, kecamatanSaatIni, kodeposSaatIni,
      alamatSuratMenyurat, noTeleponRumah, email, noHP, statusPerkawinan, pendidikanTerakhir, daftarProvinsi, daftarKabupatenKota, daftarKecamatan, daftarKelurahan,

      //useState pada form Fasilitas Pembayaran dan data pembiayaan dimiliki
      isLainnya, isMmq, isLainProgram, isAkad, isProperti, isPropertiKendaraan, isTakeOver, isFasilitas, isBank, isYa,

      //Data Suami Istri dan Data Pekerjaan Suami Istri
      namaSuamiIstri, tempatLahirSuamiIstri, tanggalLahirSuamiIstri, nomorKTPSuamiIstri, nomorNPWPSuamiIstri, pekerjaanSuamiIstri, lamaBekerjaSuamiIstri, jenisPekerjaanSuamiIstri,
      statusPekerjaanSuamiIstri, namaPerusahaanSuamiIstri, tempatUsahaSuamiIstri, kategoriInstansiSuamiIstri, bidangUsahaSuamiIstri, jumlahKaryawanSuamiIstri, teleponKantorSuamiIstri,
      teleponHrdSuamiIstri, jabatanSuamiIstri, pendapatanBulananSuamiIstri, pembayaranGajiSuamiIstri, emailHrdSuamiIstri, emailAtasanSuamiIstri,

      //Data Pekerjaan Pemohon
      lamaBekerja, jenisPekerjaan, statusPekerjaan, namaPerusahaan, alamatKantor, kategoriInstansi, bidangUsaha, jumlahKaryawan, teleponKantor, teleponHRD, jabatan, pendapatanPerBulan, pembayaranGaji, emailHRD, emailAtasan, teleponAtasan } = this.state;

    const values = {
      //Fasilitas Pembayaran
      statusLainnya, statusProgram, specialMmq, skemaPengajuan, objekDibiayai, pilihProgram, fasilitasDiajukan, totalPlafon, waktuPembiayaan, tujuanPembiayaan, jenisPenjualan, namaPenjual, nomorPenjual, uangMuka, namaProyek,
      kondisiBangunan, jenisBank, namaBankSebelum, bankSebelumnya, akadFasilitas, lainBank, pelunasanTakeover, plafondTop, pembiayaanLain, jumlahPembiayaan, jumlahAngsuran, jenisPembiayaan, namaKreditur,

      //input location dan form angunan dan pemohon
      luasBangunan, statusKepemilikan, peruntukanPembiayaan, tanggalTempo, statusAgunan, atasNamaSertifikat, nomorSertifikat, nomorSPRDeveloper, alamatPropertiAgunan, provinsiAgunan, kabupatenKotaAgunan, kecamatanAgunan,
      kelurahanAgunan, rtRwAgunan, kodePosAgunan, jenisAgunan, namaLengkap, tempatLahir, tanggalLahir, noKTP, noNPWP, statusTempatTinggal, alamatKTP, provinsiKTP, kotaKabupatenKTP, kelurahanKTP, kecamatanKTP, kodeposKTP,
      alamatSaatIni, provinsiSaatIni, kotaKabupatenSaatIni, kelurahanSaatIni, kecamatanSaatIni, kodeposSaatIni, alamatSuratMenyurat, noTeleponRumah, email, noHP, statusPerkawinan, pendidikanTerakhir,

      //Data Suami Istri dan Data Pekerjaan Suami Istri
      namaSuamiIstri, tempatLahirSuamiIstri, tanggalLahirSuamiIstri, nomorKTPSuamiIstri, nomorNPWPSuamiIstri, pekerjaanSuamiIstri, lamaBekerjaSuamiIstri, jenisPekerjaanSuamiIstri,
      statusPekerjaanSuamiIstri, namaPerusahaanSuamiIstri, tempatUsahaSuamiIstri, kategoriInstansiSuamiIstri, bidangUsahaSuamiIstri, jumlahKaryawanSuamiIstri, teleponKantorSuamiIstri,
      teleponHrdSuamiIstri, jabatanSuamiIstri, pendapatanBulananSuamiIstri, pembayaranGajiSuamiIstri, emailHrdSuamiIstri, emailAtasanSuamiIstri,

      //Data Pekerjaan Pemohon
      lamaBekerja, jenisPekerjaan, statusPekerjaan, namaPerusahaan, alamatKantor, kategoriInstansi, bidangUsaha, jumlahKaryawan, teleponKantor, teleponHRD, jabatan, pendapatanPerBulan, pembayaranGaji, emailHRD, emailAtasan, teleponAtasan
    };
    // masukan if kesini
    switch (step) {
      case 1:
        return (
          <FasilitasPembayaran
            isLainnya={isLainnya}
            isMmq={isMmq}
            isAkad={isAkad}
            isLainProgram={isLainProgram}
            isPropertiKendaraan={isPropertiKendaraan}
            isProperti={isProperti}
            isTakeOver={isTakeOver}
            isFasilitas={isFasilitas}
            isBank={isBank}
            daftarProvinsi={daftarProvinsi}
            daftarKabupatenKota={daftarKabupatenKota}
            daftarKecamatan={daftarKecamatan}
            daftarKelurahan={daftarKelurahan}
            provinsiTerpilih={this.state.provinsiTerpilih}
            kabupatenKotaTerpilih={this.state.kabupatenKotaTerpilih}
            kecamatanTerpilih={this.state.kecamatanTerpilih}
            kelurahanTerpilih={this.state.kelurahanTerpilih}
            handleProvinsi={this.onProvinsiMenuItemClick}
            handleKabupatenKota={this.onKabupatenKotaMenuItemClick}
            handleKecamatan={this.onKecamatanMenuItemClick}
            handleKelurahan={this.onKelurahanMenuItemClick}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleLainnya={this.handleLainnya}
            handleMmq={this.handleMmq}
            handleAkad={this.handleAkad}
            handlePembiayaan={this.handlePembiayaan}
            handleFasilitas={this.handleFasilitas}
            handleAkadFasilitas={this.handleAkadFasilitas}
            values={values}
          />
        );
      case 2:
        return (
          <FormDataAgunan
            daftarProvinsi={daftarProvinsi}
            daftarKabupatenKota={daftarKabupatenKota}
            daftarKecamatan={daftarKecamatan}
            daftarKelurahan={daftarKelurahan}
            handleProvinsi={this.onProvinsiMenuItemClick}
            handleKabupatenKota={this.onKabupatenKotaMenuItemClick}
            handleKecamatan={this.onKecamatanMenuItemClick}
            handleKelurahan={this.onKelurahanMenuItemClick}
            provinsiTerpilih={this.state.provinsiTerpilih}
            kabupatenKotaTerpilih={this.state.kabupatenKotaTerpilih}
            kecamatanTerpilih={this.state.kecamatanTerpilih}
            kelurahanTerpilih={this.state.kelurahanTerpilih}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values} />

        )
      case 3:
        return (
          <FormDataPemohon
            isLainnya={isLainnya}
            daftarProvinsi={daftarProvinsi}
            daftarKabupatenKota={daftarKabupatenKota}
            daftarKecamatan={daftarKecamatan}
            daftarKelurahan={daftarKelurahan}
            handleProvinsi={this.onProvinsiMenuItemClick}
            handleKabupatenKota={this.onKabupatenKotaMenuItemClick}
            handleKecamatan={this.onKecamatanMenuItemClick}
            handleKelurahan={this.onKelurahanMenuItemClick}
            provinsiTerpilih={this.state.provinsiTerpilih}
            kabupatenKotaTerpilih={this.state.kabupatenKotaTerpilih}
            kecamatanTerpilih={this.state.kecamatanTerpilih}
            kelurahanTerpilih={this.state.kelurahanTerpilih}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleLainnya={this.handleLainnya}
            handleAlamatSama={this.handleAlamatSama}
            values={values} />
        )

      case 4:
        return (
          <DataSuamiIstri
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

        case 5:
          return (
            <FormDataPekerjaanPemohon
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          )

          case 6:
        return (
          <DataPekerjaanSuamiIstri
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 7:
        return (
          <DataPembiayaanDimiliki
            isYa={isYa}
            daftarProvinsi={daftarProvinsi}
            daftarKabupatenKota={daftarKabupatenKota}
            daftarKecamatan={daftarKecamatan}
            daftarKelurahan={daftarKelurahan}
            handleProvinsi={this.onProvinsiMenuItemClick}
            handleKabupatenKota={this.onKabupatenKotaMenuItemClick}
            handleKecamatan={this.onKecamatanMenuItemClick}
            handleKelurahan={this.onKelurahanMenuItemClick}
            provinsiTerpilih={this.state.provinsiTerpilih}
            kabupatenKotaTerpilih={this.state.kabupatenKotaTerpilih}
            kecamatanTerpilih={this.state.kecamatanTerpilih}
            kelurahanTerpilih={this.state.kelurahanTerpilih}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleKeuangan={this.handleKeuangan}
            values={values}
          />
        );

      case 8:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 9:
        return <Success />;
      default:
        (console.log('Terimakasih'))
    }
  }
}

export default UserForm;
