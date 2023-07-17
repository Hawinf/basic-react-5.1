import logo from './logo.svg';
import './App.css';

function App(){
  const name = 'HawinFahmi';
  const date = new Date().getDate();
  const isOpen = true;
  const bottom = 'kkk'
  const tahunSekarang = new Date().getFullYear();
  const tahunLahir = 1998;

  const renderToko = () => {
    if( isOpen == false ){
      return 'toko close'
    } else {
      return 'toko open'
    }
  }

  const gender = (param) => {
    if (param == 'celana' ){
      return 'laki laki'
    } else {
      return 'perempuan'
    }
  }

  const cekUsia = (param1, param2) => {
    return param1 - param2;
  }

  const student = [
    {
      id: 1,
      name: 'budi'
    },
    {
      id: 2,
      name: 'jack'
    },
    {
      id: 3,
      name: 'caroline'
    },
  ]

  return (
    <>
      <h1>panjang nama saya {name.length}</h1>
      <p>hari ini tanggal {date}</p>
      <p>{renderToko()}</p>
      <p>{gender(bottom)}</p>
      <p>Usia saya adalah {cekUsia(tahunSekarang, tahunLahir)}</p>
      {
        student.map(item => {
          return (
            <p>siswa dengan id {item.id} adalah {item.name}</p>
          )
        })
      }
      
    </>
  )
}
export default App

