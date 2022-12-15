import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
// import RouterLink from "../RoutesLink";

function Api() {


    // const { userId = 1 } = useParams()
    // var vari = userId
    // console.log('userID', userId)
    const [search, setSearch] = useSearchParams();

    const limit = search.get('limit');
    console.log(limit)


    // console.log(search.get('age:10'))
    // console.log('userID', userId)
    const [post, setPost] = useState([])
    const [data, setData] = useState([])
    // console.log('posts', post)
    const [id, setId] = useState()

    useEffect(() => {
        // axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        //     .then(res => {
        //         console.log('line 17', res)
        //         setPost(res.data)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        fetch(`https://jsonplaceholder.typicode.com/posts/${limit}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                // console.log('data', data);
                setPost(data)
            })
    }, [limit])


    // useEffect(() => {
    //     // axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    //     //     .then(res => {
    //     //         console.log('line 17', res)
    //     //         setPost(res.data)
    //     //     })
    //     //     .catch(err => {
    //     //         console.log(err)
    //     //     })
    //     fetch(`https://jsonplaceholder.typicode.com/posts`)
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             // console.log('data', data);
    //             setData(data)
    //         })
    // }, [])
    return (
        <div className="apidata">
            <div style={{ background: `rgb(${223, 247, 145})` }}>
                <label style={{}}><b>Number:  </b></label>
                <input type='text' value={limit} onChange={e => setSearch(e.target.value)} />
                <br /><br /><br />
                <div className="lower">
                    <h3>Id:{post.id}</h3>
                    <h3>Title: {post.title}</h3>
                    <h3>Body: {post.body}</h3>
                </div>
                <br />
                {/* <h1>Data fetched Belowx</h1> */}
            </div>

            <div>
                <table className="table table-hover">

                    <tr className="table-active">Id:{post.id}</tr>
                    <tr>Title: {post.title}</tr>
                    <tr>Body:{post.body}</tr>

                </table>
            </div>
            {/* 
            {
                post.filter(user => user.includes(search)).map((user, i) => {
                    <li key={i}>{user}</li>
                })
            } */}

            <ul>
                {/* <div className="upper">
                    {
                        post && post.map((item, i) => {
                            return (
                                <div key={id} className="lower">
                                    <p>ID: {item.id}</p>
                                    <p>Title: {item.title}</p>
                                    <p>Body: {item.body}</p>
                                </div>
                            )
                        })
                    }
                </div> */}
            </ul>

            {/* <ul>
                {
                    post && Object.keys(post).map(post =>
                        <li key={post.id}>{post.title}<br />{post}</li>)
                }
            </ul> */}
            {/* <button onClick={() => navigate(RouterLink.parms)}>Params</button> */}
        </div>
    )
}

export default Api