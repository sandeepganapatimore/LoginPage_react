import React, { useEffect, useState } from 'react'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'
import { Routers } from '../Routers'
import { Context } from './Provider'
import { ShowApi } from './ShowApi'

function Middle() {
    const { state, dispatch } = React.useContext(Context)
    console.log('state', state.email)
    const navigate = useNavigate()

    const [data, setData] = useState()

    const val = 1
    const params = { limit: data }


    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${10}`)
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setData(data)
    //         })
    // }, [])



    return (
        <div>
            <h1>Welcome {state.email}</h1>

            <div>
                <input type='text' value={data} onChange={(e) => setData(e.target.value)} />
                <br />
                <button className='btn btn-warning' onClick={() => navigate({ pathname: Routers.api, search: `${createSearchParams(params)}` })}>Next</button>


            </div>

            {/* {
                data.map((item, i) => {
                    return (
                        <Link to={'/showApi/:id' + item.id}>
                            <div key={item.id}>
                                <li>Id:{item.id}</li>
                                <li>Title:{item.title}</li>
                                <li>Description:{item.body}</li>
                            </div>
                        </Link>

                    )
                })
            } */}

        </div>
    )
}

export default Middle
