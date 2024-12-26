import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import Modal from "./components/Modal"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import { useState } from "react"

function App() {
  
  const  { order, addItem , removeItem, tip, setTip, placeOrder} = useOrder()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlaceOrder = () => {
    placeOrder();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);
  
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item=> (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>

        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length ? (
            <>
                <OrderContents
                order={order}
                removeItem={removeItem}
                />

                <TipPercentageForm
                setTip={setTip}
                tip={tip}
                />

                <OrderTotals
                order={order}
                tip={tip}
                placeOrder={handlePlaceOrder}
                />
            </>
          ) : (
            <p className="text-center">La orden está vacía</p>
          ) }


        </div>

      </main>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="text-center">
          <img
            src="/img/pikachu.png"
            alt="Thank you"
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold">¡Gracias por su compra!</h2>
          <p className="mt-2">Su orden ha sido guardada con éxito.</p>
        </div>
      </Modal>
    </>
  )
}

export default App
