import React from 'react'
export default function (props) {
    return (
        <ul className="mb-5">
            <li key={props.item.id} className="flex flex-col sm:flex-row justify-around m-2 sm:mx-10  text-white">
                <p className={props.item.done ? "line-through decoration-black decoration-4 text-xl p-2 px-3  bg-gradient-to-r from-red-900 to-red-500 w-[100%] overflow-scroll" : "text-xl p-2 px-3 bg-gradient-to-r from-emerald-900 to-emerald-500 w-[100%] overflow-scroll"}>
                    {props.item.title}
                </p>
                <div className='flex justify-around'>
                    <button type="button" onClick={() => props.doneTodo(props.item.id)} className="bg-black p-3 text-white min-w-[80px] hover:bg-yellow-200 hover:text-black m-2 sm:m-0 sm:mx-2 font-bold">
                        {props.item.done ? "Undo" : "Done"}
                    </button>
                    <button type="button" onClick={() => props.deleteList(props.item.id)} className="bg-black p-3 m-2 sm:m-0  font-bol min-w-[80px] hover:bg-red-600">
                        Delete
                    </button>
                </div>
            </li>
        </ul>
    )
}
