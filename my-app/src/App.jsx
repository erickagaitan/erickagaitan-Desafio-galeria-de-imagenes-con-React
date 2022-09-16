import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const titulo = "Galeria de imágenes con React"
  const data = [
{
img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
titulo: "Ramel Asiatico",
desc:"Descubre la explosion de sabores en tu boca"
},

{
  img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  titulo: "Ensalada poteica",
  desc:"Bold con distintos vegetales y proteinas"
  },
  {
    img: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    titulo: "Merluza a la plancha",
    desc:"Exquisita merluza con vegetales"
    },

    {
      img: "https://images.unsplash.com/photo-1518510227856-30619d542ea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      titulo: "Papas rusticas de la casa",
      desc:"Deliciosas papas a la carbonara"
      },

      {
        img: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        titulo: "Menu vegano",
        desc:"Exquisitos granos con un toque de la casa"
        },

        {
          img: "https://images.unsplash.com/photo-1515573866280-06bda6d4e16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
          titulo: "Pollo con ensalada proteica",
          desc:"Pollo con un extraordinario toque de la casa"
          }
  ]
  return (
  <div className="App">
      <Header Titulo={titulo}></Header>

<section className='container galeria'>
      <div className="row">
      <div className="tarje col-sm-12 col-lg-4">
      <Card contenido= {data[0]}></Card>
      </div>

      <div className=" tarje col-sm-12 col-lg-4">
      <Card contenido= {data[1]}></Card>
      </div>

      <div className="tarje col-sm-12 col-lg-4">
      <Card contenido= {data[2]}></Card>
      </div>

      <div className=" tarje col-sm-12 col-lg-4">
      <Card contenido= {data[3]}></Card>
      </div>

      <div className="tarje col-sm-12 col-lg-4">
      <Card contenido= {data[4]}></Card>
      </div>

      <div className="tarje col-sm-12 col-lg-4">
      <Card contenido= {data[5]}></Card>
      </div>
    </div>
</section>




    <Footer />
    </div>
  )
}
export default App
