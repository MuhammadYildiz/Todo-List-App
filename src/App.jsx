import { useState } from "react";
import TodoItem from "./TodoItem";
function App() {
    const [newItem, setnewItem] = useState("")
    const [items, setItems] = useState([])
    const [itemId, setitemId] = useState(1)
    const [tomt, setTomt] = useState("")
    const getNewItem = (event) => {
        setnewItem(event.target.value)
        setTomt("")
    }

    const addItem = (e) => {
        e.preventDefault()
        if (!newItem) {
            setTomt(
                <p className="bg-gradient-to-r from-red-500 to-red-700 text-white p-2 mb-5 mx-2 sm:mx-10 font-bold">
                    Enter a new todo...
                </p>
            )
        }
        else {
            setitemId(itemId + 1)
            const item = {
                id: itemId,
                title: newItem,
                done: false,
            }
            setItems(oldItems => [...oldItems, item])
            setnewItem('')
        }

    }
    const clearInput = () => {
        setnewItem("")
    }
    const clearAll = () => {
        const clearArray = []
        setItems(clearArray)
        setnewItem("")
        setTomt("")
    }
    const doneTodo = (id) => {
        let uppdateTodos = items.map((item) => {
            if (item.id == id) {
                item.done = !item.done
            }
            return item
        })
        setItems(uppdateTodos)
        setTomt("")
    }
    function deleteList(id) {
        const newArray = items.filter(item => item.id !== id)
        setItems(newArray)
        id = itemId
        setnewItem("")
        setTomt("")
    }

    return (
        <div className="text-center min-h-screen flex justify-center items-start ">
            <div className="bg-gradient-to-t from-fuchsia-500 to-cyan-500 w-[95%]  lg:w-1/2 mt-20 min-h-[80vh] rounded-2xl shadow-2xl shadow-cyan-900 mb-10">
                <h1 className="text-5xl p-10  text-white ">Todo List</h1>
                <form onSubmit={addItem} className="pb-5">
                    <input className="border-2 border-green-500 outline-none p-2 px-4 font-bold focus:border-black focus:rounded-xl "
                        type="text"
                        placeholder="Enter a Todo..."
                        value={newItem}
                        onChange={getNewItem}
                        onFocus={() => setnewItem("")}
                    />
                    <button className="bg-black text-white p-2 px-3 m-2 hover:rounded-xl  hover:bg-gradient-to-r from-emerald-500 to-emerald-900 font-bold min-w-[80px] " type="submit">
                        Add
                    </button>
                    {newItem && <button onClick={clearInput} className="bg-black text-white p-2 px-3 m-2 hover:rounded-xl  hover:bg-gradient-to-r from-red-500 to-red-900 font-bold" type="button">
                        Clear Input
                    </button>}
                </form>

                <div>
                    <div>
                        {tomt}
                    </div>
                    {items.map(item => {
                        return (
                            <TodoItem doneTodo={doneTodo} deleteList={deleteList} item={item} key={item.id} />
                        )
                    })}
                </div>
                {items.length > 0 && <button onClick={() => clearAll()} className=" text-white p-3 px-3 m-2 hover:rounded-xl  bg-gradient-to-r from-red-500 to-red-900 font-bold mb-6 "
                    type="button">
                    Clear All
                </button>}
            </div>
        </div>
    )
}

export default App
