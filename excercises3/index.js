class People{
    constructor(nama,umur){
      this.nama = nama
      this.umur = umur
    }
  
    kerja(){
      console.log(`${this.nama} sedang bekerja seperti biasa`)
    }
  
    tidur(){
      console.log(`${this.nama} sedang tidur`)
    } 
  
    makan(){
      console.log(`${this.nama} sedang makan`)
    }
  
  }
  
  const user1 = new People('Anggreiny',20)
  user1.kerja()
  user1.tidur()
  user1.makan()

  class Students extends People{
    constructor(nama,umur,namaSekolah){
    super(nama,umur);
    this.namaSekolah = namaSekolah
    }
    
    belajar(){
    console.log(`${this.nama} belajar di ${this.namaSekolah}`)
    }
    }
    const students = new Students('john',17,'unklab')
    students.belajar() 